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

    if (this.props.id) {
      return(
        <TopicView {...this.props} id={this.props.id}/>
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
	const {topicStore, userStore} = state;
	return {userStore, topicStore};
}

export default connect(mapStateToProps)(TopicContainer);