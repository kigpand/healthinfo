import {useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import NewDataModalList from '../NewDataModalList';
import {falseColor} from '../../style/color';
import {trueColor} from '../../style/color';
import {IRoutineData} from '../../interface/IRoutine';

type Props = {
  onView: boolean;
  getRoutineArr: (routine: IRoutineData) => void;
  closeView: () => void;
};

export default function NewDataModal({
  onView,
  getRoutineArr,
  closeView,
}: Props) {
  const [kg, onChangeKg] = useState<string>('');
  const [set, onChangeSet] = useState<string>('');
  const [title, onChangeTitle] = useState<string>('');

  function onAdd() {
    getRoutineArr({kg, set: Number(set), title});
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
          <Text style={styles.cancle} onPress={closeView}>
            닫기
          </Text>
          <Text style={styles.add} onPress={onAdd}>
            등록
          </Text>
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
  cancle: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: falseColor,
    color: 'white',
  },
  add: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: trueColor,
    color: 'white',
  },
});
