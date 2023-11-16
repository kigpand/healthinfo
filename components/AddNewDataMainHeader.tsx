import {StyleSheet, Text, View} from 'react-native';
import NewDataAddRoutineBtn from './NewDataAddRoutineBtn';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Category, IRoutineData} from '../interface/IRoutine';

type Props = {
  getRoutineArr: (routine: IRoutineData) => void;
};

export default function AddNewDataMainHeader({getRoutineArr}: Props) {
  const route = useRoute<RouteProp<any>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params?.title}</Text>
      <NewDataAddRoutineBtn getRoutineArr={getRoutineArr} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
