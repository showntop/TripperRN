'use strict';

import React, {PropTypes} from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Text
  } from 'react-native';

import NavigationBar from 'react-native-navbar';


const propTypes = {
  title: PropTypes.string,
  actions: PropTypes.array,
  navigator: PropTypes.object,
  navIcon: PropTypes.number,
  customView: PropTypes.object
};

class TripperNavBar extends React.Component {
  constructor (props) {
    super(props);
    this.onActionSelected = this.onActionSelected.bind(this);
  }


  onActionSelected (position) {
    this.props.onActionSelected();
  }

  render () {
    const {navigator} = this.props;
    if (this.props.customView) {
      return (
        <NavigationBar style={styles.toolbar}>
          {this.props.customView}
        </NavigationBar>
      )
    } else {
      return (
        <NavigationBar
          style={{flex: 1,backgroundColor: '#69D685', alignItems: 'center', height: 50}}
          statusBar={
            {style: 'light-content',
            tintColor: '#8FBC8F'}   
          }
          actions={this.props.actions}
          onActionSelected={this.onActionSelected}
          titleColor='#fff'
          leftButton={
                <TouchableOpacity onPress={this.onIconClicked} style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 5}}>
                    <Image source={this.props.navIcon ? this.props.navIcon : require('../images/icon_left.png')}/>
                    <Text style={{marginLeft: 5}}>{this.props.title}</Text>
                </TouchableOpacity>
            }
        />
      );
    }
  }
}

let styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#69D685',
    height: 50
  }
});

TripperNavBar.propTypes = propTypes;

TripperNavBar.defaultProps = {
  onActionSelected: function () {
  },
  title: '',
  actions: []
};

export default TripperNavBar;