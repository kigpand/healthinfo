import {StyleSheet, Text, View} from 'react-native';
import CategoryButtons from '../components/CategoryButtons';

export default function CategoryManage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category 관리</Text>
      <CategoryButtons />
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
