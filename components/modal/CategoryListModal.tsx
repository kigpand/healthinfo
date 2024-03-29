import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {borderColor, buttonColor} from '../../style/color';
import GreenButton from '../buttons/GreenButton';
import {useCategoryQuery} from '../../query/useCategoryQuery';

type Props = {
  categorySelectModal: boolean;
  handleCloseModal: () => void;
  handleClickCategoryButton: (cate: string) => void;
};

export default function CategoryListModal({categorySelectModal, handleCloseModal, handleClickCategoryButton}: Props) {
  const {category, isError, isLoading} = useCategoryQuery();

  if (isLoading)
    return (
      <View>
        <Text>loading</Text>
      </View>
    );

  return (
    <Modal animationType="fade" transparent={false} visible={categorySelectModal} presentationStyle="formSheet">
      <View style={styles.container}>
        <Text style={styles.title}>어떤 카테고리를 선택하시겠습니까?</Text>
        <View style={styles.body}>
          {category!.map((cate, i) => {
            return (
              <Pressable style={styles.button} onPress={() => handleClickCategoryButton(cate.category)} key={i}>
                <Text style={styles.text}>{cate.category}</Text>
              </Pressable>
            );
          })}
        </View>
        <View style={{position: 'absolute', bottom: 20}}>
          <GreenButton text="이전" onPress={handleCloseModal} />
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    marginTop: 200,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 10,
    width: '49%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: buttonColor,
    borderColor: borderColor,
    borderRadius: 8,
    borderWidth: 1,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
