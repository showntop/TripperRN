'use strict';

import React, { Component } from 'react';

import {
  View,
  ListView,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  RefreshControl
} from 'react-native';

import * as StyleSheet  from '../utility/StyleSheet';

import * as Api from '../api';

import Toast from 'react-native-root-toast';

import TripperComponent  from '../components/TripperComponent';
import TripperHeader     from '../components/TripperHeader'
import GiftedListView    from '../widget/GiftedListView'
import ProjectContainer  from '../containers/ProjectContainer'
import EditorContainer   from '../containers/EditorContainer'

import {listFeed} from '../actions/feeds';

const windowWidth = Dimensions.get('window').width;

const widths = [windowWidth -20, (windowWidth -20)/ 2];

class CharmView extends TripperComponent {
  
  static contextTypes = {
    openDrawer: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  
    this.openEditor    = this.openEditor.bind(this);
  }

  componentDidMount() {
    // const {dispatch} =  this.props;
    // dispatch(listFeed({page_no: 1}));  
  }

  openEditor() {
    const {navigator} = this.props

    navigator.push({
      component: EditorContainer,
      name: 'EditorContainer'
    })
  }

  _handleShowMenu() {
    this.context.openDrawer();
  }

  listLatestFeeds() {
    const {dispatch} =  this.props;
    dispatch(listFeed({page_no: 1}));  
  }

  listMoreFeeds() {
    const {feedStore, dispatch} =  this.props;
    dispatch(listFeed({page_no: feedStore.currentPage}));   
  }

  _onPress(project) {
    let {navigator} =  this.props;
    navigator.push({
      component: ProjectContainer,
      name: 'ProjectContainer',
      props:{
        project: project,
      }
    });
  }

  renderHeader() {
    let rightItem = {
        layout: 'icon',
        title: 'write',
        icon: require('../images/note.png'),
        onPress: this.openEditor,
      };
    return(
      <TripperHeader
        style={styles.header}
        leftItem={{
          layout: 'icon',
          title: 'Close',
          icon: require('../images/logo_white@32.png'),
          onPress: () => this._handleShowMenu(),
        }}
        rightItem={rightItem}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>
            <Text style={styles.day}>11月 {'11日/晴'}</Text>
            {'\n'}
            <Text style={styles.time}>{'五分钟速递'}</Text>
          </Text>
        </View>
      </TripperHeader>
    );
  }

  renderItem(rowData, sectionID, rowID, highlightRow) {

    if (rowData.asset && rowData.asset != "") {
      return this.renderItemRitch(rowData, rowID);
    }else{
      return this.renderItemPlain(rowData);
    }
  }

  renderItemFull(rowData) {
    return(
        <TouchableOpacity activeOpacity={0.8} style={ [styles.gridItemFull, {width: widths[0], flexDirection: 'row'}]} 
          onPress={()=> this._onPress(rowData)}>
          <Image 
              resizeMode='stretch'
              source={{uri: rowData.asset}}
              style={{width: 160, height: 100}}
              />
          <View style={{justifyContent: 'space-between',}}>
            <Text style={{marginLeft: 10, fontWeight: 'bold', fontSize: 15, width: (widths[0] - 175)}}>{rowData.title}</Text>
            <Text style={{fontSize: 10, color: 'grey', marginLeft: 10}}>{rowData.intro}</Text>
            <Text style={{color: 'grey', marginLeft: 10}}>{'---'}</Text>
            <View style={{flexDirection: 'row', marginRight: 10, alignItems: 'center', alignSelf: 'flex-end'}}> 
              <Image source={{uri: rowData.author.avatar}} style={{width: 20, height: 20, borderRadius: 10}}/>
              <Text style={{fontSize: 10, color: 'grey'}}>{rowData.author.nickname}</Text>
            </View>
          </View>
        </TouchableOpacity>
    );
  }

  renderItemHalf(rowData) {
    return(
        <TouchableOpacity activeOpacity={0.8} style={ [styles.gridItemHalf, {width: widths[1], flexDirection: 'column'}]} 
          onPress={()=> this._onPress(rowData)}>
          <Image 
              resizeMode='stretch'
              source={{uri: rowData.asset}}
              style={{width: widths[1] -6, height: widths[1]}}
              />          
          <Text style={{textAlign: 'center', fontSize: 15, fontWeight: 'bold', marginTop: 10}}>{rowData.title}</Text>
          <Text style={{fontSize: 10,marginTop: 10, marginBottom: 5, color: 'grey', alignSelf: 'flex-end'}}>{'作者：' + rowData.author.nickname}</Text>
        </TouchableOpacity>
    );
  }

  renderItemRitch(rowData, rowID) {

    let index = 1;
    if (rowID % 5 == 0) {
      index = 0;
    }
    if (index == 0) {
      return this.renderItemFull(rowData);
    }else{
      return this.renderItemHalf(rowData);
    }

  }

  renderItemPlain(rowData) {
    return(
        <TouchableOpacity activeOpacity={0.8} style={ [styles.gridItemPlain, {width: widths[0]}]}
          onPress={()=> this._onPress(rowData)}>
          <Text style={{alignSelf: 'center', fontSize: 15, fontWeight: 'bold'}}>{rowData.title}</Text>
          <Text style={{fontSize: 10, color: 'grey', marginVertical: 10,textAlign: 'center'}}>{rowData.intro}</Text>
        </TouchableOpacity>
    );
  }

  renderBody() {
    let feeds = [{id: 1, title: 'Fetch Robotics退出全新的物流货运机器人'}

            ,{id: 2, title: 'siri成仅次于谷歌的第二大移动搜索引擎'}

            ,{id: 3, title: 'TCL手机2017Q1仅售1054万部 同比大降39%'}

            ,{id: 4, title: '网信办责令安居客下架中介违规发布的房源信息'}

            ,{id: 5, title: '首汽和神州获发深圳首批网约车平台经营许可证'}];

    const {feedStore} = this.props;

    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(feedStore.feeds);
    return (
      <GiftedListView
        contentContainerStyle={styles.grid}
        initialListSize={20}
        pageSize={20}
        refreshing={feedStore.refreshing}
        hasMore={feedStore.hasMore}
        fetchLatestData={() => this.listLatestFeeds()}
        fetchMoreData={() => this.listMoreFeeds()}
        dataSource={dataSource}
        renderRow={(rowData, sectionID, rowID, highlightRow) => this.renderItem(rowData, sectionID, rowID, highlightRow)}
        renderSeparator={this.renderSeparator}
        refreshControl={
            <RefreshControl
              refreshing={feedStore.refreshing}
              onRefresh={()=>this.listLatestFeeds()}
            />
          }      
      />
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  header: {
    // android: {
      backgroundColor: '#5597B8',
    // },
  },
  headerContent: {
    android: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    ios: {
      height: 65,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  title: {
    color: 'white',
    fontSize: 12,
    ios: {
      textAlign: 'center',
    },
  },
  day: {
    ios: {
      fontWeight: 'bold',
    },
    android: {
      fontSize: 9,
    },
  },
  time: {
    android: {
      fontWeight: 'bold',
      fontSize: 17,
    }
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  gridItemFull: {
    borderRadius: 3,
    overflow: 'hidden',
    borderColor: '#ededef',
    backgroundColor: 'white',
    marginVertical: 3,
    borderWidth: 1,
    elevation: 1,
    padding: 2
  },
  gridItemHalf: {
    borderRadius: 3,
    overflow: 'hidden',
    borderColor: '#ededef',
    backgroundColor: 'white',
    marginVertical: 3,
    borderWidth: 1,
    elevation: 1,
    padding: 2
  },
  gridItemPlain: {
    borderRadius: 3,
    overflow: 'hidden',
    borderColor: '#ededef',
    backgroundColor: 'white',
    marginVertical: 3,
    borderWidth: 1,
    elevation: 1,
    padding: 2
  }
});


export default CharmView;