import React from 'react';

import {
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  View
  } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';
import * as StyleSheet from '../utility/StyleSheet';

export default class EditorHeader extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  navtoLast() {
    const {navigator} = this.props;
    navigator.pop();
  }

  render() {
    return (
      <NavigationBar
              style={styles.navbar}
              title={{title: this.props.title, tintColor: 'white'}}
              statusBar={
                {style: 'light-content',
                tintColor: '#5597B8'}   
              }
              leftButton={  
                <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={this.navtoLast.bind(this)}>
                  <Icon name='md-arrow-back' size={28} style={{color: 'white'}} />
                </TouchableOpacity>
              } 
              rightButton={
                <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={ this.props.onRightPress}>
                    <Icon name='md-checkmark' size={28} style={{color: 'white'}} />
                </TouchableOpacity>
              }
      />
    );
  }
}

let styles = StyleSheet.create({
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
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }});
