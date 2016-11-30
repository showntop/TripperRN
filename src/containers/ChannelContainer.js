'use strict';

import React, { Component } from 'react';

import {
  View,
  Platform
} from 'react-native';


import * as StyleSheet from '../utility/StyleSheet'

import TripperNavBar from '../components/TripperNavBar'
import BaseContainer from '../containers/BaseContainer'

import TripperHeader from '../components/TripperHeader'
import {Text} from '../components/TripperText'
import ChannelView from '../components/ChannelView'

class ChannelContainer extends BaseContainer {
  render() {
  	let	rightItem = {
  		  layout: 'icon',
  		  title: 'search',
  		  icon: require('../images/icon_search.png'),
  		  onPress: this.searchView,
  		};
    return (
      <View style={styles.container}>
	      <TripperHeader
	        style={styles.header}
	        leftItem={{
	          layout: 'icon',
	          title: 'Close',
	          icon: require('../images/logo_white@32.png'),
	          onPress: this.handleShowMenu,
	        }}
	        rightItem={rightItem}>
	      </TripperHeader>
	      <ChannelView />
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
	headerContent: {
	  android: {
	    flex: 1,
	    alignItems: 'flex-start',
	    justifyContent: 'center',
	  },
	  ios: {
	    height: 65,
	    alignItems: 'center',
	    justifyContent: 'center',
	  },
	},
	title: {
	  color: 'white',
	  fontSize: 12,
	  ios: {
	    textAlign: 'center',
	  },
	},
	day: {
	  ios: {
	    fontWeight: 'bold',
	  },
	  android: {
	    fontSize: 9,
	  },
	},
	time: {
	  android: {
	    fontWeight: 'bold',
	    fontSize: 17,
	  }
	},
	card: {
	  ios: {
	    borderRadius: 2,
	    marginHorizontal: 3,
	  },
	},
});


export default ChannelContainer;