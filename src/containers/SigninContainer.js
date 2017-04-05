import React, {Component} from 'react';
import {connect} from 'react-redux';
import SigninView from '../components/SigninView';

class SigninContainer extends Component {
    render() {
        return (
            <SigninView headerTitle="登录"  needSpinner={false} {...this.props} />
        )
    }
}

export default connect((state) => {
    const { userStore } = state;
    return { userStore }
})(SigninContainer);