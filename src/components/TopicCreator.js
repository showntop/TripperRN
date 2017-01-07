'use strict';

import React, { Component } from 'react';

import {
  StatusBar,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';

import EditorHeader from '../components/EditorHeader';
import Style from '../constants/Style';
import * as StyleSheet from '../utility/StyleSheet';

import {createTopic} from '../actions/topics';

class TopicCreator extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
    	title: "",
    	description: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.topicStore.status) {
      Alert.alert('温馨提醒','提交成功',[
          { text:'确定', onPress: () => { nextProps.navigator.pop() } }
        ]);
    }else{
      Alert.alert('温馨x提醒',nextProps.message,[
          { text:'确定', onPress: () => {  } }
        ]);
    }
  }

  onCreateTopic(){
    const {dispatch, userStore} = this.props;
    let topic = {
      title: this.state.title,
      content: this.state.description,
    }
    dispatch(createTopic(userStore.currentUser, topic))
  }

  render() {
    return (
      <View style={styles.container}>
      	<StatusBar
      	  backgroundColor={Style.STATUSBAR_COLOR}
      	  barStyle="light-content"
      	  />
      	<EditorHeader title="创建话题"  {...this.props}/>
      	
      	<View style={styles.editor}>
      		<View style={styles.title}>
      		    <TextInput ref="title" style={{fontSize: 20, fontWeight: 'bold', height: 40,  textAlignVertical: "center"}} placeholder="输入话题名（不超过30字）" underlineColorAndroid= "transparent"
      		    value={this.state.title} onChangeText={title => this.setState({title})}/>
      		</View>

      		<View style={styles.description}>
      		    <TextInput ref="description" style={{flex: 1,  textAlignVertical: "top"}} placeholder="输入话题描述（不超过100字）" underlineColorAndroid= "transparent"
      		    multiline={true} value={this.state.description} onChangeText={description => this.setState({description})}/>
      		</View>

      		<View style={styles.buttonWrapper}>
      			<TouchableOpacity style={styles.button} onPress ={this.onCreateTopic.bind(this)}>
      				<Text style={{color: 'white', textAlignVertical: 'center', textAlign: 'center'}}>提交话题</Text>
      			</TouchableOpacity>
      		</View>
      	</View>    	
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		android:{
		  marginTop: 20
		}
	},
	editor: {
		flex: 1
	},
	title:{
		margin: 12,
		height: 40, 
		backgroundColor: '#EDEDED',
		padding: 6
	},
	description: {
		margin: 12,
		padding: 6,
		height: 300,
		backgroundColor: '#EDEDED'
	},
	buttonWrapper:{
		flex: 1,
		height: 48,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		backgroundColor: '#BEBEBE', 
		borderRadius: 15, 
		width: 260,
		height: 48,
		justifyContent: 'center',
		alignItems: 'center',
	}
});


export default TopicCreator;