import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import Home from './navigation/Home';
import Footer from './components/Footer';
import Other from './navigation/Other';
import Record from './navigation/Record';
import Stat from './navigation/Stat';
import LoadPrevRoutine from './navigation/LoadPrevRoutine';
import SetNewDataTitle from './navigation/SetNewDataTitle';
import Set from './navigation/Set';
import AddNewData from './navigation/AddNewData';
import {prevData} from './data/data';
import useExercise from './store/useExercise';
import Finish from './navigation/Finish';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const {setList} = useExercise();

  useEffect(() => {
    setList(prevData);
  }, []);

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
          name="SetNewDataTitle"
          component={SetNewDataTitle}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Set"
          component={Set}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Finsh"
          component={Finish}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNewData"
          component={AddNewData}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

export default App;
