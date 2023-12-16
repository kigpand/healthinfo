import {Pressable, StyleSheet, Text, View} from 'react-native';
import useExercise from '../store/useExercise';
import BlueButton from '../components/buttons/BlueButton';
import {mainColor} from '../style/color';
import RedButton from '../components/buttons/RedButton';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RoutineManageUpdateModal from '../components/modal/RoutineManageUpdateModal';
import {useState} from 'react';
import {Category, IRoutine, IRoutineData} from '../interface/IRoutine';
import RoutineManageItemModal from '../components/modal/RoutineManageItemModal';

interface IUpdateModal {
  modal: boolean;
  type: '제목' | '카테고리';
}

interface IRoutineItemModal {
  modal: boolean;
  routine: IRoutineData[];
}

export default function RoutineManageUpdate() {
  const {updateRoutine, list, setList} = useExercise();
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  if (!updateRoutine)
    return (
      <View>
        <Text>없는 지원입니다.</Text>
      </View>
    );

  const [routine, setRoutine] = useState<IRoutine>(updateRoutine);
  const [itemModal, setItemModal] = useState<IRoutineItemModal>({
    modal: false,
    routine: updateRoutine.routine,
  });
  const [updateModal, setUpdateModal] = useState<IUpdateModal>({
    modal: false,
    type: '제목',
  });

  function handleUpdateRoutine(type: '제목' | '카테고리', data: string | Category) {
    if (type === '제목') {
      setRoutine({...routine, title: data});
    }
    if (type === '카테고리') {
      setRoutine({...routine, category: data as Category});
    }
  }

  function handleTitleUpdateButton() {
    setUpdateModal({modal: true, type: '제목'});
  }

  function handleCategoryUpdateButton() {
    setUpdateModal({modal: true, type: '카테고리'});
  }

  function handleRoutineUpdateButton() {
    setItemModal({modal: true, routine: updateRoutine!.routine});
  }

  function handleItemUpdate(routineData: IRoutineData[]) {
    setRoutine({...routine, routine: routineData});
    setItemModal({...itemModal, modal: false});
  }

  function handleUpdateButton() {
    const updateRoutine = list.map((routineList: IRoutine) => {
      if (routineList.id === routine.id) return routine;
      return routineList;
    });
    setList(updateRoutine);
    nav.navigate('Admin');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.main}>선택한 루틴은 {routine.title}입니다</Text>
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
        <BlueButton text="수정" onPress={handleUpdateButton} />
      </View>
      <RoutineManageUpdateModal
        handleUpdateRoutine={handleUpdateRoutine}
        updateModal={updateModal.modal}
        handleCloseModal={() => setUpdateModal({...updateModal, modal: false})}
        type={updateModal.type}
      />
      <RoutineManageItemModal
        routine={itemModal.routine}
        routineManageItemModal={itemModal.modal}
        handleItemUpdate={handleItemUpdate}
        handleCloseModal={() => setItemModal({...itemModal, modal: false})}
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
  main: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  title: {
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
