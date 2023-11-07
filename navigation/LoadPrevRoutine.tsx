import {FlatList, StyleSheet, Text, View} from 'react-native';
import StartModal from '../components/modal/StartModal';
import {useState} from 'react';
import {IRoutine} from '../interface/IRoutine';
import PrevRoutineList from '../components/PrevRoutineList';
import useExercise from '../store/useExercise';
import useModal from '../hooks/useModal';

export default function LoadPrevRoutine() {
  const [routine, setRoutine] = useState<IRoutine | null>(null);
  const {list} = useExercise();
  const {openModal, handleOpenModal, handleCloseModal} = useModal();

  function handleListClick(routine: IRoutine) {
    setRoutine(routine);
    handleOpenModal();
  }

  function closeModal() {
    setRoutine(null);
    handleCloseModal();
  }

  // section list test 해볼것
  return (
    <View style={style.container}>
      <Text style={style.title}>어떤 루틴을 불러올까요?</Text>
      <FlatList
        horizontal={true}
        style={style.flatList}
        data={list}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          gap: 10,
        }}
        renderItem={item => (
          <PrevRoutineList item={item.item} handleListClick={handleListClick} />
        )}></FlatList>
      <StartModal
        routine={routine!}
        onView={openModal}
        onCloseView={closeModal}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    marginTop: 100,
  },
  flatList: {
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 50,
    width: '100%',
  },
  kg: {
    display: 'flex',
    flexDirection: 'row',
  },
});
