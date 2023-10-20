import {StyleSheet, Text, TextInput, View} from 'react-native';
import {borderColor} from '../style/color';

type Props = {
  label: string;
  onChangeText: (text: string) => void;
};

export default function NewDataModalList({label, onChangeText}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={label}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    width: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: 150,
    height: 30,
    borderRadius: 4,
  },
});
