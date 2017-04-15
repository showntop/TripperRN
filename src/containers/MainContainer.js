'use strict';

import React, { Component } from 'react';

import {
  View,
  Platform,
} from 'react-native';

import { connect }  from 'react-redux';

import MainView from '../components/MainView'

class MainContainer extends Component {

  constructor(props) {
	  super(props);
  }

  render() {
  	return (
  	  <MainView {...this.props}/>
  	);
  }
}

function mapStateToProps (state) {
  const {userStore, feedStore, channelStore, topicStore} = state;
  return {
    userStore, feedStore, channelStore, topicStore
  }
}

export default connect(mapStateToProps)(MainContainer);
