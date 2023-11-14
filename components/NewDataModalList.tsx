import {StyleSheet, Text, TextInput, View} from 'react-native';

type Props = {
  label: 'kg' | '세트' | '카테고리' | '명칭';
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
        keyboardType={
          label === 'kg' || label === '세트' ? 'number-pad' : 'default'
        }
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
