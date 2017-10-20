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


export function isNetworkConnected() {
    return NetInfo.fetch().then(reachability => {
        if (reachability === 'unknown') {
            return new Promise(resolve => {
                const handleFirstConnectivityChangeIOS = isConnected => {
                    NetInfo.isConnected.removeEventListener('change', handleFirstConnectivityChangeIOS);
                    resolve(isConnected);
                };
                NetInfo.isConnected.addEventListener('change', handleFirstConnectivityChangeIOS);
            });
        }
        reachability = reachability.toLowerCase();
        return (reachability !== 'none' && reachability !== 'unknown');
    });
}