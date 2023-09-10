import {StyleSheet, Text, View} from 'react-native';
import {btnBorderColor, buttonColor, mainColor} from '../style/color';
import {useState} from 'react';
import HomeModal from '../components/HomeModal';

export default function Home({navigation}: any) {
  const [onView, setOnView] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={styles.today} onPress={() => setOnView(true)}>
        오늘의 운동
      </Text>
      <HomeModal onView={onView} closeView={() => setOnView(false)} />
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
