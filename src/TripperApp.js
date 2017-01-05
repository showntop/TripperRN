'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Navigator,
  View,
  StatusBar,
  Modal,
  Text,
  Platform
} from 'react-native';

var { connect } = require('react-redux');

import Toast from 'react-native-root-toast';

import Style from './constants/Style';
import TripperNavigator from './TripperNavigator'

import DailyContainer from './containers/DailyContainer'

import {listMyAlbum} from './actions/albums';

class TripperApp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showDaily: true
    }
  }

  componentWillReceiveProps(nextProps) {
    const { errorStore } = nextProps;
    if (errorStore.errors.length > 0) {
      errorStore.errors.every( error => {
        Toast.show(error.message, {position:Toast.positions.BOTTOM});
      })
    }
  }

  componentDidMount() {
   const {dispatch} = this.props;
   dispatch(listMyAlbum({}))
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor={Style.STATUSBAR_COLOR}
          barStyle="light-content"
          />
        <TripperNavigator/>
        {        
        //         <Modal
        //           animationType={"slide"}
        //           transparent={true}
        //           visible={this.state.showDaily}
        //           onRequestClose={()=>{this.setState({showDaily: false});}}>
        //           <DailyContainer close={()=>{this.setState({showDaily: false});}}/>
        //         </Modal>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

function mapStateToProps (state) {
  const {errorStore} = state;
  return {
    errorStore
  }
}

export default connect(mapStateToProps)(TripperApp);
