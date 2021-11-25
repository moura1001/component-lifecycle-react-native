import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ListenerScreen1 from '../screens/ListenerScreen1';

const Tab = createMaterialBottomTabNavigator();

function TabNavigator(){
  return(
    <Tab.Navigator>
      <Tab.Screen
        name="Listener 1"
        component={ListenerScreen1}
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
