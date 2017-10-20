/**
 * Created by coatu on 2017/10/13.
 */
import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import Swiper from 'react-native-swiper';
import {deviceW} from '../common/CommonDevice'

const IMG = [
    'http://a3.topitme.com/0/1c/12/1128107705fd5121c0l.jpg',
    'http://g.hiphotos.baidu.com/image/pic/item/aa64034f78f0f736f9cfeee50055b319ebc41324.jpg',
    'http://g.hiphotos.baidu.com/image/pic/item/aec379310a55b3195561849049a98226cefc17be.jpg',
    'http://b.hiphotos.baidu.com/image/pic/item/38dbb6fd5266d01600a362059c2bd40735fa3560.jpg'
]
const renderPagination = (index, total, context) => {
    return (
        <View style={styles.paginationStyle}>
            <Text style={{ color: 'grey' }}>
                <Text style={styles.paginationText}>{index + 1}</Text>/{total}
            </Text>
        </View>
    )
}

export default class BrannerView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Swiper
                    style={styles.wrapper}
                    renderPagination={renderPagination}
                    loop={false}>
                    {IMG.map((item, index) => {
                        return (
                            <View style={styles.slide} key={index}>
                                <Image style={styles.image} source={{uri:item}}/>
                            </View>
                        )
                    })}
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        width: deviceW,
        flex: 1,
        height: 200
    },
    paginationStyle: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    paginationText: {
        color: 'white',
        fontSize: 20
    }
})