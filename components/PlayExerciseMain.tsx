import {StyleSheet, Text, View} from 'react-native';
import {Category, IRoutineData} from '../interface/IRoutine';
import {useState} from 'react';
import TimerCheckModal from './modal/TimerCheckModal';
import PlayExerciseMainInfo from './PlayExerciseMainInfo';
import PlayExerciseMainTitle from './PlayExerciseMainTitle';
import BlueButton from './buttons/BlueButton';
import RedButton from './buttons/RedButton';

type Props = {
  routine: IRoutineData | null;
  category: Category;
  doneExerciseCount: number;
  handleMoveToNextExercise: () => void;
  handleMoveToPrevExercise: () => void;
  handlePlayTimer: () => void;
};

export default function PlayExerciseMain({
  routine,
  category,
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
      <Text style={styles.category}>오늘은 {category}</Text>
      {routine && <PlayExerciseMainTitle routine={routine} />}
      <PlayExerciseMainInfo
        totalExerciseCount={routine?.set || 0}
        currentExerciseCount={currentExerciseCount}
        handlePlusBtn={handlePlusBtn}
        handleMinusBtn={handleMinusBtn}
      />
      {doneExerciseCount !== 0 && (
        <View style={styles.prev}>
          <RedButton text="이전" onPress={handleMoveToPrevExercise} />
        </View>
      )}
      {routine?.set === currentExerciseCount && (
        <View style={styles.next}>
          <BlueButton text="Next" onPress={onNextBtn} />
        </View>
      )}
      <TimerCheckModal onView={checkTimer} closeView={() => setCheckTimer(false)} handlePlayTimer={handlePlayTimer} />
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
  category: {
    position: 'absolute',
    top: 40,
    fontSize: 20,
    fontWeight: 'bold',
  },
  prev: {
    position: 'absolute',
    left: 30,
    top: 50,
  },
  next: {
    position: 'absolute',
    right: 30,
    top: 50,
  },
});
