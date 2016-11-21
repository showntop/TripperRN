'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  TouchableOpacity
} from 'react-native';

import {Text, Heading1, Paragraph} from '../components/TripperText'

import {fetchProject} from '../actions/projects';
import Icon from 'react-native-vector-icons/MaterialIcons';


class ProjectView extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }

  componentWillMount() {
  	const {dispatch} = this.props
  	dispatch(fetchProject(this.props.route.project.id))
  }

  navtoLast() {
    const {navigator} = this.props;
    navigator.pop();
  }
  
  render() {
    if (this.props.data == null) {
      return (<Text>加载中...</Text>);
    }    
    return (
      <View  style={styles.container}>
        <ScrollView>
        	<View style={styles.header}>
        		<Heading1>{this.props.data.title}</Heading1>
        	</View>
        	<Image/>
        	<Paragraph style={styles.paragraph}>
        		{this.props.data.content}
        	</Paragraph>
        </ScrollView>

        <View style={styles.footer}>
            <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={this.navtoLast.bind(this)}>
              <Icon name='arrow-back' size={28} style={{color: 'white'}} />
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
	},
  paragraph:{
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'grey',
    position: 'absolute',
    bottom: 0,
  }
});


export default ProjectView;