'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Alert
} from 'react-native';

import {connect} from 'react-redux'

import BaseContainer from '../containers/BaseContainer'
import TripperHeader from '../components/TripperHeader'
import TopicContainer from '../containers/TopicContainer'

import TopicList from '../components/TopicList'

class CommunityContainer extends BaseContainer {

  constructor(props) {
    super(props);
  
    this.state = {};
    this.openEditor = this.openEditor.bind(this)
  }

  openEditor() {
  	const {navigator} = this.props

  	navigator.push({
  		component: TopicContainer,
  		name: 'TopicContainer',
  	})
  }

  render() {
  	let	rightItem = {
  		  layout: 'icon',
  		  title: 'write',
  		  icon: require('../images/icon_add.png'),
  		  onPress: this.openEditor,
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
       <TopicList {...this.props}/>
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


function mapStateToProps (state) {
  const {topicStore} = state;
  return {
  	topicStore
  };
 
}

export default connect(mapStateToProps)(CommunityContainer);