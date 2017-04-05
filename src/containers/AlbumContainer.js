'use strict';

import React, { Component } from 'react';
import {connect} from 'react-redux'

import {
  StyleSheet,
} from 'react-native';

import AlbumView from '../components/AlbumView'


class AlbumContainer extends Component {
  render() {
    return (
      <AlbumView {...this.props}/>
    );
  }
}

const styles = StyleSheet.create({

});


function mapStateToProps (state) {
	const {albumStore, user} = state;
	// const {currentUser} = user;
	// const {album} = albumStore;
	// return {currentUser, album};
	return { albumStore };

}

export default connect(mapStateToProps)(AlbumContainer);
