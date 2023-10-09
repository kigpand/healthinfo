import {RouteProp, useRoute} from '@react-navigation/native';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {borderColor, buttonColor, mainColor} from '../style/color';

export default function NewDataMain() {
  const route = useRoute<RouteProp<any>>();
  return (
    <View style={styles.container}>
      <Text>{route.params?.title}</Text>
      <Image
        style={styles.plus}
        source={require('../img/plus.png')}
        alt="plus"
      />
      <Pressable style={styles.button}>
        <Text style={{color: 'white'}}>등록</Text>
      </Pressable>
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
    width: 50,
    height: 50,
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
