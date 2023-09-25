import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IRoutine} from '../interface/IRoutine';
import {useEffect, useState} from 'react';
import {buttonColor} from '../style/color';

type Props = {
  routine: IRoutine | null;
  count: number;
  onAddCount: () => void;
  onMinusCount: () => void;
  startTimer: () => void;
};

export default function SetItemMain({
  routine,
  count,
  onAddCount,
  onMinusCount,
  startTimer,
}: Props) {
  const [setNum, setSetNum] = useState<string>('0');

  function onNextBtn() {
    setSetNum('0');
    onAddCount();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{routine?.title}</Text>
      <Text style={styles.kg}>{routine?.kg}</Text>
      <Text style={styles.set}>{routine?.set}set</Text>
      <View style={styles.doing}>
        <Text>몇 세트 진행하셨나요?</Text>
        <TextInput
          style={styles.input}
          placeholder="set"
          keyboardType="number-pad"
          onChangeText={newText => setSetNum(newText)}
          defaultValue={setNum}
        />
        <TouchableOpacity onPress={startTimer} style={styles.rest}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>휴식</Text>
        </TouchableOpacity>
      </View>
      {count !== 0 && (
        <TouchableOpacity style={styles.prev} onPress={onMinusCount}>
          <Text style={styles.prevText}>이전</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.next} onPress={onNextBtn}>
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
  kg: {
    marginVertical: 10,
    fontSize: 20,
  },
  set: {},
  doing: {
    position: 'absolute',
    bottom: 100,
  },
  input: {
    marginTop: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  rest: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: 'skyblue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  prev: {
    backgroundColor: buttonColor,
    position: 'absolute',
    left: 30,
    top: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  prevText: {
    color: 'white',
  },
  next: {
    backgroundColor: buttonColor,
    position: 'absolute',
    right: 30,
    top: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 12,
  },
  nextText: {
    color: 'white',
  },
});
