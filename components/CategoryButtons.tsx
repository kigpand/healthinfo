import {StyleSheet, View} from 'react-native';
import CategoryManageButton from './buttons/CategoryManageButton';
import {useState} from 'react';
import AddCategoryModal from './modal/AddCategoryModal';
import UpdateCategoryModal from './modal/UpdateCategoryModal';
import CategoryListModal from './modal/CategoryListModal';
import RemoveCategoryModal from './modal/RemoveCategoryModal';

type CategorySelectModal = {
  isView: boolean;
  categorySelectType: 'update' | 'remove';
};

export default function CategoryButtons() {
  const [onAddCategory, setOnAddCategory] = useState<boolean>(false);
  const [categorySelectModal, setCategorySelectModal] = useState<CategorySelectModal>({
    isView: false,
    categorySelectType: 'update',
  });
  const [onUpdateCategory, setOnUpdateCategory] = useState<boolean>(false);
  const [onRemoveCategory, setOnRemoveCategory] = useState<boolean>(false);
  const [category, setCategory] = useState<string | null>(null);

  function handleUpdateModal(cate: string) {
    setCategory(cate);
    setCategorySelectModal({isView: false, categorySelectType: 'update'});
    setOnUpdateCategory(true);
  }

  function handleRemoveModal(cate: string) {
    setCategory(cate);
    setCategorySelectModal({isView: false, categorySelectType: 'remove'});
    setOnRemoveCategory(true);
  }

  return (
    <View style={styles.container}>
      <CategoryManageButton text="카테고리 추가" onPress={() => setOnAddCategory(true)} />
      <CategoryManageButton
        text="카테고리 수정"
        onPress={() => setCategorySelectModal({isView: true, categorySelectType: 'update'})}
      />
      <CategoryManageButton
        text="카테고리 삭제"
        onPress={() => setCategorySelectModal({isView: true, categorySelectType: 'remove'})}
      />
      <CategoryListModal
        categorySelectModal={categorySelectModal.isView}
        handleCloseModal={() => setCategorySelectModal({...categorySelectModal, isView: false})}
        handleClickCategoryButton={
          categorySelectModal.categorySelectType === 'update' ? handleUpdateModal : handleRemoveModal
        }
      />
      {onAddCategory && (
        <AddCategoryModal onAddCategoryModal={onAddCategory} handleCloseModal={() => setOnAddCategory(false)} />
      )}
      {onUpdateCategory && (
        <UpdateCategoryModal
          onUpdateCategoryModal={onUpdateCategory}
          handleCloseModal={() => setOnUpdateCategory(false)}
        />
      )}
      {onRemoveCategory && (
        <RemoveCategoryModal
          category={category!}
          onRemoveCategoryModal={onRemoveCategory}
          handleCloseModal={() => setOnRemoveCategory(false)}
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
