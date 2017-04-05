'use strict';

import React, { Component } from 'react';

import {
  View,
  Text
} from 'react-native';

import * as StyleSheet  from '../utility/StyleSheet';

import TripperComponent from '../components/TripperComponent';
import TripperHeader    from '../components/TripperHeader';
import TopicList        from '../components/TopicList';
import TopicContainer   from '../containers/TopicContainer';

class CommunityView extends TripperComponent {

  static contextTypes = {
    openDrawer: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  _handleShowMenu() {
    this.context.openDrawer();
  }

  openEditor() {
    const {navigator} = this.props
      navigator.push({
        component: TopicContainer,
          name: 'TopicContainer',
      })
  }

  renderHeader() {
  	let	rightItem = {
  		  layout: 'icon',
  		  title: 'write',
  		  icon: require('../images/icon_add_topic.png'),
  		  onPress: () => this.openEditor(),
  		};
  	return(
      <TripperHeader
    	  style={styles.header}
	      leftItem={{
	        layout: 'icon',
	        title: 'Close',
	        icon: require('../images/logo_white@32.png'),
          onPress: () => this._handleShowMenu(),
	      }}
    	  rightItem={rightItem}>
    	  <View style={styles.headerContent}>
    	    <Text style={styles.title}>
    	      <Text style={styles.day}>{'话题/讨论'}</Text>
    	      {'\n'}
    	      <Text style={styles.time}>{'生活太美，源于你的创造'}</Text>
    	    </Text>
    	  </View>
      </TripperHeader>
    );
  }
  
  renderBody() {
    return (
       <TopicList {...this.props}/>
    );
  }
}

const styles = StyleSheet.create({
	header: {
	  // android: {
	    backgroundColor: '#5597B8',
	  // },
	},
  headerContent: {
    android: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    ios: {
      height: 65,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  title: {
    color: 'white',
    fontSize: 12,
    ios: {
      textAlign: 'center',
    },
  },
  day: {
    ios: {
      fontWeight: 'bold',
    },
    android: {
      fontSize: 9,
    },
  },
  time: {
    android: {
      fontWeight: 'bold',
      fontSize: 17,
    }
  },
});


export default CommunityView;