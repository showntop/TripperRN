'use strict';

import React, { Component } from 'react';

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


export default AlbumContainer;