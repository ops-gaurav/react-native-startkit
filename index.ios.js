// import a library to help create a component
import React from 'react';
import ReactNative, { Text } from 'react-native';
// create a component
const App = () => (<Text>Some Text</Text>);

// render it to device
ReactNative.AppRegistry.registerComponent('albums', () => App);
