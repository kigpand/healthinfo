import {FlatList, ListRenderItemInfo, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {borderColor, buttonColor} from '../../style/color';
import RoutineManageSelectModal from './RoutineManageSelectModal';
import {useState} from 'react';
import useExercise from '../../store/useExercise';
import {IRoutine} from '../../interface/IRoutine';

type Props = {
  routineManageModal: boolean;
  handleRoutineModalButton: (type: '수정' | '삭제') => void;
};

export default function RoutineManageModal({routineManageModal, handleRoutineModalButton}: Props) {
  const [selectModal, setSelectModal] = useState<boolean>(false);
  const [routine, setRoutine] = useState<IRoutine | null>(null);
  const {list, setUpdateRoutine} = useExercise();

  function handleRoutineClick(clickedRoutine: ListRenderItemInfo<IRoutine>) {
    setRoutine(clickedRoutine.item);
    setSelectModal(true);
  }

  function handleRoutineSelectModal(type: '수정' | '삭제') {
    if (!routine) return;
    setSelectModal(false);
    handleRoutineModalButton(type);
    setUpdateRoutine(routine);
  }

  return (
    <Modal animationType="fade" transparent={false} visible={routineManageModal}>
      <View style={styles.container}>
        <Text style={styles.title}>작업할 루틴을 선택해주세요</Text>
        <FlatList
          data={list}
          renderItem={item => (
            <Pressable style={styles.button} onPress={() => handleRoutineClick(item)}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>{item.item.title}</Text>
            </Pressable>
          )}
        />
      </View>
      {selectModal && (
        <RoutineManageSelectModal
          routine={routine}
          handleRoutineSelectModal={handleRoutineSelectModal}
          closeModal={() => setSelectModal(false)}
        />
      )}
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 100,
    marginBottom: 50,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    width: 200,
    height: 50,
    backgroundColor: buttonColor,
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
