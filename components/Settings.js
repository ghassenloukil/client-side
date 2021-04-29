import React ,{ useState }from 'react';
import axios from 'axios'
import { View, Button, StyleSheet, SafeAreaView ,TextInput } from 'react-native';
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
            <SafeAreaView>
              <TextInput  style={styles.input} onChangeText={setEmail} value={email} placeholder="email" />
              <TextInput style={styles.input} onChangeText={setusername} value={username} placeholder="UserName" />
              <Button title="hello" onPress={updateProf}/>
            </SafeAreaView>
          );
   
}
 const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },
  });
  export default UpdateInfo