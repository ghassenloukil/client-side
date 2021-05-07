import React ,{ useState, useEffect }from 'react';
import axios from 'axios'
import { View, Button, StyleSheet, SafeAreaView ,TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

const Contact = () => {
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
  	const [ subject, setsubject ] = useState('');
    const [ message, setmessage ] = useState('');
 
    const  submitEmail= function(e){
        e.preventDefault();
        var obj = { name:name, email: email, subject: subject,message:message}
        
             axios.post(`http://10.0.2.2:3000/api/ParkiZone/sendemail`, obj)
         .then((res) => {
                    console.log(res.data);
                    Alert.alert("we've received your email we will respond as soon as possible")
                }).catch ((err)=>{
                    console.log(err,"didn't works")
                })
}
 const resetForm=()=>{
        this.setState({ email: email,name:name,subject:subject, message: message})
}
return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: '100%', height: '20%', marginBottom: 15, justifyContent:"center", alignItems: 'center'}}>
      <Image   style={{ width: '30%', height: '100%' }} source={require('./logo.png')}/>  
        </View> 
      <TextInput  style={styles.input} onChangeText={setName} value={name} placeholder="name" />
      <TextInput  style={styles.input} onChangeText={setEmail} value={email} placeholder="email" />
      <TextInput style={styles.input} onChangeText={setsubject} value={subject} placeholder="Subject" />
      <TextInput style={styles.textArea} onChangeText={setmessage} value={message} placeholder="Message" />
      {/* <Button  color= '#F9C80E' style={styles.btn} title="Edit" onPress={submitEmail}/> */}
      <TouchableOpacity style={styles.appButtonContainer}  >
             <Text style={styles.appButtonText} onPress={submitEmail}> Send </Text>
           </TouchableOpacity>
     
    </SafeAreaView>
  );


}
const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: "#F9C80E",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    paddingVertical: 10,
    width: 150,
    marginLeft: 140,
  },
  appButtonText: {
    fontSize: 18,
    color:"white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },
    container: {
      flex: 1,
      backgroundColor: '#081845',
      
    },
      input: {
          height: 45,
          margin: 12,
          marginTop: 25,
          borderBottomWidth: 2,
          backgroundColor:'white',
          fontSize: 20,
          padding: 10,
          borderRadius: 10,
      },
      btn: {
        flex: 1,
        backgroundColor: '#FF4F32',
        
      },
      textArea: {
        height: 150,
        justifyContent: "flex-start",
        backgroundColor:'white',
        margin: 12,
        marginTop: 25,
        borderRadius: 10,
        
        
      }
    });
export default Contact