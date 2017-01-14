'use strict';

import React, { Component } from 'react';

import {
  View,
} from 'react-native';

import * as StyleSheet  from '../utility/StyleSheet';

import TripperComponent from '../components/TripperComponent';
import EditorContainer  from '../containers/EditorContainer'
import ProjectContainer from '../containers/ProjectContainer'
import TripperHeader    from '../components/TripperHeader'
import {Text}           from '../components/TripperText'
import ProjectCard      from '../components/ProjectCard'

import {fetchSelectedProjects} from '../actions/projects';

class CharmView extends TripperComponent {
  
  static contextTypes = {
    openDrawer: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  
    this.openEditor    = this.openEditor.bind(this)
    this._handleSelect = this._handleSelect.bind(this)
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchSelectedProjects());
  }
  
  openEditor() {
  	const {navigator} = this.props

  	navigator.push({
  		component: EditorContainer,
  		name: 'EditorContainer'
  	})
  }

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
    	      <Text style={styles.time}>{'路上'}</Text>
    	    </Text>
    	  </View>
      </TripperHeader>
    );
  }

  _handleSelect(project){
    let {navigator} =  this.props;
    navigator.push({
      component: ProjectContainer,
      name: 'ProjectContainer',
      props:{
        project: project,
      }
    });
  }

  renderBody() {
  	let {charmStore} = this.props;
    return (
      <ProjectCard items={charmStore.projects} handleSelect={this._handleSelect}/>
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


export default CharmView;