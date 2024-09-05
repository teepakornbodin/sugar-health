import { View, Text, Animated, StatusBar, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import Wave from '@/components/wave';
import { LinearGradient } from 'expo-linear-gradient';
import { primary, secondary } from '@/constants/Colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import BeverageCard from '@/components/card/beverageCard';
import { beverageData } from '@/components/data/beverageData'
import AntDesign from '@expo/vector-icons/AntDesign';
import Svg, { Rect, Path } from 'react-native-svg';
import HomeHeader from '@/components/homeHeader';
import DrinkBeverage from '@/components/card/drinkBeverage';

const Home = () => {
  const [currentSugar, setSugar] = useState(0)
  const [drinkBeverage, setDrinkBeverage] = useState(null)

  const updateDrinkImgAndSugarValue = (img: any, value: number) => {
    setSugar(currentSugar + value);
    setDrinkBeverage(img)
  }

  const scrollA = useRef(new Animated.Value(0)).current;

  const screenSize = useWindowDimensions();
  const cardBeverageSize = 0.9 * screenSize.width;
  const containerWaveSize = 0.75 * screenSize.width

  return (
      <View style={styles.container}>
        <HomeHeader userName='pingpong'/>
        <StatusBar barStyle={'light-content'} />
        {/* circle wave */}
        <View style={[styles.card, {width: containerWaveSize}]}>
          <View style={styles.cardHeader}>
            <View style={styles.circleOfIcon}><MaterialCommunityIcons name="spoon-sugar" size={20} color='white' /></View>
            <Text style={styles.textTitle}>ปริมาณน้ำตาลวันนี้</Text>
          </View>
          <View style={styles.waveContainer}>
            <Wave sugarValue={currentSugar} size={125}/>
          </View>
          <View>
             <DrinkBeverage img={drinkBeverage}/>
          </View>
        </View>
        <Animated.ScrollView style={[styles.scrollView, {width: cardBeverageSize}]}>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.catagrory}>
              <Text style={styles.h2}>ทั้งหมด</Text>
              <AntDesign name="down" size={18} color="black" />
            </Pressable>
            <Pressable>
              <LinearGradient colors={[secondary, primary]} style={styles.addBeverage}>
                <Svg width="36" height="24" viewBox="0 0 36 24" fill="none">
                  <Path d="M20.1446 19.9776L20.8892 19.8877L20.1446 19.9776ZM28.8554 19.9776L28.1108 19.8877V19.8877L28.8554 19.9776ZM20.8038 21.3966L21.1331 20.7228L21.1331 20.7228L20.8038 21.3966ZM20.3685 20.999L19.7292 21.391L19.7292 21.391L20.3685 20.999ZM28.1962 21.3966L27.8669 20.7228L27.8669 20.7228L28.1962 21.3966ZM28.6315 20.999L27.9921 20.6069L28.6315 20.999ZM25.25 2.5C25.25 2.08579 24.9142 1.75 24.5 1.75C24.0858 1.75 23.75 2.08579 23.75 2.5H25.25ZM27.1893 20.75H21.8107V22.25H27.1893V20.75ZM18.2554 10.5899L19.4 20.0676L20.8892 19.8877L19.7446 10.4101L18.2554 10.5899ZM29.2554 10.4101L28.1108 19.8877L29.6 20.0676L30.7446 10.5899L29.2554 10.4101ZM21.8107 20.75C21.5334 20.75 21.37 20.7494 21.2484 20.7395C21.137 20.7305 21.1215 20.7172 21.1331 20.7228L20.4744 22.0705C20.6975 22.1795 20.9203 22.2178 21.1269 22.2346C21.3233 22.2506 21.5577 22.25 21.8107 22.25V20.75ZM19.4 20.0676C19.4315 20.3286 19.4597 20.5659 19.4986 20.762C19.5392 20.9667 19.6014 21.1826 19.7292 21.391L21.0079 20.6069C21.0079 20.6069 21.0078 20.6067 21.0075 20.6062C21.0072 20.6056 21.0067 20.6047 21.006 20.6031C21.0046 20.6001 21.0021 20.5943 20.9987 20.5844C20.9915 20.5637 20.9816 20.5288 20.9699 20.4698C20.9446 20.3425 20.9234 20.1713 20.8892 19.8877L19.4 20.0676ZM21.1331 20.7228C21.0851 20.6994 21.0407 20.6604 21.0079 20.6069L19.7292 21.391C19.908 21.6826 20.1654 21.9194 20.4744 22.0705L21.1331 20.7228ZM27.1893 22.25C27.4423 22.25 27.6767 22.2506 27.8731 22.2346C28.0797 22.2178 28.3025 22.1795 28.5256 22.0705L27.8669 20.7228C27.8785 20.7172 27.863 20.7305 27.7516 20.7395C27.63 20.7494 27.4666 20.75 27.1893 20.75V22.25ZM28.1108 19.8877C28.0766 20.1713 28.0554 20.3425 28.0301 20.4698C28.0184 20.5288 28.0085 20.5637 28.0013 20.5844C27.9979 20.5943 27.9954 20.6001 27.994 20.6032C27.9933 20.6047 27.9928 20.6056 27.9925 20.6062C27.9922 20.6067 27.9921 20.6069 27.9921 20.6069L29.2708 21.391C29.3986 21.1826 29.4608 20.9667 29.5014 20.762C29.5403 20.5659 29.5685 20.3286 29.6 20.0676L28.1108 19.8877ZM28.5256 22.0705C28.8346 21.9194 29.092 21.6826 29.2708 21.391L27.9921 20.6069C27.9593 20.6604 27.9149 20.6994 27.8669 20.7228L28.5256 22.0705ZM18.3235 9.25H30.6765V7.75H18.3235V9.25ZM30.6765 9.75H18.3235V11.25H30.6765V9.75ZM18.3235 9.75C18.1059 9.75 17.9374 9.68245 17.8398 9.60871C17.7923 9.5728 17.7687 9.54118 17.7584 9.52289C17.7493 9.50663 17.75 9.50033 17.75 9.5H16.25C16.25 10.0628 16.5537 10.517 16.9355 10.8055C17.3169 11.0937 17.8102 11.25 18.3235 11.25V9.75ZM31.25 9.5C31.25 9.50033 31.2507 9.50663 31.2416 9.52289C31.2313 9.54118 31.2077 9.5728 31.1602 9.60871C31.0626 9.68245 30.8941 9.75 30.6765 9.75V11.25C31.1898 11.25 31.6831 11.0937 32.0645 10.8055C32.4463 10.517 32.75 10.0628 32.75 9.5H31.25ZM30.6765 9.25C30.8941 9.25 31.0626 9.31755 31.1602 9.39129C31.2077 9.4272 31.2313 9.45882 31.2416 9.47711C31.2507 9.49337 31.25 9.49967 31.25 9.5H32.75C32.75 8.93724 32.4463 8.48299 32.0645 8.19449C31.6831 7.90631 31.1898 7.75 30.6765 7.75V9.25ZM18.3235 7.75C17.8102 7.75 17.3169 7.90631 16.9355 8.19449C16.5537 8.48299 16.25 8.93724 16.25 9.5H17.75C17.75 9.49967 17.7493 9.49337 17.7584 9.47711C17.7687 9.45882 17.7923 9.4272 17.8398 9.39129C17.9374 9.31755 18.1059 9.25 18.3235 9.25V7.75ZM19.75 8.5C19.75 7.6945 20.1974 6.89965 21.052 6.27813C21.9059 5.65713 23.1225 5.25 24.5 5.25V3.75C22.8399 3.75 21.3065 4.2383 20.1698 5.06502C19.0338 5.89121 18.25 7.09636 18.25 8.5H19.75ZM24.5 5.25C25.8775 5.25 27.0941 5.65713 27.948 6.27813C28.8026 6.89965 29.25 7.6945 29.25 8.5H30.75C30.75 7.09636 29.9662 5.89121 28.8302 5.06502C27.6935 4.2383 26.1601 3.75 24.5 3.75V5.25ZM23.75 2.5V4.5H25.25V2.5H23.75Z" fill="white" />
                  <Path d="M7.5 10L7.5 18M11.25 14L3.75 14" stroke="white" stroke-width="2.5" stroke-linecap="round" />
                </Svg>
              </LinearGradient>
            </Pressable>
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', padding: 2 , marginVertical: 8}}>
            {beverageData.map((item, index) => (
              <BeverageCard
                key={index} name={item.name}
                img={item.img}
                onPress={() => updateDrinkImgAndSugarValue(item.img, item.sugarValue)}
              />
            ))}
          </View>
        </Animated.ScrollView>
      </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 25,
    height: '100%',
    backgroundColor: 'white'
  },
  card: {
    backgroundColor: secondary,
    height: 'auto',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 8,
    elevation: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10
  },
  waveContainer: {
    marginTop: -15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    elevation: 10,
    paddingTop: 25,
    paddingHorizontal: 18,
  },
  textTitle: {
    fontFamily: 'Mitr-Bold',
    fontSize: 16,
    color: 'white',
  },
  circleOfIcon: {
    height: 28,
    width: 28,
    backgroundColor: primary,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2
  },
  catagrory: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: primary,
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderRadius: 25,
    flexDirection: 'row'
  },
  h2: {
    fontFamily: 'Mitr-Regular',
    color: primary
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  addBeverage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 4
  }
});
