import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState} from 'react';
import {mainColor} from '../style/color';
import {buttonColor} from '../style/color';
import {borderColor} from '../style/color';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function NewData() {
  const [text, onChangeText] = useState<string>('');
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function onSubmit() {
    if (text === '') return;
    nav.navigate('NewDataMain', {title: text});
  }

  return (
    <View style={style.container}>
      <Text style={style.title}>루틴명을 입력해주세요</Text>
      <TextInput
        style={style.input}
        placeholder="루틴"
        value={text}
        onChangeText={onChangeText}
      />
      {text !== '' && (
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    width: 200,
    height: 30,
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
