import {Pressable, StyleSheet, Text, View} from 'react-native';
import {falseColor, trueColor} from '../style/color';
import StartModal from './modal/StartModal';
import {IRoutine} from '../interface/IRoutine';
import {useState} from 'react';

type Props = {
  routine: IRoutine;
  closeModal: () => void;
};

export default function RecordViewModalButtons({routine, closeModal}: Props) {
  const [onView, setOnView] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <Pressable
        style={{overflow: 'hidden', borderRadius: 10}}
        onPress={closeModal}>
        <Text style={styles.prev}>취소</Text>
      </Pressable>
      <Pressable
        style={{overflow: 'hidden', borderRadius: 10}}
        onPress={() => setOnView(true)}>
        <Text style={styles.start}>시작</Text>
      </Pressable>
      <StartModal
        routine={routine!}
        onView={onView}
        onCloseView={() => setOnView(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 10,
  },
  prev: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    color: 'white',
    backgroundColor: falseColor,
    borderWidth: 1,
    borderColor: falseColor,
  },
  start: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    color: 'white',
    backgroundColor: trueColor,
    borderWidth: 1,
    borderColor: trueColor,
  },
});
