import {View, Text, StyleSheet} from 'react-native';
import {IRoutineData} from '../interface/IRoutine';

type Props = {
  routine: IRoutineData;
};

export default function SetListTitle({routine}: Props) {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.title}>{routine.title}</Text>
      <Text style={styles.kg}>{routine.kg}</Text>
      <Text style={styles.set}>{routine.set}set</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
  kg: {
    marginVertical: 10,
    fontSize: 20,
  },
  set: {},
});
