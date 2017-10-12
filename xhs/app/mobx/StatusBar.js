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

import {observable} from 'mobx'
 class Store {
    @observable isHiddenStatusBar = false
}

let store = new Store();
export default store;
