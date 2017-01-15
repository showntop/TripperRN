'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Modal,
  StatusBar,
} from 'react-native';

import NaviHeader     from '../components/NaviHeader';
import OverlaySpinner from '../components/OverlaySpinner';

class TripperComponent extends Component {

  constructor(props) {
    super(props);
  }

  renderHeader() {
  	return(
  	  <NaviHeader title={ this.props.headerTitle || '微米' } {...this.props}/>
  	);
  }

  renderBody() {

  }

  renderFooter() {

  }

  render() {
    return (
      <View style={styles.container}>
        { this.props.needSpinner ? <OverlaySpinner visible={this.props.showSpinner}/> : <View/> }
      	<StatusBar
          backgroundColor='#5597B8'
        />
        <View style={styles.main}>
      	{ this.renderHeader() }
      	{ this.renderBody()   }
      	{ this.renderFooter() }
      	</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
  	flex: 1,
  },
  spinner: {
  	justifyContent: 'center',
  	alignItems: 'center',
  }
});


export default TripperComponent;