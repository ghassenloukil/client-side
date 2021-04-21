import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import MapView , {Marker} from 'react-native-maps';

export default class Maps extends React.Component {
    constructor(){
        super();
        this.state = {
            ready: false,
            where: {lat:null, lng:null},
            error: null
        }
    }
    componentDidMount(){
        let geoOptions = {
            enableHighAccuracy: true,
            timeOut: 20000,
            maximumAge: 60 * 60 * 24
        };
        this.setState({ready:false, error: null });
        navigator.geolocation.getCurrentPosition( this.geoSuccess, 
                                                this.geoFailure,
                                                geoOptions);
    }
    geoSuccess = (position) => {
        console.log(position.coords.latitude);
        
        this.setState({
            ready:true,
            where: {lat: position.coords.latitude,lng:position.coords.longitude }
        })
    }
    geoFailure = (err) => {
        this.setState({error: err.message});
    }
    render() {
        return (
            <View style={{backgroundColor:"black"}}>
      <View style={{alignItems: 'center', justifyContent:'center'}}>
      <Image   style={{ width: 100, height: 150, marginTop: 0}} source={require('./parki.jpg')}/> 
      </View> 
            <View style={styles.container}>
                { this.state.error && (
                <Text style={styles.big}>{this.state.error}</Text>
                )}
                { this.state.ready && (
                    <MapView  style={styles.map}
                    initialRegion={{
                      latitude: this.state.where.lat,
                      longitude: this.state.where.lng,
                      latitudeDelta: 0.0922,
                      longitudeDelta: 0.0421,
                    }}
                  >
                      <MapView.Marker
            coordinate={{latitude: this.state.where.lat,
                longitude: this.state.where.lng,}}
            title={"title"}
            description={"description"}
         />
                  </MapView>
                   
                )}
            </View>
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // ...StyleSheet.absoluteFillObject,
        // position: 'absolute',
        left: 0,
        right: 0,
        // top: '20%',
        bottom: 0,
        height: '80%',
        width: '100%',
        // flex: 1,
        // marginTop: '50%',
        // justifyContent: 'flex-end',
        // alignItems: 'center',
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        // marginTop: 10

    },
    big: {
        // fontSize: 48
    },
    map: {
        ...StyleSheet.absoluteFillObject,
      },
});