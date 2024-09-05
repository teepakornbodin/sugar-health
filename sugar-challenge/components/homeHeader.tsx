import { View, Text, StyleSheet, TextInput, StatusBar } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { secondary } from '@/constants/Colors';

type props = {
  userName:string
}

const homeHeader = ({userName}:props) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Text style={styles.logo}>LOGO</Text>
        <View style={styles.userNameContainer}>
          <Text style={styles.userNameTitle}>{userName}</Text>
          <FontAwesome name="user-circle-o" size={24} color="white" />
        </View>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder='Search'
        />
      </View>
    </View>
  )
}

export default homeHeader

const styles = StyleSheet.create({
  container: {
    backgroundColor: secondary,
    flexDirection: 'column',
    gap: 10,
    paddingHorizontal: 15,
    justifyContent: 'center',
    paddingBottom: 18,
    paddingTop: StatusBar.currentHeight,
    width: '100%'
  },
  flexContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  userNameContainer: {
    flexDirection: 'row',
    gap: 10
  },
  logo: {
    fontFamily: 'Mitr-Bold',
    color: 'white',
    fontSize: 35
  },
  userNameTitle: {
    fontFamily: 'Mitr-Light',
    color: 'white',
    fontSize: 14
  },
  input: {
    width: 250,
    height: 30,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10
  }
})