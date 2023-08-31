import {Button, Text, View} from 'react-native';

export default function Home({navigation}: any) {
  return (
    <View>
      <Text>home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
}
