import {Pressable, StyleSheet, Text, View} from 'react-native';
import useExercise from '../store/useExercise';
import BlueButton from '../components/buttons/BlueButton';
import {mainColor} from '../style/color';
import RedButton from '../components/buttons/RedButton';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RoutineManageUpdateModal from '../components/modal/RoutineManageUpdateModal';
import {useState} from 'react';
import {Category, IRoutine} from '../interface/IRoutine';

export default function RoutineManageUpdate() {
  const {updateRoutine} = useExercise();
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  if (!updateRoutine) return nav.navigate('Admin');

  const [routine, setRoutine] = useState<IRoutine>(updateRoutine);
  const [updateModal, setUpdateModal] = useState<boolean>(true);

  function handleUpdateRoutine(type: '제목' | '카테고리', data: string | Category) {
    if (type === '제목') {
      setRoutine({...routine, title: data});
    }
    if (type === '카테고리') {
      setRoutine({...routine, category: data as Category});
    }
  }

  function handleTitleUpdateButton() {
    console.log(updateRoutine?.title);
  }

  function handleCategoryUpdateButton() {
    console.log(updateRoutine?.category);
  }

  function handleRoutineUpdateButton() {
    console.log(updateRoutine?.routine);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>어떤 작업을 진행하시겠습니까?</Text>
      <Pressable style={styles.button} onPress={handleTitleUpdateButton}>
        <Text style={styles.buttonText}>제목 수정</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleCategoryUpdateButton}>
        <Text style={styles.buttonText}>카테고리 수정</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleRoutineUpdateButton}>
        <Text style={styles.buttonText}>루틴 수정</Text>
      </Pressable>
      <View style={styles.footer}>
        <RedButton text="취소" onPress={() => nav.navigate('Admin')} />
        <BlueButton text="수정" onPress={() => console.log('수정')} />
      </View>
      <RoutineManageUpdateModal
        handleUpdateRoutine={handleUpdateRoutine}
        updateModal={updateModal}
        handleCloseModal={() => setUpdateModal(false)}
        type="제목"
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  button: {
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 40,
    backgroundColor: mainColor,
    borderColor: mainColor,
    borderWidth: 1,
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  footer: {
    flexDirection: 'row',
    gap: 10,
    position: 'absolute',
    bottom: 20,
  },
});
