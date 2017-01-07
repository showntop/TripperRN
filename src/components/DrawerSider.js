import React, {PropTypes, Component} from 'react';

import {
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  Dimensions,
  InteractionManager
} from 'react-native'

import  * as StyleSheet from '../utility/StyleSheet';

import Icon from 'react-native-vector-icons/FontAwesome';

import UserContainer from '../containers/UserContainer';
import AlbumContainer from '../containers/AlbumContainer';
import SigninContainer from '../containers/SigninContainer';

class DrawerSider extends Component {
  static propTypes = {
    closeDrawer: PropTypes.func.isRequired
  };

  onPressDrawerItem (index) {
    const {navigator, closeDrawer} = this.props;
    closeDrawer()
    switch (index) {
      case 0:
          navigator.push({
            component: AlbumContainer,
            name: 'User'
          });
        break;
      case 2:
        InteractionManager.runAfterInteractions(() => {
          navigator.push({
            component: AboutContainer,
            name: 'About'
          });
        });
        break;
      default:
        break;
    }
  }

  openUser(){
    const {navigator, closeDrawer, userStore} = this.props;
    closeDrawer()

    let user = userStore.currentUser || {};

    if(!user.id) {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({
                name: 'SigninContainer',
                component: SigninContainer,
                passProps: {
                    ...this.props,
                }
            })
        });
    } else {
      navigator.push({
        component: UserContainer,
        name: 'UserContainer'
      });
    }    
  }

  render () {
    const {userStore} = this.props
    let user = userStore.currentUser || {};
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.openUser.bind(this)} style={styles.headWrap}>
    	    {user.avatar ?
        		<Image style={styles.headIcon} source={{uri:user.avatar}}/> :
        		<Image style={styles.headIcon} source={require('../images/img_default_head.png')}/>
    	    }
    	    {user.id ?
        		<Text style={styles.loginButton}>{user.username}</Text> :
        		<Text style={styles.loginButton}>点击登录</Text>
    	    }
        </TouchableOpacity>
        <View style={{flex: 1, backgroundColor: '#ffffff'}}>
          <TouchableOpacity
            style={styles.drawerContent}
            onPress={this.onPressDrawerItem.bind(this, 0)}>
              <Icon name="book"
                style={styles.drawerIcon}/>
              <Text style={styles.drawerText}>
                纸札
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerContent}
            onPress={this.onPressDrawerItem.bind(this, 0)}>
              <Icon name="bell"
                style={styles.drawerIcon}/>
              <Text style={styles.drawerText}>
                消息
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerContent}
            onPress={this.onPressDrawerItem.bind(this, 0)}>
              
              <Icon name='group' style={styles.drawerIcon}/>
              <Text style={styles.drawerText}>
                群组
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerContent}
            onPress={this.onPressDrawerItem.bind(this,2)}>
              <Icon name="wrench"
                style={styles.drawerIcon}/>
              <Text style={styles.drawerText}>
                设置
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerContent}
            onPress={this.onPressDrawerItem.bind(this,2)}>
              <Icon name="info"
                style={styles.drawerIcon}/>
              <Text style={styles.drawerText}>
                关于
              </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
    android:{
      marginTop: 20
    }
  },
  drawerContent: {
    margin: 10,
    marginLeft: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  drawerIcon:{
    fontSize: 25,
    width: 30,
    height: 30,
    marginLeft: 5
  },
  drawerText: {
    marginLeft: 30,
    color: 'black',
  },
  headWrap: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#2B2B2B', 
    padding: 10,  
    paddingTop: 20
  },
  headIcon: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  loginButton: {
      borderColor: 'white',
      color: 'white',
      borderWidth: 0.5,
      padding: 5,
      marginTop: 10,
      marginLeft: 20,
      borderRadius: 3,
  },

})

export default DrawerSider;
