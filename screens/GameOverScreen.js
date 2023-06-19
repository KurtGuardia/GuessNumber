import { Image, StyleSheet, Text, View } from 'react-native'
import Title from '../components/UI/Title'
import Colors from '../constants/colors'
import PrimaryButton from '../components/UI/PrimaryButton'
export default function GameOverScreen() {
  return (
    <View style={styles.rootConainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.png')}
          style={styles.image}
        />
      </View>
      <Text style={styles.summarText}>
        Your phone needed{' '}
        <Text style={styles.highlight}>3</Text> rounds to
        guess the number{' '}
        <Text style={styles.highlight}>8</Text>
      </Text>
      <PrimaryButton onPress={() => {}}>
        Start New Game
      </PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  rootConainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
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
