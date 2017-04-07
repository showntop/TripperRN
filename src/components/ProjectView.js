'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
  ListView,
  WebView,
} from 'react-native';

import {Text, Heading1, Paragraph} from '../components/TripperText'
import HTMLView from 'react-native-htmlview';

import Icon2 from 'react-native-vector-icons/Ionicons';
import NaviHeader from '../components/NaviHeader';
import SharePage from '../components/SharePage';

import {fetchProject, createComment, createLike, deleteLike} from '../actions/projects';

const windowWidth = Dimensions.get('window').width;

let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class ProjectView extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      comment:{
        content: ""
      }
    };
  }

  componentDidUpdate(prevProps, prevState) {

  }


  componentDidMount() {
  	const {dispatch} = this.props
  	dispatch(fetchProject(this.props.project.id))
  }


  onShare() {
    const {navigator, projectStore} = this.props;
    navigator.push({
      component: SharePage,
      name: 'SharePage',
      props:{
        shareData: {
          type: 'news',
          webpageUrl: "http://www.wimill.com",
          thumbImage: 'ic_launcher',
          title: `《${'tripper'}》`,
          description: `作者/ ${'share your heart whith others'}`
        }
      }, 
    });
  }

  onCreateComment() {
    const {dispatch, userStore} = this.props;
    dispatch(createComment(userStore.currentUser, this.props.project.id, this.state.comment))
  }

  onUpdateLike() {
    const {dispatch, userStore, projectStore} = this.props;
    if (projectStore.currentProject.liked) {
      dispatch(deleteLike(userStore.currentUser, this.props.project.id))
    }else{
      dispatch(createLike(userStore.currentUser, this.props.project.id))
    }
  }

  renderNode(node, index) {
    if (node.name == 'iframe') {
      return (
        <View key={index} style={{width: 200, height: 200}}>
          <Text>{node.attribs.src}</Text>
        </View>
      );
    }

    if (node.name == 'img') {
      return (
          <Image key={index} source={{uri: node.attribs.src}} resizeMode='contain' style={{width: (windowWidth-40), height: 200}}/>
      );
    }
  }
  
  render() {
    const {projectStore} = this.props;
    const project = projectStore.currentProject;
    if (projectStore.showSpinner == true || project.id == undefined ||project.id == "") {
      return (
        <View style={[styles.container]}>
          <NaviHeader {...this.props} style={styles.header} title={'阅读'}/>
          <View style={ {flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>加载中...</Text>
          </View>
        </View>
        );
    }
    let the_content = project.content.replace(/data-src/g, "src");

    debugger;
    return (
      <View  style={styles.container}>
        <NaviHeader {...this.props} style={styles.header} title={'阅读'}/>
        <Image source={{uri: project.asset}} style={{flex: 1}}>
         
                <ListView
                  removeClippedSubviews={false}
                  style={styles.body}
                  dataSource={dataSource.cloneWithRows(project.comments || [])}
                  renderHeader= {()=>{

                      return(
                        <View style={{backgroundColor: 'white', marginTop: 200, alignItems: 'center',}}>
                          <Heading1 style={{alignSelf: 'flex-start', paddingHorizontal: 10, paddingTop: 20,}}>{project.title}</Heading1>
                          <Text style={{fontSize: 10, alignSelf: 'flex-start', paddingHorizontal: 10, paddingTop: 5}}>{'作者：' + (project.author || {name: '佚名'}).name + "   " + project.created_at.split('T')[0].replace('-', '.').replace('-', '.')}</Text>
                          {
                            // <Paragraph style={styles.paragraph}>
                            //                           {project.content}
                            //                         </Paragraph>
                          }
                          {
                          <HTMLView renderNode={(node, index) => this.renderNode(node, index)}
                                  value={the_content}
                                  style={styles.paragraph}
                                />
                          }
                        </View>
                        );
                    }
                  }
                  renderRow={(comment)=>{
                    return(
                      <View style={styles.commentItem}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                          <Image 
                            style={{width: 30, height: 30, borderRadius: 15}}
                            source={{uri: (project.author.avatar || 'http://p.3761.com/pic/72301406681690.jpg')}}/>
                          <View style={{ marginLeft: 10}}>
                            <Text style={{fontSize: 12}}>{'飞行的猪'}</Text>
                            <Text style={{fontSize: 10, color: 'grey'}}>{'50 min ago'}</Text>
                          </View>
                        </View>
                        <Text  style={{ paddingTop: 10, paddingBottom: 10}}>{comment.content}</Text>
                      </View>
                      );
                  }}
                  enableEmptySections={true}
                  />
        </Image>
        <View style={styles.footer}>
            <View style={{flex: 1, borderBottomWidth: 1, borderColor:'#DDD8CE', marginBottom: 2}}>
              <TextInput
                  style={{height: 40,paddingLeft: 10,flex: 1,fontSize: 14}}
                  placeholder='点评一下'
                  underlineColorAndroid= "transparent"
                  value={this.state.comment.content}
                  onChangeText={(content)=>{ this.setState({comment: {content: content}})}} />
            </View>
            <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={this.onCreateComment.bind(this)}>
              <Icon2 name='md-send' size={30} style={{color: '#BDBDBD'}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={this.onUpdateLike.bind(this)}>
              {
                project.liked ? <Icon2 name='md-heart' size={30} style={{color: 'red'}} /> : <Icon2 name='md-heart-outline' size={30} style={{color: '#BDBDBD'}} />
              }
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolItem} activeOpacity={0.1} onPress ={this.onShare.bind(this)}>
              <Icon2 name='md-share' size={30} style={{color: '#BDBDBD'}} />
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor: 'white'
	},
	header: {
    height: 60,
		justifyContent: 'center',
		alignItems: 'center',
    backgroundColor: '#9BCD9B'
	},
  body:{
    flex: 1,
    marginBottom: 50,
  },
  paragraph:{
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom:60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentItem: {
    flex: 1,
    padding: 8,
    backgroundColor: 'white',
  },
  footer: {
    flex: 1,
    alignSelf: 'stretch',
    borderTopColor: '#F0F0F0',
    borderTopWidth: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    position: 'absolute',
    height: 50,
    width: Dimensions.get('window').width,
    bottom: 0,
    padding: 5,
    justifyContent: 'flex-end',
  },
  toolItem: {
    flex: 0,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default ProjectView;