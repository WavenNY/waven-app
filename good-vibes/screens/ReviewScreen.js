import React, { Component } from "react";
import { View, Text,TextInput, StyleSheet ,Keyboard,Dimensions,TouchableOpacity} from "react-native";
import Icon from "../components/SvgIcon";
let {width} = Dimensions.get('window').width;
 


export default class ReviewScreen extends Component {
  
  static navigationOptions = {
    header: null,
    };
 

    constructor(props){
      super(props)
      this.state ={
              behavior: 'position',
      }
      }
      
      closeButtonPressed=()=>{
        this.props.navigation.pop();
      }
  

  render() {
    return (
      // <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>

      <View style={styles.container}>
        <View style={{backgroundColor:'rgb(255,88,98)',width:Dimensions.get('window').width,height:71,alignItems:'center'}}>
          <Text style={{height:20,marginTop:36,color:'white',fontSize:17}}>Review</Text>
       </View> 
     
     
      <View style={{marginLeft:20,marginTop:220,height:158,marginRight:20,backgroundColor:'white'}}>
        <TextInput style={styles.input}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="default"
                    placeholder='Type anything you like'
                    underlineColorAndroid='rgba(0,0,0,0)'
                    multiline={true}
                    blurOnSubmit={true}
                    onSubmitEditing={()=>{Keyboard.dismiss()}}
                   
                  />
        </View>
      
      
      <View style={{height:75,width:Dimensions.get('window').width,bottom:0,position:'absolute',backgroundColor:"white",shadowColor: '#000000',shadowOffset: {width: 0,height: 1},shadowRadius: 5,shadowOpacity: 0.5,flexDirection:'row'}}>
        <Text onPress={this.closeButtonPressed} style={{marginTop:30,marginLeft:65,width:46,height:16,color:'#717171',}}>Cancel</Text> 
        <Text  style={{textAlign:'center',fontSize:14,color:'red',marginLeft:50,marginRight:20,width:194 ,borderWidth:1.5,borderColor:'red',shadowColor:'red',borderRadius:20,height:35,marginTop:17.5,paddingTop:8}}>Add</Text>
            
        </View>
       
   
      </View>

      
      
      //{/* </SafeAreaView> */}
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgb(248,248,248)'
  },
buttonText: {
  color: 'red',
  textAlign: 'center',
  fontSize: 14,
  paddingTop: 10,
  marginLeft: 5,
},
input: {
    height: 158,
    paddingTop:10,
    backgroundColor:'white',
    textAlignVertical: "top",
    color: '#717171',
    marginLeft:20,
    marginRight:20,
    textAlign: 'left',
    fontSize: 14,
    fontFamily: 'sf-text',
    lineHeight:10
  },
});