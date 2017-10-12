/**
 * Created by coatu on 2017/10/11.
 */
import React, {Component, PropTypes} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
// import {} from '../c'  第一次提交





export default class commonCell extends Component {

    // static propTypes = {
    //     //leftImage:PropTypes.number,
    //     title:PropTypes.string,
    //     rightImage:PropTypes.string
    // };
    //
    // static defaultProps = {
    //     leftImage:'',
    //     title:''
    // }

    // static propTypes = {
    //     leftImage: PropTypes.string,
    // };


    render() {
        const {leftImage, title, rightImage} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.allView}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon
                            name ={leftImage}
                            size = {18}

                        />
                        {/*{leftImage?<Image source={leftImage}/>:null}*/}
                        <Text style={{marginLeft:15,fontSize:15,color: 'gray'}}>{title}</Text>
                    </View>

                    <View style={{width:8,height:8,borderRadius:4,backgroundColor:'red'}}/>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },

    allView: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
})