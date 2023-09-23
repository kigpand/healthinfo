import {StyleSheet, View} from 'react-native';
import RecordList from '../components/RecordList';

export default function Record() {
  return (
    <View style={style.container}>
      <RecordList />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
