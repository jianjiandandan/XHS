/**
 * Created by coatu on 2017/10/12.
 */
import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    PixelRatio,
    Platform
} from 'react-native';

import {px2dp,get} from './CommonUtil'
const {width, height} = Dimensions.get('window')

const Colors = {
    bgColor:'rgba(245,248,250,1)',
    white:'white',
    red:'rgba(227,29,59,1)',
    titleRed:'red',
    titleGray:'rgba(148,148,148,1)',
    inputColor:'rgba(149,149,149,1)',
    ExplainColor:'rgba(175,175,175,1)',
    transparent:'#rgba(0,0,0,0)'
};

const Sizes = {
    navSize:px2dp(18),//导航的字体
    titleSize:px2dp(16),//主标题的字体
    listSize:px2dp(14),//列表或者子标题的字体
    searchSize:px2dp(12),//搜索框，正文及内容型字体
    screenSize:px2dp(11),//筛选框文字
    otherSize:px2dp(10)//辅助性的字体
};

module.exports = {
    deviceW:width,
    deviceH:height,
    Colors,
    Sizes,
    px2dp,
    get,
    navBarHeight:Platform.OS == 'ios'? 64 : 50,
    navBarPaddingTop: Platform.OS == 'ios'? 22 : 0,
    onePix: 1 / PixelRatio.get(),
}


