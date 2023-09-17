import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import useExercise from '../store/useExercise';
import Timer from './Timer';
import SetItemMain from './SetItemMain';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

export default function SetItem() {
  const [onTimer, setOnTimer] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);
  const {routine} = useExercise();
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function onAddCount() {
    if (count + 1 === routine?.routine.length) {
      nav.navigate('Clear');
    } else {
      setCount(count + 1);
    }
  }

  function onMinusCount() {
    setCount(count - 1);
  }

  return (
    <View style={styles.setItem}>
      <SetItemMain
        routine={routine ? routine.routine[count] : null}
        count={count}
        onAddCount={onAddCount}
        onMinusCount={onMinusCount}
      />
      <Timer
        onView={onTimer}
        closeView={() => setOnTimer(false)}
        timer={Number(routine?.timer)}
      />
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
