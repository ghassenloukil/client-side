import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';
// import TabNavigator from './components/navigation/TabNavigator.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home'
import Signup from './components/Signup'
import Create from './components/Create'
import Maps  from  './components/Maps'

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    {/* <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Signup"
        component={Signup}
      />
      <Stack.Screen
        name="create"
        component={Create}
      />
    </Stack.Navigator> */}
    <Maps/>
  </NavigationContainer>
  );
}

