import {RouteProp, useRoute} from '@react-navigation/native';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {borderColor, buttonColor, mainColor} from '../style/color';
import {useEffect, useState} from 'react';
import {IRoutineData} from '../interface/IRoutine';
import NewDataModal from '../components/modal/NewDataModal';
import NewDataList from '../components/NewDataList';
import NewDataAdd from '../components/NewDataAdd';

export default function NewDataMain() {
  const route = useRoute<RouteProp<any>>();
  const [routineArr, setRoutineArr] = useState<IRoutineData[]>([]);

  function getRoutineArr(routine: IRoutineData) {
    setRoutineArr([...routineArr, routine]);
  }

  useEffect(() => {
    console.log(routineArr);
  }, [routineArr]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params?.title}</Text>
      <NewDataAdd getRoutineArr={getRoutineArr} />
      <NewDataList routineArr={routineArr} />
      {routineArr.length > 0 && (
        <Pressable style={styles.button}>
          <Text style={{color: 'white'}}>등록</Text>
        </Pressable>
      )}
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
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: buttonColor,
    borderWidth: 1,
    borderColor: borderColor,
    paddingHorizontal: 15,
    paddingVertical: 8,
    position: 'absolute',
    bottom: 20,
    borderRadius: 8,
  },
});
