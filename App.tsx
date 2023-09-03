import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Other from './components/Other';
import Record from './components/Record';
import Stat from './components/Stat';

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
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

export default App;
