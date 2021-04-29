import React, { Component } from 'react';
import {
  Navigator,
} from 'react-native';
import Parks from './Parks.js';
const RouteMapper = (route, navigator) => {
  if (route.name === 'movies') {
    return (
      <Parks navigator={navigator} />
    );
  } else if (route.name === 'confirmation') {
    return (
      <Confirmation code={route.code} navigator={navigator} />
    );
  }
};

export default class App extends Component {
  render() {
    return (
      <Navigator
        // Default to parks route
        initialRoute={{ name: 'parks' }}
        // Use FloatFromBottom transition between screens
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        // Pass a route mapper functions
        renderScene={RouteMapper}
      />
    );
  }
}