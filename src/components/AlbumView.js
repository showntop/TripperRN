'use strict';

import React, { Component } from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import * as StyleSheet from '../utility/StyleSheet'

import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import NaviHeader from '../components/NaviHeader';
import ProjectContainer from '../containers/ProjectContainer'
import ProjectCard      from '../components/ProjectCard'

import {fetchAlbum} from '../actions/albums';

class AlbumView extends Component {

  constructor(props) {
    super(props);
    this.renderItem = this.renderItem.bind(this);
    this.state = {};
  }

  componentDidMount() {
    const {album, dispatch} =  this.props;
    dispatch(fetchAlbum(album.id));
  }

  navtoLast() {
    const {navigator} = this.props;
    navigator.pop();
  }

  _onPressButton(project) {
    const {navigator} = this.props;
    navigator.push({
      component: ProjectContainer,
      name: 'ProjectContainer',
      props:{
        project:{id: project.id}
      }
      });
  }

  render() {
    const {albumStore} = this.props;
    const album = this.props.album;
    let projects = albumStore.album.projects || [{id: "1", title: "title1", intro: "今夜，此时"}, {id:"2", title: "title1", intro: "今夜，此时"}, {id:"3", title: "title1", intro: "今夜，此时"}, {id:"4", title: "title1", intro: "今夜，此时"}, {id:"5", title: "title1", intro: "今夜，此时"}]
    return (
      <View style={styles.container}>
        <NaviHeader title={album.name} {...this.props}/>
        <ProjectCard items={projects} handleSelect={this._onPressButton.bind(this)}/>
      </View>
      );
    // return (
    //   <View style={{flex: 1, backgroundColor: '#F0FFF0'}}>
    //     <NaviHeader title={album.name} {...this.props}/>
    //     <Swiper
    //       dot={<View style={{backgroundColor: '#CDCDC1', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
    //       activeDot={<View style={{backgroundColor: '#838B83', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
    //       paginationStyle={{
    //         bottom: 160,
    //       }}>
    //       {
    //         projects.map((project) => {return this.renderItem(project)})
    //       }
    //     </Swiper>
    //   </View>
    // );
  }

  renderItem(project) {
    return(
      <TouchableOpacity key={project.id} style={{flex:1, marginTop: 50}} onPress={this._onPressButton.bind(this)}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
          <Text>{project.title}</Text>
          <Text>{project.intro}</Text>
        </View>
      </TouchableOpacity>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFF0'
  },
  navbar: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    backgroundColor: '#5597B8',
    android: {
      marginTop: 20
    }
  },
  toolItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  covercard: {
    position: 'absolute',
    flex: 1,
    alignItems: 'center',
    top: 0,
    left: 50,
    bottom: 0,
    right: 0,
    width: 260,
    height: 400,
    borderRadius: 10,
  }
});


export default AlbumView;