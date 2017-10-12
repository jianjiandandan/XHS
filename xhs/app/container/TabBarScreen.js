/**
 * Created by coatu on 2017/10/11.
 */
import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import {StackNavigator} from 'react-navigation'
import HomeView from '../pages/HomeView'

const routes = StackNavigator({
    HomeView:{
        screen:HomeView,
        navigationOptions:{
            header:null
        }
    }
},{
    mode:'card',
    headerMode:'screen'
})

export default routes;