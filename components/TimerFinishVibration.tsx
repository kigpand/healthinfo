import {useEffect} from 'react';
import {Vibration, Pressable, Text, StyleSheet} from 'react-native';
import {trueColor} from '../style/color';

const ONE_SECOND_IN_MS = 1000;

type Props = {
  isNextButton: boolean;
  handleCloseTimer: () => void;
};

export default function TimerFinishVibration({
  isNextButton,
  handleCloseTimer,
}: Props) {
  if (!isNextButton) return <></>;

  useEffect(() => {
    Vibration.vibrate(1 * ONE_SECOND_IN_MS, true);
  }, []);

  function handleStopVibration() {
    Vibration.cancel();
    handleCloseTimer();
  }

  return (
    <Pressable style={styles.container} onPress={handleStopVibration}>
      <Text style={styles.text}>Next</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: trueColor,
    borderRadius: 8,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});
