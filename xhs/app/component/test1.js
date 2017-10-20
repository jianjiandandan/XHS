import React,{Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Button
} from 'react-native';

export default  class Test extends Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <View style={{width:375,height:300,backgroundColor:'red'}}>
        <ListItem />
      </View>
    );
  }
}
class ListItem extends Component{
  state={
    selectedText:'推荐'
  }
  constructor(props) {
    super(props);
  }
  itemPress =(item)=>{
      this.setState({
        selectedText:item
      });

  }
  render(){
    const arr = ['推荐','视频','时尚','美妆','美食','运动','影音','旅行','居家','母婴','读书','数码']
    return (
      <View style={{flex:1}}>
          <ScrollView
                      iosalwaysBounceHorizontal={false}
                      showsHorizontalScrollIndicator ={false} >
            <View style={{
              flexDirection:'row',
              paddingTop:10,
              backgroundColor:'blue'
            }}>
                <Text>4343434</Text>

              {
                arr.map((item,index)=>{
                  return (
                    <TouchableOpacity key = {index} style={styles.item} onPress={()=>{this.itemPress(item)}}>
                      <Text style={styles.itemText}>{item}</Text>
                    </TouchableOpacity>
                  )
                })
              }
              </View>
          </ScrollView>
          <View style={{backgroundColor:'yellow',flex:1}}>
              <ItemView item={this.state.selectedText} />
          </View>
      </View>
    )
  }
}
class ItemView extends Component{
  state={
    changeText:'12112'
  }
  render(){
    return (
      <View style={{flex:1}}>
        <Text>{this.props.item}</Text>
        <Text>{this.state.changeText}</Text>
        <Button title={'button one '} onPress={()=>{
            this.setState({changeText:'changeText'})
        }} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  headerView:{
    height:100,
    backgroundColor:'red'
  },
  item:{
    width:60,
    backgroundColor:'#cccccc',
    borderRadius:20,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:5,
    marginRight:5
  },
  itemText:{
    fontSize:14,
    color:'black'
  }
})
