'use strict';

import React, { Component } from 'react';

import {connect} from 'react-redux'

import TripperEditor from '../components/TripperEditor'

class EditorContainer extends Component {
  render() {
    return (
    	<TripperEditor
    		needSpinner={true} 
    		showSpinner={this.props.editorStore.showSpinner}
    		{...this.props} 
    	/>
    );
  }
}


function mapStateToProps (state) {
	debugger;
	const {editorStore, userStore} = state;
	return {userStore, editorStore};
}

export default connect(mapStateToProps)(EditorContainer);
