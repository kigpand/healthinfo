import {Modal, View, Text, StyleSheet, Pressable} from 'react-native';
import TimerCheckModalBtns from '../TimerCheckModalBtns';

type Props = {
  onView: boolean;
  closeView: () => void;
  startTimer: () => void;
};

export default function TimerCheckModal({
  onView,
  closeView,
  startTimer,
}: Props) {
  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={onView}
      presentationStyle="formSheet">
      <View style={styles.container}>
        <Text style={styles.text}>휴식을 취하시겠습니까?</Text>
        <TimerCheckModalBtns startTimer={startTimer} closeView={closeView} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
