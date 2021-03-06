import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ListenerScreen1 from '../screens/ListenerScreen1';
import ListenerScreen2 from '../screens/ListenerScreen2';

const Tab = createMaterialBottomTabNavigator();

function TabNavigator(){
  return(
    <Tab.Navigator
      initialRouteName="Listener 2"
    >
      <Tab.Screen
        name="Listener 1"
        component={ListenerScreen1}
      />
      <Tab.Screen
        name="Listener 2"
        component={ListenerScreen2}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function MainNavigator(){
  return(
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Exercise"
        component={TabNavigator}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
