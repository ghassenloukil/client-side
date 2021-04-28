import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Maps from '../Maps'
import About from '../Profile.js'

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
      <NavigationContainer >

    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: 'white',
        style: {backgroundColor: 'black'}
      }}  
      >
      <Tab.Screen
        name="Feed"
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
        component={About}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
          />
    </Tab.Navigator>
        </NavigationContainer> 
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