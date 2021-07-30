import React,{Component} from 'react';
import {StyleSheet,Text,SafeAreaView,View,Button} from 'react-native';
import { withTheme } from 'react-native-elements';
// constructor hol
class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      count : 0,
    };
  }

  
  incrementCount(){
    const{count}=this.state;
    this.setState({count: count + 1})
  }
  render(){
    const {count} = this.state
    const {rootContainer,textStyle,titleContainer,buttonContainer,
      outputContainer,buttonStyle,outputText} = styles;
    return(
      <SafeAreaView style = {rootContainer}>
        <View style ={titleContainer}>
          <Text style ={textStyle}>
            Turtorial App
          </Text>
        </View>
        <View style = {outputContainer}>
          <Text style ={outputText}>
            {count}
          </Text>
        </View>
        <View style = {buttonContainer}>
          <Button title = "Press Me" style = {buttonStyle} onPress = {this.incrementCount.bind(this)}>
            
          </Button>
        </View>
      </SafeAreaView>
    )};
};

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor:'grey',
    flex:2,
  },
  titleContainer:{
    alignItems:'center',
    backgroundColor:'black',
    height:270
  },
  textStyle:{
    fontSize:24,
    fontWeight:'bold',
    color:'white'
  },
  buttonContainer:{
    backgroundColor:'white',
    paddingBottom:20,

  },
  buttonStyle:{
    
    
  },
  outputContainer: {
    flex:1,
    justifyContent:'center',
    paddingLeft:200
    
  },
  outputText:{
    justifyContent:'center',
    color:'purple',
    fontSize:32,
    fontWeight:'bold'
  }
})
export default App;

