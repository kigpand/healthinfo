import {StyleSheet, Text, View} from 'react-native';
import NewDataAddRoutineBtn from './NewDataAddRoutineBtn';
import {RouteProp, useRoute} from '@react-navigation/native';
import {Category, IRoutineData} from '../interface/IRoutine';
import RNPickerSelect from 'react-native-picker-select';

type Props = {
  onChangeCategory: (text: Category) => void;
  getRoutineArr: (routine: IRoutineData) => void;
};

const select = [
  {label: '등', value: '등'},
  {label: '어깨', value: '어깨'},
  {label: '하체', value: '하체'},
  {label: '팔', value: '팔'},
  {label: '가슴', value: '가슴'},
];

export default function AddNewDataMainHeader({
  onChangeCategory,
  getRoutineArr,
}: Props) {
  const route = useRoute<RouteProp<any>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{route.params?.title}</Text>
      <View style={styles.category}>
        <RNPickerSelect onValueChange={onChangeCategory} items={select} />
      </View>
      <NewDataAddRoutineBtn getRoutineArr={getRoutineArr} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  category: {},
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
