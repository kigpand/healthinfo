import {StyleSheet, View} from 'react-native';
import CategoryManageButton from './buttons/CategoryManageButton';
import {useState} from 'react';
import AddCategoryModal from './modal/AddCategoryModal';
import {Category} from '../interface/IRoutine';
import UpdateCategoryModal from './modal/UpdateCategoryModal';
import CategoryListModal from './modal/CategoryListModal';

export default function CategoryButtons() {
  const [onAddCategory, setOnAddCategory] = useState<boolean>(false);
  const [categorySelectModal, setCategorySelectModal] = useState<boolean>(false);
  const [onUpdateCategory, setOnUpdateCategory] = useState<boolean>(false);
  const [onRemoveCategory, setOnRemoveCategory] = useState<boolean>(false);
  const [category, setCategory] = useState<Category | null>(null);

  function handleUpdateModal(cate: Category) {
    setCategory(cate);
    setCategorySelectModal(false);
    setOnUpdateCategory(true);
  }

  return (
    <View style={styles.container}>
      <CategoryManageButton text="카테고리 추가" onPress={() => setOnAddCategory(true)} />
      <CategoryManageButton text="카테고리 수정" onPress={() => setCategorySelectModal(true)} />
      <CategoryManageButton text="카테고리 삭제" onPress={() => console.log('삭제')} />
      <CategoryListModal categorySelectModal={categorySelectModal} handleCloseModal={handleUpdateModal} />
      {onAddCategory && (
        <AddCategoryModal onAddCategoryModal={onAddCategory} handleCloseModal={() => setOnAddCategory(false)} />
      )}
      {onUpdateCategory && (
        <UpdateCategoryModal
          onUpdateCategoryModal={onUpdateCategory}
          handleCloseModal={() => setOnUpdateCategory(false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    width: '80%',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
