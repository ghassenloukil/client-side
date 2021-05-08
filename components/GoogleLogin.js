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
// import React from "react"
// import * as Google from 'expo-google-app-auth';
// import { StyleSheet, Text, View, Image, Button,TouchableHighlight } from "react-native"
// import Expo from "expo"

// export default class GoogleLogin extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       signedIn: false,
//       name: "",
//       photoUrl: ""
//     }
//   }
//   signIn =  async () => {
//     try {
//         const { type, user } = await Google.logInAsync({
            
//             androidClientId: `371018749691-9nk0haapubv3duq50kj5vtiv07vc4nt7.apps.googleusercontent.com`
//         });

//         if (type === 'success') {
//             // Then you can use the Google REST API
//             fetch(`http://10.0.2.2:3000/api/ParkiZone/login`,{
//                         body: JSON.stringify({email:user.email,phone:''}),
//                         headers: {
//                             'content-type': 'application/json'
//                         },
//                         method: 'POST'
//                     })
//                     .then(async (result)=>{
//                         result = await result.json();

//                         if(result.registred){
//                             _storeData(result.token)
//                             console.log('loged in')
//                             navigation.navigate('PetsDashboard')
//                         }else{
//                             navigation.navigate('PhoneNumber',{
//                                 firstname:user.name.split(' ')[0],
//                                 lastname:user.name.split(' ')[1],
//                                 email:user.email,
//                                 photo:user.photoUrl
//                             })
//                         }
                        
//                     })
//                     .catch((e) => console.log(e));
            
//         }
//     } catch (error) {
//         console.log('LoginScreen.js 19 | error with login', error);
//     }
// };
//   render() {
//     return (
//       <View style={styles.container}>
//           <TouchableHighlight  onPress={() => this.signIn()}>
// 					<View >
// 						<Image  source={{ uri: 'https://img-authors.flaticon.com/google.jpg  ' }} />
// 						<Text> Login with Google</Text>
// 					</View>
// 				</TouchableHighlight>
//         {this.state.signedIn ? (
//           <LoggedInPage name={this.state.name} photoUrl={this.state.photoUrl} />
//         ) : (
//           <LoginPage signIn={this.signIn} />
//         )}
//       </View>
//     )
//   }
// }

// const LoginPage = props => {
//   return (
//     <View>
//       <Text style={styles.header}>Sign In With Google</Text>
//       <Button title="Sign in with Google" onPress={() => props.signIn()} />
//     </View>
//   )
// }

// const LoggedInPage = props => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Welcome:{props.name}</Text>
//       <Image style={styles.image} source={{ uri: props.photoUrl }} />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   header: {
//     fontSize: 25
//   },
//   image: {
//     marginTop: 15,
//     width: 150,
//     height: 150,
//     borderColor: "rgba(0,0,0,0.2)",
//     borderWidth: 3,
//     borderRadius: 150
//   }
// })
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableHighlight, TouchableOpacity } from 'react-native';
import { AppAuth } from 'expo-app-auth';
import * as Google from 'expo-google-app-auth';



export default function LoginScreen({navigation}) {
	


	// log in with google api :
	const signInAsync = async () => {
		try {
			const { type, user } = await Google.logInAsync({
				iosClientId: `371018749691-pupupj0vtf2ek4tiog9ngd7ag9hq5m37.apps.googleusercontent.com`,
				androidClientId: `371018749691-pupupj0vtf2ek4tiog9ngd7ag9hq5m37.apps.googleusercontent.com`
			});

			if (type === 'success') {
				// Then you can use the Google REST API
				fetch(`http://10.0.2.2:3000/api/ParkiZone/login`,{
							body: JSON.stringify({email:user.email,phone:''}),
							headers: {
								'content-type': 'application/json'
							},
							method: 'POST'
						})
						.then(async (result)=>{
							result = await result.json();

							if(result.registred){
								_storeData(result.token)
								console.log('loged in')
								navigation.navigate('PetsDashboard')
							}else{
								navigation.navigate('PhoneNumber',{
									firstname:user.name.split(' ')[0],
									lastname:user.name.split(' ')[1],
									email:user.email,
									photo:user.photoUrl
								})
							}
							
						})
						.catch((e) => console.log(e));
				
			}
		} catch (error) {
			console.log('LoginScreen.js 19 | error with login', error);
		}
	};

	// login with facebook api :
	const [ isLoggedin, setLoggedinStatus ] = useState(false);
	const [ userData, setUserData ] = useState(null);
	const [ isImageLoading, setImageLoadStatus ] = useState(false);

	

	var logout = () => {
		setLoggedinStatus(false);
		setUserData(null);
		setImageLoadStatus(false);
	};
	
	return (
		<View >
			<Image  source={{ uri: 'https://i.ibb.co/Hx2QBLc/output-onlinepngtools-2.png' }} />
			<Image  source={{ uri: 'https://i.ibb.co/Ttb6xwD/output-onlinepngtools-1.png' }} />
			<View >
				<Text >
					By clicking log In, you agree with our terms. learn how we process your data in our privacy policy
					and Cookies Policy
				</Text>
			</View>
			<View >
				<TouchableHighlight  onPress={signInAsync}>
					<View >
						<Image  source={{ uri: 'https://img-authors.flaticon.com/google.jpg  ' }} />
						<Text> Login with Google</Text>
					</View>
				</TouchableHighlight>
				
		</View>
        </View>
	)

    }
// const styles = StyleSheet.create({
// 	Catpeek: {
// 		position: 'absolute',
// 		left:-73,
// 		top:5,
// 		width: 125,
// 		height: 110,

// 		//css login with facebook button:
// 	},
// 	// css Text :
// 	body: {
// 		color: 'white',
// 		justifyContent: 'center',
// 		// fontFamily: 'Cochin',
// 		fontStyle: 'normal',
// 		textAlign: 'center',
// 		marginRight: 50
// 	},
// 	//css of the text :
// 	text: {
// 		color: 'white',
// 		width: 355,
// 		top: 120,
// 		right: -20,
// 		marginBottom: 100
// 	},
// 	//css of facebook and email img :
// 	img: {
// 		position: 'absolute',
// 		width: 30,
// 		height: 30,
// 		left: -100,
// 		top: -5
// 	},
// 	//css of phone number img :
// 	imge: {
// 		position: 'absolute',
// 		width: 30,
// 		height: 30,
// 		left: -75,
// 		top: -5
// 	},
// 	//css logo form pinder:
// 	logoForm: {
// 		position: 'relative',
// 		width: 125,
// 		height: 110,
// 		left: 120

// 		//css login with facebook button:
// 	},
// 	loginBtn: {
// 		paddingVertical: 10,
// 		paddingHorizontal: 50,
// 		borderRadius: 20,
// 		alignItems: 'center',
// 		backgroundColor: 'white',
// 		padding: 100,
// 		position: 'relative',
// 		marginTop: 15,
// 		top: 30,
// 	}
// });