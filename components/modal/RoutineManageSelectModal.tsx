import {StyleSheet, Text, View} from 'react-native';
import RedButton from '../buttons/RedButton';
import BlueButton from '../buttons/BlueButton';
import GreenButton from '../buttons/GreenButton';

type Props = {
  handleRoutineSelectModal: (type: '수정' | '삭제') => void;
  closeModal: () => void;
};

export default function RoutineManageSelectModal({handleRoutineSelectModal, closeModal}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>어떤 작업을 진행하시겠습니까?</Text>
      <View style={styles.buttons}>
        <RedButton text="삭제" onPress={() => handleRoutineSelectModal('삭제')} />
        <BlueButton text="수정" onPress={() => handleRoutineSelectModal('수정')} />
        <GreenButton text="이전" onPress={closeModal} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    zIndex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 150,
    fontSize: 20,
    fontWeight: 'bold',
  },

  buttons: {
    marginTop: 50,
    gap: 10,
  },
});
