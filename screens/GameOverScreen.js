import { Image, StyleSheet, Text, View } from 'react-native'
import Title from '../components/UI/Title'
import Colors from '../constants/colors'

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
      <Text>Number of rounds: </Text>
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
    borderColor: Colors.primary800,
    borderWidth: 3,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})
