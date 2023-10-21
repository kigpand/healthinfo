import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Home from './navigation/Home';
import Footer from './components/Footer';
import Other from './navigation/Other';
import Record from './navigation/Record';
import Stat from './navigation/Stat';
import LoadPrevRoutine from './navigation/LoadPrevRoutine';
import NewData from './navigation/NewData';
import Set from './navigation/Set';
import Clear from './navigation/Clear';
import NewDataMain from './navigation/NewDataMain';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Record"
          component={Record}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Stat"
          component={Stat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Other"
          component={Other}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoadPrevRoutine"
          component={LoadPrevRoutine}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewData"
          component={NewData}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Set"
          component={Set}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Clear"
          component={Clear}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NewDataMain"
          component={NewDataMain}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

export default App;
