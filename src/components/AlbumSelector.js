'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ListView,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {createAlbum} from '../actions/albums';

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class AlbumSelector extends Component {
  constructor(props) {
    super(props);
     this.state = {
        showAlbumCreator: false,
        createdAlbum: {
          name: ""
        }
     };  

    this.toCreateAlbum = this.toCreateAlbum.bind(this)
  }

  onCreateAlbum() {
    this.setState({
      showAlbumCreator: true,
    })
  }

  toCreateAlbum() {
    const {dispatch} = this.props;
    dispatch(createAlbum({}, this.state.createdAlbum));
    this.setState({showAlbumCreator: false});
  }

  render() {
    let dataSource = ds.cloneWithRows(this.props.userStore.myAlbums);

    return (
     <View style={[styles.container, this.props.style]}>

      <Modal
        animationType={"slide"}
        transparent={true}
        visible={this.state.showAlbumCreator}
        onRequestClose={() => {this.setState({showAlbumCreator: false})}}>
        <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignItems: 'center'}} >
          <View style={{width: 300, height: 120, backgroundColor: "white", marginTop: 100, padding: 10}}>
            <View style={{ height: 45, borderBottomColor: '#8B7E66', borderBottomWidth: 1, paddingBottom: 6}}>
                <TextInput ref="title" style={{height: 45, paddingBottom: 0}} placeholder="名称" underlineColorAndroid= "transparent"
                value={this.state.createdAlbum.name} onChangeText={name => this.setState({createdAlbum: {name: name}})}/>
            </View>
            <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', paddingLeft: 10, paddingRight: 10}}>
              <TouchableOpacity style={styles.button} onPress ={() => {this.setState({showAlbumCreator: false})}}>
                <Text style={{color: 'black', fontSize: 20, textAlignVertical: 'center', textAlign: 'center'}}>取消</Text>
              </TouchableOpacity>   
              <TouchableOpacity style={styles.button} onPress ={() => {this.toCreateAlbum()}}>
                <Text style={{color: 'black', fontSize: 20, textAlignVertical: 'center', textAlign: 'center'}}>确定</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

     	<View style={styles.header}>
     		<Text style={{color: '#5597B8', fontSize: 20, fontWeight: 'bold'}}>选择笔记本</Text>
     		<TouchableOpacity onPress ={this.onCreateAlbum.bind(this)}>
          <Icon name="create-new-folder" size={25} color="#5597B8"/>
        </TouchableOpacity>
     	</View>
     	<ListView
           dataSource={dataSource}
           renderRow={(rowData) => {
	       		return (
	       	      <TouchableOpacity onPress={() => {
                  this.props.callback(rowData)
	       	        }} style={styles.item}>
	       	        <View>
	       	          <View style={styles.row}>
	       	            <Text style={{fontSize: 18,}}>
	       	              {rowData.name}
	       	            </Text>
	       	          </View>
	       	        </View>
	       	      </TouchableOpacity>
	       	    );
           }}
         />     
     </View>
    );
  }
}

const styles = StyleSheet.create({
	header: {
		height: 35,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottomWidth: 1,
		borderColor: '#5597B8',

	},
	container: {
	    justifyContent: 'center',
	    padding: 6,
	    backgroundColor: 'white'
  	},
  	item:{
  		paddingLeft: 5,
  		justifyContent: 'center', 
  		height: 46,
  		borderBottomWidth: 1,
  		borderColor: '#F7F7F7',
  	}
});


export default AlbumSelector;