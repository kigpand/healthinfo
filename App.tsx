import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import Home from './navigation/Home';
import Footer from './components/Footer';
import Other from './navigation/Other';
import Record from './navigation/Record';
import Statistics from './navigation/Statistics';
import LoadPrevRoutine from './navigation/LoadPrevRoutine';
import SetNewDataTitle from './navigation/SetNewDataTitle';
import Exercise from './navigation/Exercise';
import AddNewData from './navigation/AddNewData';
import Finish from './navigation/Finish';
import Admin from './navigation/Admin';
import CategoryManage from './navigation/CategoryManage';
import RoutineManageUpdate from './navigation/RoutineManageUpdate';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="Record" component={Record} options={{headerShown: false}} />
          <Stack.Screen name="Statistics" component={Statistics} options={{headerShown: false}} />
          <Stack.Screen name="Other" component={Other} options={{headerShown: false}} />
          <Stack.Screen name="LoadPrevRoutine" component={LoadPrevRoutine} options={{headerShown: false}} />
          <Stack.Screen name="SetNewDataTitle" component={SetNewDataTitle} options={{headerShown: false}} />
          <Stack.Screen name="Exercise" component={Exercise} options={{headerShown: false}} />
          <Stack.Screen name="Finish" component={Finish} options={{headerShown: false}} />
          <Stack.Screen name="AddNewData" component={AddNewData} options={{headerShown: false}} />
          <Stack.Screen name="Admin" component={Admin} options={{headerShown: false}} />
          <Stack.Screen name="CategoryManage" component={CategoryManage} options={{headerShown: false}} />
          <Stack.Screen name="RoutineManageUpdate" component={RoutineManageUpdate} options={{headerShown: false}} />
        </Stack.Navigator>
        <Footer />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
