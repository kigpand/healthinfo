import {Pressable, StyleSheet, Text} from 'react-native';
import {ButtonType} from '../../types/ButtonType';

export default function GreenButton({text, onPress}: ButtonType) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#72dd00',
    borderWidth: 1,
    borderColor: '#1bff1b',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});
