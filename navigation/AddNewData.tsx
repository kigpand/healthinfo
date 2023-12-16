import {ParamListBase, RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {mainColor} from '../style/color';
import {useState} from 'react';
import {IRoutineData} from '../interface/IRoutine';
import AddNewDataList from '../components/AddNewDataList';
import useExercise from '../store/useExercise';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import StartModal from '../components/modal/StartModal';
import AddNewDataSubmitBtns from '../components/AddNewDataSubmitBtns';
import AddNewDataMainHeader from '../components/AddNewDataMainHeader';
import useModal from '../hooks/useModal';
import AddNewDataCheckModal from '../components/modal/AddNewDataCheckModal';
import BlueButton from '../components/buttons/BlueButton';

export default function AddNewData() {
  const route = useRoute<RouteProp<any>>();
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {addList} = useExercise();
  const {openModal, handleOpenModal, handleCloseModal} = useModal();
  const [onBtn, setOnBtn] = useState<boolean>(false);
  const [routineArr, setRoutineArr] = useState<IRoutineData[]>([]);
  const [isCheck, setIsCheck] = useState<boolean>(false);

  function getRoutineArr(routine: IRoutineData) {
    setRoutineArr([...routineArr, routine]);
  }

  function removeRoutine(title: string) {
    const result = routineArr.filter((item: IRoutineData) => item.title !== title);
    setRoutineArr(result);
  }

  function onPlaySubmit() {
    setOnBtn(false);
    handleOpenModal();
  }

  function onNoSubmit() {
    setOnBtn(false);
    if (!route.params) return;
    addList({
      id: route.params.id,
      title: route.params.title,
      category: route.params.category,
      routine: routineArr,
    });
    nav.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <AddNewDataMainHeader getRoutineArr={getRoutineArr} />
      <AddNewDataList routineArr={routineArr} removeRoutine={removeRoutine} />
      {routineArr.length > 0 && (
        <View style={styles.button}>
          <BlueButton text="등록" onPress={() => setIsCheck(true)} />
        </View>
      )}
      <StartModal
        routine={{
          id: route.params!.id,
          title: route.params!.title,
          category: route.params!.category,
          routine: routineArr,
        }}
        onView={openModal}
        onCloseView={handleCloseModal}
      />
      {isCheck && <AddNewDataCheckModal handleSubmitBtn={() => setOnBtn(true)} closeView={() => setIsCheck(false)} />}
      {onBtn && <AddNewDataSubmitBtns onPlaySubmit={onPlaySubmit} onNoSubmit={onNoSubmit} />}
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
    position: 'absolute',
    bottom: 20,
  },
});
