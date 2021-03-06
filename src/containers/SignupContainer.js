import React, {Component} from 'react';
import {connect} from 'react-redux';
import SignupView from '../components/SignupView';

class SignupContainer extends Component {
    render() {
        return (
            <SignupView {...this.props} />
        )
    }
}

export default connect((state) => {
    const { userStore } = state;
    return {
        userStore
    }
})(SignupContainer);