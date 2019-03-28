import React, { Component } from "react";
import { View, Text, StyleSheet ,ScrollView,Dimensions,TouchableOpacity} from "react-native";
import Icon from "../components/SvgIcon";
import { SearchBar } from "react-native-elements";

let {width} = Dimensions.get('window').width;
 


export default class FlavorsScreen extends Component {
  
  static navigationOptions = {
    header: null,
    };
 

  constructor(props)
  {
    super(props)
    this.state={
        isActive:true,
        itemArray:[
            {"name":"Lore Ipsum","icon":"CheckBoxSelectedIcon","color":"red"},
            {"name":"Lore Ipsum","icon":"CheckBoxUnselectedIcon","color":"white"},
            {"name":"Lore Ipsum","icon":"CheckBoxSelectedIcon","color":"white"},
            {"name":"Lore Ipsum","icon":"CheckBoxUnselectedIcon","color":"red"},
            {"name":"Lore Ipsum","icon":"CheckBoxSelectedIcon","color":"white"},
            {"name":"Lore Ipsum","icon":"CheckBoxUnselectedIcon","color":"red"},
          ],
          
    }
  }


  switchCannabis=()=>{
    console.log('fuf');
    this.setState({isActive:true})
    
  }

  switchCannabisCheck=()=>{
    this.setState({isActive:false})

  }
 
  closeButtonPressed=()=>{
    this.props.navigation.pop();
  }
  
    getComponent=(item)=>{

      return(
        <View style={{backgroundColor:"white",marginTop:2,height:80,flexDirection:'row'}}>
       
        <Text style={{marginLeft:50,fontSize:14,width:81,height:20,marginTop:36,textAlign:'center'}}>{item.name}</Text>
        <Icon name={item.icon}   fill='white' height="16" width="16" style={{borderWidth:1,borderColor:'#b0b0b0',marginTop:36,marginLeft:184,marginRight:20}} />

      </View>

      )

    }
  
    componentDidMount()
    {
      
    }

  render() {
    return (
      // <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>

      <View style={styles.container}>
        <View style={{backgroundColor:'rgb(255,88,98)',width:Dimensions.get('window').width,height:71,flexDirection:"row"}}>
           <Text style={{marginLeft:20,width:36,height:16,marginTop:36,color:'white',fontSize:14}}>Clear</Text>
          <Text style={{marginLeft:123,width:115,height:20,marginTop:36,color:'white',fontSize:17}}>Flavors</Text>
          <Icon name="AddIcon"   fill="white" height="16" width="16" style={{marginTop:36,marginLeft:86,marginRight:20}} />
       </View>

         
          
        
      <ScrollView>
        {      
      this.state.itemArray.map((item, index) => (
        <View key={index}  >
        {  this.getComponent(item) }
        
        </View>
      ))
      }     
      
      </ScrollView>
      <View style={{height:75,backgroundColor:"white",shadowColor: '#000000',shadowOffset: {width: 0,height: 1},shadowRadius: 2,shadowOpacity: 0.5,flexDirection:'row'}}>
        <TouchableOpacity onPress={this.closeButtonPressed}>
          <Icon name="CloseIcon"   fill="#b0b0b0" height="16" width="16" style={{marginTop:30,marginLeft:42}} />
        </TouchableOpacity>
          <Text  style={{textAlign:'center',fontSize:14,color:'red',marginLeft:42,marginRight:20,width:240 ,borderWidth:1.5,borderColor:'red',shadowColor:'red',borderRadius:20,height:35,marginTop:17.5,paddingTop:8}}>Select</Text>
            
        </View>
   
      </View>

      
      
      //{/* </SafeAreaView> */}
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f3f6f3"
  },
buttonText: {
  color: 'red',
  textAlign: 'center',
  fontSize: 14,
  paddingTop: 10,
  marginLeft: 5,
},
});