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
import EditorContainer from '../containers/EditorContainer'

class DiscoverContainer extends BaseContainer {

  constructor(props) {
    super(props);
  
    this.state = {};

    this.openEditor = this.openEditor.bind(this)
  }

  openEditor() {
  	const {navigator} = this.props

  	navigator.push({
  		component: EditorContainer,
  		name: 'EditorContainer'
  	})
  }

  render() {
  	let	rightItem = {
  		  title: 'Share',
  		  icon: require('../images/note.png'),
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
	        <View style={styles.headerContent}>
	          <Text style={styles.title}>
	            <Text style={styles.day}>11月 {this.state.day}</Text>
	            {'\n'}
	            <Text style={styles.time}>{'路上'}</Text>
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
  const {project, navigator} = state;
  return project.selectedProject;
 
}

export default connect(mapStateToProps)(DiscoverContainer);