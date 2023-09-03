import {StyleSheet, Text, View} from 'react-native';

type Props = {
  title: string;
  navigation: any;
};

export default function FooterItem({title, navigation}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => navigation.navigate('List')}>
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
