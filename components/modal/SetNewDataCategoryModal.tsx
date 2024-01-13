import {useState} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {mainColor} from '../../style/color';
import BlueButton from '../buttons/BlueButton';
import {useRoutineQuery} from '../../query/useRoutineQuery';
import {useCategoryQuery} from '../../query/useCategoryQuery';

type Props = {
  onView: boolean;
  closeView: () => void;
  title: string;
};

export default function SetNewDataCategoryModal({onView, title, closeView}: Props) {
  const [selectCategory, onChangeSelectCategory] = useState<string>('');
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {routine} = useRoutineQuery();
  const {category} = useCategoryQuery();

  if (!category)
    return (
      <View>
        <Text>카테고리가 존재하지 않습니다</Text>
      </View>
    );

  function handleAddButton() {
    if (title === '' || selectCategory === '') return;
    closeView();
    nav.navigate('AddNewData', {title, selectCategory, id: routine[routine.length - 1].id + 1});
  }

  return (
    <Modal animationType="fade" transparent={false} visible={onView}>
      <View style={styles.container}>
        <Text style={styles.title}>카테고리를 선택해주세요.</Text>
        <View style={styles.category}>
          <RNPickerSelect
            placeholder={{
              label: '카테고리를 선택해주세요',
              value: '',
            }}
            onValueChange={onChangeSelectCategory}
            items={category!.map(item => {
              return {label: item.category, value: item.category};
            })}
          />
        </View>
        {selectCategory !== '' && (
          <View style={styles.button}>
            <BlueButton text="등록" onPress={handleAddButton} />
          </View>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: mainColor,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  category: {
    backgroundColor: 'white',
    width: 200,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 20,
  },
});
