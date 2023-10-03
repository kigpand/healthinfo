import {StyleSheet, Text, View} from 'react-native';
import {prevData} from '../data/data';
import StartModal from '../components/modal/StartModal';
import {useState} from 'react';
import {IRoutine} from '../interface/IRoutine';

export default function Prev() {
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

  return (
    <View style={style.container}>
      <View style={style.prev}>
        {prevData.map((prev, i) => {
          return (
            <View style={style.item} key={i}>
              <Text onPress={() => openModal(prev)}>{prev.title}</Text>
            </View>
          );
        })}
      </View>
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
  prev: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 100,
    gap: 10,
  },
  item: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'red',
    position: 'relative',
  },
  kg: {
    display: 'flex',
    flexDirection: 'row',
  },
});
