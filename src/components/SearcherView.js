'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';


class SearcherView extends Component {

  
  navtoLast() {
    const {navigator} = this.props;
    navigator.pop();
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
      	<View>
      	  <View style={{backgroundColor: '#5597B8', height: 20}}/>
	      <View style={{flexDirection: 'row', backgroundColor: '#5597B8', height: 50 ,alignItems: 'center',}}>
	      	<TouchableOpacity onPress={()=>{this.navtoLast()}}><View style={{paddingRight: 10, justifyContent: 'center', alignItems: 'center',}}><Text style={{fontSize: 30, color: 'white'}}>{'<'}</Text></View></TouchableOpacity>
	      	<View style={{flex: 1, padding: 10, backgroundColor: 'white', height: 35}}><TextInput/></View>
	      	<TouchableOpacity><View style={{height: 45, width: 45, justifyContent: 'center', alignItems: 'center',}}><Text>{'确定'}</Text></View></TouchableOpacity>
	      </View>
	    </View>
	  </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default SearcherView;