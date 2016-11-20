'use strict';
import React, { Component, PropTypes } from 'react';

import { Provider } from "react-redux"

import configureStore from "./store/configureStore"

import TripperApp from "./TripperApp"

class Tripper extends Component {

    constructor(props) {
      super(props);
    
      this.state = {
        isLoading: true,
        store: configureStore(() => this.setState({isLoading: false})),
      };
    }

      render() {
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