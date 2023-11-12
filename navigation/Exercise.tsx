import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {mainColor} from '../style/color';
import {useState} from 'react';
import {useScaleAnimate} from '../hooks/useScaleAnimate';
import PlayExercise from '../components/PlayExercise';

export default function Exercise() {
  const [exercise, setExercise] = useState<boolean>(false);
  const animate = useScaleAnimate({scale: 1.05});

  return (
    <View style={styles.guide}>
      {exercise ? (
        <PlayExercise />
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>
            운동을 시작하실려면 아래 버튼을 클릭해주세요
          </Text>
          <Pressable onPress={() => setExercise(true)}>
            <Animated.View style={{transform: [{scale: animate.animation}]}}>
              <Text style={styles.text}>시작!!!</Text>
            </Animated.View>
          </Pressable>
        </View>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
});
