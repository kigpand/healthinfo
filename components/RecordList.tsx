import {Pressable, StyleSheet, Text, View} from 'react-native';
import {record} from '../data/data';
import {mainColor} from '../style/color';
import {useState} from 'react';
import RecordViewModal from './modal/RecordViewModal';
import useExercise from '../store/useExercise';

export default function RecordList() {
  const [modalItem, setModalItem] = useState<any>(null);
  const {list} = useExercise();

  function onItemClick(title: string) {
    const result = list.find(item => item.title === title);
    if (result) {
      setModalItem(result);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>최근 루틴</Text>
      {record.map((item, i: number) => {
        return (
          <Pressable
            style={styles.button}
            onPress={() => onItemClick(item.title)}
            key={i}>
            <Text style={styles.text}>{item.date}</Text>
            <Text style={styles.text}>{item.title}</Text>
          </Pressable>
        );
      })}
      {modalItem && (
        <RecordViewModal
          modalItem={modalItem}
          closeModal={() => setModalItem(false)}
        />
      )}
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
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
    fontSize: 18,
  },
});
