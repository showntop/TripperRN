import React, {Component} from 'react';
import {connect} from 'react-redux';
import SigninView from '../components/SigninView';

class SigninContainer extends Component {
    render() {
        return (
            <SigninView {...this.props} />
        )
    }
}

export default connect((state) => {
    const { user} = state;
    const { currentUser } = user;
    return {
        currentUser
    }
})(SigninContainer);