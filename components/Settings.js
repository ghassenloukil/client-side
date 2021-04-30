import React ,{ useState }from 'react';
import axios from 'axios'
import { View, Button, StyleSheet, SafeAreaView ,TextInput ,TouchableOpacity ,Text } from 'react-native';
const UpdateInfo = () => {
	const [ email, setEmail ] = useState('');
	const [ username, setusername ] = useState('');
	

	// const userDetails = {
	// 	email: email,
	// 	name: name
		
	// };
  const updateProf = () => {
    var id = localStorage.getItem('id')
    var obj = {email: email, username: username}
    // console.log("this is my idddddddddddddddddd", obj)
		 axios.put(`http://10.0.2.2:3000/api/ParkiZone/Profile/${id}`, obj)
     .then((res) => {
				console.log(res);
			}).catch ((err)=>{
				console.log(err)
			})
    // console.log(email, username);
	};
        return (
            <SafeAreaView style={styles.container}>
              <TextInput  style={styles.input} onChangeText={setEmail} value={email} placeholder="email" />
              <TextInput style={styles.input} onChangeText={setusername} value={username} placeholder="UserName" />
              <Button  color= '#F9C80E' style={styles.btn} title="Edit" onPress={updateProf}/>
             
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
  export default UpdateInfo