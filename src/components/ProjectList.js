'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ListView,
  RefreshControl
} from 'react-native';

import ProjectListItem from '../components/ProjectListItem';
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
      loading: projectStore.loading,
      dataSource: this.state.dataSource.cloneWithRows(projectStore.projectList)
    });
  }


  _onRefresh() {
    const {dispatch} =  this.props;
    dispatch(listProject());  
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
      <ProjectListItem data={data} {...this.props}/>
    );
  }
}

const styles = StyleSheet.create({
  listView:{
    flex: 1,
  }
});


export default ProjectList;