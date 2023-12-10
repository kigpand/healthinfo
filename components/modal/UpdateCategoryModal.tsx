import {Modal, StyleSheet, Text, View} from 'react-native';
import RedButton from '../buttons/RedButton';
import BlueButton from '../buttons/BlueButton';
import {useState} from 'react';

type Props = {
  onUpdateCategoryModal: boolean;
  handleCloseModal: () => void;
};

export default function UpdateCategoryModal({onUpdateCategoryModal, handleCloseModal}: Props) {
  const [updateText, onChangeUpdateText] = useState<string>('');

  function handleUpdateCategoryButton() {}

  return (
    <Modal animationType="fade" transparent={false} visible={onUpdateCategoryModal} presentationStyle="formSheet">
      <View style={styles.container}>
        <Text style={styles.title}>등록할 카테고리명을 입력해주세요</Text>
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
  btns: {
    flexDirection: 'row',
    gap: 10,
  },
});
