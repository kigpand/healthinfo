import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {mainColor} from '../style/color';
import {useState} from 'react';
import SetItem from '../components/SetItem';

export default function Set() {
  const [exercise, setExercise] = useState<boolean>(false);
  return (
    <View style={styles.guide}>
      {exercise ? (
        <SetItem />
      ) : (
        <TouchableOpacity onPress={() => setExercise(true)}>
          <Text style={styles.text}>시작!!!</Text>
        </TouchableOpacity>
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
