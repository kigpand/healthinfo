import {StyleSheet, Text, View} from 'react-native';
import {backgroundColor, btnBorderColor, buttonColor} from '../style/color';
import {useState} from 'react';
import HomeModal from '../components/modal/HomeModal';

export default function Home({navigation}: any) {
  const [onView, setOnView] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>오늘은 어떤 운동을 진행해볼까요?</Text>
      <Text style={styles.today} onPress={() => setOnView(true)}>
        오늘의 운동
      </Text>
      <HomeModal onView={onView} closeView={() => setOnView(false)} />
      <Text style={styles.record} onPress={() => navigation.navigate('Record')}>
        지난 기록
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 40,
    fontWeight: '700',
    fontSize: 18,
  },
  today: {
    overflow: 'hidden',
    width: 200,
    paddingVertical: 10,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: buttonColor,
    color: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: btnBorderColor,
  },
  record: {
    overflow: 'hidden',
    width: 200,
    paddingVertical: 10,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#8f6dff',
    color: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: btnBorderColor,
    marginTop: 10,
  },
});
