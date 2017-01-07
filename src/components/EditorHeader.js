import React from 'react';

import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  View
  } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationBar from 'react-native-navbar';

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
              title={{title: this.props.title}}
              statusBar={
                {style: 'light-content',
                tintColor: '#5597B8'}   
              }
              leftButton={  
                <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={this.navtoLast.bind(this)}>
                  <Icon name='arrow-back' size={28} style={{color: 'white'}} />
                </TouchableOpacity>
              } 
              rightButton={
                <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={ this.props.onRightPress}>
                    <Icon name='check' size={28} style={{color: 'white'}} />
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
    backgroundColor: '#5597B8'
  },
  toolItem: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
