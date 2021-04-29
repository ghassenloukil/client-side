import React ,{ useState }from 'react';
import axios from 'axios'
import { View, Button, StyleSheet, SafeAreaView ,TextInput } from 'react-native';
const UpdateInfo = ({ navigation }) => {
	const [ email, setEmail ] = useState('');
	const [ username, setName ] = useState('');
	

	
  const updateProf = (id) => {
		
		 axios.put(`http://10.0.2.2:3000/api/ParkiZone/Profile/${id}`, 	{
			email: email,
			username: username
		}).then((res) => {
				console.log(res,'hello');
			}).catch ((err)=>{
				console.log(err, 'hello')
			})
	};
        return (
            <SafeAreaView>
              <TextInput   style={styles.input} onChangeText={setEmail} value={email} placeholder="email" />
              <TextInput style={styles.input} onChangeText={setName} value={username} placeholder="UserName" />
              <Button  title ={'hey'} onPress={(id)=>updateProf(id)}/>
            </SafeAreaView>
          );
   
}
 const styles = StyleSheet.create({
    input: {
		height: 40,
		margin: 12,
		marginTop: 25,
		borderBottomWidth: 2
    },
  });
  export default UpdateInfo