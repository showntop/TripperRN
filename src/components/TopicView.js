'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Dimensions,
  ListView,
  Image,
  Text,
  RefreshControl,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {showTopic} from '../actions/topics';
import ReadingHeader from '../components/ReadingHeader'
import PostContainer from '../containers/PostContainer'

class TopicView extends Component {
  
  constructor(props) {
    super(props);
    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  
    this.state = {
    	loading: false,
    	dataSource
    };
  }

  componentDidMount() {
  	const {dispatch} = this.props;
  	dispatch(showTopic(this.props.id))
  }


  componentWillReceiveProps(nextProps) {
    const {topicStore} = nextProps;
    this.setState({
      loading: topicStore.loading,
      dataSource: this.state.dataSource.cloneWithRows(topicStore.topic.posts)
    });
  }

  _onRefresh() {
    const {dispatch} =  this.props;
    dispatch(showTopic(this.props.id));  
  }

  navtoLast() {
    const {navigator} = this.props;
    navigator.pop();
  }

  operation() {
    const {navigator} = this.props;

    navigator.push({
      component: PostContainer,
      name: 'PostContainer',
      topicId: this.props.id,
    })
  }

  render() {
    return (
      <View  style={styles.container}>
        <ReadingHeader {...this.props} style={styles.header} title="aaaaaaa"/>
	    <ListView
	      removeClippedSubviews={false}
	      style={styles.listView}
	      dataSource={this.state.dataSource}
	      renderRow={this.renderRow}
          enableEmptySections={true}
          refreshControl={
	          <RefreshControl
	            refreshing={this.state.loading}
	            onRefresh={this._onRefresh.bind(this)}
	          />
      	  }/>
      	<View style={styles.footer}>
      	    <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={this.navtoLast.bind(this)}>
      	      <Icon name='arrow-back' size={28} style={{color: 'black'}} />
      	    </TouchableOpacity>
      	    <View style={{flex: 1}}/>
      	    <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={this.operation.bind(this)}>
      	      <Icon name='comment' size={28} style={{color: 'black'}} />
      	    </TouchableOpacity>
      	    <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={this.operation.bind(this)}>
      	      <Icon name='favorite' size={28} style={{color: 'black'}} />
      	    </TouchableOpacity>
      	    <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={this.operation.bind(this)}>
      	      <Icon name='open-in-new' size={28} style={{color: 'black'}} />
      	    </TouchableOpacity>
      	</View>
      </View>
    );
  }

  renderRow(data) {
    return (
      <View>
      	<Text>{'ffffffffffffff'}</Text>
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
  	footer: {
  	  flex: 1,
  	  alignSelf: 'stretch',
  	  borderTopColor: 'grey',
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


export default TopicView;