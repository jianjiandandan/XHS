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

import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types';

export default class commonCell extends Component {
    static propTypes = {
        leftImage: PropTypes.string,
        title: PropTypes.string,
        rightImage: PropTypes.string
    };

    static defaultProps = {
        leftImage: '',
        title: '',
        rightImage: ''
    };

    render() {
        const {leftImage, title, rightImage} = this.props;
        return (
            <View>
                <View style={styles.allView}>
                    <View style={styles.leftViewStyle}>
                        {leftImage ? <Icon
                                name={leftImage}
                                size={18}
                            /> : null}
                        <Text style={styles.textStyle}>{title}</Text>
                    </View>
                    {rightImage ? <View style={styles.circularStyle}/> : null}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    allView: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    leftViewStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    textStyle: {
        marginLeft: 15,
        fontSize: 15,
        color: 'gray'
    },

    circularStyle: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'red'
    }
});