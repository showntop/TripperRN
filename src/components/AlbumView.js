'use strict';

import React, { Component } from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
// import PageGroup from '../components/PageGroup';
import * as StyleSheet from '../utility/StyleSheet'


class AlbumView extends Component {

  navtoLast() {
    const {navigator} = this.props;
    navigator.pop();
  }

  _onPressButton() {
    const {navigator} = this.props;
    navigator.push({
      // component: PageGroup,
      // name: 'PageGroup'
      });
    }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#F0FFF0'}}>
        <NavigationBar
          style={styles.navbar}
          title={{title: '札记'}}
          statusBar={
            {style: 'light-content',
            tintColor: '#5597B8'}   
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
        <Swiper
          dot={<View style={{backgroundColor: '#CDCDC1', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          activeDot={<View style={{backgroundColor: '#838B83', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          paginationStyle={{
            bottom: 160,
          }} 
         >
          <TouchableOpacity style={{flex:1, marginTop: 50}} onPress={this._onPressButton.bind(this)}>
            <View style={[styles.covercard, {backgroundColor: '#EEE9BF',marginBottom:5, transform: [{rotate: '2deg'}]}]}>
              <Image style={{opacity: 10, width: 260, height: 340, borderRadius: 10}}  source={{uri: 'http://imglf2.nosdn.127.net/img/L2g5d3BQbjhhb1pOQ3orUkY1MnZMTWh5U3UwYkRVSnhIalhtTDFaN21yTjA0cG9EVXRSWUlRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg'}}/>
              <Text style={{fontSize: 16, marginTop: 20}}>东北开始下雪了</Text>
            </View>
            <View style={[styles.covercard, {backgroundColor: '#EEE9BF',marginTop:5}]}>
              <Image style={{opacity: 10, width: 260, height: 340, borderRadius: 10}}  source={{uri: 'http://imglf.nosdn.127.net/img/RWczcHVBaStjNnR3MFVOT2tVeUdCc0VkWUFhemxYdFJjcmtMbHBpMTNudUNBbytiNDh1eWxRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg'}}/>
              <Text style={{fontSize: 16, marginTop: 20}}>东北开始下雪了</Text>
            </View>
            <View  style={[styles.covercard, {backgroundColor: '#FFFFF0', transform: [{rotate: '-2deg'}]}]} >
              <Image style={{opacity: 10, width: 260, height: 340, borderRadius: 10}} source={{uri: 'http://imglf0.ph.126.net/72FsntZvYIB9h_AfxQ-R3A==/6631753860957821655.jpg'}}/>
              <Text style={{fontSize: 16, marginTop: 20}}>今朝有酒</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{flex:1, marginTop: 50}}>
            <View style={[styles.covercard, {backgroundColor: '#EEE9BF',marginBottom:5, transform: [{rotate: '2deg'}]}]}>
              <Image style={{opacity: 10, width: 260, height: 340, borderRadius: 10}}  source={{uri: 'http://imglf2.nosdn.127.net/img/L2g5d3BQbjhhb1pOQ3orUkY1MnZMTWh5U3UwYkRVSnhIalhtTDFaN21yTjA0cG9EVXRSWUlRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg'}}/>
              <Text style={{fontSize: 16, marginTop: 20}}>东北开始下雪了</Text>
            </View>
            <View style={[styles.covercard, {backgroundColor: '#EEE9BF',marginTop:5}]}>
              <Image style={{opacity: 10, width: 260, height: 340, borderRadius: 10}}  source={{uri: 'http://imglf.nosdn.127.net/img/RWczcHVBaStjNnR3MFVOT2tVeUdCc0VkWUFhemxYdFJjcmtMbHBpMTNudUNBbytiNDh1eWxRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg'}}/>
              <Text style={{fontSize: 16, marginTop: 20}}>东北开始下雪了</Text>
            </View>
            <View  style={[styles.covercard, {backgroundColor: '#FFFFF0', transform: [{rotate: '-2deg'}]}]} >
              <Image style={{opacity: 10, width: 260, height: 340, borderRadius: 10}} source={{uri: 'http://imglf0.ph.126.net/72FsntZvYIB9h_AfxQ-R3A==/6631753860957821655.jpg'}}/>
              <Text style={{fontSize: 16, marginTop: 20}}>今朝有酒</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={{flex:1, marginTop: 50}}>
            <View style={[styles.covercard, {backgroundColor: '#EEE9BF',marginBottom:5, transform: [{rotate: '2deg'}]}]}>
              <Image style={{opacity: 10, width: 260, height: 340, borderRadius: 10}}  source={{uri: 'http://imglf2.nosdn.127.net/img/L2g5d3BQbjhhb1pOQ3orUkY1MnZMTWh5U3UwYkRVSnhIalhtTDFaN21yTjA0cG9EVXRSWUlRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg'}}/>
              <Text style={{fontSize: 16, marginTop: 20}}>东北开始下雪了</Text>
            </View>
            <View style={[styles.covercard, {backgroundColor: '#EEE9BF',marginTop:5}]}>
              <Image style={{opacity: 10, width: 260, height: 340, borderRadius: 10}}  source={{uri: 'http://imglf.nosdn.127.net/img/RWczcHVBaStjNnR3MFVOT2tVeUdCc0VkWUFhemxYdFJjcmtMbHBpMTNudUNBbytiNDh1eWxRPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg'}}/>
              <Text style={{fontSize: 16, marginTop: 20}}>东北开始下雪了</Text>
            </View>
            <View  style={[styles.covercard, {backgroundColor: '#FFFFF0', transform: [{rotate: '-2deg'}]}]} >
              <Image style={{opacity: 10, width: 260, height: 340, borderRadius: 10}} source={{uri: 'http://imglf0.ph.126.net/72FsntZvYIB9h_AfxQ-R3A==/6631753860957821655.jpg'}}/>
              <Text style={{fontSize: 16, marginTop: 20}}>今朝有酒</Text>
            </View>
          </TouchableOpacity>


        </Swiper>
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
    backgroundColor: '#5597B8',
    android: {
      marginTop: 20
    }
  },
  toolItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  covercard: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    top: 0,
    left: 50,
    bottom: 0,
    right: 0,
    width: 260,
    height: 400,
    borderRadius: 10,
  }
});


export default AlbumView;