import {StyleSheet, Text, View} from 'react-native';
import PrevButton from '../components/PrevButton';
import {prevData} from '../data/data';

export default function Prev() {
  return (
    <View style={style.container}>
      <View style={style.prev}>
        {prevData.map((prev, i) => {
          return (
            <View style={style.item} key={i}>
              <Text>{prev.title}</Text>
              <View style={style.kg}>
                <Text>{prev.kg}</Text>
                <Text>x{prev.set}</Text>
              </View>
            </View>
          );
        })}
      </View>
      <PrevButton prevData={prevData} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
  },
  prev: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 100,
    gap: 10,
  },
  item: {
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: 'red',
    position: 'relative',
  },
  kg: {
    display: 'flex',
    flexDirection: 'row',
  },
});
