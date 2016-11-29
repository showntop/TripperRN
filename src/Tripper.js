'use strict';
import React, { Component, PropTypes } from 'react';
import {View, Text} from 'react-native'

import { Provider } from "react-redux"

import configureStore from "./store/configureStore"

import TripperApp from "./TripperApp"

import SplashScreen from 'react-native-splash-screen'

class Tripper extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
        isLoading: true,
        rehydrated: false,
        store: configureStore(() => this.setState({rehydrated: true})),
      };
    }

    componentDidMount() {
      SplashScreen.hide();
    }

    render() {
      if(!this.state.rehydrated){
         return (<View style={{justifyContent: 'center', alignItems: 'center'}}><Text>Loading...</Text></View>);
       }
        //need to fetch user and env before render the launching view
      return (
        <Provider store={ this.state.store }>
          <TripperApp/>
        </Provider>
      );
    }
}

global.LOG = (...args) => {
  console.log('/------------------------------\\');
  console.log(...args);
  console.log('\\------------------------------/');
  return args[args.length - 1];
};

export default Tripper;