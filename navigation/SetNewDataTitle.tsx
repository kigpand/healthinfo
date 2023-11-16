import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from 'react';
import {mainColor} from '../style/color';
import {buttonColor} from '../style/color';
import {borderColor} from '../style/color';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RNPickerSelect from 'react-native-picker-select';

const select = [
  {label: '등', value: '등'},
  {label: '어깨', value: '어깨'},
  {label: '하체', value: '하체'},
  {label: '팔', value: '팔'},
  {label: '가슴', value: '가슴'},
];

export default function SetNewDataTitle() {
  const [title, onChangeTitle] = useState<string>('');
  const [category, onChangeCategory] = useState<string>('');
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function onSubmit() {
    if (title === '' || category === '') return;
    nav.navigate('AddNewData', {title, category});
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>루틴명을 입력해주세요</Text>
      <TextInput
        style={style.input}
        placeholder="루틴"
        value={title}
        onChangeText={onChangeTitle}
      />
      <Text style={style.title}>카테고리를 설정해주세요</Text>
      <View style={style.category}>
        <RNPickerSelect
          placeholder="카테고리"
          onValueChange={onChangeCategory}
          items={select}
        />
      </View>
      {category !== '' && title !== '' && (
        <Pressable style={style.button} onPress={onSubmit}>
          <Text style={{color: 'white'}}>등록</Text>
        </Pressable>
      )}
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
  category: {
    borderWidth: 1,
    backgroundColor: 'white',
    width: 150,
    height: 30,
    borderRadius: 4,
    justifyContent: 'center',
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
  button: {
    backgroundColor: buttonColor,
    borderWidth: 1,
    borderColor: borderColor,
    paddingHorizontal: 15,
    paddingVertical: 8,
    position: 'absolute',
    bottom: 20,
    borderRadius: 8,
  },
});
