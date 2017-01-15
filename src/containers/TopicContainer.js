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
        <TopicCreator
          headerTitle='创建话题'
          needSpinner={true} 
          showSpinner={this.props.topicStore.showSpinner}
          {...this.props} 
        />
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