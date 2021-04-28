import React from 'react';
import axios from 'axios'
import { View, Button, StyleSheet, SafeAreaView ,TextInput } from 'react-native';
 export default class Settings extends React.Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            email:'',
            
        }
    }
    componentDidMount(id){
    axios.get(`http://10.0.2.2:3000/api/ParkiZone/Profile/${id}`).then(response =>{
      console.log(response.data)
      this.setState({
        username:response.username,email:response.email
      })
    }).catch(error =>{
      console.log(error)
    })
    
  }
  handleupdate(id){
    console.log(id)
    axios.patch(`http://10.0.2.2:3000/api/ParkiZone/Profile/${id}`,{username:username,email:email})
    .then(response=>{
      console.log(response.data)

    })
  }
     render() {
       console.log(this.state)
        return (
            <SafeAreaView>
              <TextInput
                style={styles.input}
                onChangeText={(e)=>this.setState({username:e.target.value})}
                value={text}
              />
              <TextInput
                style={styles.input}
                onChangeText={(e)=>this.setState({email:e.target.value})}
                value={number}
               
              />
              <Button onPress={this.handleupdate()}/>
            </SafeAreaView>
          );
     }
 }
 const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  });