'use strict';

import React, { Component } from 'react';

import {
  View,
  Platform,
} from 'react-native';

import  * as StyleSheet from '../utility/StyleSheet';

import { connect }  from 'react-redux';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Drawer from 'react-native-drawer';

import DrawerSider from '../components/DrawerSider';
import TripperTabItem from '../components/TripperTabItem'

import BaseContainer from '../containers/BaseContainer'
import DiscoverContainer from '../containers/DiscoverContainer'
import ChannelContainer from '../containers/ChannelContainer'
import CommunityContainer from '../containers/CommunityContainer'
import ShopContainer from '../containers/ShopContainer'

//tabbar图片资源
const TAB_BAR_RESOURCES = [
  [require('../images/home.png'), require('../images/home_active.png')],
  [require('../images/reading.png'), require('../images/reading_active.png')],
  [require('../images/music.png'), require('../images/music_active.png')],
  [require('../images/movie.png'), require('../images/movie_active.png')]
];


class MainContainer extends BaseContainer {

  constructor(props) {
	super(props);
	
	this.state = {};

    this.openDrawer = this.openDrawer.bind(this);
  }

  getChildContext() {
    return {
      openDrawer: this.openDrawer,
    };
  }

  openDrawer() {
    this.refs.drawer.open();
  }

  render() {

	  return (
	  	<Drawer
	      ref='drawer'
	      openDrawerOffset={100}
	      content={<DrawerSider closeDrawer={()=>this.refs.drawer.close()} {...this.props}/>}>
	      <ScrollableTabView
	         tabBarPosition="bottom"
	         locked={true}
	         scrollWithoutAnimation={false}
	         prerenderingSiblingsNumber={4}
	         renderTabBar={() => {
	           /*使用自定义tabbar*/
	           return <TripperTabItem tabBarResources={TAB_BAR_RESOURCES}/>
	         }}>
	         <DiscoverContainer style={styles.subView} {...this.props}/>
	         <ChannelContainer style={styles.subView} {...this.props}/>
	         <CommunityContainer style={styles.subView} {...this.props}/>
	         <ShopContainer style={styles.subView} {...this.props}/>

	       </ScrollableTabView>
	    </Drawer>
	  );
	}
}

MainContainer.childContextTypes = {
  openDrawer: React.PropTypes.func,
};

const styles = StyleSheet.create({


});

function mapStateToProps (state) {
  const {user, error} = state;
  const {currentUser} = user
  return {
    currentUser, error
  }
}

export default connect(mapStateToProps)(MainContainer);
