/**
 * Created by coatu on 2017/10/11.
 */
import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native';

import {Drawer, Button} from 'teaset'
import {observer} from 'mobx-react'
import Store from '../mobx/StatusBarStore'
import CommonCell from '../component/CommonCell'
import {imageHeader, cameraImage, messageImage, cartImage} from '../img'
import Icon from 'react-native-vector-icons/FontAwesome'
import {deviceW, deviceH, Colors} from '../common/CommonDevice'
import FindView from './FindView';
import FollowView from './FollowView';
import BuyView from './BuyView'


export default class HomeView extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            rootTransform: 'none',
            selectedIndex: 'first'
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerViewStyle}>
                    <TouchableHighlight onPress={()=>this.show('left')} topSeparator='full' underlayColor='transparent'>
                        <Icon name={imageHeader} size={30}/>
                    </TouchableHighlight>

                    <View style={{flexDirection:'row'}}>
                        {['关注', '发现', '购买'].map((item, index) => {
                            let selectedIndex = item == '关注' ? 'first' : item == '发现' ? 'second' : 'three'
                            return (
                                <TouchableOpacity onPress={()=>this.pushToDetail(selectedIndex)} key={index}
                                                  underlayColor='transparent'>

                                    <Text style={{
                                        color:selectedIndex == this.state.selectedIndex?'black':'gray',
                                        fontSize:18,
                                        marginRight:10,
                                        fontWeight:selectedIndex == this.state.selectedIndex?'bold':'normal'}}>{item}</Text>
                                    <View style={[styles.headerLineViewStyle,{
                                        borderBottomColor:selectedIndex == this.state.selectedIndex?'red':'transparent',
                                        borderBottomWidth:selectedIndex == this.state.selectedIndex?2:0,
                                    }]}>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}

                    </View>
                    <Icon name={cameraImage} size={30}/>
                </View>

                {/*搜索*/}
                <View style={styles.searchViewStyle}>
                    <TextInput
                        placeholder={'🔍搜索笔记，商品和用户'}
                        style={styles.textInputStyle}/>
                </View>

                {this.justToView()}

                <View style={styles.BottomViewStyle}>
                    <View style={styles.viewStyle}>
                        {[messageImage, cartImage].map((item, index) => {
                            return (
                                <View key={index}>
                                    <View style={styles.circularViewStyle}>
                                        <Icon name={item} size={30}/>
                                    </View>
                                    <View style={styles.circularlineViewStyle}/>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </View>
        );
    }


    justToView() {
        switch (this.state.selectedIndex) {
            case 'first':
                return (
                    <FollowView/>
                );
                break;
            case 'second':
                return (
                    <FindView/>
                );
                break;
            case 'three':
                return (
                    <BuyView/>
                );
                break;

        }
    }

    //左边的抽屉
    @observer
    show(side) {
        Store.isHiddenStatusBar = true;
        let {rootTransform} = this.state;
        if (side == 'left') {
            this.drawer = Drawer.open(this.renderDrawerMenu(), side, rootTransform)
        }
    }


    renderDrawerMenu() {
        return (
            <View style={styles.drawerViewStyle}>
                <Image
                    source={{uri:'http://a.hiphotos.baidu.com/image/pic/item/f636afc379310a550352aa35be4543a9832610f8.jpg'}}
                    style={styles.drawerImageStyle}/>

                <View style={styles.nickNameViewStyle}>
                    <Text style={styles.textStyle}>简简单单</Text>
                    <Text style={styles.rightRowStyle}> > </Text>
                </View>
                {this.listRow(['我的关注|eye', '我的收藏|star-o', '消息|comment-o'])}
                <View style={styles.lineViewStyle}/>
                {this.listRow(['购物车|cart-plus', '订单|sticky-note', '薯券|credit-card', '心愿单|tags', '黑卡会员|diamond'])}
                <View style={styles.lineViewStyle}/>
                {this.listRow(['设置|gear'])}
            </View>
        )
    }

    listRow(rowData) {
        let listRowArr = [];
        rowData.map((item, index) => {
            let varb11 = item.split("|")
            listRowArr.push(
                <CommonCell key={index} leftImage={`${varb11[1]}`} title={`${varb11[0]}`}/>
            )
        });
        return listRowArr;
    }


    pushToDetail(item) {
        this.setState({
            selectedIndex: item
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    headerViewStyle: {
        backgroundColor: 'white',
        height: 64,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10
    },

    drawerViewStyle: {
        width: deviceW - 100,
        paddingLeft: 30,
        paddingRight: 60
    },

    drawerImageStyle: {
        width: 70,
        height: 70,
        shadowOpacity: 1,
        marginTop: 30,
        borderRadius: 70 / 2,
        shadowColor: 'gray',
    },

    nickNameViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        alignItems: 'center'
    },

    lineViewStyle: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        height: 1,
        width: deviceW - 190
    },

    textStyle: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    rightRowStyle: {
        fontSize: 20,
        color: 'gray',
        marginBottom: 6
    },

    searchViewStyle: {
        width: deviceW,
        height: 60,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textInputStyle: {
        width: deviceW - 20,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.ExplainColor,
        paddingLeft: 20
    },

    BottomViewStyle: {
        position: 'absolute',
        bottom: 0
    },

    circularlineViewStyle: {
        backgroundColor: 'red',
        width: 10,
        height: 10,
        borderRadius: 5,
        position: 'absolute',
        left: 39,
        bottom: 38
    },

    circularViewStyle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },

    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: deviceW,
        alignItems: 'center',
        padding: 30
    },

    headerLineViewStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 3,
        width: 38,
        borderRadius: 10
    },
});