import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Pressable, StyleSheet, Text} from 'react-native';

type Props = {
  title: string;
  link: string;
};

export default function FooterItem({title, link}: Props) {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function onMove() {
    nav.navigate(link);
  }

  return (
    <Pressable style={styles.container} onPress={onMove}>
      <Text onPress={onMove}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
