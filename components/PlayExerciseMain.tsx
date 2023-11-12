import {Pressable, StyleSheet, Text, View} from 'react-native';
import {IRoutineData} from '../interface/IRoutine';
import {useState} from 'react';
import {buttonColor} from '../style/color';
import TimerCheckModal from './modal/TimerCheckModal';
import PlayExerciseMainInfo from './PlayExerciseMainInfo';
import PlayExerciseMainTitle from './PlayExerciseMainTitle';

type Props = {
  routine: IRoutineData | null;
  doneExerciseCount: number;
  handleMoveToNextExercise: () => void;
  handleMoveToPrevExercise: () => void;
  handlePlayTimer: () => void;
};

export default function PlayExerciseMain({
  routine,
  doneExerciseCount,
  handleMoveToNextExercise,
  handleMoveToPrevExercise,
  handlePlayTimer,
}: Props) {
  const [currentExerciseCount, setCurrentExerciseCount] = useState<number>(0);
  const [checkTimer, setCheckTimer] = useState<boolean>(false);

  function onNextBtn() {
    setCurrentExerciseCount(0);
    handleMoveToNextExercise();
  }

  function handlePlusBtn() {
    setCurrentExerciseCount(currentExerciseCount + 1);
    setCheckTimer(true);
  }

  function handleMinusBtn() {
    setCurrentExerciseCount(currentExerciseCount - 1);
  }

  return (
    <View style={styles.container}>
      {routine && <PlayExerciseMainTitle routine={routine} />}
      <PlayExerciseMainInfo
        totalExerciseCount={routine?.set || 0}
        currentExerciseCount={currentExerciseCount}
        handlePlusBtn={handlePlusBtn}
        handleMinusBtn={handleMinusBtn}
      />
      {doneExerciseCount !== 0 && (
        <Pressable style={styles.prev} onPress={handleMoveToPrevExercise}>
          <Text style={styles.prevText}>이전</Text>
        </Pressable>
      )}
      {routine?.set === currentExerciseCount && (
        <Pressable style={styles.next} onPress={onNextBtn}>
          <Text style={styles.nextText}>Next</Text>
        </Pressable>
      )}
      <TimerCheckModal
        onView={checkTimer}
        closeView={() => setCheckTimer(false)}
        handlePlayTimer={handlePlayTimer}
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
