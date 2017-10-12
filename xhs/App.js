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
    StatusBar
} from 'react-native';

// import openShare from 'react-native-open-share';
import * as QQAPI from 'react-native-qq';
import TabBarScreen from './app/container/TabBarScreen'
import {observable} from 'mobx'
import {observer} from 'mobx-react'
import Store from './app/mobx/StatusBar'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// const DrawerNav = DrawerNavigator({
//     HomeView:{screen:HomeView},
//     RadioView:{screen:RadioView}
// }, {
//     drawerWidth: 200,//抽屉宽
//     drawerPosition: 'left',//抽屉在左边还是在右边
//     contentOptions: {
//         initialRouteName:HomeView,//默认页面组件
//         activeTintColor: 'white',//选中文字的颜色
//         activeBackgroundColor: '#ff8500',//选中背景颜色
//         inactiveTintColor: '#666',//未选中文字的颜色
//         inactiveBackgroundColor: '#fff',//未选中的背景颜色
//         style: {
//             //样式
//         }
//     }
// });
//
// export default DrawerNav


// const Navigator = NavigationActions({
//
// })

@observer
export default class App extends Component<{}> {

    render() {
        console.log('Store.isHiddenStatusBar',Store.isHiddenStatusBar)
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
              <TabBarScreen/>
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

    aa(option) {
        switch (option) {
            case 1:
                this.Login(1);
                break;
            case 2:
                this.Login(2);
                break;
            case 3:
                break
        }
    }

    Login(option) {
        if (option == 1) {
            QQAPI.login()
                .then(data => {
                    console.log('data', data)
                })
                .catch((err) => {
                    console.log('err', err)
                })
            // QQAPI.isQQSupportApi()
            // QQAPI.isQQInstalled()
            //     .then((isInstalled) => {
            //         if (isInstalled) {
            //
            //         } else {
            //             Alert.alert('暂未安装qq')
            //         }
            //     })


        } else if (option == 2) {
            let shareQQ = {
                type: 'news',
                title: "分享标题",
                description: '描述',
            }

            QQAPI.shareToQQ(shareQQ)
                .then(data => {
                    console.log('data', data)
                })
                .catch((err) => {
                    console.log('err', err)
                })
            // QQAPI.isQQInstalled()
            //     .then((isInstalled) => {
            //         if (isInstalled) {
            //             QQAPI.shareToQQ({
            //                 type: 'news',
            //                 title: "分享标题",
            //                 description: '描述',
            //             })
            //                 .catch((err) => {
            //                     Alert.alert('err', err)
            //                 })
            //         }
            //     })
            //     .catch((err)=>{
            //         Alert.alert('没装qq')
            //     })
            // QQAPI.shareToQQ({
            //     type: 'news',
            //     title: "分享标题",
            //     description: '描述',
            // })
            //     .then((data)=>{
            //         console.log('data11',data)
            //     })
            //     .catch((err)=>{
            //     Alert.alert('还没安装qq啊')
            //     })
        }


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
    }
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
});
