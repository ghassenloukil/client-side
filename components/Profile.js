import React from 'react';
import axios from 'axios'
import { View, Button, StyleSheet, SafeAreaView } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
      this.state={
        data:[]
      }
    
  }
  componentDidMount(){
    // var email=localStorage.getItem('email')
    axios.get(`http://10.0.2.2:3000/api/ParkiZone/Profile`,{email:'dhia@gmail.com'}).then(response =>{
      console.log(response.data,'fdfdfdf')
      this.setState({
        data:response.data
      })
      console.log(this.state.data,'fdfdfdfv')
    }).catch(error =>{
      console.log(error)

    })
    
  }
 
  render() {
 
            
  return (
    <SafeAreaView style={styles.container}>
       {console.log(this.state.data,'heyyyyy')}
      <View style={styles.userInfoSection}>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
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
            }}>{this.state.data}</Title>
            <Caption style={styles.caption}>11_004</Caption>
          </View>
        </View>
      </View>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          {/* <Icon name="map-market-radius"  size={20} /> */}
          <Text style={{  marginLeft: 20 }}>Ariana,Tunisia</Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="phone"  size={20} /> */}
          <Text style={{  marginLeft: 20 }}>53024247</Text>
        </View>
        <View style={styles.row}>
          {/* <Icon name="email"  size={20} /> */}
          <Text style={{ marginLeft: 20 }}>hhhrrhrh</Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox, {
          borderRightColor: '#DDDDDD',
          borderRightWidth: 1
        }}>
          <Title>140 </Title>
          <Caption>points</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12 </Title>
          <Caption>Orders</Caption>
        </View>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() =>{}}>
            <View style={styles.menuItem}>
              {/* <Icon name="heart-outline" color="#FF6347" size={25}/> */}
              <Text >Your Favorites</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() =>{}}>
            <View style={styles.menuItem}>
              {/* <Icon name="credit-card" color="#FF6347" size={25}/> */}
              <Text >Payment</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() =>{}}>
            <View style={styles.menuItem}>
              {/* <Icon name="share-outline" color="#FF6347" size={25}/> */}
              <Text >Tell Your Friends</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() =>{}}>
            <View style={styles.menuItem}>
              {/* <Icon name="account-check-outline" color="#FF6347" size={25}/> */}
              <Text >Support</Text>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() =>{}}>
            <View style={styles.menuItem}>
              {/* <Icon name="settings-outline" color="#FF6347" size={25}/> */}
              <Text >Settings</Text>
            </View>
          </TouchableRipple>
        </View>
    </SafeAreaView>
  );
};
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});