import {useState} from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {borderColor, buttonColor, mainColor} from '../../style/color';
import BlueButton from '../buttons/BlueButton';

const select = [
  {label: '등', value: '등'},
  {label: '어깨', value: '어깨'},
  {label: '하체', value: '하체'},
  {label: '팔', value: '팔'},
  {label: '가슴', value: '가슴'},
];

type Props = {
  onView: boolean;
  closeView: () => void;
  title: string;
};

export default function SetNewDataCategoryModal({onView, title, closeView}: Props) {
  const [category, onChangeCategory] = useState<string>('');
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  function handleAddButton() {
    if (title === '' || category === '') return;
    closeView();
    nav.navigate('AddNewData', {title, category});
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
            onValueChange={onChangeCategory}
            items={select}
          />
        </View>
        {category !== '' && (
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
