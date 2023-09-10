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
      <Text style={styles.record} onPress={() => navigation.navigate('Record')}>
        지난 운동
      </Text>
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
    width: 200,
    height: 50,
    fontSize: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: buttonColor,
    color: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: btnBorderColor,
  },
  record: {
    overflow: 'hidden',
    width: 200,
    height: 50,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8f6dff',
    color: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: btnBorderColor,
    marginTop: 10,
  },
});
