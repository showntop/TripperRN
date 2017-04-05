'use strict';

import React, { Component } from 'react';

import {
  View,
  ListView,
  Text
} from 'react-native';

import * as StyleSheet  from '../utility/StyleSheet';

import TripperComponent from '../components/TripperComponent';
import TripperHeader    from '../components/TripperHeader';
import GiftedListView   from '../widget/GiftedListView'
import ProductListItem  from '../components/ProductListItem'

class ShopView extends TripperComponent {

  static contextTypes = {
    openDrawer: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  _handleShowMenu() {
    this.context.openDrawer();
  }

  renderHeader() {
    let rightItem = {
        layout: 'icon',
        title: 'write',
        icon: require('../images/note.png'),
        onPress: this.openEditor,
      };
    return(
      <TripperHeader
        style={styles.header}
        leftItem={{
          layout: 'icon',
          title: 'Close',
          icon: require('../images/logo_white@32.png'),
          onPress: () => this._handleShowMenu(),
        }}
        rightItem={rightItem}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>
            <Text style={styles.day}>{'收藏/历史'}</Text>
            {'\n'}
            <Text style={styles.time}>{'一片净土，芳心永许'}</Text>
          </Text>
        </View>
      </TripperHeader>
    );
  }

  renderBody() {
    //pageSize代表一个event loop绘制多少个row
    let dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(movieList);
    return (
      <GiftedListView
        initialListSize={20}
        pageSize={20}
        refreshing={true}
        hasMore={true}
        fetchLatestData={()=>{}}
        fetchMoreData={()=>{}}
        dataSource={dataSource}
        renderRow={this.renderRow}
        renderSeparator={this.renderSeparator}
      />
    );
  }

  renderRow(data, sectionID, rowID) {
    return (
      <ProductListItem rowID={rowID} cover={data.cover} score={data.score} onPress={() => this.onPress(data)}/>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    // android: {
      backgroundColor: '#5597B8',
    // },
  },
  headerContent: {
    android: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    ios: {
      height: 65,
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  title: {
    color: 'white',
    fontSize: 12,
    ios: {
      textAlign: 'center',
    },
  },
  day: {
    ios: {
      fontWeight: 'bold',
    },
    android: {
      fontSize: 9,
    },
  },
  time: {
    android: {
      fontWeight: 'bold',
      fontSize: 17,
    }
  },
});


export default ShopView;




const movieList =  [
    {
      "id": "155",
      "title": "比利·林恩的中场战事",
      "verse": "",
      "verse_en": "",
      "score": "86",
      "revisedscore": "0",
      "releasetime": "2016-11-11 00:00:00",
      "scoretime": "2016-11-12 00:00:00",
      "cover": "http://image.wufazhuce.com/FuoWvIEmOIJppJdfw3h8HWebjy1s",
      "servertime": 1479395208
    },
    {
      "id": "157",
      "title": "我不是潘金莲",
      "verse": "",
      "verse_en": "",
      "score": null,
      "revisedscore": "0",
      "releasetime": "2016-11-18 00:00:00",
      "scoretime": "2016-11-19 00:00:00",
      "cover": "http://image.wufazhuce.com/FtNgzTAmSrxUQLeYmym26mN-i5uN",
      "servertime": 1479395208
    },
    {
      "id": "156",
      "title": "航海王之黄金城",
      "verse": "",
      "verse_en": "",
      "score": "92",
      "revisedscore": "0",
      "releasetime": "2016-11-11 00:00:00",
      "scoretime": "2016-11-12 00:00:00",
      "cover": "http://image.wufazhuce.com/FmXybV2x8XdHcAei6p38s9AC-zzH",
      "servertime": 1479395208
    },
    {
      "id": "154",
      "title": "邻家大贱谍",
      "verse": "",
      "verse_en": "",
      "score": "70",
      "revisedscore": "0",
      "releasetime": "2016-11-08 00:00:00",
      "scoretime": "2016-11-09 00:00:00",
      "cover": "http://image.wufazhuce.com/FvlE_CSwUAXavEjruNR7WSdQfgI9",
      "servertime": 1479395208
    },
    {
      "id": "153",
      "title": "一句顶一万句",
      "verse": "",
      "verse_en": "",
      "score": "67",
      "revisedscore": "0",
      "releasetime": "2016-11-04 00:00:00",
      "scoretime": "2016-11-05 00:00:00",
      "cover": "http://image.wufazhuce.com/FmEj2AnVCqk-6HtKpnXk1Y0DPXOo",
      "servertime": 1479395208
    },
    {
      "id": "152",
      "title": "蜡笔小新：梦境世界大突击",
      "verse": "",
      "verse_en": "",
      "score": "85",
      "revisedscore": "0",
      "releasetime": "2016-11-04 00:00:00",
      "scoretime": "2016-11-05 00:00:00",
      "cover": "http://image.wufazhuce.com/FnnaYJoNCq5n3s6d9KroSIWeCfgG",
      "servertime": 1479395208
    },
    {
      "id": "150",
      "title": "捉迷藏",
      "verse": "",
      "verse_en": "",
      "score": "80",
      "revisedscore": "0",
      "releasetime": "2016-11-04 00:00:00",
      "scoretime": "2016-11-05 00:00:00",
      "cover": "http://image.wufazhuce.com/Fv7v-m1dcg0pXxtBJ4sSPj6-D6ui",
      "servertime": 1479395208
    },
    {
      "id": "151",
      "title": "奇异博士",
      "verse": "",
      "verse_en": "",
      "score": "87",
      "revisedscore": "0",
      "releasetime": "2016-11-04 00:00:00",
      "scoretime": "2016-11-05 00:00:00",
      "cover": "http://image.wufazhuce.com/FikORa_Qy6I2Fqozb9XT_TUwY8YO",
      "servertime": 1479395208
    },
    {
      "id": "148",
      "title": "但丁密码",
      "verse": "",
      "verse_en": "",
      "score": "77",
      "revisedscore": "0",
      "releasetime": "2016-10-28 00:00:00",
      "scoretime": "2016-10-29 00:00:00",
      "cover": "http://image.wufazhuce.com/Fk1Qq4uQCkOgJHz7QV_pUB1_N-ij",
      "servertime": 1479395208
    },
    {
      "id": "149",
      "title": "驴得水",
      "verse": "",
      "verse_en": "",
      "score": "82",
      "revisedscore": "0",
      "releasetime": "2016-10-28 00:00:00",
      "scoretime": "2016-10-28 00:00:00",
      "cover": "http://image.wufazhuce.com/Fl5fGQatJVhtUDcvUep_kC-uIpbi",
      "servertime": 1479395208
    },
    {
      "id": "147",
      "title": "龙珠Z：复活的弗利萨",
      "verse": "",
      "verse_en": "",
      "score": "78",
      "revisedscore": "0",
      "releasetime": "2016-10-21 00:00:00",
      "scoretime": "2016-10-22 00:00:00",
      "cover": "http://image.wufazhuce.com/FiEEN19MMrQHR5x6swuYNWBqJwQl",
      "servertime": 1479395208
    },
    {
      "id": "145",
      "title": "侠探杰克：永不回头",
      "verse": "",
      "verse_en": "",
      "score": "73",
      "revisedscore": "0",
      "releasetime": "2016-10-21 00:00:00",
      "scoretime": "2016-10-22 00:00:00",
      "cover": "http://image.wufazhuce.com/FrN3ohkTuop315TPw8_3JR3-Sj4u",
      "servertime": 1479395208
    },
    {
      "id": "146",
      "title": "机械师2：复活",
      "verse": "",
      "verse_en": "",
      "score": "83",
      "revisedscore": "0",
      "releasetime": "2016-10-21 00:00:00",
      "scoretime": "2016-10-22 00:00:00",
      "cover": "http://image.wufazhuce.com/FqK1M9DKNJj9QQSJpkfqBlszfnvL",
      "servertime": 1479395208
    },
    {
      "id": "144",
      "title": "惊天破",
      "verse": "",
      "verse_en": "",
      "score": "76",
      "revisedscore": "0",
      "releasetime": "2016-10-20 18:00:00",
      "scoretime": "2016-10-21 18:00:00",
      "cover": "http://image.wufazhuce.com/FlW32pyUx12pj8OlIbgyqAE6r1gg",
      "servertime": 1479395208
    },
    {
      "id": "143",
      "title": "勇士",
      "verse": "",
      "verse_en": "",
      "score": "75",
      "revisedscore": "0",
      "releasetime": "2016-10-14 00:00:00",
      "scoretime": "2016-10-15 00:00:00",
      "cover": "http://image.wufazhuce.com/Fle9u8kbcvRDrqq1cUwABb1Bl93J",
      "servertime": 1479395208
    },
    {
      "id": "142",
      "title": "黑处有什么",
      "verse": "",
      "verse_en": "",
      "score": "74",
      "revisedscore": "0",
      "releasetime": "2016-10-14 00:00:00",
      "scoretime": "2016-10-15 00:00:00",
      "cover": "http://image.wufazhuce.com/FsT6SugEUj3ihVN4u7EtLYkIgakw",
      "servertime": 1479395208
    },
    {
      "id": "141",
      "title": "圆梦巨人",
      "verse": "",
      "verse_en": "",
      "score": "80",
      "revisedscore": "0",
      "releasetime": "2016-10-14 00:00:00",
      "scoretime": "2016-10-15 00:00:00",
      "cover": "http://image.wufazhuce.com/FmZv93O3P2b6z1hZPBaxI5U3E6Z0",
      "servertime": 1479395208
    },
    {
      "id": "140",
      "title": "宾虚",
      "verse": "",
      "verse_en": "",
      "score": "67",
      "revisedscore": "0",
      "releasetime": "2016-10-10 00:00:00",
      "scoretime": "2016-10-10 00:00:00",
      "cover": "http://image.wufazhuce.com/FoIJSEN93oc5j-25Ow9IRYFw5-JR",
      "servertime": 1479395208
    },
    {
      "id": "139",
      "title": "从你的全世界路过",
      "verse": "",
      "verse_en": "",
      "score": "79",
      "revisedscore": "0",
      "releasetime": "2016-09-29 00:00:00",
      "scoretime": "2016-09-30 00:00:00",
      "cover": "http://image.wufazhuce.com/FhZUf-qlYAKHf1FAioBwj8RIa962",
      "servertime": 1479395208
    },
    {
      "id": "137",
      "title": "王牌逗王牌",
      "verse": "",
      "verse_en": "",
      "score": "44",
      "revisedscore": "0",
      "releasetime": "2016-10-01 00:00:00",
      "scoretime": "2016-10-02 00:00:00",
      "cover": "http://image.wufazhuce.com/Fr4vg1_oL_jXKkum9vgRiu-Phcj-",
      "servertime": 1479395208
    }
  ]
