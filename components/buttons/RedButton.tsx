import {Pressable, StyleSheet, Text} from 'react-native';
import {ButtonType} from '../../types/ButtonType';
import {falseColor} from '../../style/color';

export default function RedButton({text, onPress}: ButtonType) {
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
    backgroundColor: falseColor,
    borderWidth: 1,
    borderColor: '#ff3d8e',
  },
  text: {
    color: 'white',
  },
});
