import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from 'react';
import {mainColor} from '../style/color';
import SetNewDataCategoryModal from '../components/modal/SetNewDataCategoryModal';
import BlueButton from '../components/buttons/BlueButton';

export default function SetNewDataTitle() {
  const [title, onChangeTitle] = useState<string>('');
  const [isCategoryModal, setIsCategoryModal] = useState<boolean>(false);

  return (
    <View style={style.container}>
      <Text style={style.title}>루틴명을 입력해주세요</Text>
      <TextInput style={style.input} placeholder="루틴" value={title} onChangeText={onChangeTitle} />
      {title !== '' && <BlueButton text="카테고리 선택하기" onPress={() => setIsCategoryModal(true)} />}
      <SetNewDataCategoryModal onView={isCategoryModal} closeView={() => setIsCategoryModal(false)} title={title} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: mainColor,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    width: 200,
    height: 30,
    marginBottom: 20,
  },
});
