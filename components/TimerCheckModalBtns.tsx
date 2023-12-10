import {StyleSheet, View} from 'react-native';
import RedButton from './buttons/RedButton';
import BlueButton from './buttons/BlueButton';

type Props = {
  handlePlayTimer: () => void;
  closeTimerCheckModal: () => void;
};

export default function TimerCheckModalBtns({handlePlayTimer, closeTimerCheckModal}: Props) {
  function onStartTimer() {
    handlePlayTimer();
    closeTimerCheckModal();
  }

  return (
    <View style={styles.buttons}>
      <RedButton text="아니오" onPress={closeTimerCheckModal} />
      <BlueButton text="네" onPress={onStartTimer} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    marginTop: 30,
    flexDirection: 'row',
    gap: 10,
  },
});
