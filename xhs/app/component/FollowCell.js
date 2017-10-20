/**
 * Created by coatu on 2017/10/16.
 */
import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import {deviceW,Colors,Sizes} from '../common/CommonDevice'
import  PropTypes from 'prop-types'
export default class FollowCell extends Component {
    static propTypes = {
        image:PropTypes.string,
        title:PropTypes.string,
        content:PropTypes.string,
        isFollow:PropTypes.bool
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.ViewStyle}>
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:'http://img5.duitang.com/uploads/item/201406/14/20140614232003_UtZP8.thumb.700_0.jpeg'}}
                               style={styles.imageStyle}/>
                        <View style={{marginLeft:10}}>
                            <Text style={styles.titleStyle}>小红书</Text>
                            <Text style={styles.contentStyle}>官方账号，小红书男性频道</Text>
                        </View>
                    </View>

                    <View style={styles.rightViewStyle}>
                        <Text style={styles.followStyle}>关注</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },

    ViewStyle: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e8e8e8',
        marginLeft: 10
    },

    leftViewStyle: {
        flexDirection: 'row'
    },

    rightViewStyle: {
        width: 60,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 3,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },

    imageStyle: {
        width: 40,
        height: 40,
        borderRadius: 20
    },

    titleStyle:{
        fontSize:Sizes.titleSize,
        fontWeight:'bold'
    },

    contentStyle:{
        marginTop:8,
        fontSize:Sizes.listSize,
        color:Colors.inputColor
    },

    followStyle:{
        color:Colors.red,
        fontSize:Sizes.titleSize
    }

});