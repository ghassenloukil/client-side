import { StyleSheet, Text, View, TouchableOpacity,Image,TextInput } from 'react-native';
import React, {useState} from 'react';



const Signup = () => {
    return (
        <View style={styles.main}>
            <View style={styles.inputs}>
            <View style={{alignItems: 'center', justifyContent:'center'}}>
      <Image   style={{ width: 100, height: 150, marginTop: 1,justifyContent: 'center', alignItems: 'center'}} source={require('./parki.jpg')}/> 
      </View>
            <TextInput placeholder="Username" style={styles.row}/>
            <TextInput placeholder="Email" style={styles.row}/>
            <TextInput placeholder="password" style={styles.row}/>
            <View style={{alignItems: 'center', justifyContent:'center'}}>
            <TouchableOpacity style={styles.appButtonContainer}  >
             <Text style={styles.appButtonText}> Signup </Text>
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
    row : {
        marginBottom: '3%',
        marginTop: '3%', 
        height: 35,
        borderRadius: 10, 
        fontSize: 20, 
        backgroundColor:'white',
        flexDirection: "row",
        flexWrap: "wrap",
    },
    appButtonContainer: {
        // elevation: 8,
        backgroundColor: "transparent",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'white',
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