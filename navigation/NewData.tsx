import {StyleSheet, Text, TextInput, View} from 'react-native';
import {category} from '../data/data';

export default function NewData() {
  return (
    <View style={style.container}>
      <Text>루틴명을 입력해주세요</Text>
      <TextInput />
      {/* {category.map((cate: string, i: number) => {
        return (
          <Text style={style.list} key={i}>
            {cate}
          </Text>
        );
      })} */}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  list: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    fontSize: 20,
    color: 'white',
    backgroundColor: '#ff4aff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ff4aff',
    overflow: 'hidden',
  },
});
