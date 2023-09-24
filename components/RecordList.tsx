import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {prevData, record} from '../data/data';
import {mainColor} from '../style/color';
import {useState} from 'react';
import RecordViewModal from './modal/RecordViewModal';

export default function RecordList() {
  const [modalItem, setModalItem] = useState<any>(null);

  function onItemClick(title: string) {
    const result = prevData.find(item => item.title === title);
    if (result) {
      setModalItem(result);
    }
  }
  return (
    <View style={styles.container}>
      {record.map((item, i: number) => {
        return (
          <TouchableOpacity
            style={styles.button}
            onPress={() => onItemClick(item.exercise)}
            key={i}>
            <Text style={styles.text}>{item.date}</Text>
            <Text style={styles.text}>{item.exercise}</Text>
          </TouchableOpacity>
        );
      })}
      {modalItem && <RecordViewModal modalItem={modalItem} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: mainColor,
  },
  button: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  text: {
    fontSize: 20,
  },
});
