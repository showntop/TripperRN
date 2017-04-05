'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import { CardStack, Card } from 'react-cardstack';

class StackView extends Component {
  render() {
    return (
      <CardStack
      	height={500}
      	width={400}
      	backgroundColor='#f8f8f8'
      	hoverOffset={25}>

      	<Card backgroundColor='#2980B9'>
      		<h1>Number 1</h1>
      	</Card>

      	<Card backgroundColor='#27AE60'>
      		<h1>Number 2</h1>
      	</Card>

      </CardStack>
    );
  }
}

const styles = StyleSheet.create({

});


export default StackView;