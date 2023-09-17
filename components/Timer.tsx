import {Modal, StyleSheet, Text, View} from 'react-native';
import {backgroundColor} from '../style/color';

type Props = {
  timer: number;
  onView: boolean;
  closeView: () => void;
};

export default function Timer({timer, onView, closeView}: Props) {
  return (
    <Modal
      style={style.modal}
      animationType="fade"
      visible={onView}
      onRequestClose={closeView}>
      <View>
        <Text></Text>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
});
