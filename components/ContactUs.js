import React ,{ useState, useEffect }from 'react';
import axios from 'axios'
import { View, Button, StyleSheet, SafeAreaView ,TextInput} from 'react-native';
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
                    console.log(res);
                }).catch ((err)=>{
                    console.log(err,"didn't works")
                })
}
 const resetForm=()=>{
        this.setState({ email: email,name:name,subject:subject, message: message})
}
return (
    <SafeAreaView style={styles.container}>
      <TextInput  style={styles.input} onChangeText={setName} value={name} placeholder="name" />
      <TextInput  style={styles.input} onChangeText={setEmail} value={email} placeholder="email" />
      <TextInput style={styles.input} onChangeText={setsubject} value={subject} placeholder="Subject" />
      <TextInput style={styles.input} onChangeText={setmessage} value={message} placeholder="Message" />
      <Button  color= '#F9C80E' style={styles.btn} title="Edit" onPress={submitEmail}/>
     
    </SafeAreaView>
  );


}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#081845',
      
    },
      input: {
          height: 40,
          margin: 12,
          marginTop: 25,
          borderBottomWidth: 2,
      backgroundColor:'white'
      },
      btn: {
        flex: 1,
        backgroundColor: '#FF4F32',
        
      },
    });
export default Contact