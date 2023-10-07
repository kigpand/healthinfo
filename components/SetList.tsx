import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import useExercise from '../store/useExercise';
import Timer from './Timer';
import SetListMain from './SetListMain';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';
import TimerCheckModal from './modal/TimerCheckModal';

export default function SetList() {
  const [onTimer, setOnTimer] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const {routine, timer} = useExercise();
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function onAddCount() {
    if (count + 1 === routine?.routine.length) {
      nav.navigate('Clear');
    } else {
      setOnTimer(true);
      setCount(count + 1);
    }
  }

  function onMinusCount() {
    setCount(count - 1);
  }

  function startTimer() {
    setOnTimer(true);
  }

  return (
    <View style={styles.setItem}>
      <SetListMain
        routine={routine?.routine[count] || null}
        count={count}
        onAddCount={onAddCount}
        onMinusCount={onMinusCount}
        startTimer={startTimer}
      />
      {onTimer && (
        <Timer closeView={() => setOnTimer(false)} timer={Number(timer)} />
      )}
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
