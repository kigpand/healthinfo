import {StyleSheet, View} from 'react-native';
import CategoryManageButton from './buttons/CategoryManageButton';
import {useState} from 'react';
import AddCategoryModal from './modal/AddCategoryModal';

export default function CategoryButtons() {
  const [onAddCategory, setOnAddCategory] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <CategoryManageButton text="카테고리 추가" onPress={() => setOnAddCategory(true)} />
      <CategoryManageButton text="카테고리 수정" onPress={() => console.log('수정')} />
      <CategoryManageButton text="카테고리 삭제" onPress={() => console.log('삭제')} />
      {onAddCategory && (
        <AddCategoryModal onAddCategoryModal={onAddCategory} handleCloseModal={() => setOnAddCategory(false)} />
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
