// import a library to help create a component
import React from 'react';
import ReactNative, { View } from 'react-native';
import Header from './src/components/header';
import AlbumsList from './src/components/AlbumList';
// create a component
const App = () => {
	return (<View>
			<Header headerText={'Albums'} />
			<AlbumsList />
		</View>
	);
};

// render it to device
ReactNative.AppRegistry.registerComponent('albums', () => App);
