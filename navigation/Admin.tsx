import {StyleSheet, Text, View} from 'react-native';

export default function Admin() {
  return (
    <View style={styles.container}>
      <Text>admin</Text>
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
