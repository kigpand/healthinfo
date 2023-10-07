import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {IRoutineData} from '../interface/IRoutine';
import {useState} from 'react';
import {buttonColor} from '../style/color';
import TimerCheckModal from './modal/TimerCheckModal';

type Props = {
  routine: IRoutineData | null;
  count: number;
  onAddCount: () => void;
  onMinusCount: () => void;
  startTimer: () => void;
};

export default function SetListMain({
  routine,
  count,
  onAddCount,
  onMinusCount,
  startTimer,
}: Props) {
  const [setNum, setSetNum] = useState<number>(0);
  const [checkTimer, setCheckTimer] = useState<boolean>(false);

  function onNextBtn() {
    setSetNum(0);
    onAddCount();
  }

  function onAddBtn() {
    setSetNum(setNum + 1);
    setCheckTimer(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{routine?.title}</Text>
      <Text style={styles.kg}>{routine?.kg}</Text>
      <Text style={styles.set}>{routine?.set}set</Text>
      <View style={styles.doing}>
        <Text>몇 세트 진행하셨나요?</Text>
        <View style={styles.setNum}>
          <Text style={styles.input}>{setNum}</Text>
          <Text style={styles.plus} onPress={onAddBtn}>
            +
          </Text>
        </View>
        <Pressable onPress={startTimer} style={styles.rest}>
          <Text style={{fontWeight: 'bold', color: 'white'}}>휴식</Text>
        </Pressable>
      </View>
      {count !== 0 && (
        <Pressable style={styles.prev} onPress={onMinusCount}>
          <Text style={styles.prevText}>이전</Text>
        </Pressable>
      )}
      <Pressable style={styles.next} onPress={onNextBtn}>
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
      <TimerCheckModal
        onView={checkTimer}
        closeView={() => setCheckTimer(false)}
        startTimer={startTimer}
      />
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
  setNum: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  },
  plus: {
    fontSize: 20,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    // margin
  },
  input: {
    width: 100,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    textAlign: 'right',
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
