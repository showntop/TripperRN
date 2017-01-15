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
      loading: topicStore.showSpinner,
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
