import {View, Text, Pressable, StyleSheet} from 'react-native';

type Props = {
  totalExerciseCount: number;
  currentExerciseCount: number;
  handlePlusBtn: () => void;
  handleMinusBtn: () => void;
};

export default function PlayExerciseMainInfo({
  totalExerciseCount,
  currentExerciseCount,
  handlePlusBtn,
  handleMinusBtn,
}: Props) {
  return (
    <View style={styles.doing}>
      <Text style={{textAlign: 'center'}}>몇 세트 진행하셨나요?</Text>
      <View style={styles.setNum}>
        <Text style={styles.input}>{currentExerciseCount}</Text>
        <Text style={styles.plus} onPress={handlePlusBtn}>
          +
        </Text>
        <Text style={styles.plus} onPress={handleMinusBtn}>
          -
        </Text>
      </View>
      <Text style={styles.set}>
        {totalExerciseCount - currentExerciseCount}세트남았어요!!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  doing: {
    position: 'absolute',
    bottom: 100,
  },
  setNum: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  plus: {
    backgroundColor: 'white',
    width: 25,
    height: 25,
    marginRight: 3,
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
  input: {
    width: 120,
    paddingVertical: 5,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    textAlign: 'right',
    marginRight: 10,
  },
  set: {
    marginTop: 20,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
});
