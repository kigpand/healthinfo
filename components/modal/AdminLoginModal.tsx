import {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {mainColor} from '../../style/color';

type Props = {
  handleCloseModal: () => void;
};

export default function AdminLoginModal({handleCloseModal}: Props) {
  const [id, onChangeID] = useState<string>('');
  const [pw, onChangePw] = useState<string>('');
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function handleLogin() {
    handleCloseModal();
    nav.navigate('Admin');
    // if (id === 'kigpand' && pw === '950225') return nav.navigate('Admin');
  }

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Pressable style={styles.close}>
          <Text>닫기</Text>
        </Pressable>
        <Text style={styles.title}>관리자 계정을 입력해주세요.</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeID}
          placeholder="id"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePw}
          placeholder="password"
        />
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text>로그인</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    position: 'relative',
    width: '80%',
    padding: 20,
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 30,
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 10,
  },
  button: {
    width: '80%',
    height: 30,
    borderRadius: 4,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: mainColor,
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
