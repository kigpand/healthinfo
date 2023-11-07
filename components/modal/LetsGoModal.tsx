import {Modal, StyleSheet, Text, View} from 'react-native';
import {btnBorderColor, buttonColor, falseColor} from '../../style/color';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type Props = {
  onLetsGoModal: boolean;
  closeLetsGoModal: () => void;
};

export default function LetsGoModal({onLetsGoModal, closeLetsGoModal}: Props) {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function onMoveToLoadPrevRoutine() {
    nav.navigate('LoadPrevRoutine');
    closeLetsGoModal();
  }

  function addNewExercise() {
    nav.navigate('SetNewDataTitle');
    closeLetsGoModal();
  }

  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={onLetsGoModal}
      presentationStyle="formSheet">
      <View style={styles.modal}>
        <Text style={styles.title}>어떤 방식으로 진행할까요?</Text>
        <Text style={styles.list} onPress={onMoveToLoadPrevRoutine}>
          저장된 루틴 불러오기
        </Text>
        <Text style={styles.new} onPress={addNewExercise}>
          새로 등록하기
        </Text>
        <Text style={styles.close} onPress={closeLetsGoModal}>
          이전
        </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#fffcd4',
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    marginBottom: 20,
  },
  list: {
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: buttonColor,
    fontWeight: 'bold',
    color: 'white',
    borderWidth: 1,
    borderColor: btnBorderColor,
  },
  new: {
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#72dd00',
    fontWeight: 'bold',
    color: 'white',
    borderWidth: 1,
    borderColor: '#1bff1b',
  },
  close: {
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: falseColor,
    color: 'white',
    borderWidth: 1,
    borderColor: '#ff3d8e',
    position: 'absolute',
    bottom: 20,
  },
});
