'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Navigator,
  BackAndroid,
  View,
  StatusBar,
  Modal,
  Text
} from 'react-native';

var { connect } = require('react-redux');

import Style from './constants/Style';
import TripperNavigator from './TripperNavigator'

class TripperApp extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor={Style.STATUSBAR_COLOR}
          barStyle="light-content"
          />
        <TripperNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

function mapStateToProps (state) {
  const {reddit} = state;
  return {
    reddit
  }
}

export default connect(mapStateToProps)(TripperApp);
