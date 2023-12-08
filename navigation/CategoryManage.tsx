import {StyleSheet, Text, View} from 'react-native';

export default function CategoryManage() {
  return (
    <View style={styles.container}>
      <Text>category 추가</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
