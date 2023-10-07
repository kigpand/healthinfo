import {Pressable, StyleSheet, Text, View} from 'react-native';
import {falseColor, trueColor} from '../style/color';

type Props = {
  startTimer: () => void;
  closeView: () => void;
};

export default function TimerCheckModalBtns({startTimer, closeView}: Props) {
  function onTimer() {
    startTimer();
    closeView();
  }

  return (
    <View style={styles.buttons}>
      <Pressable style={styles.pressNo}>
        <Text style={styles.noBtn} onPress={closeView}>
          아니오
        </Text>
      </Pressable>
      <Pressable style={styles.pressYes}>
        <Text style={styles.yesBtn} onPress={onTimer}>
          네
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 30,
    flexDirection: 'row',
    gap: 10,
  },
  pressYes: {
    backgroundColor: trueColor,
    width: 80,
    alignItems: 'center',
    paddingVertical: 10,
  },
  pressNo: {
    backgroundColor: falseColor,
    width: 80,
    alignItems: 'center',
    paddingVertical: 10,
  },
  yesBtn: {
    fontWeight: 'bold',
    color: 'white',
  },
  noBtn: {
    fontWeight: 'bold',
    color: 'white',
  },
});
