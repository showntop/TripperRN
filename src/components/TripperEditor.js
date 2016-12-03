import React, {Component} from 'react';

import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    Alert,
    Platform
} from 'react-native'

import Icon from 'react-native-vector-icons/EvilIcons';

import EditorHeader from '../components/EditorHeader';
import * as StyleSheet from '../utility/StyleSheet';
import ImagePicker from 'react-native-image-picker';

import {createProject} from '../actions/projects';

import * as Apix from '../api';
const Api = Apix.default()

// More info on all the options is below in the README...just some common use cases shown here
var options = {
  title: '选择图片',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};


class TripperEditor extends Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {  
        asset: require('../images/default_cover.jpg'),
        title: null,
        content: null
    }

    this.saveSpot = this.saveSpot.bind(this)
  }

  componentDidMount() {
    const {dispatch} = this.props;
  }

  componentWillReceiveProps(nextProps) {
    // if (!nextProps.error.status) {
    //   Alert.alert('温馨提醒','提交成功',[
    //       { text:'确定', onPress: () => { nextProps.navigator.pop() } }
    //     ]);
    // }else{
    //   Alert.alert('温馨提醒',nextProps.error.message,[
    //       { text:'确定', onPress: () => {  } }
    //     ]);
    // }
  }

  selectAsset() {
    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info below in README)
     */
    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {

        // You can display the image using either data...
        const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        // or a reference to the platform specific asset location
        if (Platform.OS === 'ios') {
          const source = {uri: response.uri.replace('file://', ''), isStatic: true};
        } else {
          const source = {uri: response.uri, isStatic: true};
        }
        let result = Api.project.createUptoken(response.uri).then(result => {
          return Api.project.uploadAsset(response.uri,result.uptoken)
        }).then(resp =>{
          return resp.json()
        }).then(result => {
          this.setState({
            asset: {uri: "http://og7lh5z5q.bkt.clouddn.com/"+result.key}
          });  
        });
      }
    });

  }

  saveSpot(){
    const {dispatch} = this.props;
    let project = {
      asset: this.state.asset.uri,
      title: this.state.title,
      content: this.state.content,
    }
    dispatch(createProject(this.props.currentUser.data, project))
  }

  render() {
    return (
        <View style={styles.container}>
            <EditorHeader {...this.props} onRightPress={this.saveSpot} title="记..."/>

            <View style={{ flex: 1}} >
                <Image
                  ref="spotCover"
                  resizeMode="stretch"
                  style={{width: Dimensions.get('window').width, flex: 1}}
                  source={this.state.asset}>
                  <View style={{paddingHorizontal: 10, flex: 1}} >
                      <View style={{ height: 40, borderBottomColor: '#8B7E66', borderBottomWidth: 1, paddingBottom: 6}}>
                          <TextInput ref="title" style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center',  height: 40, paddingBottom: 0, justifyContent: 'center', alignItems: 'center'}} placeholder="写个标题吧" underlineColorAndroid= "transparent"
                          value={this.state.title} onChangeText={title => this.setState({title})}/>
                      </View>

                      <View style={{flex: 1}}>
                          <TextInput ref="description" style={{flex: 1, textAlign: 'center', textAlignVertical: "top"}} placeholder="您还可以写个简述" underlineColorAndroid= "transparent"
                          multiline={true} value={this.state.content} onChangeText={content => this.setState({content})}/>
                      </View>

                      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' ,backgroundColor: '#BEBEBE', borderRadius: 5, width: 150,height: 18, position: 'relative', bottom: 12}} >
                        <Icon name="location" style={{marginTop: 2}}/>
                        <Text style={{fontSize: 10, width: 130}} numberOfLines={1}>{'北京市清湖园'}</Text>
                      </TouchableOpacity>
                  </View>

                  <View style={{flexDirection: 'row',backgroundColor: 'white', opacity: 0.5, height: 30}}>
                     <TouchableOpacity activeOpacity={0.1} onPress ={() => this.tabColor(1)} style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                          <Icon name='user' size={25} style={{color: 'black'}} />
                          <Text style={{color: 'black'}} >亲人</Text>
                      </TouchableOpacity>
                      <TouchableOpacity onPress ={() => this.selectAsset(2)}  style={{flexDirection: 'row',  alignItems: 'center'}}>
                          <Icon name='image' size={25}  style={{color: 'black'}} />
                      </TouchableOpacity>
                  </View>


                </Image>
            </View>
            
            {/*<AttachesEditor {...this.props} style={{flex: 1, backgroundColor: 'white'}} />*/}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    android:{
      marginTop: 20
    }
  },
});

export default TripperEditor
