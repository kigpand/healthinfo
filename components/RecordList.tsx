import {Pressable, StyleSheet, Text, View} from 'react-native';
import {mainColor} from '../style/color';
import {useState} from 'react';
import RecordViewModal from './modal/RecordViewModal';
import {useRoutineQuery} from '../query/useRoutineQuery';
import {IRoutine} from '../interface/IRoutine';
import {useRecordQuery} from '../query/useRecordQuery';

export default function RecordList() {
  const [modalItem, setModalItem] = useState<any>(null);
  const {routine} = useRoutineQuery();
  const {record, isError, isLoading} = useRecordQuery();

  if (isLoading || isError)
    return (
      <View>
        <Text>서버 로딩 실패</Text>
      </View>
    );

  function onItemClick(title: string) {
    const result = routine.find((item: IRoutine) => item.title === title);
    if (result) {
      setModalItem(result);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>최근 루틴</Text>
      {record!.map((item, i: number) => {
        const date = new Date(item.date);
        return (
          <Pressable style={styles.button} onPress={() => onItemClick(item.title)} key={i}>
            <Text style={styles.text}>
              {date.getFullYear()}-{date.getMonth() + 1}-{date.getDate()}
            </Text>
            <Text style={styles.text}>{item.title}</Text>
          </Pressable>
        );
      })}
      {modalItem && <RecordViewModal modalItem={modalItem} closeModal={() => setModalItem(false)} />}
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
    width: 200,
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
