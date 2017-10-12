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
    Dimensions
} from 'react-native';

import {Drawer, Button} from 'teaset'
import {observer} from 'mobx-react'
import Store from '../mobx/StatusBar'
import CommonCell from '../component/CommonCell'
import Icon from 'react-native-vector-icons/FontAwesome'
const {width, height} = Dimensions.get('window')


export default class HomeView extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            rootTransform: 'none'
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{backgroundColor:'gray',height:64,alignItems:'center',flexDirection:'row',
               justifyContent:'space-around',paddingTop:8}}>
                    <TouchableHighlight onPress={()=>this.show('left')} topSeparator='full'>
                        <Image source={require('./../img/ucenter_icon.png')} style={{width:32,height:32}}/>
                    </TouchableHighlight>

                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:18}}>关注</Text>
                        <Text style={{marginLeft:10,fontSize:18}}>发现</Text>
                        <Text style={{marginLeft:10,fontSize:18}}>购买</Text>
                    </View>

                    <Image source={{uri:'http://pic29.photophoto.cn/20131125/0049045630500965_b.jpg'}}
                           style={{width:30,height:30}}/>
                </View>
            </View>
        );
    }


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
            <View style={{width:width-100,paddingLeft:30,paddingRight:60}}>
                <Image
                    source={{uri:'http://a.hiphotos.baidu.com/image/pic/item/f636afc379310a550352aa35be4543a9832610f8.jpg'}}
                    style={{width:70,height:70,shadowOpacity:1,marginTop:30,borderRadius:70/2,shadowColor:'gray',
                       }}/>

                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15,alignItems:'center'}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>简简单单</Text>
                    <Text style={{fontSize:20,color:'gray',marginBottom:6}}> > </Text>
                </View>

                {['我的关注|eye', '我的收藏|star-o', '消息|comment-o'].map((item, index) => {
                    let varb = item.split("|")
                    return (
                            <CommonCell
                                key = {index}
                                leftImage = {`${varb[1]}`}
                                title={`${varb[0]}`}
                            />
                    )

                })}

                <View style={{borderBottomColor:'gray',borderBottomWidth:1,height:1,width:width-190}}/>

                {['购物车|cart-plus', '订单|sticky-note', '薯券|credit-card','心愿单|tags','黑卡会员|diamond'].map((item, index) => {
                    let varb11 = item.split("|")
                    return (
                        <CommonCell
                            key = {index}
                            leftImage = {`${varb11[1]}`}
                            title={`${varb11[0]}`}
                        />
                    )

                })}

                <View style={{borderBottomColor:'gray',borderBottomWidth:1,height:1,width:width-190}}/>

                <CommonCell
                    leftImage = {'gear'}
                    title={'设置'}
                />
                {/*<View style={{flex: 1}} />*/}
                {/*<Button type='link' size='sm' title='Hide' onPress={() => this.drawer && this.drawer.close()} />*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})