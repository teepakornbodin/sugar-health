import { View, Text, Animated, StatusBar, StyleSheet, FlatList } from 'react-native';
import React, { useRef, useState } from 'react';
import Wave from '@/components/wave';
import { LinearGradient } from 'expo-linear-gradient';
import { primary, secondary } from '@/constants/Colors';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import BeverageCard from '@/components/card/beverageCard';
import { beverageData } from '@/components/data/beverageData'

const Home = () => {
  const [currentSugar, setSugar] = useState(0)

  const scrollA = useRef(new Animated.Value(0)).current;

  return (
    <LinearGradient colors={[secondary, secondary]} style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.circleOfIcon}><MaterialCommunityIcons name="spoon-sugar" size={18} color="white" /></View>
          <Text style={styles.textTitle}>ปริมาณน้ำตาลวันนี้</Text>
        </View>
        <View style={styles.waveContainer}>
          <Wave sugarValue={currentSugar} />
        </View>
      </View>
      <Animated.ScrollView style={styles.scrollView}>
        {beverageData.map((item, index) => (
          <BeverageCard 
            key={index} name={item.name} 
            img={item.img} 
            onPress={() => setSugar(currentSugar + item.sugarValue)} 
          />
        ))}
      </Animated.ScrollView>
    </LinearGradient>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    height: '100%',
    paddingTop: 16,
  },
  card: {
    backgroundColor: 'white',
    width: 325,
    height: 'auto',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 8,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 4
  },
  waveContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: 'white',
    width: 360,
    borderRadius: 12,
    elevation: 4,
  },
  textTitle: {
    fontFamily: 'Mitr-Bold',
    fontSize: 16,
    color: primary,
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
  }
});
