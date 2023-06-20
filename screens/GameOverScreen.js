import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native'
import Title from '../components/UI/Title'
import Colors from '../constants/colors'
import PrimaryButton from '../components/UI/PrimaryButton'
import { Dimensions } from 'react-native'

export default function GameOverScreen({
  roundNumber,
  userNumber,
  onStartNewGame,
}) {
  const { width, height } = useWindowDimensions()

  let imageSize = 300

  if (width < 380) {
    imageSize = 150
  }

  if (height < 400) {
    imageSize = 80
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  }

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <View style={[styles.imageContainer, imageSize]}>
          <Image
            source={require('../assets/images/success.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.summarText}>
          Your phone needed{' '}
          <Text style={styles.highlight}>
            {roundNumber}
          </Text>{' '}
          rounds to guess the number{' '}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>
          Start New Game
        </PrimaryButton>
      </View>
    </ScrollView>
  )
}

// const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    // width: deviceWidth < 400 ? 200 : 300,
    // height: deviceWidth < 400 ? 200 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderColor: Colors.accent500,
    borderWidth: 3,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summarText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
})
