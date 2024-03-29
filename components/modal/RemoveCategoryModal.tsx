import {Modal, StyleSheet, Text, View} from 'react-native';
import RedButton from '../buttons/RedButton';
import BlueButton from '../buttons/BlueButton';
import {useCategoryQuery} from '../../query/useCategoryQuery';
import {useRoutineQuery} from '../../query/useRoutineQuery';

type Props = {
  category: string;
  onRemoveCategoryModal: boolean;
  handleCloseModal: () => void;
};

export default function RemoveCategoryModal({category, onRemoveCategoryModal, handleCloseModal}: Props) {
  const {deleteCategoryMutate} = useCategoryQuery();
  const {deleteRoutineByCategoryMutate} = useRoutineQuery();

  async function handleRemoveCategoryButton() {
    deleteCategoryMutate(category);
    deleteRoutineByCategoryMutate(category);
    handleCloseModal();
  }

  return (
    <Modal animationType="fade" transparent={false} visible={onRemoveCategoryModal} presentationStyle="formSheet">
      <View style={styles.container}>
        <Text style={styles.title}>정말 {category} 카테고리를 삭제하시겠습니까?</Text>
        <View style={styles.btns}>
          <RedButton text="취소" onPress={handleCloseModal} />
          <BlueButton text="삭제" onPress={handleRemoveCategoryButton} />
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
    marginTop: 30,
    flexDirection: 'row',
    gap: 10,
  },
});
