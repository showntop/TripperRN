'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ListView,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper'
import ViewPager from 'react-native-viewpager';
import commonStyle from '../constants/Style'

const windowWidth = Dimensions.get('window').width;
const HEIGHT = 200;

const channels = ['散文', '大学生活', '中国妖怪录',"历史的边角科","剪辑师爱电影"]

const dataList = ['http://www.ihuochaihe.net/thumb/2016-09-26/Z.origin/Z6qqqTHHH000kkk8.jpg',
  'http://www.ihuochaihe.net/thumb/2016-09-26/5.origin/599DDD66fff333x.jpg',
  'http://www.ihuochaihe.net/thumb/2016-09-26/0.origin/0AAoS111vvggg777.jpg',
  'http://www.ihuochaihe.net/thumb/2016-09-26/0.origin/0AAoS111vvggg777.jpg'
]

const userList=[
  'http://pkicdn.image.alimmdn.com/old/icon/000/145858/c3eff63aff85d8db0f6c2a43382df6ae',
  'http://tp2.sinaimg.cn/1279769217/180/40027924031/1',
  'http://tp2.sinaimg.cn/1863160221/180/5640534745/0',
  'http://tva4.sinaimg.cn/crop.0.1.1242.1242.180/9b9cee21jw8f72llm2vsmj20yi0ykjvw.jpg',
  'http://pkicon.image.alimmdn.com/icon/20161031/0c8a9bfb08c5ab2ad317ee5d8199ad70.jpg?v=1477843780',
  'http://pkicon.image.alimmdn.com/icon/20160731/e150206abfc20e4a9445bcac9477d933.jpg?v=1469958463',
  'http://tva4.sinaimg.cn/crop.0.0.267.267.50/005HIgpojw8f4tdw0tmrmj307f07fjrp.jpg',
  'http://pkicon.image.alimmdn.com/icon/20161111/b0444c20cb36e6e5c8ebc8685ca67dc3.png?v=1478841604',
  'http://pkicon.image.alimmdn.com/icon/20160811/09be8482005305164d5a9cf4518b0e5a.png?v=1470888342',
  'http://pkicon.image.alimmdn.com/icon/20160927/4ba7e7ceebc8cb22da30194e26a4a78c.jpg?v=1474939873',
  'http://pkicdn.image.alimmdn.com/old/icon/000/648670/cec6d4c88a5fd04a02f9d25cbc9534c3'
]

class ChannelView extends Component {
  constructor(props) {
  	super(props);
  	var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

  	this.state = {
      carouselSource: new ViewPager.DataSource({pageHasChanged: (p1, p2) => p1 !== p2}).cloneWithPages(dataList),
  		dataSource: ds.cloneWithRows(channels),
      userSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(userList)
  	};
  }

  renderPage(data) {
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => this.onPress(data)}>
        <Image resizeMode="cover" style={styles.image} source={{uri: data}}/>
      </TouchableOpacity>

    );
  }

  render() {
    return (
      <ScrollView style={{flex: 1, backgroundColor: "#E0EEEE"}}>
        <View>
          <ViewPager
            style={styles.container}
            dataSource={this.state.carouselSource}
            renderPage={this.renderPage}
            isLoop={true}
            autoPlay={true}
          />
        </View>



        <View style={styles.container2}>

          <View style={{backgroundColor: '#E0EEEE', width: 50, height: 50, borderRadius: 5, alignItems: 'center', justifyContent: 'center',}}>
            <Text>文字</Text>
          </View>       
          <View style={{backgroundColor: '#E0EEEE', width: 50, height: 50, borderRadius: 5, alignItems: 'center', justifyContent: 'center',}}>
            <Text>音频</Text>
          </View>       
          <View style={{backgroundColor: '#E0EEEE', width: 50, height: 50, borderRadius: 5, alignItems: 'center', justifyContent: 'center',}}>
            <Text>电影</Text>
          </View>       
          <View style={{backgroundColor: '#E0EEEE', width: 50, height: 50, borderRadius: 5, alignItems: 'center', justifyContent: 'center',}}>
            <Text>杂</Text>
          </View>

        </View>
    		

	  	 <View style={{paddingVertical: 20}}>
	  	 	<ListView
 	         dataSource={this.state.dataSource}
 	         renderRow={(rowData) => 
 	         	<View style={{flexDirection: 'row',backgroundColor: 'white', height: 50, borderBottomWidth: 1, borderColor: '#EBEBEB', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20}}>
 	         	  <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center',}}>
                <Image source={{uri: 'http://tp4.sinaimg.cn/1583890703/180/5687878857/1'}} style={{width: 30, height: 30}}>
                </Image>
                <View style={{width: 10}}/>
                <Text>{rowData}</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
                <View style={{backgroundColor: 'red', height: 16, width: 16, borderRadius: 8, justifyContent: 'center',alignItems: 'center',}}>
                  <Text style={{fontSize: 6 }}>99+</Text>
                </View>
                <Text>></Text>
              </View>
 	         	</View>
 	         }/>
	  	 </View>

       <View style={{flex: 1}}>
        <Text>知名推荐</Text>
          <View style={{flex: 1}}>
                  <ListView
                    contentContainerStyle={{flexDirection: 'row', justifyContent: 'center',flexWrap: 'wrap'}}
                     dataSource={this.state.userSource}
                     renderRow={(rowData) => 
                      <View style={{flex: 1}}>
                        <Image source={{uri: rowData}} style={{width: 80, height: 80}}/>
                      </View>
                     }/>
          </View>
       </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: HEIGHT
  },
  image: {
    width: windowWidth,
    height: HEIGHT
  }, 

  container2: {
    flexDirection: 'row',
    marginBottom: 10,
    marginHorizontal: 10,
    marginTop: -20,
    padding: 8,
    borderWidth: 1,
    justifyContent: 'space-around',
    borderColor: commonStyle.GRAY_COLOR,
    backgroundColor: 'white'
  },
  leftContainer: {
    justifyContent: 'space-between',
    flex: 1
  },
  rightContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  authorInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorInfo: {
    marginLeft: 10
  },
  authorName: {
    color: commonStyle.LIGHT_BLUE_COLOR,
    fontSize: 12
  },
  authorDesc: {
    color: commonStyle.TEXT_GRAY_COLOR,
    marginTop: 5,
    fontSize: 12
  },
  avatarImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  dateText: {
    color: commonStyle.TEXT_GRAY_COLOR,
    marginTop: 5,
    fontSize: 12
  },
  musicImage: {
    height: 40,
    width: 40,
  },
  xiamiImage: {
    width: 60,
    height: 20,
  },
  titleText: {
    color: commonStyle.TEXT_COLOR,
    fontSize: 18,
    marginTop: 5
  },
  transparentImage: {
    backgroundColor: 'transparent'
  }

});


export default ChannelView;