import {Modal, StyleSheet, Text, View} from 'react-native';
import NewDataModalTitle from '../NewDataModalTitle';

type Props = {
  onView: boolean;
  closeView: () => void;
};

export default function NewDataModal({onView, closeView}: Props) {
  return (
    <Modal animationType="fade" transparent={false} visible={onView}>
      <View style={styles.modal}>
        <NewDataModalTitle />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
