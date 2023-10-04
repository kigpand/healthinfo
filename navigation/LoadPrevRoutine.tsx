import {FlatList, StyleSheet, Text, View} from 'react-native';
import {prevData} from '../data/data';
import StartModal from '../components/modal/StartModal';
import {useState} from 'react';
import {IRoutine} from '../interface/IRoutine';
import PrevRoutineList from '../components/PrevRoutineList';

export default function LoadPrevRoutine() {
  const [onView, setOnView] = useState<boolean>(false);
  const [routine, setRoutine] = useState<IRoutine | null>(null);

  function openModal(routine: IRoutine) {
    setRoutine(routine);
    setOnView(true);
  }

  function closeModal() {
    setRoutine(null);
    setOnView(false);
  }

  // section list test 해볼것
  return (
    <View style={style.container}>
      <FlatList
        horizontal={true}
        style={style.flatList}
        data={prevData}
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          gap: 10,
        }}
        renderItem={item => (
          <PrevRoutineList item={item.item} openModal={openModal} />
        )}></FlatList>
      <StartModal routine={routine!} onView={onView} onCloseView={closeModal} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
  },
  flatList: {
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 100,
    width: '100%',
  },
  kg: {
    display: 'flex',
    flexDirection: 'row',
  },
});