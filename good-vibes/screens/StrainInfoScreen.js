import React, { Component } from "react";
import { View, Text,TextInput, StyleSheet ,ScrollView,Dimensions,TouchableOpacity} from "react-native";
import Icon from "../components/SvgIcon";
import { TextField } from 'react-native-material-textfield';
let {width} = Dimensions.get('window').width;
 


export default class StrainInfoScreen extends Component {
  
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
  
  closeButtonPressed=()=>{
    this.props.navigation.pop();
  }

    componentDidMount()
    {
      
    }

  render() {
    return (
      // <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>

      <View style={styles.container}>
        <View style={{backgroundColor:'rgb(255,88,98)',width:Dimensions.get('window').width,height:71,alignItems:'center'}}>
          <Text style={{height:20,marginTop:36,color:'white',fontSize:17}}>Strain Info</Text>
       </View> 
        
        <View style={{flexDirection:'row',marginTop:52,width:Dimensions.get('window').width,height:44}}>
        
        <View style={{marginLeft:68,height:44,width:100}}>
        <TextField style={styles.THCInput}
                    autoCapitalize="none"               
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="done"
                    label='THC %'
                    activeLineWidth={2} 
                    baseColor='red'  
                    textColor="#717171" 
                />
        </View>
        
        <View style={{height:44,width:100,marginLeft:40}}>
        <TextField style={styles.THCInput}
                    autoCapitalize="none"                  
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="done"
                    label='CBD %'
                    activeLineWidth={2} 
                    baseColor='red'
                    baseColor='red'  
                    textColor="#717171" 
                  />
        </View>
        
          
           
        </View>
        <View style={{marginLeft:68,marginTop:20,marginRight:68,flexDirection:'column'}}>

            <TextField style={styles.input}
                    autoCapitalize="none"
                    //onChangeText={(email) => this.setState({ email })}
                   // onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="done"
                    label='Brand/Grower'
                    activeLineWidth={2} 
                    baseColor='red'
                                      />

             <TextField style={styles.input}
                    autoCapitalize="none"
                    //onChangeText={(email) => this.setState({ email })}
                   // onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="done"
                    label='Purchase Date'
                    activeLineWidth={2} 
                    baseColor='red'
                  />           

                <TextField style={styles.input}
                    autoCapitalize="none"
                    //onChangeText={(email) => this.setState({ email })}
                   // onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="done"
                    label='Purchase From'
                    activeLineWidth={2} 
                    baseColor='red'
                  />           

        </View>
      
      
      <View style={{height:75,width:Dimensions.get('window').width,bottom:0,position:'absolute',backgroundColor:"white",shadowColor: '#000000',shadowOffset: {width: 0,height: 1},shadowRadius: 5,shadowOpacity: 0.5,flexDirection:'row'}}>
        <TouchableOpacity onPress={this.closeButtonPressed}>
           <Icon name="CloseIcon"   fill="#b0b0b0" height="16" width="16" style={{marginTop:30,marginLeft:42}} />
         </TouchableOpacity>
          <Text  style={{textAlign:'center',fontSize:14,color:'red',marginLeft:42,marginRight:20,width:240 ,borderWidth:1.5,borderColor:'red',shadowColor:'red',borderRadius:20,height:35,marginTop:17.5,paddingTop:8}}>Add</Text>
            
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
    height: 44,
    color: '#717171',
    paddingLeft:20,
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'sf-text',
    lineHeight:10
  },
  THCInput: {
    height: 44,
    width:100,
    color: '#717171',
    paddingLeft:20,
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'sf-text',
    lineHeight:10
  },
});