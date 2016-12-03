'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ListView,
  RefreshControl,
} from 'react-native';

import TopicListItem from '../components/TopicListItem'
import {listTopic} from '../actions/topics';

class TopicList extends Component {

  constructor(props) {
    super(props);
  
    this.renderRow = this.renderRow.bind(this);

    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      loading: false,
      dataSource,
    };
  }

  componentDidMount() {
    const {dispatch} =  this.props;
    dispatch(listTopic());
  }

  componentWillReceiveProps(nextProps) {
    const {topicStore} = nextProps;
    this.setState({
      loading: topicStore.loading,
      dataSource: this.state.dataSource.cloneWithRows(topicStore.topics)
    });
  }

  _onRefresh() {
    const {dispatch} =  this.props;
    dispatch(listTopic());  
  }

  render() {

    return (
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
	  );
  }

  renderRow(data) {
    return (
      <TopicListItem data={data} {...this.props}/>
    );
  }
}

const styles = StyleSheet.create({
  listView:{
    flex: 1,
  }
});


export default TopicList;



const articleList = [
  {
    "content_id": "1547",
    "hp_title": "他没有名字，他叫9527",
    "hp_makettime": "2016-10-04 21:00:00",
    "guide_word": "我们小区刚有人入住的时候，9527是第一个来摆摊卖水果的。男人离不开啤酒，女人离不开水果，这是自古的道理。",
    "author": [
      {
        "user_id": "5541614",
        "user_name": "绒绒",
        "web_url": "http://image.wufazhuce.com/FnT7-zyYmZeammnFD1IuG14i2Nkg",
        "desc": "一个喜欢讲故事的梦想家，已出版《输一回吧，姑娘》。",
        "wb_name": "@小绒绒往前走"
      }
    ],
    "has_audio": true
  },
  {
    "id": "184",
    "serial_id": "33",
    "number": "4",
    "title": "玩家·第四话",
    "excerpt": "5W，你到底是不慎容纳了一些怪胎，还是本身就是按照一个怪胎集中营来设计的？",
    "read_num": "7400",
    "maketime": "2016-10-04 21:00:00",
    "author": {
      "user_id": "4813765",
      "user_name": "夜X",
      "web_url": "http://image.wufazhuce.com/Fkr-24izoJEPeeKJ0Zwga9xB325N",
      "desc": "作家，编剧。公众号：不投币故事贩卖机"
    },
    "has_audio": false
  },
  {
    "question_id": "1496",
    "question_title": "作家会爱上笔下的人物吗？",
    "answer_title": "@蔡骏 答BonBon：",
    "answer_content": "人物既是作家在创造，到了一定阶段以后，也是人物根据其内在规律，他们自己在创造自己。",
    "question_makettime": "2016-10-04 21:00:00"
  },
  {
    "question_id": "1496",
    "question_title": "作家会爱上笔下的人物吗？",
    "answer_title": "@蔡骏 答BonBon：",
    "answer_content": "人物既是作家在创造，到了一定阶段以后，也是人物根据其内在规律，他们自己在创造自己。",
    "question_makettime": "2016-10-04 21:00:00"
  },
  {
    "question_id": "1496",
    "question_title": "作家会爱上笔下的人物吗？",
    "answer_title": "@蔡骏 答BonBon：",
    "answer_content": "人物既是作家在创造，到了一定阶段以后，也是人物根据其内在规律，他们自己在创造自己。",
    "question_makettime": "2016-10-04 21:00:00"
  },
  {
    "question_id": "1496",
    "question_title": "作家会爱上笔下的人物吗？",
    "answer_title": "@蔡骏 答BonBon：",
    "answer_content": "人物既是作家在创造，到了一定阶段以后，也是人物根据其内在规律，他们自己在创造自己。",
    "question_makettime": "2016-10-04 21:00:00"
  },
  {
    "question_id": "1496",
    "question_title": "作家会爱上笔下的人物吗？",
    "answer_title": "@蔡骏 答BonBon：",
    "answer_content": "人物既是作家在创造，到了一定阶段以后，也是人物根据其内在规律，他们自己在创造自己。",
    "question_makettime": "2016-10-04 21:00:00"
  },
  {
    "question_id": "1496",
    "question_title": "作家会爱上笔下的人物吗？",
    "answer_title": "@蔡骏 答BonBon：",
    "answer_content": "人物既是作家在创造，到了一定阶段以后，也是人物根据其内在规律，他们自己在创造自己。",
    "question_makettime": "2016-10-04 21:00:00"
  },
  {
    "question_id": "1496",
    "question_title": "作家会爱上笔下的人物吗？",
    "answer_title": "@蔡骏 答BonBon：",
    "answer_content": "人物既是作家在创造，到了一定阶段以后，也是人物根据其内在规律，他们自己在创造自己。",
    "question_makettime": "2016-10-04 21:00:00"
  },
  {
    "question_id": "1496",
    "question_title": "作家会爱上笔下的人物吗？",
    "answer_title": "@蔡骏 答BonBon：",
    "answer_content": "人物既是作家在创造，到了一定阶段以后，也是人物根据其内在规律，他们自己在创造自己。",
    "question_makettime": "2016-10-04 21:00:00"
  }
];
