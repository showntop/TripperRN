'use strict';

import React, { Component } from 'react';

import {
  View,
} from 'react-native';

import  * as StyleSheet from '../utility/StyleSheet';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Drawer 			 from 'react-native-drawer';

import DrawerSider       from '../components/DrawerSider';
import TripperTabItem    from '../components/TripperTabItem'

import CharmView     from '../components/CharmView'
import ChannelView   from '../components/ChannelView'
import CommunityView from '../components/CommunityView'
import ShopView      from '../components/ShopView'

//tabbar图片资源
const TAB_BAR_RESOURCES = [
  [require('../images/wonder.png'), require('../images/wonder_active.png')],
  [require('../images/category.png'), require('../images/category_active.png')],
  [require('../images/topic.png'), require('../images/topic_active.png')],
  [require('../images/mall.png'), require('../images/mall_active.png')]
];

class MainView extends Component {

  constructor(props) {
    super(props);
  
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
	           return <TripperTabItem tabBarResources={TAB_BAR_RESOURCES}/>
	         }}>
	         <CharmView     style={styles.subView} {...this.props}/>
	         <ChannelView   style={styles.subView} {...this.props}/>
	         <CommunityView style={styles.subView} {...this.props}/>
	         <ShopView      style={styles.subView} {...this.props}/>
	       </ScrollableTabView>
	    </Drawer>
    );
  }
}

MainView.childContextTypes = {
  openDrawer: React.PropTypes.func,
};

const styles = StyleSheet.create({
	drawer: { 
		shadowColor: '#000000', 
		shadowOpacity: 0.8, 
		shadowRadius: 3
	},

});

export default MainView;