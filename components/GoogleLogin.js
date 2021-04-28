// import React, { Component } from 'react';
// import { View, StyleSheet, ToastAndroid, Button ,Text,Image} from "react-native";
// import {
//   GoogleSignin,
//   GoogleSigninButton,
//   statusCodes,
// } from '@react-native-community/google-signin';
// GoogleSignin.configure({
//   webClientId: '371018749691-gp8id1fdu1uh1f0ug3e0epje1hkp9epk.apps.googleusercontent.com',
//   offlineAccess: true, // if you want to access Google API on behalf 
// });
// class LoginGoogle extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       userGoogleInfo : {},
//       loaded: false
//     }

//   }
//   signIn = async () => {
//     try {
//       console.log("asdsad");
//       await GoogleSignin.hasPlayServices();
//       const userInfo = await GoogleSignin.signIn();
//       this.setState({
//         userGoogleInfo : userInfo,
//         loaded : true
//       })
      
//     } catch (error) {
      
//         console.log(error.message);
      
//     }
//   };
//   render() {
//     return (
//       <View>

//       <GoogleSigninButton
//           style={{ width: 222, height: 48 }}
//           size={GoogleSigninButton.Size.Wide}
//           color={GoogleSigninButton.Color.Dark}
//           onPress={this.signIn}
//           />
//          {this.state.loaded ?
//           <View>
//             <Text>{this.state.userGoogleInfo.user.name}</Text>
//             <Text>{this.state.userGoogleInfo.user.email}</Text>
//             <Image 
//           style={{ width: 100, height: 100 }}
//           source={{uri: this.state.userGoogleInfo.user.photo}}
//         />

//           </View>
        
//         : <Text>Not SignedIn</Text> }
         
        
//           </View>
//     );
//   }
// }

// export default LoginGoogle;