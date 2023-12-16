import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NewDataModalList from '../NewDataModalList';
import RedButton from '../buttons/RedButton';
import BlueButton from '../buttons/BlueButton';
import {IRoutineData} from '../../interface/IRoutine';

type Props = {
  handleAddRoutineBtn: (data: IRoutineData) => void;
  handleCloseModal: () => void;
};

export default function AddRoutineDataModal({handleAddRoutineBtn, handleCloseModal}: Props) {
  const [title, onChangeTitle] = useState<string>('');
  const [kg, onChangeKg] = useState<string>('');
  const [set, onChangeSet] = useState<string>('');

  function handleAddButton() {
    handleAddRoutineBtn({title, kg, set: Number(set)});
    handleCloseModal();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>추가할 운동을 입력해주세요</Text>
      <NewDataModalList label={'명칭'} onChangeText={onChangeTitle} />
      <NewDataModalList label={'kg'} onChangeText={onChangeKg} />
      <NewDataModalList label={'세트'} onChangeText={onChangeSet} />
      <View style={styles.buttons}>
        <RedButton text="취소" onPress={handleCloseModal} />
        <BlueButton text="등록" onPress={handleAddButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 50,
    marginBottom: 100,
  },
  buttons: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    gap: 10,
  },
});
