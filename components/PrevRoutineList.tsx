import {StyleSheet, Text, View} from 'react-native';
import {IRoutine} from '../interface/IRoutine';

type Props = {
  item: IRoutine;
  openModal: (item: IRoutine) => void;
};

export default function PrevRoutineList({item, openModal}: Props) {
  return (
    <View style={styles.container}>
      <Text onPress={() => openModal(item)}>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 100,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // backgroundColor: 'red',
    // position: 'relative',
  },
});
