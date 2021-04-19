import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
// import Signup from './components/Signup.js'




const Home = ({ navigation: { navigate } }) =>{
  // const GoSignup = () =>{
  //   props.navigation.navigate('Signup')
  //   console.log(props.navigation);
  // }
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'center', justifyContent:'center'}}>
      <Image   style={{ width: 100, height: 150, marginTop: 1,justifyContent: 'center', alignItems: 'center'}} source={require('./parki.jpg')}/> 
      </View>
      <View style={{ width: '100%', height: '50%', marginBottom: 15 }}>
      <Image   style={{ width: '100%', height: '100%' }} source={require('./zone.jpg')}/>  
        </View> 
      <View style={{alignItems: 'center', justifyContent:'center'}}>
      <Text style={styles.text}>WELCOME TO PARKIZONE!</Text>
      <Text style={{fontWeight: 'bold',color: '#fff',}}>IN ORDER TO USE OUR APP PLEASE LOGIN OR SIGNUP</Text>

      </View>
        <View style={{alignItems: 'center', justifyContent:'center', flexDirection: 'initial', marginTop: 20}}>  
          {/* SIGNIN BUTTON   */}
            <TouchableOpacity style={styles.appButtonContainer}>
              <Text style={styles.appButtonText} onPress={()=>navigate('Create')}> Signin </Text>
           </TouchableOpacity>
      
          {/* SIGNup BUTTON   */}
          <TouchableOpacity style={styles.appButtonContainer}  >
             <Text style={styles.appButtonText} onPress={()=>navigate('Signup')}> Signup </Text>
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
    fontFamily:'lucida grande',
    // alignItems: 'center',
    // justifyContent:'center',
  },
  button: {
    width: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressButton: {
    backgroundColor: 'red'
  },
  // appButtonContainer: {
  //   // elevation: 8,
  //   backgroundColor: "transparent",
  //   borderRadius: 10,
  //   border:" 1px solid white",
  //   paddingVertical: 10,
  //   // paddingHorizontal: 12
  //   width: 150,
  //   marginRight: 10,
  // },
  appButtonText: {
    fontSize: 18,
    color:"white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }

})
export default Home;


