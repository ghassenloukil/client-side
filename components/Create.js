import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

const Create = () =>{
  return (
    <View style={styles.container}>
     <Text style={styles.text}> Hello from Create</Text>
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

