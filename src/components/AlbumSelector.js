'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ListView,
  Text,
  TouchableHighlight,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

class AlbumSelector extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.state = {
       dataSource: ds.cloneWithRows(['随笔', '花儿']),
     };  
  }

  render() {
    return (
     <View style={[styles.container, this.props.style]}>
     	<View style={styles.header}>
     		<Text style={{color: '#5597B8', fontSize: 20, fontWeight: 'bold'}}>选择笔记本</Text>
     		<Icon name="create-new-folder" size={25} color="#5597B8"/>
     	</View>
     	<ListView
           dataSource={this.state.dataSource}
           renderRow={(rowData) => {
	       		return (
	       	      <TouchableHighlight onPress={() => {

	       	        }} style={styles.item}>
	       	        <View>
	       	          <View style={styles.row}>
	       	            <Text style={{fontSize: 18,}}>
	       	              {rowData}
	       	            </Text>
	       	          </View>
	       	        </View>
	       	      </TouchableHighlight>
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