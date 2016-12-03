'use strict';

import React, { Component } from 'react';

import {
  StatusBar,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';

import EditorHeader from '../components/EditorHeader';
import Style from '../constants/Style';
import * as StyleSheet from '../utility/StyleSheet';

import {createPost} from '../actions/posts';

class PostCreator extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
    	title: "",
    	content: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.postStore.status) {
      Alert.alert('温馨提醒','提交成功',[
          { text:'确定', onPress: () => { nextProps.navigator.pop() } }
        ]);
    }else{
      Alert.alert('温馨x提醒',nextProps.message,[
          { text:'确定', onPress: () => {  } }
        ]);
    }
  }

  onCreatePost(){
    const {dispatch} = this.props;
    let post = {
      content: this.state.content,
      topic_id: this.props.topicId
    }
    dispatch(createPost({}, post))
  }

  render() {
    return (
      <View style={styles.container}>
      	<StatusBar
      	  backgroundColor={Style.STATUSBAR_COLOR}
      	  barStyle="light-content"
      	  />
      	<EditorHeader title="发一贴"  {...this.props}/>
      	
      	<View style={styles.editor}>

      		<View style={styles.content}>
      		    <TextInput ref="content" style={{flex: 1,  textAlignVertical: "top"}} placeholder="输入话题描述（不超过100字）" underlineColorAndroid= "transparent"
      		    multiline={true} value={this.state.content} onChangeText={content => this.setState({content})}/>
              <View style={{width: 80, justifyContent: 'center', alignItems: 'center',height: 80, borderStyle: 'dashed', borderWidth: 1, borderColor: 'white'}}>
                <Image source={require('../images/icon_add_attach.png')} style={{width: 30, height: 30}}/>
              </View>
          </View>

      		<View style={styles.buttonWrapper}>
      			<TouchableOpacity style={styles.button} onPress ={this.onCreatePost.bind(this)}>
      				<Text style={{color: 'white', fontSize: 20, textAlignVertical: 'center', textAlign: 'center'}}>发布</Text>
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
	content: {
		margin: 12,
		padding: 6,
		height: 360,
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


export default PostCreator;