import {StyleSheet, Text, TextInput, View} from 'react-native';

type Props = {
  label: string;
  onChangeText: (text: string) => void;
};

export default function NewDataModalList({label, onChangeText}: Props) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput onChangeText={onChangeText} placeholder={label} />
    </View>
  );
}

const styles = StyleSheet.create({});
