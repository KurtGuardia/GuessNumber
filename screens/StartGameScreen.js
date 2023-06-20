import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native'
import PrimaryButton from '../components/UI/PrimaryButton'
import { useState } from 'react'
import Colors from '../constants/colors'
import Title from '../components/UI/Title'
import Card from '../components/UI/Card'
import InstructionGame from '../components/UI/InstructionGame'

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState('')
  const { height, width } = useWindowDimensions()

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText)
  }

  function resetInputHandler() {
    setEnteredNumber('')
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber)

    if (
      isNaN(chosenNumber) ||
      chosenNumber <= 0 ||
      chosenNumber > 99
    ) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: resetInputHandler,
          },
        ],
      )
      return
    }

    onPickNumber(chosenNumber)
  }

  const marginTopDistance = height < 400 ? 30 : 100

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior='position'
      >
        <View
          style={[
            styles.roootContainer,
            { marginTop: marginTopDistance },
          ]}
        >
          <Title>Guess My Number</Title>
          <Card>
            <InstructionGame>
              Enter a number
            </InstructionGame>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType='number-pad'
              autoCapitalize='none'
              autoCorrect={false}
              value={enteredNumber}
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>
                  Reset
                </PrimaryButton>
              </View>

              <View style={styles.buttonContainer}>
                <PrimaryButton
                  onPress={confirmInputHandler}
                >
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default StartGameScreen

// const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  roootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 400 ? 30 : 100,
    alignItems: 'center',
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },
  buttonContainer: {
    flex: 1,
  },
})
