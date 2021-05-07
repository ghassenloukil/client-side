import React ,{ useState, useEffect }from 'react';
import axios from 'axios'
import { View, Button, StyleSheet, SafeAreaView,TouchableOpacity } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = ({ navigation: { navigate } }) => {
  const [ data, setData ] = useState([]);

	const getDetails = {
		data: data
	};
 
  useEffect(() =>{
    var email = localStorage.getItem('email')
    axios.get(`http://10.0.2.2:3000/api/ParkiZone/Profile/${email}`).then(response =>{
      // console.log(response.data,'fdfdfdf')
      setData(response.data)
      localStorage.setItem("id", response.data.id)
    }).catch(error =>{
      console.log(error)

    })
    
  },[])

          
  return (
    <SafeAreaView style={styles.container}>
      {console.log(data, "ezrethryjtruti")}
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
        {/* <Button onPress={()=>navigate('Settings')}/> */}
          <Avatar.Image
              source={require('./logo.png')}
            size={100} 
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={styles.title, {
              marginTop: 15,
              marginBottom: 5
            }} style={styles.text}> Username: {data.username} </Title>
             <Title style={styles.title, {
              marginTop: 15,
              marginBottom: 5
            }} style={styles.text}> Email: {data.email} </Title>
            {/* <Caption style={styles.caption} style={styles.text}>11_004</Caption> */}
          </View>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox, {
          borderRightColor: '#DDDDDD',
          // borderRightWidth: 1,
          // borderLeftWidth: 1,
          // marginRight: 70
        }}>
        </View>
          <View style={styles.infoBox}>
          <Title style={styles.text}>140 </Title>
          <Caption style={styles.text}>points</Caption>
          </View>
        <View style={styles.infoBox}>
          <Title style={styles.text}>12 </Title>
          <Caption style={styles.text}>Orders</Caption>
        </View>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() =>{}}>
            <View style={styles.menuItem}>
              {/* <Icon name="heart-outline" color="#FF6347" size={25}/> */}
              <Text  style={styles.text}>Your Favorites</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() =>{}}>
            <View style={styles.menuItem}>
              {/* <Icon name="credit-card" color="#FF6347" size={25}/> */}
              <Text  style={styles.text} >Payment</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() =>{}}>
            <View style={styles.menuItem}>
              {/* <Icon name="share-outline" color="#FF6347" size={25}/> */}
              <Text  style={styles.text}>Tell Your Friends</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() =>{}}>
            <View style={styles.menuItem}>
              {/* <Icon name="account-check-outline" color="#FF6347" size={25}/> */}
              <Text style={styles.text} >Support</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() =>{}}>
            <View style={styles.menuItem}>
              {/* <Icon name="settings-outline" color="#FF6347" size={25}/> */}
              <Text style={styles.text}>Settings</Text>
            </View>
          </TouchableRipple>
{/* <Button color="#F9C80E" style={styles.appButtonContainer} title='update' onPress={()=>navigate('Update')}/> */}
{/* <Button title='update' color ="#F9C80E"/> */}
<TouchableOpacity style={styles.appButtonContainer}  >
             <Text style={styles.appButtonText} onPress={()=>navigate('Update')}> update </Text>
           </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: "#F9C80E",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    paddingVertical: 10,
    width: 150,
    marginLeft: 140,
    marginTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#081845',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 20,
    // fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#DDDDDD',
    borderBottomWidth: 1,
    borderTopColor: '#DDDDDD',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',   
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30, 
  },
  menuItemText: {
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26, 
  },
  input: {
		height: 40,
		margin: 12,
		marginTop: 25,
		borderBottomWidth: 2
	},
  text:{
    color: 'white'
  },
  appButtonText: {
    fontSize: 18,
    color:"white",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
export default Profile
