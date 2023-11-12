import {Pressable, StyleSheet, Text, View} from 'react-native';
import {falseColor, trueColor} from '../style/color';

type Props = {
  handlePlayTimer: () => void;
  closeTimerCheckModal: () => void;
};

export default function TimerCheckModalBtns({
  handlePlayTimer,
  closeTimerCheckModal,
}: Props) {
  function onStartTimer() {
    handlePlayTimer();
    closeTimerCheckModal();
  }

  return (
    <View style={styles.buttons}>
      <Pressable style={styles.pressNo} onPress={closeTimerCheckModal}>
        <Text style={styles.noBtn}>아니오</Text>
      </Pressable>
      <Pressable style={styles.pressYes} onPress={onStartTimer}>
        <Text style={styles.yesBtn}>네</Text>
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
