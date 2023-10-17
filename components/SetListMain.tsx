import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {IRoutineData} from '../interface/IRoutine';
import {useState} from 'react';
import {buttonColor} from '../style/color';
import TimerCheckModal from './modal/TimerCheckModal';
import SetListDoing from './SetListDoing';
import SetListTitle from './SetListTitle';

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
      {routine && <SetListTitle routine={routine} />}
      <SetListDoing
        setCount={routine?.set || 0}
        setNum={setNum}
        onAddBtn={onAddBtn}
      />
      {count !== 0 && (
        <Pressable style={styles.prev} onPress={onMinusCount}>
          <Text style={styles.prevText}>이전</Text>
        </Pressable>
      )}
      {routine?.set === setNum && (
        <Pressable style={styles.next} onPress={onNextBtn}>
          <Text style={styles.nextText}>Next</Text>
        </Pressable>
      )}
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
