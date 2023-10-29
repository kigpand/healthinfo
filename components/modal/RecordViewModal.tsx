import {FlatList, StyleSheet, Text, View} from 'react-native';
import {IRoutine} from '../../interface/IRoutine';
import RecordViewModalList from '../RecordViewModalList';
import RecordViewModalButtons from '../RecordViewModalButtons';

type Props = {
  modalItem: IRoutine;
  closeModal: () => void;
};

export default function RecordViewModal({modalItem, closeModal}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>루틴 명: {modalItem.title}</Text>
        <FlatList
          data={modalItem.routine}
          renderItem={item => (
            <RecordViewModalList index={item.index} routineData={item.item} />
          )}></FlatList>
        <RecordViewModalButtons routine={modalItem} closeModal={closeModal} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: '100%',
    height: '100%',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    width: '70%',
    padding: 20,
    borderRadius: 12,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
