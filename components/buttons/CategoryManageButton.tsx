import {Pressable, StyleSheet, Text} from 'react-native';
import {ButtonType} from '../../types/ButtonType';
import {borderColor, buttonColor} from '../../style/color';

export default function CategoryManageButton({text, onPress}: ButtonType) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: buttonColor,
    borderColor: borderColor,
    borderRadius: 8,
    borderWidth: 1,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});
