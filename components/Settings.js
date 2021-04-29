import React ,{ useState }from 'react';
import axios from 'axios'
import { View, Button, StyleSheet, SafeAreaView ,TextInput } from 'react-native';
const UpdateInfo = ({ navigation }) => {
	const [ email, setEmail ] = useState('');
	const [ name, setName ] = useState('');
	

	// const userDetails = {
	// 	email: email,
	// 	name: name
		
	// };
  const updateProf = (id) => {
		 axios.patch(`http://10.0.2.2:3000/api/ParkiZone/Profile/${id}`, 	{
		  email: email,
	   	name: name
		},{headers:{
            'Content-Type' : 'application/json',
        }}).then((res) => {
				console.log(res,'hello');
			}).catch ((err)=>{
				console.log(err, 'hello')
			})
	};
        return (
            <SafeAreaView>
              <TextInput  style={styles.input} onChangeText={setEmail} value={email} placeholder="email" />
              <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="UserName" />
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