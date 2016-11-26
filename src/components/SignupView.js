import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    TouchableOpacity,
    InteractionManager,
} from 'react-native';
import Toast from 'react-native-root-toast';
// import Header from '../components/Header';
import {signup} from '../actions/users';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RegisterPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            mobile: '',
            password: '',
            code:'',
            verifyCodeText:'获取验证码',
            user:{},
        };
        this.timer = null;
        this.timeHit = 0;
    }

    navtoLast() {
        const {navigator} = this.props;
        navigator.pop();
    }

    componentWillUnmount(){
        // this.unsubscribe();
    }

    componentDidMount(){
        // this.unsubscribe = MemberStore.listen(this.onLogined.bind(this));
    }

    componentWillUpdate(nextProps, nextState){
        InteractionManager.runAfterInteractions(() => {
            const {currentUser} = this.props;
            if(currentUser.data.id){
                this.props.navigator.popToTop();
            }
            if (!currentUser.isLoading && currentUser.status == false) {
                Toast.show(currentUser.message, {position:Toast.positions.CENTER});
            }
        });
    }

    render(){
        return (
            <View style={styles.container}>
                <NavigationBar
                  style={styles.navbar}
                  title={{title: '我的小点'}}
                  statusBar={
                    {style: 'light-content',
                    tintColor: '#8FBC8F'}   
                  }
                  leftButton={  
                    <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={this.navtoLast.bind(this)}>
                      <Icon name='arrow-left' size={18} style={{color: 'white'}} />
                    </TouchableOpacity>
                  } 
                  rightButton={
                    <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={ this.props.onRightPress}>
                        <Icon name='check' size={18} style={{color: 'white'}} />
                    </TouchableOpacity>
                  }
                />
                <View style={[styles.formInput, styles.formInputSplit]}>
                    <Image source={require('../images/user.png')} style={{width:25,height:25,resizeMode: 'contain'}}/>
                    <TextInput
                        ref="login_name"
                        placeholder='请输入手机号'
                        style={styles.loginInput}
                        onChangeText={this._onChangeMobile.bind(this)} />
                </View>
                <View style={[styles.formInput, styles.formInputSplit]}>
                    <Image source={require('../images/passicon.png')} style={{width:25,height:25,resizeMode: 'contain'}}/>
                    <TextInput
                        ref="login_psw"
                        style={styles.loginInput}
                        secureTextEntry={true}
                        placeholder='请设置密码'
                        onChangeText={this._onChangePassword.bind(this)} />
                </View>
                <View style={[styles.formInput, styles.formInputSplit]}>
                    <Image source={require('../images/passicon.png')} style={{width:25,height:25,resizeMode: 'contain'}}/>
                    <TextInput
                        ref="login_psw"
                        style={styles.loginInput}
                        secureTextEntry={true}
                        placeholder='请输入验证码: 8888'
                        onChangeText={this._onChangeCode.bind(this)} />
                    <TouchableOpacity style={styles.verifyCodeBtn} onPress={this._sendVerifyCode.bind(this)}>
                        <Text ref="btnSendVCode" style={styles.verifyCodeText}>{this.state.verifyCodeText}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.registerBtn} onPress={this._register.bind(this)}>
                    <Text style={styles.registerText}>注册</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _onChangeMobile(text) {
        this.state.mobile = text;
        // this.setState({'mobile': text});
    }

    _onChangePassword(text){
        this.state.password = text;
        // this.setState({'password': text});
    }

    _onChangeCode(text){
        this.state.code = text;
        // this.setState({'code': text});
    }

    _sendVerifyCode(){
        if(this.timeHit==0){
            // MemberAction.smsVerifyCode(this.state.mobile);
        }
        if(!this.timer){
            this.timer = setInterval(function(){
                const maxSeconds = 60;
                let txt = '';
                this.timeHit++;
                //console.warn('this.timeHit',this.timeHit);
                if(this.timeHit > maxSeconds){
                    txt = '获取验证码';
                    this.timeHit = 0;
                    clearInterval(this.timer);
                    this.timer = null;
                }else{
                    txt = (parseInt(maxSeconds) - parseInt(this.timeHit)) + '秒';
                }
                this.setState({'verifyCodeText':txt});
            }.bind(this),1000);
        }
    };

    _register(){
        let {mobile, password, code} = this.state;

        if (!mobile.length) {
            Toast.show('请输入正确的手机号', {position:Toast.positions.CENTER});
            return;
        }
        if (password.length < 6) {
            Toast.show('密码必须大于6位', {position:Toast.positions.CENTER});
            return;
        }
        if (!code.length) {
            Toast.show('请输入验证码', {position:Toast.positions.CENTER});
            return;
        }

        InteractionManager.runAfterInteractions(() => {
            const {dispatch} = this.props;
            signupInfo = {
                mobile: mobile,
                password: password,
                code: code
            }
            dispatch(signup(signupInfo));
        });
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

    verifyCodeBtn: {
        backgroundColor: '#c5523f',
        paddingTop: 5,
        paddingBottom: 5,
        alignItems:'center',
        width: 80,
        height: 30,
        borderRadius: 2,
    },
    verifyCodeText: {
        color: '#ffffff',
    },

    registerBtn:{
        backgroundColor: '#ff6836',
        padding: 10,
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 3,
    },
    registerText:{
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
