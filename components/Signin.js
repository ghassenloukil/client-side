// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import React, {useState} from 'react';

// const Create = () =>{
//   return (
//     <View style={styles.container}>
//      <Text style={styles.text}> Hello from Create</Text>
//    </View>
//   );  
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black'
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//   }
// })
// export default Create;

import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import React, {useState} from 'react';



const Signup = () => {
    return (
        <View style={styles.main}>
            <View style={styles.inputs}>
            <View style={{alignItems: 'center', justifyContent:'center'}}>
      <Image   style={{ width: 100, height: 150, marginTop: 1,justifyContent: 'center', alignItems: 'center'}} source={require('./parki.jpg')}/> 
      </View>
            <input placeholder="Email" style={{marginBottom: '4%',marginTop: '3%', height: '5%', borderRadius: 10, fontSize: 20,outline: 'none'}}></input>
            <input placeholder="password" style={{marginBottom: '3%',marginTop: '3%', height: '5%', borderRadius: 10, fontSize: 20,outline: 'none'}}></input>
            <View style={{alignItems: 'center', justifyContent:'center', flexDirection: 'initial'}}>
            <TouchableOpacity style={styles.appButtonContainer}  >
             <Text style={styles.appButtonText}> Signin </Text>
           </TouchableOpacity>
           </View>
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    main : {
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 1,
        backgroundColor: 'black'
    },
    inputs : {
        width: '70%', 
        height: '80%', 
        fontSize:20,
    },
    appButtonContainer: {
        // elevation: 8,
        backgroundColor: "transparent",
        borderRadius: 10,
        border:" 1px solid white",
        paddingVertical: 10,
        // paddingHorizontal: 12,
        width: 150,
        marginRight: 10,
        marginTop: 1
      },
      appButtonText: {
        fontSize: 18,
        color:"white",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }

})
export default Signup

