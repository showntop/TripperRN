import React, {Component} from 'react';
import {connect} from 'react-redux';
import SigninView from '../components/SigninView';

class SigninContainer extends Component {
    render() {
        return (
            <SigninView spinnerContent="登录中..." needSpinner={true} {...this.props} showSpinner={this.props.userStore.showSpinner}/>
        )
    }
}

export default connect((state) => {
    const { userStore } = state;
    return { userStore }
})(SigninContainer);