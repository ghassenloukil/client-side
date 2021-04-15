import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';



const Home = () =>{
    return (
      <View style={styles.container}>
      <Image   style={{ width: 100, height: 100, marginBottom: 15 }} source={require('./parki.jpg')}/> 
      <Text style={styles.text}>WELCOME TO PARKIZONE </Text>
      <View style={{ width: '100%', height: '50%', marginBottom: 15 }}>
      <Image   style={{ width: '100%', height: '100%' }} source={require('./cover.jpg')}/>  
        </View> 
        <View style={{alignItems: 'center', justifyContent:'center', flexDirection: 'initial'}}>  
            {/* SIGNIN BUTTON   */}
            <TouchableOpacity style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}> Signin </Text>
           </TouchableOpacity>
      
          {/* SIGNup BUTTON   */}
          <TouchableOpacity style={styles.appButtonContainer}>
             <Text style={styles.appButtonText}> Signup </Text>
           </TouchableOpacity>
      </View>

    </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'black'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
  button: {
    width: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button1: {
    backgroundColor: 'white'
  },
  appButtonContainer: {
    // elevation: 8,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    // paddingHorizontal: 12
    width: 150,
    marginRight: 10
  },
  appButtonText: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }

})
export default Home;


