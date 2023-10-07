import {Pressable, StyleSheet, Text, View} from 'react-native';
import {mainColor} from '../style/color';
import {useState} from 'react';
import SetList from '../components/SetList';

export default function Set() {
  const [exercise, setExercise] = useState<boolean>(false);
  return (
    <View style={styles.guide}>
      {exercise ? (
        <SetList />
      ) : (
        <Pressable onPress={() => setExercise(true)}>
          <Text style={styles.text}>시작!!!</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  guide: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: mainColor,
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
  },
});
