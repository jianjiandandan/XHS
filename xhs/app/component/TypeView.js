/**
 * Created by coatu on 2017/10/13.
 */
import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Image,
    FlatList
} from 'react-native';

let data = ['护肤彩妆', '个人护理', '母婴', '服饰鞋包', '运动健身', '家电数码', '家居', '美颜保健', '美食', '更多分类'];
export default class TypeView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    numColumns={5}
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={(item,index)=>item.key=index}
                />
            </View>
        );
    }

    renderItem = (item) => {
        return (
            <View style={styles.viewStyle}>
                <Image source={{uri:'http://img2.woyaogexing.com/2017/09/08/6eb31784dc036adf%21600x600.jpg'}}
                       style={styles.imageStyle}/>
                <Text style={styles.textStyle}>{item.item}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: 'white'
    },

    viewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10
    },

    imageStyle: {
        width: 50,
        height: 50,
        borderRadius: 25
    },

    textStyle: {
        marginTop: 8
    }
});