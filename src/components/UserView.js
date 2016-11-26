'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
// import ParallaxScrollView from 'react-native-parallax-scroll-view';
import NavigationBar from 'react-native-navbar';
import ImagePicker from 'react-native-image-picker';

import {update} from '../actions/users'

import * as Apix from '../api';
const Api = Apix.default()

// More info on all the options is below in the README...just some common use cases shown here
var options = {
  title: '选择图片',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class UserView extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  navtoLast() {
    const {navigator} = this.props;
    navigator.pop();
  }

  uploadAvatar() {
    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info below in README)
     */
    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {

        // You can display the image using either data...
        const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        // or a reference to the platform specific asset location
        if (Platform.OS === 'ios') {
          const source = {uri: response.uri.replace('file://', ''), isStatic: true};
        } else {
          const source = {uri: response.uri, isStatic: true};
        }
        let result = Api.project.createUptoken(response.uri).then(result => {
          return Api.project.uploadAsset(response.uri,result.uptoken)
        }).then(resp =>{
          return resp.json()
        }).then(result => {
          const {currentUser} = this.props
          this.props.dispatch(update(currentUser.data.token, {avatar: "http://og7lh5z5q.bkt.clouddn.com/"+result.key}))  
        });
      }
    });
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F0FFF0'}}>
        <NavigationBar
          style={styles.navbar}
          title={{title: '我的小点'}}
          statusBar={
            {style: 'light-content',
            tintColor: '#8FBC8F'}   
          }
          leftButton={  
            <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={this.navtoLast.bind(this)}>
              <Icon name='arrow-left' size={18} style={{color: 'white'}} />
            </TouchableOpacity>
          } 
          rightButton={
            <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={ this.props.onRightPress}>
                <Icon name='check' size={18} style={{color: 'white'}} />
            </TouchableOpacity>
          }
        />
        <View style={{flex: 1, }}>
          <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 25}}>
              <TouchableOpacity  onPress ={this.uploadAvatar.bind(this)}>
                <Image source={{uri: 'http://imgsize.ph.126.net/?imgurl=http://img2.ph.126.net/JMYXYuEEosKxlU3t-DMD2Q==/6631800040445927351.jpg_64x64x0.jpg'}} style={{width: 80, height: 80, borderRadius: 40}}/>
              </TouchableOpacity>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>南芝</Text>
              <View style={{flexDirection: 'row'}}>
                <Icon name='female' size={14} style={{color: 'red'}} />
                <Text style={{fontSize: 14}}>ID:650098</Text>
              </View>
              <Text style={{color: 'black', marginTop: 5, fontSize: 12, paddingLeft: 50, paddingRight: 50}}>
                  远不过天，飞鸟无缘，只在悬崖何处边？
              </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end', margin: 10}}>
              <TouchableHighlight style={{padding: 10}}>
                  <View>
                      <Text textAlign="center" style={{color: 'black', fontSize: 10, fontWeight: 'bold'}}>100</Text>
                      <Text textAlign="center" style={{color: 'black', fontSize: 10, fontWeight: 'bold'}}>粉丝</Text>
                  </View>
              </TouchableHighlight>
              <View style={{borderRightWidth: 1, borderColor: 'black', width: 1, marginTop: 10, marginBottom: 10}} />
              <TouchableHighlight style={{margin: 10}} >
                  <View>
                      <Text textAlign="center" style={{color: 'black', fontSize: 10, fontWeight: 'bold'}}>90</Text>
                      <Text textAlign="center" style={{color: 'black', fontSize: 10, fontWeight: 'bold'}}>关注</Text>
                  </View>
              </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    backgroundColor: '#69D685'
  },
  toolItem: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default UserView;