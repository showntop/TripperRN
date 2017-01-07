'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import {Text, Heading1, Paragraph} from '../components/TripperText'

import {fetchProject} from '../actions/projects';
import Icon2 from 'react-native-vector-icons/EvilIcons';

import ReadingHeader from '../components/ReadingHeader'

class ProjectView extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }

  componentWillMount() {
  	const {dispatch} = this.props
  	dispatch(fetchProject(this.props.project.id))
  }

  navtoLast() {
    const {navigator} = this.props;
    navigator.pop();
  }

  operation() {

  }
  
  render() {
    const {projectStore} = this.props;
    if (projectStore.state != "succeeded") {
      return (<Text>加载中...</Text>);
    }
    const project = projectStore.currentProject;
    return (
      <View  style={styles.container}>
        <ReadingHeader {...this.props} style={styles.header} title={project.title}/>
        <ScrollView style={styles.body}>
          { 
            project.asset && project.asset != "" ? <Image source={{uri: project.asset}} style={{flex: 1, height: 300}}/> : <View/>
          }
        	<Paragraph style={styles.paragraph}>
        		{project.content}
        	</Paragraph>
        </ScrollView>

        <View style={styles.footer}>
            <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={this.navtoLast.bind(this)}>
              <Icon2 name='arrow-left' size={32} style={{color: '#BDBDBD'}} />
            </TouchableOpacity>
            <View style={{flex: 1}}/>
            <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={this.operation.bind(this)}>
              <Icon2 name='comment' size={32} style={{color: '#BDBDBD'}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={this.operation.bind(this)}>
              <Icon2 name='heart' size={32} style={{color: '#BDBDBD'}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={this.operation.bind(this)}>
              <Icon2 name='share-google' size={32} style={{color: '#BDBDBD'}} />
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor: 'white'
	},
	header: {
    height: 60,
		justifyContent: 'center',
		alignItems: 'center',
    backgroundColor: '#9BCD9B'
	},
  body:{
    flex: 1,
  },
  paragraph:{
    paddingHorizontal: 20,
    paddingBottom:60,
  },
  footer: {
    flex: 1,
    alignSelf: 'stretch',
    borderTopColor: '#F0F0F0',
    borderTopWidth: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'absolute',
    height: 50,
    width: Dimensions.get('window').width,
    bottom: 0,
    justifyContent: 'flex-end',
  },
  toolItem: {
    flex: 0,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default ProjectView;