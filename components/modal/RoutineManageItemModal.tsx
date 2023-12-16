import {FlatList, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {IRoutineData} from '../../interface/IRoutine';
import RedButton from '../buttons/RedButton';
import BlueButton from '../buttons/BlueButton';
import {mainColor} from '../../style/color';
import {useState} from 'react';

type Props = {
  routine: IRoutineData[];
  routineManageItemModal: boolean;
  handleItemUpdate: (routine: IRoutineData[]) => void;
  handleCloseModal: () => void;
};

export default function RoutineManageItemModal({
  routine,
  routineManageItemModal,
  handleItemUpdate,
  handleCloseModal,
}: Props) {
  const [routineData, setRoutineData] = useState<IRoutineData[]>(routine);

  function handleUpdateRoutine(data: IRoutineData) {}

  function handleRemoveRoutine(data: IRoutineData) {
    const result = routineData.filter((item: IRoutineData) => item.title !== data.title);
    console.log(result);
    setRoutineData(result);
  }

  return (
    <Modal animationType="fade" visible={routineManageItemModal} presentationStyle="formSheet" transparent={false}>
      <View style={styles.container}>
        <Text style={styles.title}>작업할 루틴을 선택해주세요</Text>
        <FlatList
          data={routineData}
          renderItem={item => (
            <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
              <Text style={styles.list}>{item.item.title}</Text>
              <Text onPress={() => handleRemoveRoutine(item.item)}>x</Text>
              <Text>o</Text>
            </View>
          )}
        />
        <View style={styles.button}>
          <RedButton text="취소" onPress={handleCloseModal} />
          <BlueButton text="완료" onPress={() => handleItemUpdate(routine)} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  title: {
    marginTop: 100,
    marginBottom: 50,
    fontSize: 20,
    fontWeight: 'bold',
  },
  list: {
    paddingVertical: 10,
    marginTop: 15,
    backgroundColor: mainColor,
    width: 200,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    overflow: 'hidden',
    borderRadius: 8,
  },
  button: {
    position: 'absolute',
    bottom: 50,
    flexDirection: 'row',
    gap: 10,
  },
});
