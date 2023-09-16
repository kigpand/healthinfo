import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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
    <TouchableOpacity style={styles.container} onPress={onMove}>
      <Text onPress={onMove}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
