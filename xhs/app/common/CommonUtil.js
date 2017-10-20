/**
 * Created by coatu on 2017/10/13.
 */
import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    Dimensions
} from 'react-native';
//根据手机屏幕适配文字大小

const deviceW = Dimensions.get('window').width;
const basePx = 375;

const delay = timeout => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('请求超时'), timeout * 1000)
    })
}

export function px2dp(px) {
    if (Platform.OS === 'ios') {
        return px * deviceW / basePx
    }
    return px * deviceW / basePx
}

export const get = ({url, params = {}, timeout}) => {
    console.log('Jinlaik')
    const paramArr = []
    if (Object.keys(params).length !== 0) {
        for (const key in params) {
            paramArr.push(`${key}=${params[key]}`)
        }
    }
    const urlStr = `${url}?${paramArr.join('&')}`
    if (timeout === undefined) {
        return fetch(urlStr)
    } else {
        return Promise.race([fetch(urlStr), delay(timeout)])
    }
}