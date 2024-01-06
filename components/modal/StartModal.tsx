import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';
import {Modal, View, Text, StyleSheet, TextInput} from 'react-native';
import {borderColor, buttonColor} from '../../style/color';
import useExercise from '../../store/useExercise';
import {IRoutine} from '../../interface/IRoutine';
import RedButton from '../buttons/RedButton';
import BlueButton from '../buttons/BlueButton';

type Props = {
  routine: IRoutine;
  onView: boolean;
  onCloseView: () => void;
};

export default function StartModal({routine, onView, onCloseView}: Props) {
  const [time, setTime] = useState<number>(0);
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {setCurrentRoutine, setTimer} = useExercise();
  const onSuccess = () => {
    setCurrentRoutine(routine);
    setTimer(time);
    nav.navigate('Exercise');
    onCloseView();
  };

  return (
    <Modal animationType="fade" transparent={false} visible={onView} presentationStyle="formSheet">
      <View style={styles.header}>
        <Text style={styles.timerTitle}>쉬는 시간 입력</Text>
      </View>
      <View style={styles.modal}>
        <View style={styles.timer}>
          <TextInput
            style={styles.timerInput}
            placeholder="timer"
            keyboardType="number-pad"
            onChangeText={newText => setTime(Number(newText))}
          />
        </View>
        <View style={styles.btns}>
          <RedButton text="취소" onPress={onCloseView} />
          <BlueButton text="설정완료" onPress={onSuccess} />
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
  },
  header: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: buttonColor,
    position: 'absolute',
    paddingVertical: 10,
    top: 0,
  },
  timerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
  },
  timer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerInput: {
    borderColor: buttonColor,
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 18,
    width: 200,
    height: 40,
  },
  btns: {
    flexDirection: 'row',
    marginTop: 20,
    columnGap: 10,
  },
});
