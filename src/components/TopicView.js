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
import Icon2 from 'react-native-vector-icons/EvilIcons';

import {showTopic} from '../actions/topics';
import NaviHeader from '../components/NaviHeader'
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
      props:{
        topicId: this.props.id,
      }
    })
  }

  render() {
    const {topicStore} = this.props;

    return (
      <View  style={styles.container}>
        <NaviHeader {...this.props} style={styles.header} title={topicStore.topic.title}/>
	      <ListView
  	      removeClippedSubviews={false}
  	      style={styles.listView}
  	      dataSource={this.state.dataSource}
          renderSeparator={
            (sectionID: number, rowID: number, adjacentRowHighlighted: bool) =>{
              return (
                <View
                  key={`${sectionID}-${rowID}`}
                  style={{
                    height: adjacentRowHighlighted ? 4 : 1,
                    backgroundColor: adjacentRowHighlighted ? '#3B5998' : '#E0EEEE',
                  }}
                />
              );
            }
          }
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

  renderRow(data) {
    return (
      <View style={styles.row}>
        <View style={styles.userWrapper}>
          <Image source={{uri: 'http://pkicon.image.alimmdn.com/icon/427/246427/90725b175a94db4fbd27f2cfa67042a8_50'}} style={{width: 30, height: 30, borderRadius: 15,}}/>
          <View style={{marginLeft: 5}}>
            <Text style={{fontSize: 10}}>
              木子树凉
            </Text>
            <Text style={{fontSize: 10}}>
              2016/10/22
            </Text>
          </View>
        </View>
        <View style={{flex: 2, margin: 20}}>
          <Text>{data.content}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end',}}>
          <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} >
            <Icon name='comment' size={18} style={{color: 'grey'}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} >
            <Icon name='favorite' size={18} style={{color: 'grey'}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} >
            <Icon name='open-in-new' size={18} style={{color: 'grey'}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  	container: {
  		flex: 1,
      backgroundColor: '#E0EEEE',
  	},
  	header: {
      height: 60,
  		justifyContent: 'center',
  		alignItems: 'center',
      backgroundColor: '#9BCD9B'
  	},
    listView: {
      marginBottom: 50
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
  	  marginLeft: 8,
  	  alignItems: 'center',
  	  justifyContent: 'center',
  	},
    row: {
      flex: 1,
      backgroundColor: 'white',
      padding:10
    },
    userWrapper: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
    }
});


export default TopicView;