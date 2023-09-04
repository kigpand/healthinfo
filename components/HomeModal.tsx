import {Modal, StyleSheet, Text, View} from 'react-native';
import {btnBorderColor, buttonColor, mainColor} from '../style/color';

type Props = {
  onView: boolean;
  closeView: () => void;
};

export default function HomeModal({onView, closeView}: Props) {
  function onListClick() {
    closeView();
  }

  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={onView}
      presentationStyle="formSheet">
      <View style={styles.modal}>
        <Text style={styles.list} onPress={onListClick}>
          이전 루틴 불러오기
        </Text>
        <Text style={styles.new} onPress={onListClick}>
          새로 등록하기
        </Text>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  list: {
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: buttonColor,
    color: 'white',
    borderWidth: 1,
    borderColor: btnBorderColor,
  },
  new: {
    overflow: 'hidden',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: '#2c92ff',
    color: 'white',
    borderWidth: 1,
    borderColor: '#5feaff',
  },
});
