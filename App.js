import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home'
import Signup from './components/Signup'
import Signin from './components/Signin'
import TabNavigator from './components/navigation/TabNavigator.js';
// import Maps from './components/Maps'


export default function App() {
  const Stack = createStackNavigator();
  return (
//  <NavigationContainer >
//     <Stack.Navigator initialRouteName="Home" 
//    screenOptions={{
//     headerTintColor: 'white',
//     headerStyle: { backgroundColor: '#212121' },
//   }}>
//       <Stack.Screen 
//        name="Home"
//        component={HomeScreen}
//        style={{backgroundColor: 'black'}} 
//       />
//       <Stack.Screen
//         name="Signup"
//         component={Signup}
//       />
//       <Stack.Screen
//         name="Signin"
//         component={Signin}
//       />
//       <Stack.Screen
//         name="TabNavigator"
//         component={TabNavigator}
//       />
//     </Stack.Navigator>
//   </NavigationContainer>
  <TabNavigator/>
  );
}

