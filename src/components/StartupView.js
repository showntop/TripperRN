'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  StatusBar
} from 'react-native';

class StartupView extends Component {
  render() {
  	let width  = Dimensions.get('window').width;
  	let height = Dimensions.get('window').height;

    return (
      <View>
      	<Image source={{uri: 'http://img0.adesk.com/download/566e316d69401b2e0cf66158'}} 
      		style={{width: width, height: height}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default StartupView;