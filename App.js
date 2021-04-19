import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';
// import TabNavigator from './components/navigation/TabNavigator.js';
import Navigator from './components/navigation/routes/homeStack'


export default function App() {
  return (
      <Navigator/>
  );
}

