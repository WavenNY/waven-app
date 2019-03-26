import React, { Component } from "react";
import { View, Text,TextInput, StyleSheet ,ScrollView,Dimensions,TouchableOpacity} from "react-native";
import Icon from "../components/SvgIcon";
let {width} = Dimensions.get('window').width;
 


export default class ReviewScreen extends Component {
  
  static navigationOptions = {
    header: null,
    };
 

  constructor(props)
  {
    super(props)
    this.state={
        isActive:true,
        
          
    }
  }


  

  
   
  
    componentDidMount()
    {
      
    }

  render() {
    return (
      // <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>

      <View style={styles.container}>
        <View style={{backgroundColor:'rgb(255,88,98)',width:Dimensions.get('window').width,height:71,flexDirection:"row"}}>
          <Text style={{height:20,marginLeft:123,textAlign:'center',marginTop:36,color:'white',fontSize:17}}>Review</Text>
       </View> 
      
      <TextInput style={styles.input}
                    autoCapitalize="none"
                    //onChangeText={(email) => this.setState({ email })}
                   // onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="next"
                    placeholder='Type anything you like'
                    underlineColorAndroid='rgba(0,0,0,0)'
                    multiline={true}
                  />
        
      
      
      <View style={{height:75,backgroundColor:"white",shadowColor: '#000000',shadowOffset: {width: 0,height: 1},shadowRadius: 5,shadowOpacity: 0.5,flexDirection:'row'}}>
      <Text  style={{marginTop:30,marginLeft:50,width:46,height:16,color:'#717171',}}>Cancel</Text> 

          <Text  style={{textAlign:'center',fontSize:14,color:'red',marginLeft:240/2,marginRight:20,width:240 ,borderWidth:1,borderColor:'red',shadowColor:'red',borderRadius:20,height:35,marginTop:17.5,paddingTop:8}}>Add</Text>
            
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
    color: '#717171',
    margin: 20,
    borderRadius: 25,
    borderColor: 'rgba(206,206,206,1.0)',
    textAlign: 'center',
    marginLeft: 20,
    marginRight: 20,

    fontSize: 14,
    fontFamily: 'sf-text'
  },
});