import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class AlbumsList extends Component {

	state = { albums: [] };

	componentWillMount() {
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ albums: response.data }))
			.catch(err => console.error(err));
	}

	renderAlbums() {
		return this.state.albums.map(album => 
			<AlbumDetails key={album.title} album={album} />
		);
	}

	render() {
		console.log(this.state);
		return (
			<ScrollView>
				{this.renderAlbums()}
			</ScrollView>
		);
	}
}

export default AlbumsList;
