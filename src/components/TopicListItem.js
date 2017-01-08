'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';

import commonStyle from '../constants/Style';
import TopicContainer from '../containers/TopicContainer'

class TopicListItem extends Component {
  constructor(props) {
    super(props);
  
    this.onPress = this.onPress.bind(this);
  }

  onPress(){
    const {navigator, data} = this.props

    navigator.push({
      component: TopicContainer,
      name: 'TopicContainer',
      props: {id: data.id}
    })
  }

  render() {
    const {data} = this.props;

    let title = data.title;
    let content = data.content;
    let tag = data.tag || '问答'
    let authorName = data.author.nickname

    return (
      <TouchableOpacity style={styles.touchableOpacity} onPress={() => this.onPress(data)}>
        <View>
          <View style={styles.rowContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <View style={styles.tag}><Text style={{color: '#8fbff9'}}>{tag}</Text></View>
          </View>
          <Text style={styles.text}>{"@" + authorName}</Text>
          <Text style={styles.text}>{content}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({

  touchableOpacity: {
    padding: 15,//使用padding而不用margin是为了增大可按压区域
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  titleText: {
    color: commonStyle.TEXT_COLOR,
    fontSize: 18,
    flex: 1
  },
  text: {
    color: commonStyle.TEXT_GRAY_COLOR,
    fontSize: 14,
    marginTop: 5
  },
  tag: {
    height: 25,
    width: 60,
    borderColor: '#8fbff9',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


export default TopicListItem;