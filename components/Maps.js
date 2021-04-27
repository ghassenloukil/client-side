import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import Dropdown from "react-native-modal-dropdown";
import Position from "./Position.js";
const { height, width } = Dimensions.get("screen");
const GOOGLE_API_KEY = "AIzaSyDlq2OkQ1dmOY1rPvtnvK8ZntS21TNOsAc";
const parkingsSpots = {
  coordinate: {
    latitude: 36.868,
    longitude: 10.2404,
  },
  coordinate: {
    latitude: 36.8512,
    longitude: 10.2584,
  },
  coordinate: {
    latitude: 36.8512,
    longitude: 10.2584,
  },
};

export default class Maps extends React.Component {
  constructor() {
    super();
    this.state = {
      ready: false,
      where: { lat: null, lng: null },
      error: null,
      hours: {},
      parkingsSpots: [
        {
          coordinates: {
            latitude: 36.868,
            longitude: 10.2404,
          },
        },
        {
          coordinates: {
            latitude: 36.8512,
            longitude: 10.2584,
          },
        },
      ],
    };
  }
  componentDidMount() {
    let geoOptions = {
      enableHighAccuracy: true,
      timeOut: 20000,
      maximumAge: 60 * 60 * 24,
    };
    this.setState({ ready: false, error: null });
    navigator.geolocation.getCurrentPosition(
      this.geoSuccess,
      this.geoFailure,
      geoOptions
    );
  }
  geoSuccess = (position) => {
    console.log(position.coords.latitude);

    this.setState({
      ready: true,
      where: { lat: position.coords.latitude, lng: position.coords.longitude },
    });
  };
  geoFailure = (err) => {
    this.setState({ error: err.message });
  };
  renderParkin(item) {
    return (
      <View key={`Parking ${item.id}`}>
        <Text>{item.title}</Text>
      </View>
    );
  }
  renderHours(id) {
    const { hours } = this.state;
    const availableHours = [1, 2, 3, 4, 5, 6];

    return (
      <Dropdown
        defaultIndex={0}
        options={availableHours}
        style={styles.hoursDropdown}
        defaultValue={`0${hours[id]}:00` || "01:00"}
        dropdownStyle={styles.hoursDropdownStyle}
        onSelect={(index, value) => this.handleHours(id, value)}
        renderRow={(option) => (
          <Text style={styles.hoursDropdownOption}>
            {`0${option}:00`} HOURS
          </Text>
        )}
        renderButtonText={(option) => `0${option}:00`}
      />
    );
  }

  render() {
    return (
      <View style={{ backgroundColor: "black" }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image
            style={{ width: 100, height: 150, marginTop: 0 }}
            source={require("./parki.jpg")}
          />
        </View>
        <View style={styles.container}>
          {!this.state.ready && (
            <Image
              style={styles.tinyLogon}
              source={{
                uri: "./log.png",
              }}
            />
          )}
          {this.state.error && (
            <Text style={styles.big}>{this.state.error}</Text>
          )}
          {this.state.ready && (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: this.state.where.lat,
                longitude: this.state.where.lng,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            >
              <Marker
                coordinate={{ latitude: 36.8559, longitude: 10.2572 }}
                title={"heyyy"}
                description={"open 24/24"}
              >
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri:
                      "https://www.iconpacks.net/icons/2/free-parking-sign-icon-2526-thumb.png",
                  }}
                />
              </Marker>
              <MapView.Marker
                style={styles.tinyLogo}
                coordinate={{
                  latitude: this.state.where.lat,
                  longitude: this.state.where.lng,
                }}
                title={"location"}
                description={"description"}
              >
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri:
                      "https://image.flaticon.com/icons/png/128/1180/1180754.png",
                  }}
                />
              </MapView.Marker>
              <Position />
            </MapView>
          )}

          <View></View>
        </View>
      </View>
    );
  }
}
const SIZES = {
  base: 12,
  icon: 16,
  font: 16,
};
const COLORS = {
  red: "#D83C54",
  gray: "#7D818A",
  black: "#3D4448",
  white: "#FFFFFF",
  overlay: "#C1BEC0",
};
const styles = StyleSheet.create({
  container: {
    left: 0,
    right: 0,
    bottom: 0,
    height: "80%",
    width: "100%",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
  tinyLogon: {
    width: 400,
    height: 400,
  },
  parking: {
    flexDirection: "row",

    borderRadius: 6,

    width: width - 24 * 2,
  },
  hours: {
    flex: 3,
    flexDirection: "column",
    marginLeft: SIZES.base / 2,
    justifyContent: "space-evenly",
  },
  hoursDropdown: {
    borderRadius: SIZES.base / 2,
    borderColor: COLORS.overlay,
    borderWidth: 1,
    padding: SIZES.base,
    marginRight: SIZES.base / 2,
  },
  hoursDropdownOption: {
    padding: 5,
    fontSize: SIZES.font * 0.8,
  },
  hoursDropdownStyle: {
    marginLeft: -SIZES.base,
    paddingHorizontal: SIZES.base / 2,
    marginVertical: -(SIZES.base + 1),
  },
  payBtn: {
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SIZES.base * 1.5,
    backgroundColor: COLORS.red,
  },
});
