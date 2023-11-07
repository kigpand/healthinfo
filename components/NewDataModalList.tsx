import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Category} from '../interface/IRoutine';
import RNPickerSelect from 'react-native-picker-select';

type Props = {
  label: 'kg' | '세트' | '카테고리' | '명칭';
  onChangeCategory?: (cate: Category) => void;
  onChangeText?: (text: string) => void;
};

const select = [
  {label: '등', value: '등'},
  {label: '어깨', value: '어깨'},
  {label: '하체', value: '하체'},
  {label: '팔', value: '팔'},
  {label: '가슴', value: '가슴'},
];

export default function NewDataModalList({
  label,
  onChangeCategory,
  onChangeText,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      {label === '카테고리' && onChangeCategory ? (
        <View style={styles.category}>
          <RNPickerSelect onValueChange={onChangeCategory} items={select} />
        </View>
      ) : (
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder={label}
          keyboardType={
            label === 'kg' || label === '세트' ? 'number-pad' : 'default'
          }
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    width: 100,
  },
  category: {
    borderWidth: 1,
    borderColor: 'black',
    width: 150,
    height: 30,
    borderRadius: 4,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    width: 150,
    height: 30,
    borderRadius: 4,
  },
});
