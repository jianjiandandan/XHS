/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * 我打算用抽屉效果 + MobX来写这个 正好学习学习 ListView 换成flatList
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    DeviceEventEmitter,
    Alert,
    StatusBar,
    Animated
} from 'react-native';

import TabBarScreen from './app/container/TabBarScreen'
import {observable} from 'mobx'
import {observer, Provider} from 'mobx-react/native'
import Store from './app/mobx/StatusBarStore'
import NetInfoDecorator from './app/component/NetInfoDecorator'
import connectionStore from './app/mobx/ConnectionStore'
import store from './app'


@NetInfoDecorator
@observer
export default class App extends Component<{}> {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            promptPosition: new Animated.Value(0)
        };
    }

    componentWillReceiveProps(nextProps) {
        // const {isConnected} = nextProps;
        if (!connectionStore.isConnected) {//网络连接失败
            Animated.timing(
                this.state.promptPosition,
                {
                    toValue: 1,
                    duration: 200
                }).start(() => {
                setTimeout(() => {
                    Animated.timing(
                        this.state.promptPosition, {
                            toValue: 0,
                            duration: 200
                        }
                    ).start();
                }, 2000)
            })
        }
    }

    render() {

        let positionY = this.state.promptPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [-30, 20]
        })
        return (
            <View style={{flex:1}}>
                <StatusBar
                    backgroundColor='black'
                    barStyle={'light-content'}
                    translucent={false}
                    animated={false}
                    hidden={Store.isHiddenStatusBar}
                    networkActivityIndicatorVisible={false}
                    showHideTransition={'slide'}
                />
                <Provider>
                    <TabBarScreen/>
                </Provider>

                <Animated.View style={[styles.netInfoView, {top:positionY}]}>
                    <Text style={styles.netInfoPrompt}>
                        网络异常，请检查网络稍后重试~
                    </Text>
                </Animated.View>
            </View>
            // <View style={styles.container}>
            //     <Text>第三方登录奥</Text>
            //     <View style={{marginTop:20,flexDirection:'row'}}>
            //         <TouchableHighlight onPress={()=>this.aa(1)}>
            //             <Text>QQ登录 </Text>
            //         </TouchableHighlight>
            //
            //         <TouchableHighlight onPress={()=>this.aa(2)}>
            //             <Text>QQ分享 </Text>
            //         </TouchableHighlight>
            //
            //         <TouchableHighlight onPress={()=>this.aa(3)}>
            //             <Text>微信登录 </Text>
            //         </TouchableHighlight>
            //
            //         <TouchableHighlight onPress={()=>this.aa(4)}>
            //             <Text>微博登录</Text>
            //         </TouchableHighlight>
            //
            //     </View>
            // </View>
        );
    }

    // aa(option) {
    //     switch (option) {
    //         case 1:
    //             this.Login(1);
    //             break;
    //         case 2:
    //             this.Login(2);
    //             break;
    //         case 3:
    //             break
    //     }
    // }
    //
    // Login(option) {
    //     if (option == 1) {
    //         QQAPI.login()
    //             .then(data => {
    //                 console.log('data', data)
    //             })
    //             .catch((err) => {
    //                 console.log('err', err)
    //             })
    //         // QQAPI.isQQSupportApi()
    //         // QQAPI.isQQInstalled()
    //         //     .then((isInstalled) => {
    //         //         if (isInstalled) {
    //         //
    //         //         } else {
    //         //             Alert.alert('暂未安装qq')
    //         //         }
    //         //     })
    //
    //
    //     } else if (option == 2) {
    //         let shareQQ = {
    //             type: 'news',
    //             title: "分享标题",
    //             description: '描述',
    //         }
    //
    //         QQAPI.shareToQQ(shareQQ)
    //             .then(data => {
    //                 console.log('data', data)
    //             })
    //             .catch((err) => {
    //                 console.log('err', err)
    //             })
    //         // QQAPI.isQQInstalled()
    //         //     .then((isInstalled) => {
    //         //         if (isInstalled) {
    //         //             QQAPI.shareToQQ({
    //         //                 type: 'news',
    //         //                 title: "分享标题",
    //         //                 description: '描述',
    //         //             })
    //         //                 .catch((err) => {
    //         //                     Alert.alert('err', err)
    //         //                 })
    //         //         }
    //         //     })
    //         //     .catch((err)=>{
    //         //         Alert.alert('没装qq')
    //         //     })
    //         // QQAPI.shareToQQ({
    //         //     type: 'news',
    //         //     title: "分享标题",
    //         //     description: '描述',
    //         // })
    //         //     .then((data)=>{
    //         //         console.log('data11',data)
    //         //     })
    //         //     .catch((err)=>{
    //         //     Alert.alert('还没安装qq啊')
    //         //     })
    //     }


    //   openShare.qqLogin()
    // if(!this.qqLogin){
    //     this.qqLogin = DeviceEventEmitter.addListener(
    //         'managerCallback',(response) =>{
    //             Alert.alert('response',JSON.stringify(response))
    //         }
    //     );
    //
    //     this.qqLogin.remove();
    //     delete this.qqLogin;
    // }
    // }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    netInfoView: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        position: 'absolute',
        right: 0,
        left: 0,
        backgroundColor: 'red'
    },
    netInfoPrompt: {
        color: 'white',
        fontWeight: 'bold'
    }

});
