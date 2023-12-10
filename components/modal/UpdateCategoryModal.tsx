import {Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import RedButton from '../buttons/RedButton';
import BlueButton from '../buttons/BlueButton';
import {useState} from 'react';

type Props = {
  onUpdateCategoryModal: boolean;
  handleCloseModal: () => void;
};

export default function UpdateCategoryModal({onUpdateCategoryModal, handleCloseModal}: Props) {
  const [updateText, onChangeUpdateText] = useState<string>('');

  function handleUpdateCategoryButton() {
    console.log(updateText);
    handleCloseModal();
  }

  return (
    <Modal animationType="fade" transparent={false} visible={onUpdateCategoryModal} presentationStyle="formSheet">
      <View style={styles.container}>
        <Text style={styles.title}>수정할 카테고리명을 입력해주세요</Text>
        <TextInput style={styles.input} onChangeText={onChangeUpdateText} />
        <View style={styles.btns}>
          <RedButton text="취소" onPress={handleCloseModal} />
          <BlueButton text="수정" onPress={handleUpdateCategoryButton} />
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
