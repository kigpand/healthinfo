import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Home from './components/Home';
import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="List"
          component={List}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
      <Footer />
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
