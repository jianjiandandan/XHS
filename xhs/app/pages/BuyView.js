// /**
//  * Created by coatu on 2017/10/13.
//  */
import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import BrannerView from '../component/BrannerView'
import TypeView from '../component/TypeView'
import AutoResponisve from 'autoresponsive-react-native'
import {observer} from 'mobx-react'
import {reaction, action} from 'mobx';
import {Colors, deviceW, deviceH, onePix, navBarHeight} from '../common/CommonDevice'
import BuyStore from '../mobx/BuyStore'

let itemWidth = (deviceW - 15 * 2 - 10) / 2;

@observer
export default class BuyView extends Component {
    BuyStore = new BuyStore(1);

    componentDidMount() {
        this.dispose = reaction(
            () => [
                this.BuyStore.page,
                this.BuyStore.isRefreshing,
            ],
            () => this.BuyStore.List())

    }

    componentWillUnmount() {
        this.dispose()
    }

    render() {
        const {List, isFetching, isRefreshing, isNoMore} = this.BuyStore;
        const scrollViewH = deviceH - navBarHeight - 44 - 10;
        const feedArray = List.slice();
        return (
            <ScrollView style={styles.container}>
                <View style={{height:200}}>
                    <BrannerView/>
                </View>
                <TypeView/>

                <View style={{marginTop:10,backgroundColor:'white'}}>
                    <View style={{borderBottomWidth:1,borderBottomColor:'#e8e8e8',padding:10}}>
                        <Text>限时购</Text>
                        <Text>超人气单品低价抢</Text>
                    </View>

                    <View style={{flexDirection:'row',padding:10,justifyContent:'space-between'}}>
                        <View style={{borderRightWidth:1,borderRightColor:'#e8e8e8',width:deviceW/2.2}}>
                            <Text>领券中心</Text>
                            <Text>为您搜索全站福利</Text>
                        </View>
                        <View>
                            <Text>领券中心</Text>
                            <Text>为您搜索全站福利</Text>
                        </View>
                    </View>
                </View>


                {/*瀑布流*/}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingTop:10}}
                    //style={{width:deviceW,height:scrollViewH}}
                    automaticallyAdjustContentInsets={false}
                    removeClippedSubviews={true}
                    bounces={true}
                    //scrollEventThrottle={16}
                    //onMomentumScrollEnd={this._onMomentumScrollEnd}
                />

                <AutoResponisve {...this.getAutoResponsiveProps()}>
                    {feedArray.map(this._renderChildren)}
                </AutoResponisve>
            </ScrollView>
        )
    }

    getAutoResponsiveProps() {
        return {
            itemMargin: 10,
        };
    }

    _renderChildren = (feed, key) => {
        //默认高度
        let height = itemWidth + 50;
        let titleHeight = 30;
        if (feed.description) {
            if (feed.description.length !== 0 && feed.description.length < 13) {
                titleHeight += 25;
            } else if (feed.description.length >= 13) {
                titleHeight += 40;
            }
        }
        height += titleHeight;
        if (feed.content_type !== 5) {
            height = itemWidth + 50;
        }

        const style = {
            width: itemWidth,
            height,
            marginLeft: 15
        }

        return (
            <FeedItem
                key={`${feed.item_id}-${key}`}
                feed={feed}
                onPress={this._onPressChild}
                style={style}
                titleHight={titleHeight}
            />
        )
    }

}

@observer
class FeedItem extends Component {
    _onPress = () => {
        const {feed, onPress} = this.props;
        onPress && onPress(feed);
    }

    render() {
        const {feed, onPress, style, titleHeight} = this.props;
        let imageH = feed.content_type != 5 ? style.width + 50 : style.width;
        //返回的数据中，头像出现null的情况，所以source仍然做个判断
        let publisherAvatar = feed.publisher_avatar ? {uri: feed.publisher_avatar} : null;
        return (
            <TouchableOpacity
                activeOpacity={0.75}
                onPress={this._onPress}
                style={[{backgroundColor:'#fff'},style]}
            >
                <Image style={{width:style.width,height:imageH}}
                       source={{uri:feed.card_image}}

                />
                {feed.content_type == 5 &&
                <View
                    style={{
                        height: titleHeight,
                        width:style.width,
                        paddingHorizontal:4,
                        paddingTop:8

                    }}>
                    <View style={{
                        height: titleHeight - 8,
                        width: style.width - 8,
                        justifyContent: 'space-around',
                        borderBottomWidth: onePix,
                        borderColor: '#ccc'
                    }}>
                        <Text style={{fontSize: 14, color: 'black'}} numberOfLines={1}>{feed.title}</Text>
                        {feed.description != '' &&
                        <Text style={{color: 'gray', fontSize: 13}} numberOfLines={2}>{feed.description}</Text>
                        }
                    </View>
                </View>
                }
                {feed.content_type == 5 &&
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 50,
                    paddingHorizontal: 4
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style={{height: 30, width: 30, borderRadius: 15}}
                            source={publisherAvatar}
                            //defaultSource={require('../../resource/img_default_avatar.png')}
                        />
                        <Text
                            style={{fontSize: 11, color: 'gray', marginLeft: 8, width: style.width * 0.4}}
                            numberOfLines={1}
                        >
                            {feed.publisher}
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image style={{height: 12, width: 12}}/>
                        <Text style={{fontSize: 11, color: 'gray', marginLeft: 2}}>{feed.like_ct}</Text>
                    </View>
                </View>
                }
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor
    }
})


