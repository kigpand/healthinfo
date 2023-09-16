import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';
import StartModal from './modal/StartModal';

type Props = {
  prevData: any;
};

export default function PrevButton({prevData}: Props) {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [onView, setOnView] = useState<boolean>(false);

  function onStart() {
    setOnView(true);
  }

  function onCancle() {
    nav.navigate('Home');
  }

  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button}>
        <Text onPress={onStart}>시작</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.cancle}>
        <Text onPress={onCancle}>취소</Text>
      </TouchableOpacity>
      <StartModal
        prevData={prevData}
        onView={onView}
        onCloseView={() => setOnView(false)}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#32a6ff',
    borderWidth: 1,
    borderColor: '#32a6ff',
    borderRadius: 8,
  },
  cancle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
  },
});
