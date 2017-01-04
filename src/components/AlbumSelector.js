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

class AlbumSelector extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
        showAlbumCreator: false,
        dataSource: ds.cloneWithRows([{id: 1, name: '随笔'}, {id: 2, name: '花儿'}]),
     };  
  }

  onCreateAlbum() {
    this.setState({
      showAlbumCreator: true,
    })
  }

  createAlbum() {

  }

  render() {
    return (
     <View style={[styles.container, this.props.style]}>

      <Modal
        animationType={"slide"}
        transparent={true}
        visible={this.state.showAlbumCreator}
        onRequestClose={() => {this.setState({showAlbumCreator: false})}}>
        <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignItems: 'center', justifyContent: 'center'}} >
          <View style={{width: 200, height: 120, backgroundColor: "white"}}>
            <View style={{ height: 15, borderBottomColor: '#8B7E66', borderBottomWidth: 1, paddingBottom: 6}}>
                <TextInput ref="title" style={{height: 15, paddingBottom: 0}} placeholder="名称" underlineColorAndroid= "transparent"
                value={this.state.title} onChangeText={title => this.setState({title})}/>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.button} onPress ={() => {this.setState({showAlbumCreator: false})}}>
                <Text style={{color: 'blue', fontSize: 20, textAlignVertical: 'center', textAlign: 'center'}}>取消</Text>
              </TouchableOpacity>   
              <TouchableOpacity style={styles.button} onPress ={this.createAlbum.bind(this)}>
                <Text style={{color: 'blue', fontSize: 20, textAlignVertical: 'center', textAlign: 'center'}}>确定</Text>
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
           dataSource={this.state.dataSource}
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