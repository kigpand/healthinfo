import {StyleSheet, Text, View} from 'react-native';
import {IRoutineData} from '../interface/IRoutine';

type Props = {
  index: number;
  routineData: IRoutineData;
};

export default function RecordViewModalList({index, routineData}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.index}>{index + 1}.</Text>
      <Text style={styles.routine}>
        {routineData.title} x {routineData.kg} x {routineData.set}set
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  index: {
    width: 30,
    fontWeight: 'bold',
  },
  routine: {
    fontWeight: 'bold',
  },
});
