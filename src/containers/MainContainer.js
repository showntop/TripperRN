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
  [require('../images/wonder.png'), require('../images/wonder_active.png')],
  [require('../images/category.png'), require('../images/category_active.png')],
  [require('../images/topic.png'), require('../images/topic_active.png')],
  [require('../images/mall.png'), require('../images/mall_active.png')]
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
	  	  type="overlay"

	      ref='drawer'
	      openDrawerOffset={100}
	      style={styles.drawer}
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
	drawer: { 
		shadowColor: '#000000', 
		shadowOpacity: 0.8, 
		shadowRadius: 3
	},

});

function mapStateToProps (state) {
  const {userStore, errorStore} = state;
  return {
    userStore, errorStore
  }
}

export default connect(mapStateToProps)(MainContainer);
