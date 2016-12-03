'use strict';

import React, { Component } from 'react';

import {
  View,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';

import * as StyleSheet from '../utility/StyleSheet'

class ReadingHeader extends Component {
  render() {
    return (
      <NavigationBar
	      style={styles.navbar}
	      title={{title: this.props.title}}
	      statusBar={
	        {style: 'light-content',
	        tintColor: '#8FBC8F'}   
	      }
	      leftButton={  
	        <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} >
	          <Icon name='ios-book' size={28} style={{color: 'green'}} />
	        </TouchableOpacity>
	      } 
      />
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    android: {
    	marginTop: 20
    },
    backgroundColor: '#5597B8'
  },
  toolItem: {
  	marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default ReadingHeader;