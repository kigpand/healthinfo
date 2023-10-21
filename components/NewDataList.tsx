import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {IRoutineData} from '../interface/IRoutine';

type Props = {
  routineArr: IRoutineData[];
};

export default function NewDataList({routineArr}: Props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {routineArr.map((item, i) => {
          return (
            <Text style={styles.list} key={i}>
              {item.title}
            </Text>
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
    backgroundColor: 'white',
    width: 200,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 8,
    paddingHorizontal: 5,
    paddingVertical: 10,
    marginBottom: 10,
  },
});
