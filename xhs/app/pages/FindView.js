/**
 * Created by coatu on 2017/10/13.
 */
import React, {Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableHighlight
} from 'react-native';

let data = ['推荐','视频','时尚','美妆','美食','运动','影音','旅行','居家','母婴','读书','数码'];
// import TypeView from '../component/TypeView'
export default class FindView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    ref={ (e) => this._scrollView = e }
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    horizontal={true}
                >
                    {data.map((itme,index)=>{
                        return(
                            <TouchableHighlight key ={index} onPress={()=>this.onPress(index)}>
                            <View  style={{width:70,height:30,backgroundColor:'yellow',marginLeft:20,
                            alignItems:'center',justifyContent:'center',}}>
                                <Text>{itme}</Text>
                            </View>
                            </TouchableHighlight>
                        )
                    })}
                </ScrollView>
            </View>
        );
    }


    onPress(index){
        console.log('index',index)
        let x = ((index-1)*10);
        let y = index*10
        this._scrollView.scrollTo({x:y,y:0,animated:true})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})