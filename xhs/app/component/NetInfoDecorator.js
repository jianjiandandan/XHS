/**
 * Created by coatu on 2017/10/19.
 */
import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Image,
    NetInfo
} from 'react-native';

import {observable} from 'mobx';
import connectionStore from '../mobx/ConnectionStore';

const NetInfoDecorator = WrappedComponent => class extends Component {
    componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this._handleNetworkConnectivityChange);
    }

    _handleNetworkConnectivityChange = isConnected => connectionStore.isConnected=isConnected

    render() {
        return <WrappedComponent {...this.props} {...this.state}/>
    }
}

export default NetInfoDecorator