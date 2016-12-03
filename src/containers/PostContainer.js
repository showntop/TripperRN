'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import {connect} from 'react-redux'

import PostCreator from '../components/PostCreator'

class PostContainer extends Component {
  render() {
    return(
    	<PostCreator {...this.props} topicId={this.props.topicId}/>
    	);
  }
}

const styles = StyleSheet.create({

});


function mapStateToProps (state) {
	const {postStore, user} = state;
	const {currentUser} = user;
	return {currentUser, postStore};
}

export default connect(mapStateToProps)(PostContainer);