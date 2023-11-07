import {Pressable, StyleSheet, Text, View} from 'react-native';
import {falseColor, trueColor} from '../style/color';
import StartModal from './modal/StartModal';
import {IRoutine} from '../interface/IRoutine';
import {useEffect, useState} from 'react';
import useModal from '../hooks/useModal';

type Props = {
  routine: IRoutine;
  closeModal: () => void;
};

export default function RecordViewModalButtons({routine, closeModal}: Props) {
  const {openModal, handleOpenModal, handleCloseModal} = useModal();

  useEffect(() => {
    return () => closeModal();
  }, []);

  return (
    <View style={styles.container}>
      <Pressable
        style={{overflow: 'hidden', borderRadius: 10}}
        onPress={closeModal}>
        <Text style={styles.prev}>취소</Text>
      </Pressable>
      <Pressable
        style={{overflow: 'hidden', borderRadius: 10}}
        onPress={handleOpenModal}>
        <Text style={styles.start}>시작</Text>
      </Pressable>
      <StartModal
        routine={routine!}
        onView={openModal}
        onCloseView={handleCloseModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 10,
  },
  prev: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    color: 'white',
    backgroundColor: falseColor,
    borderWidth: 1,
    borderColor: falseColor,
  },
  start: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    color: 'white',
    backgroundColor: trueColor,
    borderWidth: 1,
    borderColor: trueColor,
  },
});
