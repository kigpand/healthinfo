import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Home from './components/Home';
import List from './components/List';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="List" component={List}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Text style={styles.text}>health</Text>
    //   <Text>rootin</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'pink',
    fontWeight: 'bold',
  },
});

export default App;
