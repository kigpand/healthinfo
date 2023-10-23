import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {borderColor, buttonColor, mainColor} from '../style/color';
import {useState} from 'react';
import {IRoutineData} from '../interface/IRoutine';
import NewDataList from '../components/NewDataList';
import NewDataAdd from '../components/NewDataAdd';
import useExercise from '../store/useExercise';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import StartModal from '../components/modal/StartModal';
import NewDataBtns from '../components/NewDataBtns';

export default function NewDataMain() {
  const route = useRoute<RouteProp<any>>();
  const [routineArr, setRoutineArr] = useState<IRoutineData[]>([]);
  const {addList} = useExercise();
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [onBtn, setOnBtn] = useState<boolean>(false);
  const [start, setStart] = useState<boolean>(false);

  function getRoutineArr(routine: IRoutineData) {
    setRoutineArr([...routineArr, routine]);
  }

  function onPlaySubmit() {
    setOnBtn(false);
    setStart(true);
  }

  function onNoSubmit() {
    setOnBtn(false);
    if (!route.params) return;
    addList({title: route.params.title, routine: routineArr});
    nav.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params?.title}</Text>
      <NewDataAdd getRoutineArr={getRoutineArr} />
      <NewDataList routineArr={routineArr} />
      {routineArr.length > 0 && (
        <Pressable style={styles.button} onPress={() => setOnBtn(true)}>
          <Text style={{color: 'white'}}>등록</Text>
        </Pressable>
      )}
      {onBtn && (
        <NewDataBtns onPlaySubmit={onPlaySubmit} onNoSubmit={onNoSubmit} />
      )}
      <StartModal
        routine={{title: route.params!.title, routine: routineArr}}
        onView={start}
        onCloseView={() => setStart(false)}
      />
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
