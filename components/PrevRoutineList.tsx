import {StyleSheet, Text, View} from 'react-native';
import {IRoutine} from '../interface/IRoutine';
import {buttonColor} from '../style/color';

type Props = {
  item: IRoutine;
  openModal: (item: IRoutine) => void;
};

export default function PrevRoutineList({item, openModal}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => openModal(item)}>
        {item.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: buttonColor,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 100,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});
