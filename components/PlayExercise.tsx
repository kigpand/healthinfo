import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import useExercise from '../store/useExercise';
import Timer from './Timer';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import PlayExerciseMain from './PlayExerciseMain';

export default function PlayExercise() {
  const [onTimer, setOnTimer] = useState<boolean>(false);
  const [doneExerciseCount, setDoneExerciseCount] = useState<number>(0);
  const {timer, currentRoutine} = useExercise();
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function handleMoveToNextExercise() {
    if (doneExerciseCount + 1 === currentRoutine?.routine.length) {
      nav.navigate('Finish');
    } else {
      setOnTimer(true);
      setDoneExerciseCount(doneExerciseCount + 1);
    }
  }

  function handleMoveToPrevExercise() {
    setDoneExerciseCount(doneExerciseCount - 1);
  }

  function handlePlayTimer() {
    setOnTimer(true);
  }

  return (
    <View style={styles.setItem}>
      <PlayExerciseMain
        category={currentRoutine?.category!}
        routine={currentRoutine?.routine[doneExerciseCount] || null}
        doneExerciseCount={doneExerciseCount}
        handleMoveToNextExercise={handleMoveToNextExercise}
        handleMoveToPrevExercise={handleMoveToPrevExercise}
        handlePlayTimer={handlePlayTimer}
      />
      {onTimer && <Timer closeView={() => setOnTimer(false)} timer={Number(timer)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  setItem: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
