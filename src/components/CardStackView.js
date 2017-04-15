'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Animated,
  Text,
  Easing,
  PanResponder
} from 'react-native';

const DefaultHeight = 300;
const DefaultWidth  = 300;
const defaultinterval      = 30;

class CardStackView extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
    	pan: new Animated.ValueXY(),
        pan2: new Animated.ValueXY(),
        enter: new Animated.Value(0.8),

        fadeAnim: new Animated.Value(0.8),

    	currentX: new Animated.Value(5),
    };
  }

  componentWillMount() {
  	this._panResponder = PanResponder.create({
       onMoveShouldSetResponderCapture: () => true,
       onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
           return Math.abs(gestureState.dx) > 5;
       },

       onPanResponderGrant: (e, gestureState) => {
           this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
           this.state.pan.setValue({x: 0, y: 0});
       },


       onPanResponderMove: (e, gestureState) => {
       		console.log(e, gestureState);
 
           let val = Math.abs((gestureState.dx*.0013));
           let opa = Math.abs((gestureState.dx*.0022));
           if (val>0.2) {
               val = 0.2;
           }
           Animated.timing(
               this.state.fadeAnim,
               {toValue: 0.8+val}
           ).start();
           Animated.spring(
               this.state.enter,
               { toValue: 0.8+val, friction: 7 }
           ).start();
           Animated.event([
               null, {dx: this.state.pan.x},
           ])(e, gestureState)
       },

       onPanResponderRelease: (e, {vx, vy}) => {
           // if(this.props.onSwiping)
           //   this.props.onSwiping(null);
           // var velocity;

           // if (vx >= 0) {
           //     velocity = clamp(vx, 4.5, 10);
           // } else if (vx < 0) {
           //     velocity = clamp(vx * -1, 4.5, 10) * -1;
           // }

           // if (Math.abs(this.state.pan.x._value) > SWIPE_THRESHOLD) {

           //     if (velocity>0) {
           //         (this.props.onSwipeRight) ? this.props.onSwipeRight() : undefined;
           //         this.selectNext();
           //     } else {
           //         (this.props.onSwipeLeft) ? this.props.onSwipeLeft() : undefined;
           //         this.selectNext();
           //     }

           //     Animated.decay(this.state.pan, {
           //         velocity: {x: velocity, y: vy},
           //         deceleration: 0.98
           //     }).start(this._resetState.bind(this))
           // } else {
           //     Animated.spring(this.state.pan, {
           //         toValue: {x: 0, y: 0},
           //         friction: 4
           //     }).start()
           // }
       }
   })

  }

  getCardStyles() {

      let { pan, pan2, enter } = this.state;

      let [translateX, translateY] = [pan.x, pan.y];

      let rotate = pan.x.interpolate({inputRange: [-700, 0, 700], outputRange: ['-10deg', '0deg', '10deg']});

      let opacity = pan.x.interpolate({inputRange: [-320, 0, 320], outputRange: [0.9, 1, 0.9]})
      let scale = enter;

      let animatedCardStyles = {transform: [{translateX}, {translateY}, {rotate}], opacity};
      let animatedCardStyles2 = {transform: [{scale}]};

      return [animatedCardStyles, animatedCardStyles2]
  }

  renderChildren(){
  	const items = [
	  'red',
	  'yellow',
	  'orange',
	  'blue',
	  'green',
	  '#0e0e0e',
	  '#409fff',
	  '#abc0de',
	  '#65fdaa',
	  '#ccc0be',
	  '#780aed',
	];
  	let view = items.map((item, i) =>{

  		let leftOffset = this.state.currentX.setOffset(i * i);// - this.state.currentX;
  		let height = 300 - (items.length - i - 1) * 10;

  		console.log(leftOffset);

  		return (
  			<Animated.View key={i} style={
				[
					this.getCardStyles()[1],
					{
						backgroundColor: item,
						position: 'absolute',
		              	top: 0,
		              	right: 0,
		              	left: i*20,
		              	height: 300,
		              	width: 300
          			},
					{ opacity: this.state.fadeAnim,  }
				]
	      	}
	      	{...this._panResponder.panHandlers}
	  		>
	  		  <Text style={{}}>{item+'item'}</Text>
	  		</Animated.View>
  		);
  	});
  	return view;
  }

  render() {
    return (
		<View ref='stackContainer' 
		style={{marginTop: 50, backgroundColor: 'grey', position: 'relative'}} 
		contentContainerStyle={{ }}
		horizontal={true} 
		onScroll={
            (event) => {
            	let currentX = event.nativeEvent.contentOffset.x
            	// console.log(currentX);
            	if (currentX == 0) {return}
            	this.setState({currentX: currentX});
            	// this.refs.stackContainer.scrollTo({x: 0,y: 0, animated: true});
            }
          }
        >  
          {	
          	this.renderChildren()
      	  }	
        </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default CardStackView;