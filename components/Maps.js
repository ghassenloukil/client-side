import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
            <View style={styles.container}>
                { !this.state.ready && (
                <Text style={styles.big}>Using Geolocation in React Native.</Text>
                )}
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    big: {
        fontSize: 48
    },
    map: {
        ...StyleSheet.absoluteFillObject,
      },
});