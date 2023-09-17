import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useState} from 'react';
import {Modal, View, Text, StyleSheet, TextInput} from 'react-native';
import {borderColor} from '../../style/color';
import useExercise from '../../store/useExercise';

type Props = {
  prevData: any;
  onView: boolean;
  onCloseView: () => void;
};

export default function StartModal({prevData, onView, onCloseView}: Props) {
  const [time, setTime] = useState<string>('0');
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {setRoutine} = useExercise();
  const onSuccess = () => {
    setRoutine(prevData, time);
    nav.navigate('Set');
    onCloseView();
  };

  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={onView}
      presentationStyle="formSheet">
      <View style={styles.header}>
        <Text style={styles.timerTitle}>쉬는 시간 입력</Text>
      </View>
      <View style={styles.modal}>
        <View style={styles.timer}>
          <TextInput
            style={styles.timerInput}
            placeholder="timer"
            keyboardType="number-pad"
            onChangeText={newText => setTime(newText)}
          />
        </View>
        <View style={styles.btns}>
          <Text style={styles.cancle} onPress={onCloseView}>
            취소
          </Text>
          <Text style={styles.start} onPress={onSuccess}>
            설정완료
          </Text>
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
    backgroundColor: borderColor,
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
    borderColor: borderColor,
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
  cancle: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'red',
    overflow: 'hidden',
  },
  start: {
    backgroundColor: 'skyblue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'skyblue',
    overflow: 'hidden',
  },
});
