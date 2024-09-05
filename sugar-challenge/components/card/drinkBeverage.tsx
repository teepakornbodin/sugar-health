import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'

type props = {
    img: any
}

const drinkBeverage = ({img}:props) => {
  if (img === null) {
    return (
      <View style={styles.imgNull}/>
    )
  }

  return (
    <View>
      <Image source={img} style={styles.img}/>
    </View>
  )
}

export default drinkBeverage

const styles = StyleSheet.create({
    img: {
        width: 55,
        height: 55,
        objectFit: 'cover',
        borderRadius: 12
    },
    imgNull: {
      width: 55,
      height: 55,
      backgroundColor: '#99BCE9',
      borderRadius: 12
    }
})