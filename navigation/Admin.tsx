import {Pressable, StyleSheet, Text, View} from 'react-native';
import {mainColor} from '../style/color';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';
import RoutineManageModal from '../components/modal/RoutineManageModal';

export default function Admin() {
  const [routineManageModal, setRoutineManageModal] = useState<boolean>(false);
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function handleRoutineModalButton(type: '수정' | '삭제') {
    setRoutineManageModal(false);
    if (type === '수정') {
      nav.navigate('RoutineManageUpdate');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>관리자 페이지</Text>
      <Pressable style={styles.button} onPress={() => nav.navigate('CategoryManage')}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>카테고리 관리</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => setRoutineManageModal(true)}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>루틴 관리</Text>
      </Pressable>
      <RoutineManageModal
        routineManageModal={routineManageModal}
        handleCloseModal={() => setRoutineManageModal(false)}
        handleRoutineModalButton={handleRoutineModalButton}
      />
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
    width: '70%',
    height: 50,
    backgroundColor: mainColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
