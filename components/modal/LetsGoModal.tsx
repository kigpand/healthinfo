import {Modal, StyleSheet, Text, View} from 'react-native';
import {btnBorderColor, buttonColor, falseColor} from '../../style/color';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import BlueButton from '../buttons/BlueButton';
import GreenButton from '../buttons/GreenButton';
import RedButton from '../buttons/RedButton';

type Props = {
  onLetsGoModal: boolean;
  closeLetsGoModal: () => void;
};

export default function LetsGoModal({onLetsGoModal, closeLetsGoModal}: Props) {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function handleMoveToLoadPrevRoutine() {
    nav.navigate('LoadPrevRoutine');
    closeLetsGoModal();
  }

  function handleNewExerciseBtn() {
    nav.navigate('SetNewDataTitle');
    closeLetsGoModal();
  }

  return (
    <Modal animationType="fade" transparent={false} visible={onLetsGoModal} presentationStyle="formSheet">
      <View style={styles.modal}>
        <Text style={styles.title}>어떤 방식으로 진행할까요?</Text>
        <BlueButton text="저장된 루틴 불러오기" onPress={handleMoveToLoadPrevRoutine} />
        <GreenButton text="새로 등록하기" onPress={handleNewExerciseBtn} />
        <View style={styles.close}>
          <RedButton text="이전" onPress={closeLetsGoModal} />
        </View>
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
  close: {
    position: 'absolute',
    bottom: 20,
  },
});
