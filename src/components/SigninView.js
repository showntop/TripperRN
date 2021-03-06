import React, {Component} from 'react';
import {
    Text,
    TextInput,
    View,
    Image,
    Alert, 
    TouchableOpacity,
    InteractionManager,
} from 'react-native';

import * as StyleSheet from '../utility/StyleSheet';

import Toast   from 'react-native-root-toast';
import Spinner from 'react-native-spinkit';
import Icon    from 'react-native-vector-icons/FontAwesome';

import TripperComponent from '../components/TripperComponent';
import SignupContainer  from '../containers/SignupContainer';
import {signin}         from '../actions/users';


export default class SigninView extends TripperComponent {
    constructor(props){
        super(props);
        this.state = {
            mobile: '',
            password: '',
        };
    }

    componentWillReceiveProps(nextProps) {
      let { currentUser } = nextProps.userStore;
      debugger;
      if(currentUser.id && currentUser.token){
        this.props.navigator.popToTop();
        Toast.show("登录成功", {position: Toast.positions.CENTER});
      }
    }

    renderBody(){
        let {userStore} = this.props;
        return (
            <View style={styles.container}>
                <View style={[styles.formInput, styles.formInputSplit]}>
                    <Image source={require('../images/user.png')} style={{width:25,height:25,resizeMode: 'contain'}}/>
                    <TextInput
                        ref="login_name"
                        placeholder='请输入手机号'
                        style={styles.loginInput}
                        underlineColorAndroid= "transparent"
                        onChangeText={this.onChangeMobile.bind(this)} />
                </View>
                <View style={[styles.formInput, styles.formInputSplit]}>
                    <Image source={require('../images/passicon.png')} style={{width:25,height:25,resizeMode: 'contain'}}/>
                    <TextInput
                        ref="login_psw"
                        style={styles.loginInput}
                        secureTextEntry={true}
                        placeholder='请输入密码'
                        underlineColorAndroid= "transparent"
                        onChangeText={this.onChangePassword.bind(this)} />
                </View>
                {
                    userStore.showSpinner ?
                    <View style={styles.loginBtn}>
                      <Spinner style={{justifyContent: 'center', alignItems: 'center'}} isVisible={true} size={20} type='ThreeBounce' color='white'/> 
                    </View>
                    :
                    <TouchableOpacity style={styles.loginBtn} onPress={this._login.bind(this)}>
                      <Text style={styles.loginText}>登录</Text> 
                    </TouchableOpacity>
                }                
                <View style={styles.registerWrap}>
                    <TouchableOpacity style={{alignItems:'flex-start',flex:1}} onPress={this._forgetPassword.bind(this)}>
                        <Text style={{color:'#62a2e0'}}>忘记密码?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignItems:'flex-end',flex:1}} onPress={this._register.bind(this)}>
                        <Text style={{color:'#62a2e0'}}>立即注册</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    _register() {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({
                name: 'RegisterContainer',
                component: SignupContainer,
                props: {
                    ...this.props,
                }
            })
        });
    }

    _forgetPassword() {

    }

    _login(){
        let {mobile, password} = this.state;

        if (!mobile.length) {
            Toast.show('请输入正确的手机号', {position:Toast.positions.CENTER});
            return;
        }
        if (!password.length) {
            Toast.show('请输入密码', {position:Toast.positions.CENTER});
            return;
        }
        InteractionManager.runAfterInteractions(() => {
            const {dispatch} = this.props;
            dispatch(signin({
               mobile: mobile, 
               password: password,
            }));
        });
    }

    onChangeMobile(text){
        this.state.mobile = text;
        // this.setState({'mobile': text});
    }

    onChangePassword(text){
        this.state.password = text;
        // this.setState({'password': text});
    }
}

class RegisterBtn extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <TouchableOpacity onPress={()=>this.props.navigator.push({'id':'register'})}>
                <Text>注册</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navbar: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 10,
      paddingRight: 10,
      height: 50,
      backgroundColor: '#5597B8'
    },


    headerWrap: {
        alignItems: 'center',
        height: 44,
        backgroundColor: '#ff7419',
    },
    header: {
        color: '#fff',
        paddingTop: 22,
        fontSize: 17,
    },

    loginWrap: {
        backgroundColor: '#FCE9D4',
    },
    imgWrap: {
        flexDirection: 'row',
        flex: 1,
    },
    loginMain: {
        flex:1,
    },
    comCulture: {
        width:320,
        marginTop:50,
    },

    formInput:{
        flexDirection:'row',
        height: 60,
        padding: 20,
    },
    formInputSplit:{
        borderBottomWidth:1,
        borderBottomColor:'#dbdada',
    },
    loginInput: {
        height: 40,
        paddingLeft: 10,
        flex: 1,
        fontSize: 16,
    },

    loginBtn:{
        backgroundColor: '#ff6836',
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 3,
    },
    loginText:{
        color:'#ffffff',
        fontSize: 17,
    },

    registerWrap: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    },
});
