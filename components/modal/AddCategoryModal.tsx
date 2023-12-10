import {useState} from 'react';
import {Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import BlueButton from '../buttons/BlueButton';
import RedButton from '../buttons/RedButton';

type Props = {
  onAddCategoryModal: boolean;
  handleCloseModal: () => void;
};

export default function AddCategoryModal({onAddCategoryModal, handleCloseModal}: Props) {
  const [category, onChangeCategory] = useState<string>('');

  function handleAddCategoryButton() {
    console.log(category);
    handleCloseModal();
  }

  return (
    <Modal animationType="fade" transparent={false} visible={onAddCategoryModal} presentationStyle="formSheet">
      <View style={styles.container}>
        <Text style={styles.title}>등록할 카테고리명을 입력해주세요</Text>
        <TextInput style={styles.input} onChangeText={onChangeCategory} />
        <View style={styles.btns}>
          <RedButton text="취소" onPress={handleCloseModal} />
          <BlueButton text="등록" onPress={handleAddCategoryButton} />
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
    fontWeight: 'bold',
    fontSize: 20,
  },
  input: {
    marginTop: 50,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'black',
    width: 200,
    height: 30,
    borderRadius: 4,
  },
  btns: {
    flexDirection: 'row',
    gap: 10,
  },
});
