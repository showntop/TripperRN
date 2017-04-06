'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
import {Text, Heading1} from '../components/TripperText'

import ProjectContainer from '../containers/ProjectContainer'


class MediaCard extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
    const author = this.props.author || {avatar: 'http://v1.qzone.cc/avatar/201408/03/23/44/53de58e5da74c247.jpg%21200x200.jpg', nickname: '未知'}
    return (
		  <View style={styles.card}>
      {
        this.props.asset && this.props.asset != "" ?       <Image 
          resizeMode='cover'
          source={{uri: this.props.asset}}
          style={styles.thumbnail}
          /> : <View/>
      }
        <View style={{flex: 1, width: 300, alignItems: 'center'}}>
          <Heading1 style={{textAlign: 'center', marginTop: 5, marginBottom: 5}}>{this.props.title}</Heading1>
          <View style={{height: 1, width: 280, backgroundColor: '#ededef'}}/>
          <Text style={styles.content}>
            {this.props.intro}
          </Text>
        </View>
        <View style={styles.user}>
          <View style={{flexDirection: 'row'}}>
            <Image 
            style={{width: 30, height: 30, borderRadius: 15}}
            source={{uri: author.avatar}}/>
            <Text style={{alignSelf: "center", marginLeft: 5}}>{author.nickname}</Text>
          </View>
          <Text style={{alignSelf: "center", fontWeight: 'bold'}}>{this.props.created_at == null ? '': this.props.created_at.split('T')[0].replace('-', '.').replace('-', '.')}</Text>
        </View>
	    </View>
    );
  }
}

class NoMoreCards extends Component{
  render() {
    return (
      <View style={styles.noMoreCards}>
        <Text>No more cards</Text>
      </View>
    )
  }
}

class ProjectCard extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const lastItems = this.props.items;
    const nextItems = nextProps.items;

    for (var i = lastItems.length - 1; i >= 0; i--) {
      if(lastItems[i].id != nextItems[i].id){
        return true;
      }
    }
    return false;
  }

  handleNope(){
    console.log('handleNope');
  }

  render() {
    return (
      <SwipeCards 
        cards={this.props.items}
        loop={true}
        renderCard={(cardData) => <MediaCard {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleNope={this.handleNope}
        handleYup={(p) => this.props.handleSelect(p)}
        showYup={true}
        showNope={true}
      />
    );
  }
}


const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 7,
    overflow: 'hidden',
    borderColor: '#ededef',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
    flex: 1,
    marginTop: 20,
    marginBottom: 20
  },
  thumbnail: {
    width: 300,
    height: 320,
  },
  title: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  content: {
    fontSize: 12,
    paddingTop: 3,
    lineHeight: 20
  },
  user: {
    flexDirection: 'row',
    width: 300, 
    height: 35, 
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 10,
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default ProjectCard;