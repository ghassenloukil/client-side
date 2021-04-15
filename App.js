import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TabNavigator from './components/navigation/TabNavigator.js';



export default function App() {
  return (
      <TabNavigator/>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#76a6ef',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
