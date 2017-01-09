'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ListView,
  RefreshControl,
  TouchableOpacity
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';

import ProjectListItem from '../components/ProjectListItem';
import ReadingHeader from '../components/ReadingHeader';
import {listProject} from '../actions/projects';

class ProjectList extends Component {

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
    dispatch(listProject(this.props.category));
  }

  componentWillReceiveProps(nextProps) {
    const {projectStore} = nextProps;
    this.setState({
      loading: projectStore.state != "succeeded",
      dataSource: this.state.dataSource.cloneWithRows(projectStore.projectList)
    });
  }

  _onRefresh() {
    const {dispatch} =  this.props;
    dispatch(listProject());  
  }

  navtoLast() {
      const {navigator} = this.props;
      navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <ReadingHeader title={'列表'} {...this.props}/>
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
      </View>
	  );
  }

  renderRow(data) {
    return (
      <ProjectListItem data={data} {...this.props}/>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  listView:{
    flex: 1,
  },
  navbar: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    backgroundColor: '#5597B8'
  },

});


export default ProjectList;