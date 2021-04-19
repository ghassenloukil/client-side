import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Maps from './Maps.js'
import React, {useState} from 'react';

const Create = () =>{
  return (
    <View style={styles.container}>
     <Maps/>
   </View>
  );  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  }
})
export default Create;


