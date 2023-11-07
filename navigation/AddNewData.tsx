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
import AddNewDataList from '../components/AddNewDataList';
import useExercise from '../store/useExercise';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import StartModal from '../components/modal/StartModal';
import AddNewDataSubmitBtns from '../components/AddNewDataSubmitBtns';
import AddNewDataMainHeader from '../components/AddNewDataMainHeader';
import useModal from '../hooks/useModal';

export default function AddNewData() {
  const route = useRoute<RouteProp<any>>();
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {addList} = useExercise();
  const {openModal, handleOpenModal, handleCloseModal} = useModal();
  const [onBtn, setOnBtn] = useState<boolean>(false);
  const [routineArr, setRoutineArr] = useState<IRoutineData[]>([]);

  function getRoutineArr(routine: IRoutineData) {
    setRoutineArr([...routineArr, routine]);
  }

  function removeRoutine(title: string) {
    const result = routineArr.filter(
      (item: IRoutineData) => item.title !== title,
    );
    setRoutineArr(result);
  }

  function onPlaySubmit() {
    setOnBtn(false);
    handleOpenModal();
  }

  function onNoSubmit() {
    setOnBtn(false);
    if (!route.params) return;
    addList({title: route.params.title, routine: routineArr});
    nav.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <AddNewDataMainHeader getRoutineArr={getRoutineArr} />
      <AddNewDataList routineArr={routineArr} removeRoutine={removeRoutine} />
      {routineArr.length > 0 && (
        <Pressable style={styles.button} onPress={() => setOnBtn(true)}>
          <Text style={{color: 'white'}}>등록</Text>
        </Pressable>
      )}
      <StartModal
        routine={{title: route.params!.title, routine: routineArr}}
        onView={openModal}
        onCloseView={handleCloseModal}
      />
      {onBtn && (
        <AddNewDataSubmitBtns
          onPlaySubmit={onPlaySubmit}
          onNoSubmit={onNoSubmit}
        />
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
