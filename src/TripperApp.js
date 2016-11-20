'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Navigator,
  BackAndroid,
  View,
  StatusBar,
  Modal,
  Text,
} from 'react-native';

var { connect } = require('react-redux');

import Style from './constants/Style';
import TripperNavigator from './TripperNavigator'

import DailyContainer from './containers/DailyContainer'

class TripperApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showDaily: true
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor={Style.STATUSBAR_COLOR}
          barStyle="light-content"
          />
        <TripperNavigator/>
        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.showDaily}
          onRequestClose={()=>{this.setState({showDaily: false});}}>
          <DailyContainer close={()=>{this.setState({showDaily: false});}}/>
        </Modal>
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
