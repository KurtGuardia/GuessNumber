import { StyleSheet, Text, View } from 'react-native'
import Colors from '../../constants/colors'

export default function InstructionGame({ children }) {
  return (
    <Text style={styles.instructionText}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
})
