'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

class ProjectListItem extends Component {
  render() {
  	let source_uri = this.props.data.asset || "http://b.hiphotos.baidu.com/image/h%3D220/sign=b60a6d7b0255b31983f9857773a88286/279759ee3d6d55fbab32575c65224f4a21a4ddd7.jpg"
    return (
	  <TouchableOpacity style={styles.container} onPress={() => this.props.onPress(this.props.data)}>
        <Image source={{uri: source_uri}} style={{width: 100, height: 120}}/>
        <View style={[styles.title, {backgroundColor: this.props.backgroundColor}]}>
          <Text style={{fontSize: 12,width: 200}}>
              {this.props.data.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
	container:{
		flexDirection: 'row',
	},
  title:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default ProjectListItem;