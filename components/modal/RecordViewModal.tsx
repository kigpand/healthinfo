import {FlatList, StyleSheet, Text, View} from 'react-native';
import {IRoutine} from '../../interface/IRoutine';

type Props = {
  modalItem: IRoutine;
};

export default function RecordViewModal({modalItem}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.title}>루틴 명: {modalItem.title}</Text>
        <FlatList
          data={modalItem.routine}
          renderItem={item => <Text>{item.item.title}</Text>}></FlatList>
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
    width: '80%',
    padding: 20,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
