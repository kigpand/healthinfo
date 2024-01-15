import {StyleSheet, Text, View} from 'react-native';
import {IRoutine} from '../interface/IRoutine';
import {buttonColor} from '../style/color';

type Props = {
  item: IRoutine;
  handleListClick: (item: IRoutine) => void;
};

export default function PrevRoutineList({item, handleListClick}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => handleListClick(item)}>
        {item.title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    marginTop: 10,
    backgroundColor: buttonColor,
    borderRadius: 4,
    paddingVertical: 15,
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
});
