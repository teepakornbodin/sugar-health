import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Image } from 'expo-image';
import React from 'react'
import Svg, { Path, Rect } from "react-native-svg"
import { primary } from '@/constants/Colors';

type props = {
  name: string,
  onPress: () => void,
  img: any
}

const beverageCard = ({ name, onPress, img }: props) => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
    >
      <View style={styles.imgContainer}>
        <Image source={img} style={styles.img} />
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={styles.icon}>
          <Rect width="20" height="20" rx="10" fill="#4F80C0"/>
          <Path d="M10.208 5.43909L10.208 14.3173M14.312 9.87819L6.104 9.87819" stroke="white" stroke-width="2" stroke-linecap="round" />
        </Svg>
      </View>
      <Text style={styles.title}>{name}</Text>
    </Pressable>
  )
}

export default beverageCard

const styles = StyleSheet.create({
  img: {
    width: 75,
    height: 75,
    objectFit: 'cover',
    borderRadius: 12
  },
  container: {
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15
  },
  title: {
    marginTop: 8,
    fontFamily: 'Mitr-Regular',
    color: primary
  },
  imgContainer: {
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    right: -6,
    bottom: -6
  }
})