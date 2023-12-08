import {Pressable, StyleSheet, Text} from 'react-native';
import {ButtonType} from '../../types/ButtonType';
import {btnBorderColor, buttonColor} from '../../style/color';

export default function BlueButton({text, onPress}: ButtonType) {
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
    backgroundColor: buttonColor,
    borderWidth: 1,
    borderColor: btnBorderColor,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
