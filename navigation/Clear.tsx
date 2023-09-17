import {StyleSheet, Text, View} from 'react-native';
import {mainColor} from '../style/color';

export default function Clear() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, color: 'white', fontWeight: '700'}}>
        오운완!
      </Text>
      <Text style={{color: 'white', marginTop: 10, fontWeight: '700'}}>
        오늘도 고생하셨습니다!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: mainColor,
  },
});
