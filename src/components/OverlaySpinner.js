import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Modal,
} from 'react-native';

import Spinner from 'react-native-spinkit';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  spinnerContent: {
    top: 80,
    height: 50,
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default class OverlaySpinner extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    spinnerVisible: React.PropTypes.bool,
    spinnerContent: React.PropTypes.string,
    spinnerColor: React.PropTypes.string,
    spinnerSize: React.PropTypes.number,
    overlayColor: React.PropTypes.string
  };

  static defaultProps = {
    spinnerVisible: false,
    spinnerContent: "",
    spinnerColor: '#FFE4B5',
    spinnerSize: 50, // 'normal',
    spinnerType: 'Wave',
    overlayColor: 'rgba(0, 0, 0, 0.25)'
  };

  close() {
    // this.setState({ spinnerVisible: false });
  }

  _renderDefaultContent() {
    return (
      <View style={styles.background}>
        <Spinner
          isspinnerVisible={ true }
          color={this.props.spinnerColor}
          size={this.props.spinnerSize}
          type={this.props.spinnerType}
        />
        <View style={styles.textContainer}>
          <Text style={[styles.spinnerContent, this.props.textStyle]}>{this.props.spinnerContent}</Text>
        </View>
      </View>);
  }

  render() {
    return (
      <Modal onRequestClose={() => this.close()} visible={this.props.visible} transparent>
        <View style={[
          styles.container,
          { backgroundColor: this.props.overlayColor }
        ]} key={`spinner_${Date.now()}`}>
          {this._renderDefaultContent()}
        </View>
      </Modal>
    );
  }

}