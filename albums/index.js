// Import a library to help create a component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/components/header.js';
import AlbumList from './src/components/AlbumList.js';


// Create a component
const App = () => (
	<View>
		<Header headerText={'Best albums'} />
		<AlbumList />
	</View>
);

AppRegistry.registerComponent('albums', () => App);
