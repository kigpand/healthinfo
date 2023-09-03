import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.text} onPress={onMove}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 10,
  },
});
