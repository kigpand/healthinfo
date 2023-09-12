import {Text, View} from 'react-native';
import useExercise from '../store/useExercise';
import {useEffect} from 'react';

export default function Start() {
  const {routine} = useExercise();

  useEffect(() => {
    console.log(routine);
  }, [routine]);

  return (
    <View>
      <Text>start</Text>
    </View>
  );
}
