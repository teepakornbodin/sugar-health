import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { Canvas, Circle, Group, rect, Rect, rrect, scale, Skia, } from '@shopify/react-native-skia';
import { line, curveBasis, scaleLinear, area } from 'd3'
import { useSharedValue, withRepeat, withTiming, Easing, useDerivedValue } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colorWave, primary, secondary } from '@/constants/Colors';

type Props = {
    sugarValue: number
}

const Wave = ({ sugarValue }: Props) => {
    //outter circle
    const size = 175
    const r = size / 2;
    const padding = size / 30;
    const outerCircleRadius = r - padding / 2;
    //inner circle
    const innerCircleGap = 0.05 * r;
    const innerCircleMargin = (r*0.05) + innerCircleGap;
    const innerCircleRadius = r - innerCircleMargin;

    const minValue = 0;
    const maxValue = 20;
    const percent = Math.max(minValue, Math.min(maxValue, sugarValue)) / maxValue

    const numOfWave = 1;
    const waveCilpCount = numOfWave + 1; //extra wave for translate x animation
    const waveLength = (innerCircleRadius * 2) / numOfWave;
    const waveClipWidth = waveLength * waveCilpCount;
    const waveHeight = innerCircleRadius * 0.1;

    //data for building the wave area
    //[number, nummber] represent point
    const data: Array<[number, number]> = [];

    //40 point per wave
    //generate as point as 40 * waveClipCount
    for (let i = 0; i <= 40 * waveCilpCount; i++) {
        data.push([i / (40 * waveCilpCount), Math.sin((i / (40 * waveCilpCount)) * Math.PI * 2)])
    }

    // interpolate value ((0,1),(0,waveClipCount))
    const waveScaleX = scaleLinear().range([0, waveClipWidth]).domain([0, 1])
    // interpolate value ((0,1),(0,waveClipCount))
    const waveScaleY = scaleLinear().range([0, waveHeight]).domain([0, 1])

    //area take our data points then output area with point (x, y0) and (x, y1)
    const clipArea = area()
        .x(function (d) {
            return waveScaleX(d[0]);
        })
        .y0(function (d) {
            return waveScaleY(
                Math.sin(d[1] * 2 + waveHeight)
            )
        })
        .y1(function (_d) {
            return innerCircleRadius * 2 + waveHeight;
        });

    const clipSvgPath = clipArea(data) as string; //convert data point to wave area as svg path String
    const translateXAnimated = useSharedValue(0);
    const translateYAnimated = useSharedValue(0);

    useEffect(() => {
        translateYAnimated.value = withTiming(percent, {
            duration: 1000,
        })
        
    }, [percent])

    useEffect(() => {
        translateXAnimated.value = withRepeat(
            withTiming(1, {
                duration: 4500,
                easing: Easing.linear
            }),
            -1, //repeat forever
            
        )
    }, [])

    const cilpPath = useDerivedValue(() => {
        const cilpP = Skia.Path.MakeFromSVGString(clipSvgPath);

        const transfromMatrix = Skia.Matrix();

        transfromMatrix.translate(
            innerCircleMargin - waveLength * translateXAnimated.value,
            innerCircleMargin + (1 - translateYAnimated.value) * innerCircleRadius * 2 - waveHeight
        );
        cilpP.transform(transfromMatrix)
        return cilpP
    }, [translateXAnimated , translateYAnimated])

    //config color of circleOfWavw
    var waveColor = colorWave;
    var strokeColor = primary;
    if (sugarValue > maxValue) {
        waveColor = '#e74060';
        strokeColor = '#b10022';
    }
    
    return (
        <SafeAreaView>
            <Canvas style={{ width: size, height: size }}>
                <Circle
                    cx={r}
                    cy={r}
                    r={outerCircleRadius}
                    color={strokeColor}
                    style="stroke"
                    strokeWidth={padding}
                />
                <Group clip={cilpPath}>
                    <Circle
                        cx={r}
                        cy={r}
                        r={innerCircleRadius}
                        color={waveColor}
                        style="fill"
                    />
                </Group>
            </Canvas>
        </SafeAreaView>
    );
};

export default Wave;

