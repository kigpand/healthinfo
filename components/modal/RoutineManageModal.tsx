import {FlatList, ListRenderItemInfo, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {borderColor, buttonColor} from '../../style/color';
import RoutineManageSelectModal from './RoutineManageSelectModal';
import {useState} from 'react';
import useExercise from '../../store/useExercise';
import {IRoutine} from '../../interface/IRoutine';
import RedButton from '../buttons/RedButton';
import {useRoutineQuery} from '../../query/useRoutineQuery';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  routineManageModal: boolean;
  handleCloseModal: () => void;
};

export default function RoutineManageModal({routineManageModal, handleCloseModal}: Props) {
  const [selectModal, setSelectModal] = useState<boolean>(false);
  const [currentRoutine, setCurrentRoutine] = useState<IRoutine | null>(null);
  const {setUpdateRoutine} = useExercise();
  const {routine, deleteRoutineMutate} = useRoutineQuery();
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function handleRoutineClick(clickedRoutine: ListRenderItemInfo<IRoutine>) {
    setCurrentRoutine(clickedRoutine.item);
    setSelectModal(true);
  }

  function handleRoutineSelectModal(type: '수정' | '삭제') {
    if (!currentRoutine) return;
    handleCloseModal();
    setSelectModal(false);
    if (type === '수정') {
      setUpdateRoutine(currentRoutine);
      nav.navigate('RoutineManageUpdate');
    } else {
      deleteRoutineMutate(currentRoutine.id);
      handleCloseModal();
      nav.navigate('Home');
    }
  }

  return (
    <Modal animationType="fade" transparent={false} visible={routineManageModal}>
      <View style={styles.container}>
        <Text style={styles.title}>작업할 루틴을 선택해주세요</Text>
        <FlatList
          data={routine}
          renderItem={item => (
            <Pressable style={styles.button} onPress={() => handleRoutineClick(item)}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>{item.item.title}</Text>
            </Pressable>
          )}
        />
        <RedButton text="이전" onPress={handleCloseModal} />
      </View>
      {selectModal && (
        <RoutineManageSelectModal
          routine={currentRoutine}
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
    paddingBottom: 30,
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
