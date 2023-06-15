import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'

export default function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* GUESS */}
      <View>
        <Text>Higher of lower?</Text>
        {/* + -  */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
})
