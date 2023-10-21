import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

export function useScaleAnimate({scale}: {scale: number}) {
  const animation = useRef(new Animated.Value(1)).current;

  const scaleLarge = Animated.timing(animation, {
    toValue: scale,
    useNativeDriver: true,
  });

  const scaleSmall = Animated.timing(animation, {
    toValue: 1,
    useNativeDriver: true,
  });

  useEffect(() => {
    Animated.loop(Animated.sequence([scaleLarge, scaleSmall])).start();
  }, [animation]);

  return {animation};
}
