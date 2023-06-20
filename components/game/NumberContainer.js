import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native'
import Colors from '../../constants/colors'

export default function NumberContainer({ children }) {
  const { height, width } = useWindowDimensions()
  return (
    <View
      style={[
        styles.container,
        {
          padding: width > 700 ? 12 : 24,
          marginBottom: width > 700 ? 0 : 24,
        },
      ]}
    >
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 15,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: 'open-sans-bold',
  },
})
