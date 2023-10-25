import {StyleSheet, Text, View} from 'react-native';
import NewDataAdd from './NewDataAdd';
import {RouteProp, useRoute} from '@react-navigation/native';
import {IRoutineData} from '../interface/IRoutine';

type Props = {
  getRoutineArr: (routine: IRoutineData) => void;
};

export default function NewDataMainHeader({getRoutineArr}: Props) {
  const route = useRoute<RouteProp<any>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params?.title}</Text>
      <NewDataAdd getRoutineArr={getRoutineArr} />
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
