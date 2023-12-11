import {FlatList, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {prevData} from '../../data/data';
import {borderColor, buttonColor} from '../../style/color';
import RoutineManageSelectModal from './RoutineManageSelectModal';
import {useState} from 'react';

type Props = {
  routineManageModal: boolean;
  handleRoutineModalButton: (type: '수정' | '삭제') => void;
};

export default function RoutineManageModal({routineManageModal, handleRoutineModalButton}: Props) {
  const [selectModal, setSelectModal] = useState<boolean>(true);

  function handleRoutineSelectModal(type: '수정' | '삭제') {
    setSelectModal(false);
    handleRoutineModalButton(type);
  }

  return (
    <Modal animationType="fade" transparent={false} visible={routineManageModal}>
      <View style={styles.container}>
        <Text style={styles.title}>작업할 루틴을 선택해주세요</Text>
        <FlatList
          data={prevData}
          renderItem={item => (
            <Pressable style={styles.button} onPress={() => setSelectModal(true)}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>{item.item.title}</Text>
            </Pressable>
          )}
        />
      </View>
      {selectModal && (
        <RoutineManageSelectModal
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
