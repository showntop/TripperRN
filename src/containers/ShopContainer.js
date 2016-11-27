'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import ShopView from '../components/ShopView'
import TripperHeader from '../components/TripperHeader'

class ShopContainer extends Component {
  render() {
    return (
      <View style={styles.container}>
	      <TripperHeader
	        style={styles.header}
	        leftItem={{
	          layout: 'icon',
	          title: 'Close',
	          icon: require('../images/logo_white@32.png'),
	          onPress: this.handleShowMenu,
	        }}>
	      </TripperHeader>
      	  <ShopView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	},
	header: {
	  // android: {
	    backgroundColor: '#5597B8',
	  // },
	},
});


export default ShopContainer;