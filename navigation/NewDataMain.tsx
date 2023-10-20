import {RouteProp, useRoute} from '@react-navigation/native';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {borderColor, buttonColor, mainColor} from '../style/color';
import {useEffect, useState} from 'react';
import {IRoutineData} from '../interface/IRoutine';
import NewDataModal from '../components/modal/NewDataModal';

export default function NewDataMain() {
  const route = useRoute<RouteProp<any>>();
  const [routineArr, setRoutineArr] = useState<IRoutineData[]>([]);
  const [viewModal, setViewModal] = useState<boolean>(false);

  function getRoutineArr(routine: IRoutineData) {
    setRoutineArr([...routineArr, routine]);
  }

  useEffect(() => {
    console.log(routineArr);
  }, [routineArr]);

  return (
    <View style={styles.container}>
      <Text>{route.params?.title}</Text>
      <Pressable onPress={() => setViewModal(true)}>
        <Image
          style={styles.plus}
          source={require('../img/plus.png')}
          alt="plus"
        />
      </Pressable>
      <NewDataModal
        onView={viewModal}
        getRoutineArr={getRoutineArr}
        closeView={() => setViewModal(false)}
      />
      {routineArr.length > 0 && (
        <Pressable style={styles.button}>
          <Text style={{color: 'white'}}>등록</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: mainColor,
  },
  plus: {
    width: 30,
    height: 30,
    marginTop: 10,
  },
  button: {
    backgroundColor: buttonColor,
    borderWidth: 1,
    borderColor: borderColor,
    paddingHorizontal: 15,
    paddingVertical: 8,
    position: 'absolute',
    bottom: 20,
    borderRadius: 8,
  },
});
