'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import BaseContainer from '../containers/BaseContainer'
import TripperHeader from '../components/TripperHeader'

import TopicList from '../components/TopicList'

class CommunityContainer extends BaseContainer {
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

       <TopicList/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: "#E0EEEE"
	},
	header: {
	  // android: {
	    backgroundColor: '#5597B8',
	  // },
	}
});


export default CommunityContainer;