import {Pressable, StyleSheet, Text, View} from 'react-native';
import {mainColor} from '../style/color';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function Admin() {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>관리자 페이지</Text>
      <Pressable
        style={styles.button}
        onPress={() => nav.navigate('CategoryManage')}>
        <Text style={{fontWeight: 'bold'}}>카테고리 관리</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={{fontWeight: 'bold'}}>루틴 관리</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={{fontWeight: 'bold'}}>계정 추가</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 0.5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    marginBottom: 10,
    borderRadius: 8,
    width: '50%',
    height: 50,
    backgroundColor: mainColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
