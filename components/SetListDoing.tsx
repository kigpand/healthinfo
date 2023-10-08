import {View, Text, Pressable, StyleSheet} from 'react-native';

type Props = {
  setNum: number;
  onAddBtn: () => void;
  startTimer: () => void;
};

export default function SetListDoing({setNum, onAddBtn, startTimer}: Props) {
  return (
    <View style={styles.doing}>
      <Text>몇 세트 진행하셨나요?</Text>
      <View style={styles.setNum}>
        <Text style={styles.input}>{setNum}</Text>
        <Text style={styles.plus} onPress={onAddBtn}>
          +
        </Text>
      </View>
      <Pressable onPress={startTimer} style={styles.rest}>
        <Text style={{fontWeight: 'bold', color: 'white'}}>휴식</Text>
      </Pressable>
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
    gap: 10,
  },
  plus: {
    fontSize: 20,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    // margin
  },
  input: {
    width: 100,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    textAlign: 'right',
  },
  rest: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: 'skyblue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
