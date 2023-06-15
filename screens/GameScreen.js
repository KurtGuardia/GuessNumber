import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/UI/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/UI/PrimaryButton'

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

let minBoundary = 1
let maxBoundary = 100

export default function GameScreen({
  userNumber,
  onGameOver,
}) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber,
  )
  const [currentGuess, setCurrentGuess] =
    useState(initialGuess)

  function nextGuessHandler(direction) {
    if (
      (direction === 'lower' &&
        currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert(
        "Don't lie!",
        'You know that this is wrong...',
        [{ text: 'Sorry!', style: 'cancel' }],
      )
      return
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess
    } else {
      minBoundary = currentGuess + 1
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    )
    setCurrentGuess(newRndNumber)
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher of lower?</Text>
        <View>
          <PrimaryButton
            onPress={nextGuessHandler.bind(this, 'lower')}
          >
            -
          </PrimaryButton>
          <PrimaryButton
            onPress={nextGuessHandler.bind(this, 'greater')}
          >
            +
          </PrimaryButton>
        </View>
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
