/**
 * Created by coatu on 2017/10/13.
 */
import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Image,
    WebView
} from 'react-native';
import  FollowCell from '../component/FollowCell'
import {deviceW, Colors} from '../common/CommonDevice'
import NetInfoDecorator from '../component/NetInfoDecorator'
import {observer} from 'mobx-react/native'
import connectionStore from '../mobx/ConnectionStore'

@NetInfoDecorator
@observer
export default class FollowView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.allViewStyle}>
                    <Image style={styles.imageStyle}
                           source={{uri:'http://pic12.photophoto.cn/20090910/0005018303466977_b.jpg'}}/>
                    <Text style={styles.textStyle}>没有来自好友的内容</Text>
                    <Text style={styles.contentStyle}>关注后，你可以在关注页面中看到对方的动态</Text>
                </View>

                <View style={styles.recommendViewStyle}>
                    <Text style={{fontSize:16}}>根据你的兴趣，为你推荐</Text>
                </View>
                <FollowCell/>
            </View>//:<View><Text>32323</Text></View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bgColor
    },

    allViewStyle: {
        backgroundColor: 'white',
        paddingBottom: 20
    },

    imageStyle: {
        height: 200,
        width: deviceW
    },

    textStyle: {
        marginTop: 15,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },

    contentStyle: {
        marginTop: 10,
        color: 'gray',
        fontSize: 16,
        textAlign: 'center'
    },

    recommendViewStyle: {
        padding: 15,
        justifyContent: 'center'
    }
})