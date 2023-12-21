import {StyleSheet, Text, View} from 'react-native';
import CategoryButtons from '../components/CategoryButtons';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import GreenButton from '../components/buttons/GreenButton';

export default function CategoryManage() {
  const nav = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category 관리</Text>
      <CategoryButtons />
      <GreenButton text="관리자 페이지로" onPress={() => nav.navigate('Admin')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
