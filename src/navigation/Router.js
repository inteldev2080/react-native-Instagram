import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../views/Login/Login';

import BottomTab from './BottomTab';
import EditProfile from './EditProfile';
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};
export default Router;