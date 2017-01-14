import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import Style from '../constants/Style';

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Style.GRAY_COLOR
  },
  touchableContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50
  }
});

class TripperTabItem extends React.Component {

  constructor(props) {
    super(props);
    if (props.tabBarResources.length !== props.tabs.length) {
      console.warn('ScrollableTabView TripperTabItem config error, please check');
    }
  }
  
  render() {
    const {
      tabBarResources,
      activeTab,
      tabs,
      goToPage
    } = this.props;
    return (
      <View style={styles.container}>
        {
          tabs.map((tab, index) => {
            return (
              <TouchableOpacity style={styles.touchableContainer} key={index} onPress={() => {goToPage(index)}} activeOpacity={1}>
                <Image style={styles.image} source={tabBarResources[index][activeTab === index ? 1 : 0]}/>
              </TouchableOpacity>
            );
          })
        }
      </View>
    );
  }

};

TripperTabItem.propTypes = {
  tabBarResources: React.PropTypes.array.isRequired,//图片资源二维数组
  activeTab: React.PropTypes.number,
  tabs: React.PropTypes.array
};

export default TripperTabItem;


