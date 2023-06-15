import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/UI/Title'
import NumberContainer from '../components/game/NumberContainer'

const generateRandomBetween = (min, max, exclude) => {
  //     min = Math.ceil(min);
  //   max = Math.floor(max);
  const randomNumber =
    Math.floor(Math.random() * (max - min)) + min
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return randomNumber
  }
}

export default function GameScreen({
  userNumber,
  onGameOver,
}) {
  const initialGuess = generateRandomBetween(
    1,
    100,
    userNumber,
  )
  const [currentGuess, setCurrentGuess] =
    useState(initialGuess)

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
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
