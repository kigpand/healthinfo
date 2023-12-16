import {useState} from 'react';
import {Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import BlueButton from '../buttons/BlueButton';
import RedButton from '../buttons/RedButton';
import {Category} from '../../interface/IRoutine';

type Props = {
  updateModal: boolean;
  handleUpdateRoutine: (type: '제목' | '카테고리', data: string | Category) => void;
  handleCloseModal: () => void;
  type: '제목' | '카테고리';
};

const select = [
  {label: '등', value: '등'},
  {label: '어깨', value: '어깨'},
  {label: '하체', value: '하체'},
  {label: '팔', value: '팔'},
  {label: '가슴', value: '가슴'},
];

function UpdateTitleContainer({onChangeTitle}: {onChangeTitle: any}) {
  return <TextInput style={styles.title} onChangeText={onChangeTitle} />;
}

function CategoryContainer({onChangeCategory}: {onChangeCategory: any}) {
  return (
    <View style={styles.category}>
      <RNPickerSelect
        placeholder={{
          label: '카테고리를 선택해주세요',
          value: '',
        }}
        onValueChange={onChangeCategory}
        items={select}
      />
    </View>
  );
}

export default function RoutineManageUpdateModal({updateModal, handleUpdateRoutine, handleCloseModal, type}: Props) {
  const [category, onChangeCategory] = useState<string>('');
  const [title, onChangeTitle] = useState<string>('');

  function handleUpdateModal() {
    if (title !== '') handleUpdateRoutine('제목', title);
    if (category !== '') handleUpdateRoutine('카테고리', category);
    handleCloseModal();
  }

  return (
    <Modal animationType="fade" transparent={false} visible={updateModal} presentationStyle="formSheet">
      <View style={styles.container}>
        <Text style={styles.header}>수정할 {type}을 입력해주세요</Text>
        {type === '카테고리' ? (
          <CategoryContainer onChangeCategory={onChangeCategory} />
        ) : (
          <UpdateTitleContainer onChangeTitle={onChangeTitle} />
        )}
        <View style={styles.buttons}>
          <RedButton text="취소" onPress={handleCloseModal} />
          <BlueButton text="완료" onPress={handleUpdateModal} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    height: '100%',
    alignItems: 'center',
  },
  header: {
    marginBottom: 100,
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttons: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    gap: 10,
  },
  category: {
    backgroundColor: 'white',
    width: 200,
    height: 30,
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: 'center',
  },
  title: {
    width: 200,
    height: 30,
    borderRadius: 4,
    borderWidth: 1,
  },
});
