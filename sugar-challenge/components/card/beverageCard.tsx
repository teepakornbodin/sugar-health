import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Image } from 'expo-image';
import React from 'react'

type props = {
    name:string,
    onPress:() => void,
    img:any
}

const beverageCard = ({name, onPress, img}: props) => {
  return (
    <Pressable 
        onPress={onPress}
    >
      <Text>{name}</Text>
      <Image source={img} style={styles.img}/>
    </Pressable>
  )
}

export default beverageCard

const styles = StyleSheet.create({
    img: {
        width: 100,
        height: 100,
        objectFit: 'cover',
        
    }
})