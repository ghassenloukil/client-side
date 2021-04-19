import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';



const Signup = () => {
    return (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <input placeholder="Email"></input>
            <input placeholder="password"></input>
            <Text>Hello world</Text>
        </View>
    )
}
export default Signup