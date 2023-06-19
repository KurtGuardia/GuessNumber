import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/UI/Title'
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/UI/PrimaryButton'
import Card from '../components/UI/Card'
import InstructionGame from '../components/UI/InstructionGame'
import { Ionicons } from '@expo/vector-icons'
import GuessLogItem from '../components/game/GuessLogItem'

const generateRandomBetween = (min, max, exclude) => {
  const randomNumber =
    Math.floor(Math.random() * (max - min)) + min
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return randomNumber
  }
}

let minBoundary
let maxBoundary

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
  const [guessRounds, setGuessRounds] = useState([
    initialGuess,
  ])

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length)
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => {
    minBoundary = 1
    maxBoundary = 100
  }, [])

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
    setGuessRounds((prevGuessRounds) => [
      newRndNumber,
      ...prevGuessRounds,
    ])
  }

  const guessRoundsListLength = guessRounds.length

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionGame style={styles.instructionText}>
          Higher of lower?
        </InstructionGame>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={nextGuessHandler.bind(this, 'lower')}
            >
              {
                <Ionicons
                  name='md-remove'
                  size={24}
                  color='white'
                />
              }
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              onPress={nextGuessHandler.bind(
                this,
                'greater',
              )}
            >
              {
                <Ionicons
                  name='md-add'
                  size={24}
                  color='white'
                />
              }
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {
          <FlatList
            data={guessRounds}
            renderItem={(itemData) => (
              <GuessLogItem
                roundNumber={
                  guessRoundsListLength - itemData.index
                }
                guess={itemData.item}
              />
            )}
            keyExtractor={(item) => item}
          />
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
})
