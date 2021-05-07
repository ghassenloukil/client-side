import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Maps from '../Maps'
import Profile from '../Profile' 
import Settings from '../Settings'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
     

    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#F9C80E',
        style: {backgroundColor: '#081845', marginTop: -20}
      }}  
      >
      <Tab.Screen
        name="Maps"
        component={Maps}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
            />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
          />
{/* 
       <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="Settings" color={color} size={size} />
              ),
            }}
            /> */}

    </Tab.Navigator>
        
  );
}

// import * as React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import Home from '../Home'
// import Create from '../Create.js'
// import About from '../About.js'

// const Stack = createBottomTabNavigator();



// export default function TabNavigator() {
//     return (
//     <NavigationContainer>
//         <Stack.Navigator >
//             <Stack.Screen name="Home" component={Home} options={{
//                 headerStyle:{ backgroundColor: "black"},
//                 headerTintColor: "white"
//             }}/> 
//             <Stack.Screen name="Create" component={Create} />
//             <Stack.Screen name="About" component={About}  />
//         </Stack.Navigator>
//     </NavigationContainer>
// );
// }

// // const MyTheme = DefaultTheme;
// //     MyTheme.colors.background = 'black'


// const styles = StyleSheet.create({
//     container: {
//       marginTop: 50,
//     },
//     bigBlue: {
//       color: 'blue',
//       fontWeight: 'bold',
//       fontSize: 30,
//     },
//     red: {
//       background: 'red' ,
//     },
//   });