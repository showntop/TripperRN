'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Navigator,
  Platform,
  BackAndroid
} from 'react-native';

var { connect } = require('react-redux');

import Style from './constants/Style';
import MainContainer from './containers/MainContainer';
import Toast from 'react-native-root-toast';

let lastClickTime = 0;

class TripperNavigator extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};

    this.onBackAndroid = this.onBackAndroid.bind(this);
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  componentDidMount (){
    //想要使用微信分享, 你必须到微信分享平台 https://open.weixin.qq.com/ 申请appid
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  onBackAndroid() {
    const routers = this.refs.navigator.getCurrentRoutes();
    if (routers.length > 1) {
      this.refs.navigator.pop();
      return true;
    }
    let now = new Date().getTime();
    if (now - lastClickTime < 2500) {//2.5秒内点击后退键两次推出应用程序
      return false;//控制权交给原生
    }
    lastClickTime = now;
    Toast.show('再按一次退出应用');
    return true;
  }

  render() {
    return (
      <Navigator
        ref="navigator"
        style={styles.container}
        configureScene={(route) => {
          if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }else {
            return Navigator.SceneConfigs.FloatFromBottom;
          }
        }}
        initialRoute={{
          component: MainContainer,
          name: 'Main'
        }}             
        renderScene={this.renderScene}
      />
    );
  }

  renderScene(route, navigator) {
    let Component = route.component;
    return (
      <Component navigator={navigator} {...route.props}/>
    );
  }

}

TripperNavigator.childContextTypes = {
  addBackButtonListener: React.PropTypes.func,
  removeBackButtonListener: React.PropTypes.func,
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Style.BACKGROUND_COLOR,
  }
});


function mapStateToProps (state) {
  return {}
}

export default connect(mapStateToProps)(TripperNavigator);
