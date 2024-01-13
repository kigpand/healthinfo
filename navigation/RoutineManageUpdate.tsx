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
import {useMutation, useQueryClient} from 'react-query';
import {updateRoutineService} from '../service/routineService';

interface IUpdateModal {
  modal: boolean;
  type: '제목' | '카테고리';
}

export default function RoutineManageUpdate() {
  const queryClient = useQueryClient();
  const {updateRoutine} = useExercise();
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [currentRoutine, setCurrentRoutine] = useState<IRoutine>(updateRoutine!);
  const [itemModal, setItemModal] = useState<boolean>(false);
  const [updateModal, setUpdateModal] = useState<IUpdateModal>({
    modal: false,
    type: '제목',
  });
  const {mutate} = useMutation(updateRoutineService, {
    onSuccess: () => {
      console.log('success');
      queryClient.invalidateQueries();
      nav.navigate('Admin');
    },
  });

  function handleUpdateRoutine(type: '제목' | '카테고리', data: string | Category) {
    if (type === '제목') {
      setCurrentRoutine({...currentRoutine, title: data});
    }
    if (type === '카테고리') {
      setCurrentRoutine({...currentRoutine, category: data as Category});
    }
  }

  function handleTitleUpdateButton() {
    setUpdateModal({modal: true, type: '제목'});
  }

  function handleCategoryUpdateButton() {
    setUpdateModal({modal: true, type: '카테고리'});
  }

  function handleItemUpdate(routineData: IRoutineData[]) {
    setCurrentRoutine({...currentRoutine, routine: routineData});
    setItemModal(false);
  }

  function handleUpdateButton() {
    console.log(currentRoutine);
    mutate(currentRoutine);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.main}>선택한 루틴은 {currentRoutine.title}입니다</Text>
      <Text style={styles.title}>어떤 작업을 진행하시겠습니까?</Text>
      <Pressable style={styles.button} onPress={handleTitleUpdateButton}>
        <Text style={styles.buttonText}>제목 수정</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleCategoryUpdateButton}>
        <Text style={styles.buttonText}>카테고리 수정</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => setItemModal(true)}>
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
        routine={currentRoutine.routine}
        routineManageItemModal={itemModal}
        handleItemUpdate={handleItemUpdate}
        handleCloseModal={() => setItemModal(false)}
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
