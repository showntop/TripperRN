'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,	
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

import {fetchDailyProject} from '../actions/projects';

class DailyView extends Component {
  
  constructor(props) {
    super(props);
  
    this.state = {};

    this.openProjectDetail = this.openProjectDetail.bind(this)
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchDailyProject());
  }

  openProjectDetail() {
  	this.props.close
  	// debugger
  	// const {navigator} = this.props
  	// navigator.push.push({ project: this.data.id });
  }

  render() { 
  	let project = this.props.data;
  	if (project == null) {
  		return (<View/>);//loading
  	}
      return (
		<View style={{padding: 40,flex: 1, alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.85)'}}>
		  	<TouchableOpacity onPressOut={this.props.close} onPress={this.openProjectDetail} style={{justifyContent: 'flex-start', width: 300, height: 500, padding: 10, backgroundColor: 'white'}}>
				<Image 
		          resizeMode='cover'
		          source={{uri: project.asset}}
		          style={{width: 280, height: 400}}/>
		        <View style={{flex: 1, justifyContent: 'center',alignItems: 'center',flexDirection: 'row'}}>
		          <Text style={{flex: 1, fontSize: 26}}>{'13/十月'}</Text>
		          <View style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'row'}}>
		          	<View style={{padding: 5, borderRadius: 5, borderWidth: 1, borderColor: 'green', justifyContent: 'center', alignItems: 'center',}}>
		          		<Icon name='share-apple' size={30} style={{color: 'green'}} />
		          	</View>
		          	<View style={{width: 10}}/>
		          	<View style={{padding: 5, borderRadius: 5, borderWidth: 1, borderColor: 'green', justifyContent: 'center', alignItems: 'center',}}>
		          		<Icon name='eye' size={30} style={{color: 'green'}} />
		          	</View>
		          </View>
		        </View>
	    	</TouchableOpacity>
		</View>
    );
  }
}

const styles = StyleSheet.create({

});


export default DailyView;