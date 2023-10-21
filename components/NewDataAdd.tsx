import {useState} from 'react';
import {Animated, Image, Pressable, StyleSheet, Text} from 'react-native';
import NewDataModal from './modal/NewDataModal';
import {IRoutineData} from '../interface/IRoutine';
import {useScaleAnimate} from '../hooks/useScaleAnimate';

type Props = {
  getRoutineArr: (routine: IRoutineData) => void;
};

export default function NewDataAdd({getRoutineArr}: Props) {
  const [viewModal, setViewModal] = useState<boolean>(false);
  const animate = useScaleAnimate({scale: 1.05});

  return (
    <Animated.View style={{transform: [{scale: animate.animation}]}}>
      <Pressable style={styles.container} onPress={() => setViewModal(true)}>
        <Text style={styles.text}>루틴을 추가하실려면 클릭해주세요</Text>
        <Image
          style={styles.plus}
          source={require('../img/plus.png')}
          alt="plus"
        />
        <NewDataModal
          onView={viewModal}
          getRoutineArr={getRoutineArr}
          closeView={() => setViewModal(false)}
        />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  text: {
    fontSize: 15,
  },
  plus: {
    width: 15,
    height: 15,
  },
});
