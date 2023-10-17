import {View, Text, Pressable, StyleSheet} from 'react-native';

type Props = {
  setCount: number;
  setNum: number;
  onAddBtn: () => void;
};

export default function SetListDoing({setCount, setNum, onAddBtn}: Props) {
  return (
    <View style={styles.doing}>
      <Text>몇 세트 진행하셨나요?</Text>
      <View style={styles.setNum}>
        <Text style={styles.input}>{setNum}</Text>
        <Text style={styles.plus} onPress={onAddBtn}>
          +
        </Text>
      </View>
      <Text style={styles.set}>{setCount - setNum}세트남았어요!!</Text>
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
  set: {
    marginTop: 20,
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
});
