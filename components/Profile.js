import React ,{ useState, useEffect }from 'react';
import axios from 'axios'
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
  const [ data, setData ] = useState([]);

	const getDetails = {
		data: data
	};
 
  useEffect(() =>{
    var email = localStorage.getItem('email')
    axios.get(`http://10.0.2.2:3000/api/ParkiZone/Profile/${email}`).then(response =>{
      console.log(response.data,'fdfdfdf')
      setData(response.data)
      localStorage.setItem("id", response.data.id)
    }).catch(error =>{
      console.log(error)

    })
    
  },[])

          
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
        {/* <Button onPress={()=>navigate('Settings')}/> */}
          <Avatar.Image
            source={{
              url: 'https://api.adorable.io/avatars/80/abott@adorable.png',
            }}
            size={80} 
          />
          <View style={{ marginLeft: 20 }}>
            <Title style={styles.title, {
              marginTop: 15,
              marginBottom: 5
            }} style={styles.text}>{data.username}</Title>
            <Caption style={styles.caption} style={styles.text}>11_004</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          {/* <Icon name="map-market-radius"  size={20} /> */}
          <Text style={{  marginLeft: 20 }}>{data.email}</Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="phone"  size={20} /> */}
          <Text style={{  marginLeft: 20 }} style={styles.text}>53024247</Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="email"  size={20} /> */}
          <Text style={{ marginLeft: 20 }} style={styles.text}>hhhrrhrh</Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox, {
          borderRightColor: '#DDDDDD',
          borderRightWidth: 1
        }}>
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
{/* <Button title='update' onPress={()=>navigate('Settings')}/> */}
<Button title='update' color ="#F9C80E"/>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#081845',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
  }
});
export default Profile
