'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View
} from 'react-native';
import {connect} from 'react-redux'

import TripperEditor from '../components/TripperEditor'
import TripperNavBar from '../components/TripperNavBar'

class EditorContainer extends Component {
  render() {
    return (
    	<TripperEditor {...this.props}/>
    );
  }
}

const styles = StyleSheet.create({

});


function mapStateToProps (state) {
	const {projectStore, userStore} = state;
	return {userStore, projectStore};
}

export default connect(mapStateToProps)(EditorContainer);
