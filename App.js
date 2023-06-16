import { StyleSheet, ImageBackground } from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import { LinearGradient } from 'expo-linear-gradient'
import { useEffect, useState } from 'react'
import GameScreen from './screens/GameScreen'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from './constants/colors'
import GameOverScreen from './screens/GameOverScreen'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()
  .then((result) =>
    console.log(
      `SplashScreen.preventAutoHideAsync() succeeded: ${result}`,
    ),
  )
  .catch(console.warn)

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [gameIsOver, setGameIsOver] = useState(true)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  // Watch for fonts to be loaded, then hide the splash screen
  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync()
    }
    if (fontsLoaded) {
      hideSplashScreen()
    }
  }, [fontsLoaded])
  // Initally return null instead of <AppLoading />
  if (!fontsLoaded) {
    return null
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler() {
    setGameIsOver(true)
  }

  let screen = (
    <StartGameScreen onPickNumber={pickedNumberHandler} />
  )

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameOverHandler}
      />
    )
  }

  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen />
      // <GameOverScreen onRestart={restartGameHandler} />
    )
  }

  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require('./assets/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
})
