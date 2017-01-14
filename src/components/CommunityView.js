'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import TripperComponent from '../components/TripperComponent';
import TripperHeader    from '../components/TripperHeader';
import TopicList        from '../components/TopicList';

class CommunityView extends TripperComponent {

  static contextTypes = {
    openDrawer: React.PropTypes.func,
  };

  _handleShowMenu() {
    this.context.openDrawer();
  }

  renderHeader() {
  	let	rightItem = {
  		  layout: 'icon',
  		  title: 'write',
  		  icon: require('../images/note.png'),
  		  onPress: this.openEditor,
  		};
  	return(
      <TripperHeader
    	  style={styles.header}
	      leftItem={{
	        layout: 'icon',
	        title: 'Close',
	        icon: require('../images/logo_white@32.png'),
          onPress: () => this._handleShowMenu(),
	      }}
    	  rightItem={rightItem}>
    	  <View style={styles.headerContent}>
    	    <Text style={styles.title}>
    	      <Text style={styles.day}>11月 {'11'}</Text>
    	      {'\n'}
    	      <Text style={styles.time}>{'话题'}</Text>
    	    </Text>
    	  </View>
      </TripperHeader>
    );
  }
  
  renderBody() {
    return (
       <TopicList {...this.props}/>
    );
  }
}

const styles = StyleSheet.create({
	header: {
	  // android: {
	    backgroundColor: '#5597B8',
	  // },
	},
});


export default CommunityView;