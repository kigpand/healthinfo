import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {IRoutineData} from '../interface/IRoutine';
import {falseColor} from '../style/color';

type Props = {
  routineArr: IRoutineData[];
  removeRoutine: (title: string) => void;
};

export default function NewDataList({routineArr, removeRoutine}: Props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {routineArr.map((item, i) => {
          return (
            <View style={styles.list}>
              <Text style={styles.listTitle} key={i}>
                {item.title}
              </Text>
              <Text
                style={styles.close}
                onPress={() => removeRoutine(item.title)}>
                삭제
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: 350,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  listTitle: {
    backgroundColor: 'white',
    width: 200,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  close: {
    borderRadius: 8,
    overflow: 'hidden',
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: 'white',
    backgroundColor: falseColor,
  },
});
