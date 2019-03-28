import React, { Component } from "react";
import { View, Text, StyleSheet ,ScrollView,Dimensions,TouchableOpacity} from "react-native";
import Icon from "../components/SvgIcon";
import { Constants, Svg ,Slider} from "expo";
import algoliasearch from "algoliasearch";

// Import firebase
import firebase from "../Firebase";
import { Button } from "react-native-elements";
// import ScrollableTabView,from "react-native-underline-tabbar";
import ScrollableTabView from "react-native-scrollable-tab-view";
import TabBar from "react-native-underline-tabbar";
// const client = algoliasearch("LVTC40CNHH", "854d7053cfcc0d4b24bb8638dea0cdda");
// const index = client.initIndex("search_strain_products");
import { Rating } from 'react-native-ratings';

const records = [];
const Page = ({ label }) => (
  <View style={styles.container}>
    <Text style={styles.welcome}>{label}</Text>
    <Text style={styles.instructions}>To get started, edit index.ios.js</Text>
    <Text style={styles.instructions}>
      Press Cmd+R to reload,{"\n"}
      Cmd+D or shake for dev menu
    </Text>
  </View>
);

class MyVibesScreen extends Component {
 
  static navigationOptions = {
    header: null,
    };
 
 
  constructor(props) {
    super(props);
    this.strainItems = [];
    this.ref = firebase.firestore().collection("strains2");
    // this.hybridStrains = require("../StrainData.json");
    this.state={
      itemArray:[
        {"name":"Effects","icon":"EffectsIcon"},
        {"name":"Medical for","icon":"MedicalIcon"},
        {"name":"Good For","icon":"GoodForIcon"},
        {"name":"Flavors","icon":"FlavorsIcon"},
        {"name":"Strain Info","icon":"StrainInfoIcon"},
        {"name":"Review","icon":"Pen"},
      ],
      
    }
  }

  moveToFormStatesScreen=()=>{
    const {navigate} = this.props.navigation;
      navigate('FormStates')
  }

  moveToEffectsScreen=()=>{
    const {navigate} = this.props.navigation;
    navigate('Effects')

  }

  moveTomedicalScreen=()=>{
    const {navigate} = this.props.navigation;
    navigate('Medical')
  }

  moveTogoodForScreen=()=>{
    const {navigate} = this.props.navigation;
    navigate('GoodFor')
  }

  moveToFlavorsScreen=()=>{
    const {navigate} = this.props.navigation;
    navigate('Flavors')
  }

  moveToStrainInfoScreen=()=>{
    const {navigate} = this.props.navigation;
    navigate('StrainInfo')
  }

  moveToReviewScreen=()=>{
    const {navigate} = this.props.navigation;
    navigate('Review')
  }

  // getComponent=(item)=>{

  //   return(
  //    <TouchableOpacity onPress={this.moveToFormStatesScreen}> 
  //     <View style={{borderRadius:4,backgroundColor:"white",marginLeft:20,marginRight:20,marginTop:20,height:80,flexDirection:'row',shadowColor: '#000000',shadowOffset: {width: 0,height: 1},shadowRadius: 2,shadowOpacity: 0.2}}>
  //       <Icon name={item.icon} width="13" height="15" style={{color:"white",marginTop:22,width:15,marginLeft:20,height:15}} />
  //       <Text style={{marginLeft:6.5,fontSize:14,height:16,marginTop:20,textAlign:'left'}}>{item.name}</Text>
  //       <Icon name="AddIcon" width="12" height="12" fill="gray" style={{position: 'absolute', top: 32, left: (Dimensions.get('window').width-32)/2, right: 0, bottom: 0,width:Dimensions.get('window').width}}/>
  //     </View>
  //     </TouchableOpacity>
  //   )
  // }

  componentDidMount() {
  }
  render() {
    return (
      <View style={[styles.container]}>
          <View style={{backgroundColor:'rgb(255,88,98)',width:Dimensions.get('window').width,height:71}}>
        <Icon name="BackIcon" fill="white" height="17" width="19" style={{marginTop:35,marginLeft:20}} />
        
         </View>
      <View style={{backgroundColor:"white",width:Dimensions.get('window').width,height:120,shadowColor:'#33000000',shadowOffset: {width: 0,height: 1},shadowRadius: 1,shadowOpacity: 0.5}}>
        <Text style={{fontSize:18,height:20,marginLeft:20,marginTop:46,color:"#212121"}}>Blue Dream</Text>
        <Text style={{fontSize:12,height:14,marginLeft:20,color:"#212121"}}>Indica</Text>
       
       <View style={{flexDirection:'row'}}> 
        <Text style={{fontSize:14,height:16,marginLeft:20,color:'#212121'}}>Strain</Text>
        <TouchableOpacity>
            <Icon name="DropdownIcon" fill="red" width="9" height="12" style={{marginTop:5,marginLeft:3}} />
          </TouchableOpacity>
       </View>
      </View>
      <ScrollView>
      <View style={{backgroundColor:"white",marginLeft:20,marginRight:20,marginTop:20,height:120,shadowColor: '#33000000',shadowOffset: {width: 0,height: 1},shadowRadius: 1,shadowOpacity:1,borderRadius:4}}>
       <Text style={{fontSize:16,height:19,marginTop:27,textAlign:'center',color:"#212121"}}>Experience Rating</Text>
       <View style={{flexDirection:"row",justifyContent:'space-evenly',marginTop:16}}>
        <TouchableOpacity>
            <Icon name="StarIcon" fill="red" height="25" width="24"/>
          </TouchableOpacity>          
          <TouchableOpacity>
              <Icon name="StarIcon" fill="red" height="25" width="24"/>
          </TouchableOpacity>
          <TouchableOpacity>
              <Icon name="StarIcon" fill="red" height="25" width="24"/>
          </TouchableOpacity>
          <TouchableOpacity>
              <Icon name="StarIcon" fill="red" height="25" width="24"/>
          </TouchableOpacity>
          <TouchableOpacity>
              <Icon name="StarIcon" fill="red" height="25" width="24"/>
          </TouchableOpacity>

        </View> 
      </View>
      <View style={{backgroundColor:"white",marginLeft:20,marginRight:20,marginTop:20,height:120,shadowColor: '#33000000',shadowOffset: {width: 0,height: 1},shadowRadius: 0,shadowOpacity: 0.5,borderRadius:4,flexDirection:'column'}}>

          <View style={{flexDirection:'row',justifyContent:'center'}}>
          <TouchableOpacity onPress={this.moveToFormStatesScreen}>
            <Icon name="MinusIcon" fill="red" width="24" height="24"  style={{color:"white",marginTop:35}} />
          </TouchableOpacity>

          <Text style={{width:14,height:26,marginTop:35,marginLeft:26,color:"#212121",fontSize:22}}>{0}</Text>
          
          <TouchableOpacity onPress={this.moveToFormStatesScreen}>
            <Icon name="PlusIcon" fill="red" width="24" height="24" style={{marginTop:35,marginLeft:20}} />
          </TouchableOpacity>

          </View>  
          <View style={{flexDirection:"row",justifyContent:'center',marginTop:11}}>
          <Text style={{width:36,height:16,color:"#212121"}}>Puff</Text>
          <TouchableOpacity>
            <Icon name="DropdownIcon" fill="red" width="9" height="12" style={{width:9,height:12,marginTop:5}} />
          </TouchableOpacity>
        </View>
    </View>
      
    <TouchableOpacity onPress={this.moveToEffectsScreen}>
       <View style={{borderRadius:4,backgroundColor:"white",marginLeft:20,marginRight:20,marginTop:20,height:80,flexDirection:'row',shadowColor: '#33000000',shadowOffset: {width: 0,height: 1},shadowRadius: 0,shadowOpacity: 0.2,borderRadius:4}}>
        <Icon name="EffectsIcon" width="13" height="15" style={{color:"white",marginTop:22,width:15,marginLeft:20,height:15}} />
        <Text style={{marginLeft:6.5,fontSize:14,height:16,marginTop:20,textAlign:'left',color:"#212121"}}>Effects</Text>
        <Icon name="AddIcon" width="16" height="16" fill="#dfdfdf" style={{position: 'absolute', top: 38, left: (Dimensions.get('window').width-32)/2, right: 0, bottom: 0,width:Dimensions.get('window').width}}/>
      </View>
  </TouchableOpacity>
  
      <TouchableOpacity onPress={this.moveTomedicalScreen}>
      <View  style={{borderRadius:4,backgroundColor:"white",marginLeft:20,marginRight:20,marginTop:20,height:80,flexDirection:'row',shadowColor: '#33000000',shadowOffset: {width: 0,height: 1},shadowRadius: 0,shadowOpacity: 0.2,borderRadius:4}}>
          <Icon name="MedicalIcon" width="13" height="15" style={{color:"white",marginTop:22,width:15,marginLeft:20,height:15}} />
          <Text style={{marginLeft:6.5,fontSize:14,height:16,marginTop:20,textAlign:'left',color:"#212121"}}>Medical for</Text>
          <Icon name="AddIcon" width="16" height="16" fill="#dfdfdf" style={{position: 'absolute', top: 38, left: (Dimensions.get('window').width-32)/2, right: 0, bottom: 0,width:Dimensions.get('window').width}}/>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={this.moveTogoodForScreen}>
      <View style={{borderRadius:4,backgroundColor:"white",marginLeft:20,marginRight:20,marginTop:20,height:80,flexDirection:'row',shadowColor: '#33000000',shadowOffset: {width: 0,height: 1},shadowRadius: 0,shadowOpacity: 0.2,borderRadius:4}}>
        <Icon name="GoodForIcon" width="13" height="15" style={{color:"white",marginTop:22,width:15,marginLeft:20,height:15}} />
        <Text style={{marginLeft:6.5,fontSize:14,height:16,marginTop:20,textAlign:'left',color:"#212121"}}>Good for</Text>
        <Icon name="AddIcon" width="16" height="16" fill="#dfdfdf" style={{position: 'absolute', top: 38, left: (Dimensions.get('window').width-32)/2, right: 0, bottom: 0,width:Dimensions.get('window').width}}/>
      </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={this.moveToFlavorsScreen}>
      <View style={{borderRadius:4,backgroundColor:"white",marginLeft:20,marginRight:20,marginTop:20,height:80,flexDirection:'row',shadowColor: '#33000000',shadowOffset: {width: 0,height: 1},shadowRadius: 0,shadowOpacity: 0.2,borderRadius:4}}>
        <Icon name="FlavorsIcon" width="13" height="15" style={{color:"white",marginTop:22,width:15,marginLeft:20,height:15}} />
        <Text style={{marginLeft:6.5,fontSize:14,height:16,marginTop:20,textAlign:'left',color:"#212121"}}>Flavors</Text>
        <Icon name="AddIcon" width="16" height="16" fill="#dfdfdf" style={{position: 'absolute', top: 38, left: (Dimensions.get('window').width-32)/2, right: 0, bottom: 0,width:Dimensions.get('window').width}}/>
      </View>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={this.moveToStrainInfoScreen}>
      <View style={{borderRadius:4,backgroundColor:"white",marginLeft:20,marginRight:20,marginTop:20,height:80,flexDirection:'row',shadowColor: '#33000000',shadowOffset: {width: 0,height: 1},shadowRadius: 0,shadowOpacity: 0.2,borderRadius:4}}>
        <Icon name="StrainInfoIcon" width="13" height="15" style={{color:"white",marginTop:22,width:15,marginLeft:20,height:15}} />
        <Text style={{marginLeft:6.5,fontSize:14,height:16,marginTop:20,textAlign:'left',color:"#212121"}}>Strain Info</Text>
        <Icon name="AddIcon" width="16" height="16" fill="#dfdfdf" style={{position: 'absolute', top: 38, left: (Dimensions.get('window').width-32)/2, right: 0, bottom: 0,width:Dimensions.get('window').width}}/>
      </View>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={this.moveToReviewScreen}>
      <View style={{borderRadius:4,backgroundColor:"white",marginLeft:20,marginRight:20,marginTop:20,height:80,flexDirection:'row',shadowColor: '#33000000',shadowOffset: {width: 0,height: 1},shadowRadius: 0,shadowOpacity: 0.2,borderRadius:4}}>
        <Icon name="Pen" fill="#212121" width="13" height="13" style={{color:"white",marginTop:22,width:15,marginLeft:20,height:15}} />
        <Text style={{marginLeft:6.5,fontSize:14,height:16,marginTop:20,textAlign:'left',color:"#212121"}}>Review</Text>
        <Icon name="AddIcon" width="16" height="16" fill="#dfdfdf" style={{position: 'absolute', top: 38, left: (Dimensions.get('window').width-32)/2, right: 0, bottom: 0,width:Dimensions.get('window').width}}/>
      </View> 
    </TouchableOpacity>

       {/* {
      this.state.itemArray.map((item, index) => (
        <View key={index} >
        {  this.getComponent(item) }
        
        </View>
      ))
      }  */}
      
      </ScrollView>
      <View style={{height:70,backgroundColor:"white",shadowColor: '#000000',shadowOffset: {width: 3,height: 1},shadowRadius: 7,shadowOpacity: 0.5}}>
          
          <Text  style={{overflow: 'hidden',textAlign:'center',marginLeft:20,marginRight:20,width: Dimensions.get('window').width - 40,borderWidth:1,borderColor:'#b0b0b0',shadowColor:'#b0b0b0',borderRadius:20,height:35,marginTop:17.5,paddingTop:8}}>Log</Text>
            
        </View>
        <View style={{width:75,height:75,borderRadius:37.5,borderColor:'red',borderWidth:1,position:'absolute',top:30,backgroundColor:"white",alignItems:'center',marginLeft:(Dimensions.get('window').width-75)/2,flexDirection:'column'}}/>
   
      </View>
    );
  }
}

export default MyVibesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#f3f6f3"
  }
});
