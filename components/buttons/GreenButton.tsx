import {Pressable, StyleSheet, Text} from 'react-native';

type Props = {
  text: string;
};

export default function GreenButton({text}: Props) {
  return (
    <Pressable>
      <Text>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({});
