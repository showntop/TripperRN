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

class TopicListItem extends Component {
  render() {
    const {data} = this.props;
    let title, authorName, content;
    let imageSource;
    if (data.content_id) {
      title = data.hp_title;
      authorName = data.author[0].user_name;//为什么这个author字段是个数组, 跟其他的又不一样
      content = data.guide_word;
      imageSource = require('../images/essay_image.png');
    } else if (data.serial_id) {
      title = data.title;
      authorName = data.author.user_name;
      content = data.excerpt;
      imageSource = require('../images/serial_image.png');
    } else if (data.question_id) {
      title = data.question_title;
      authorName = data.answer_title;
      content = data.answer_content;
      imageSource = require('../images/question_image.png');
    }
    return (
      <TouchableOpacity style={styles.touchableOpacity} onPress={() => this.onPress(data)}>
        <View>
          <View style={styles.rowContainer}>
            <Text style={styles.titleText}>{title}</Text>
            <Image style={styles.image} resizeMode="contain" source={imageSource}/>
          </View>
          <Text style={styles.text}>{authorName}</Text>
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
  image: {
    height: 25,
    width: 60,
  }
});


export default TopicListItem;