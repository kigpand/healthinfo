import {Animated, Pressable, StyleSheet, Text, View} from 'react-native';
import {mainColor} from '../style/color';
import {useEffect, useRef, useState} from 'react';
import SetList from '../components/SetList';

export default function Set() {
  const [exercise, setExercise] = useState<boolean>(false);
  const animation = useRef(new Animated.Value(1)).current;

  const scaleLarge = Animated.timing(animation, {
    toValue: 1.2,
    useNativeDriver: true,
  });

  const scaleSmall = Animated.timing(animation, {
    toValue: 1,
    useNativeDriver: true,
  });

  useEffect(() => {
    Animated.loop(Animated.sequence([scaleLarge, scaleSmall])).start();
  }, [animation]);

  return (
    <View style={styles.guide}>
      {exercise ? (
        <SetList />
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>
            운동을 시작하실려면 아래 버튼을 클릭해주세요
          </Text>
          <Pressable onPress={() => setExercise(true)}>
            <Animated.View style={{transform: [{scale: animation}]}}>
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
