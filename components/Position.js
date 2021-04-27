import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
const { height, width } = Dimensions.get("screen");
export default class Position extends React.Component {
  constructor() {
    super();
    this.state = {
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
  render() {
    return (
      <View>
        {this.state.parkingsSpots.map((e, index) => {
          return (
            <MapView.Marker key={index} coordinate={e.coordinates}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri:
                    "https://www.iconpacks.net/icons/2/free-parking-sign-icon-2526-thumb.png",
                }}
              />
            </MapView.Marker>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 1000,
    width: 500,
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  big: {
    fontSize: 48,
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
});
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
