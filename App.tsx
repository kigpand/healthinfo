import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './navigation/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Other from './navigation/Other';
import Record from './navigation/Record';
import Stat from './navigation/Stat';
import Prev from './navigation/Prev';
import NewData from './navigation/NewData';
import Start from './navigation/Start';

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
          name="Record"
          component={Record}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Stat"
          component={Stat}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Other"
          component={Other}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Prev"
          component={Prev}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="NewData"
          component={NewData}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Start"
          component={Start}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

export default App;
