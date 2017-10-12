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

export default class RadioView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>视频</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})