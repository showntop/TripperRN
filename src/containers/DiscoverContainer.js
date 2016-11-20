'use strict';

import React, { Component } from 'react';

import {
  View,
  Platform,
} from 'react-native';

import {connect} from 'react-redux'
import * as StyleSheet from '../utility/StyleSheet'

import TripperNavBar from '../components/TripperNavBar'
import BaseContainer from '../containers/BaseContainer'

import TripperHeader from '../components/TripperHeader'
import {Text} from '../components/TripperText'

import ProjectCard from '../components/ProjectCard'

class DiscoverContainer extends BaseContainer {


  render() {
  	var rightItem;
  	if (Platform.OS === 'android') {
  		rightItem = {
  		  title: 'Share',
  		  icon: require('../images/menu.png'),
  		  onPress: this.shareCurrentSession,
  		};
  	}

    return (
      <View style={styles.container}>
	      <TripperHeader
	        style={styles.header}
	        leftItem={{
	          layout: 'icon',
	          title: 'Close',
	          icon: require('../images/menu.png'),
	          onPress: this.handleShowMenu,
	        }}
	        rightItem={rightItem}>
	        <View style={styles.headerContent}>
	          <Text style={styles.title}>
	            <Text style={styles.day}>DAY {this.state.day}</Text>
	            {'\n'}
	            <Text style={styles.time}>{'sectionTitle'}</Text>
	          </Text>
	        </View>
	      </TripperHeader>
	      <ProjectCard {...this.props}/>
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

function mapStateToProps (state) {
  const {project} = state;
  return project.selectedProject;
 
}

export default connect(mapStateToProps)(DiscoverContainer);