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
import {fetchSelectedProjects} from '../actions/projects';

import ProjectContainer from '../containers/ProjectContainer'

const Cards = [
  {title: '生命之于我', content: "不知道从什么时候开始\n应是我走的那一年\n那天晚上\n还有什么来？", image: 'http://imglf2.nosdn.127.net/img/aVFjTjU3a2NtVHdyeVZEaUFOV0doVWJPYjAyazFPZS96WFJMMTF3TUlJZi9NSmFobUd6aG9BPT0.jpg?imageView&thumbnail=500x0&quality=96&stripmeta=0&type=jpg%7Cwatermark&type=2&text=wqkgTUFHSUMgWUFOR-adqOaipuaZtiAvIGxpdHRsZW1hZ2ljeWFuZy5sb2Z0ZXIuY29t&font=bXN5aA==&gravity=southwest&dissolve=30&fontsize=240&dx=8&dy=10&stripmeta=0'},
  {title: '来看你', content: "我只知道那是一个褐色的夜\n你说了什么\n那天晚上\n还有什么来？", image: 'http://imglf.nosdn.127.net/img/ek85Ny8zV0tPRUFBSFlkdDVmQjVuNjVxY3F2anB0QXBnNklsNkJJaVl1ZEpWZUthYkVGYVJRPT0.gif'},
  {title: '还记得那天', content: "今晨没有阳光\n应是我走的那一年\n那天晚上\n还有什么来？", image: 'https://img1.doubanio.com/view/photo/photo/public/p2395318067.jpg'},
  {title: '海', content: "生命从你开始的\n应是我走的那一年\n那天晚上\n还有什么来？", image: 'https://img1.doubanio.com/view/site/median/public/f29689de998e45b.jpg'},
  {title: '放声', content: "之于我啊\n应是我走的那一年\n那天晚上\n还有什么来？", image: 'https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif'},
  {title: '蓝色的气球', content: "去了就这样biubiubiu啦啦啦\n应是我走的那一年\n那天晚上\n还有什么来？", image: 'https://media.giphy.com/media/7r4g8V2UkBUcw/giphy.gif'},
]


class MediaCard extends Component {

  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render() {
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
            source={{uri: this.props.author.avatar}}/>
            <Text style={{alignSelf: "center", marginLeft: 5}}>{this.props.author.nickname}</Text>
          </View>
          <Text style={{alignSelf: "center", fontWeight: 'bold'}}>{this.props.created_at.split('T')[0].replace('-', '.').replace('-', '.')}</Text>
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
  
    this.state = {
      cards: Cards,
      outOfCards: false
    };

    this.handleYup = this.handleYup.bind(this)
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchSelectedProjects());
  }

  handleNope(){
    console.log('handleNope');
  }

  handleYup(project){
    let {navigator} =  this.props
    navigator.push({
      component: ProjectContainer,
      name: 'ProjectContainer',
      project: project,
    })  
  }

  render() {
    const {projectStore} = this.props;
    return (
      <SwipeCards 
        cards={projectStore.selectedProjects}
        loop={true}
        renderCard={(cardData) => <MediaCard {...cardData} />}
        renderNoMoreCards={() => <NoMoreCards />}
        handleNope={this.handleNope}
        handleYup={this.handleYup}
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