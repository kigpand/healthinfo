import {useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import NewDataModalList from '../NewDataModalList';
import {IRoutineData} from '../../interface/IRoutine';
import RedButton from '../buttons/RedButton';
import BlueButton from '../buttons/BlueButton';

type Props = {
  onView: boolean;
  getRoutineArr: (routine: IRoutineData) => void;
  closeView: () => void;
};

export default function NewDataModal({onView, getRoutineArr, closeView}: Props) {
  const [kg, onChangeKg] = useState<string>('');
  const [set, onChangeSet] = useState<string>('');
  const [title, onChangeTitle] = useState<string>('');

  function onAdd() {
    getRoutineArr({kg: Number(kg), set: Number(set), title});
    closeView();
  }

  return (
    <Modal animationType="slide" transparent={false} visible={onView}>
      <View style={styles.container}>
        <Text style={styles.title}>어떤 루틴을 등록하시겠습니까?</Text>
        <NewDataModalList label={'kg'} onChangeText={onChangeKg} />
        <NewDataModalList label={'세트'} onChangeText={onChangeSet} />
        <NewDataModalList label={'명칭'} onChangeText={onChangeTitle} />
        <View style={styles.buttons}>
          <RedButton text="닫기" onPress={closeView} />
          <BlueButton text="등록" onPress={onAdd} />
        </View>
      </View>
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
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  buttons: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 10,
  },
});
