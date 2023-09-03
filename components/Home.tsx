import {Button, StyleSheet, Text, View} from 'react-native';
import {btnBorderColor, buttonColor, mainColor} from '../style/color';

export default function Home({navigation}: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.today}>오늘의 운동</Text>
      <Text onPress={() => navigation.navigate('Record')}>지난 운동</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  today: {
    overflow: 'hidden',
    paddingHorizontal: 40,
    paddingVertical: 10,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: buttonColor,
    color: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: btnBorderColor,
  },
});
