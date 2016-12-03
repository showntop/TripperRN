'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import {connect} from 'react-redux'

import TopicCreator from '../components/TopicCreator'
import TopicView    from '../components/TopicView'

class TopicContainer extends Component {
  render() {

    if (this.props.route && this.props.route.id) {
      return(
        <TopicView {...this.props} id={this.props.route.id}/>
        );
    }else{
      return (
        <TopicCreator {...this.props} />
      );
    }
  }
}

const styles = StyleSheet.create({

});


function mapStateToProps (state) {
	const {topicStore, user} = state;
	const {currentUser} = user;
	return {currentUser, topicStore};
}

export default connect(mapStateToProps)(TopicContainer);