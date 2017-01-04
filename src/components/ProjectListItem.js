'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class ProjectListItem extends Component {
  render() {
  	let source_uri = this.props.data.asset || "http://b.hiphotos.baidu.com/image/h%3D220/sign=b60a6d7b0255b31983f9857773a88286/279759ee3d6d55fbab32575c65224f4a21a4ddd7.jpg"
    return (
	  <View style={styles.container}>
        <Image source={{uri: source_uri}} style={{width: 80, height: 100}}/>
        <View style={{marginLeft: 5}}>
          <Text style={{fontSize: 15}}>
              {this.props.data.title}
          </Text>
          <View style={{height: 25}}/>
          <Text style={{fontSize: 10}}>
              {this.props.data.intro}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		flexDirection: 'row',
		padding: 15,
	}
});


export default ProjectListItem;