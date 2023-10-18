import {useState} from 'react';
import {Modal, StyleSheet, Text} from 'react-native';
import NewDataModalList from '../NewDataModalList';

type Props = {
  onView: boolean;
  closeView: () => void;
};

export default function NewDataModal({onView, closeView}: Props) {
  const [category, onChangeCategory] = useState<string>('');
  const [kg, onChangeKg] = useState<string>('');
  const [set, onChangeSet] = useState<string>('');
  const [title, onChangeTitle] = useState<string>('');

  return (
    <Modal animationType="slide" transparent={false} visible={onView}>
      <NewDataModalList label={category} onChangeText={onChangeCategory} />
      <NewDataModalList label={kg} onChangeText={onChangeKg} />
      <NewDataModalList label={set} onChangeText={onChangeSet} />
      <NewDataModalList label={title} onChangeText={onChangeTitle} />
      <Text onPress={closeView}>닫기</Text>
    </Modal>
  );
}

const styles = StyleSheet.create({});
