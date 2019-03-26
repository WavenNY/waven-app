import React, { Component } from "react";
import { View, Text, StyleSheet ,ScrollView,Dimensions,TouchableOpacity} from "react-native";
import Icon from "../components/SvgIcon";
import { Constants, Svg} from "expo";
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
import MultiSlider from '@ptomasroos/react-native-multi-slider';

class FormStatesScreen extends Component {
 
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
      puffCount:0,
      ratingCount:0.0,
      isMedicalPressed:true,
      values: [3],
      painValues:[0],
      depressionValues:[0],
    }
  }
 
  painSliderValuesChange = (painValues) => {
    this.setState({
      painValues,
      isMedicalPressed:false,
    });
  }

  depressionSliderValuesChange = (depressionValues) => {
    this.setState({
      depressionValues,
      isMedicalPressed:false,
    });
  }

  enableScroll=()=>{
    this.setState({
      
      isMedicalPressed:true,
    });
  }


  getComponent=(item)=>{

    return(
      <View style={{borderRadius:4,backgroundColor:"white",marginLeft:20,marginRight:20,marginTop:20,height:80,flexDirection:'row',shadowColor: '#000000',shadowOffset: {width: 0,height: 1},shadowRadius: 2,shadowOpacity: 0.2}}>
        <Icon name={item.icon} width="13" height="15" style={{color:"white",marginTop:22,width:15,marginLeft:20,height:15}} />
        <Text style={{marginLeft:6.5,fontSize:14,height:16,marginTop:20,textAlign:'left'}}>{item.name}</Text>
        <Icon name="AddIcon" width="12" height="12" fill="gray" style={{position: 'absolute', top: 32, left: (Dimensions.get('window').width-32)/2, right: 0, bottom: 0,width:Dimensions.get('window').width}}/>
      </View>

    )

  }

  

  //* Puff count functions */

  puffIncrementCount=()=>{
    var count = this.state.puffCount;
        count = count + 1;
        this.setState({puffCount:count});
  }  

  puffDecrementCount=()=>{
    var count = this.state.puffCount;
        if(count > 0){
          count = count - 1;
          this.setState({puffCount:count});
        }
  }
  
  /** Star rating function */
  ratingCompleted=(rating)=>{
    this.setState({ratingCount:rating})
    console.log("Rating is: " + rating)
  }

  medicalPressed=()=>{
    if(this.state.isMedicalPressed == false)
    {

    this.setState({isMedicalPressed:true})
    }
    this.setState({isMedicalPressed:true})

  }

  onBackPressed=()=>{

    this.props.navigation.navigate('MyVibes')
  }

  componentDidMount() {}
  render() {
    return (
      <View style={[styles.container]}>
          <View style={{backgroundColor:'rgb(255,88,98)',width:Dimensions.get('window').width,height:71}}>
            <TouchableOpacity onPress={this.onBackPressed}>
              <Icon name="BackIcon" onPress={this.onBackPressed}  fill="white" height="17" width="19" style={{marginTop:35,marginLeft:20}} />
             </TouchableOpacity>
         </View>
      <View style={{backgroundColor:"white",width:Dimensions.get('window').width,height:120,shadowColor:'gray',shadowOffset: {width: 0,height: 1},shadowRadius: 5,shadowOpacity: 0.5}}>
        <Text style={{fontSize:18,height:20,marginLeft:20,marginTop:46}}>Blue Dream</Text>
        <Text style={{fontSize:12,height:14,marginLeft:20}}>Indica</Text>
       
       <View style={{flexDirection:'row'}}> 
        <Text style={{fontSize:14,height:16,marginLeft:20}}>Strain</Text>
        <TouchableOpacity >
            <Icon name="DropdownIcon" fill="red" width="9" height="12" style={{marginTop:5,marginLeft:3}} />
          </TouchableOpacity>
       </View>
      </View>

      <View style={{borderRadius:4,backgroundColor:"white",marginTop:1,height:40,flexDirection:'row',shadowColor: '#000000',shadowOffset: {width: 0,height: 3},shadowRadius: 2,shadowOpacity: 0.5}}>
        <Text style={{color:"#00c853",marginLeft:20,fontSize:12,width:36,height:14,marginTop:14,textAlign:'center'}}>Active</Text>
        <Text style={{color:"#212121",marginLeft:110,fontSize:16,width:42,height:19,marginTop:11,textAlign:'center'}}>today</Text>
        <Text style={{color:"#212121",marginLeft:100,fontSize:16,width:8,height:19,marginTop:11,textAlign:'center'}}>1</Text>
        <Text style={{color:"#212121",marginLeft:5,fontSize:14,width:12,height:16,marginTop:12,textAlign:'center'}}>of</Text>
        <Text style={{color:"#212121",marginLeft:5,fontSize:16,width:8,height:19,marginTop:11,textAlign:'center'}}>1</Text>

      </View>

      <ScrollView scrollEnabled={this.state.isMedicalPressed}>
      <View style={{backgroundColor:"white",marginLeft:20,marginRight:20,marginTop:20,height:120,shadowColor: '#000000',shadowOffset: {width: 0,height: 1},shadowRadius: 5,shadowOpacity: 0.5}}>
       {this.state.ratingCount == 0.0?<Text style={{fontSize:16,height:19,marginTop:27,textAlign:'center'}}>Experience Rating</Text>:<Text style={{fontSize:16,height:19,marginTop:27,textAlign:'center'}}>{this.state.ratingCount}</Text>} 
       
        <Rating
            type='custom'
            startingValue = {0.0}
             fractions={1}
           // ratingImage ={<Icon name="StarIcon"/>}
            ratingColor='#5b36b3'
            ratingBackgroundColor='#fffff'
            ratingCount={5}
            imageSize={30}
            onFinishRating={this.ratingCompleted}
            onStartRating={this.ratingCompleted}
            style={{marginTop:16}}
          />
       
        {/* <View style={{flexDirection:"row",justifyContent:'space-evenly',marginTop:16}}>
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

        </View> */}
      </View>
      <View style={{backgroundColor:"white",marginLeft:20,marginRight:20,marginTop:20,height:120,shadowColor: '#000000',shadowOffset: {width: 0,height: 1},shadowRadius: 5,shadowOpacity: 0.5,flexDirection:'column'}}>

          <View style={{flexDirection:'row',justifyContent:'center'}}>
          <TouchableOpacity onPress={this.puffDecrementCount}>
            <Icon name="MinusIcon" fill="red" width="24" height="24"  style={{color:"white",marginTop:35}} />
          </TouchableOpacity>

          <Text style={{width:14,height:26,marginTop:35,marginLeft:26,fontSize:22}}>{this.state.puffCount}</Text>
          
          <TouchableOpacity onPress={this.puffIncrementCount}>
            <Icon name="PlusIcon" fill="red" width="24" height="24" style={{marginTop:35,marginLeft:20}} />
          </TouchableOpacity>

          </View>  
          <View style={{flexDirection:"row",justifyContent:'center',marginTop:11}}>
          <Text style={{width:36,height:16,}}>Puff</Text>
          <TouchableOpacity>
            <Icon name="DropdownIcon" fill="red" width="9" height="12" style={{width:9,height:12,marginTop:5}} />
          </TouchableOpacity>
          </View>
      </View>
      
      <View style={{borderRadius:4,backgroundColor:"white",marginLeft:20,marginRight:20,marginTop:20,height:80,flexDirection:'column',shadowColor: '#000000',shadowOffset: {width: 0,height: 1},shadowRadius: 2,shadowOpacity: 0.2}}>
        
        <View style={{flexDirection:"row"}}>
        <Icon name="EffectsIcon" width="13" height="15" style={{color:"white",marginTop:22,width:15,marginLeft:20,height:15}} />
        <Text style={{marginLeft:6.5,fontSize:14,height:16,marginTop:20,textAlign:'left'}}>Effects</Text>

       </View>
       <Text style={{marginLeft:39,fontSize:16,width:206,height:20,marginTop:1,textAlign:'left'}}>Uplifted,Relaxed,Creative</Text>


      </View>

    
      <TouchableOpacity onPress={this.medicalPressed}>
    
    <View style={{borderRadius:4,backgroundColor:"white",marginLeft:20,marginRight:20,marginTop:20,height:350,shadowColor: '#000000',shadowOffset: {width: 0,height: 1},shadowRadius: 2,shadowOpacity: 0.2}}>
       <View style={{flexDirection:"row"}}>
       <Icon name="MedicalIcon" width="13" height="15" style={{color:"white",marginTop:22,width:15,marginLeft:20,height:15}} />
        <Text style={{marginLeft:6,fontSize:14,width:52,height:16,marginTop:20,textAlign:'left'}}>Medical</Text>
        <Text style={{marginLeft:(Dimensions.get('window').width-12)/2,fontSize:14,width:23,height:14,marginTop:20,textAlign:'right'}}>edit</Text>
       </View>
      
        <Text style={{marginLeft:40,fontSize:14,height:16,marginTop:8,textAlign:'left',color:'#212121'}}>Pain</Text>
      <View style={{width:240,flexDirection:'column',marginTop:2,marginLeft:(Dimensions.get('window').width-280)/2}}>
      
           <Text style={{color:'#00c853',width:35,height:19,fontSize:16,left: this.state.painValues[0]*(280-40)/100 - 20}}>{this.state.painValues[0]}&#37;</Text>
           <Text style={{color:'#717171',width:35,height:14,fontSize:12,left: this.state.painValues[0]*(280-40)/100 - 20}}>better</Text>

           <MultiSlider
                    values={[this.state.painValues[0]]}
                    sliderLength={240}
                    onValuesChange={this.painSliderValuesChange}
                    onSlidingComplete={this.enableScroll}
                    min={0}
                    max={100}
                    step={5}
                    selectedStyle={{
                      backgroundColor: '#00c853',
                    }}
                    unselectedStyle={{
                      backgroundColor: '#f0f0f0',
                    }}
                  containerStyle={{
                    height: 40,
                    width:280
                  }}
                  trackStyle={{
                    height: 6,
                    backgroundColor: '#00c853',
                  }}
                />
                    
          </View> 
          <Text style={{marginLeft:40,fontSize:14,width:77,height:16,marginTop:8,textAlign:'left',color:'#212121'}}>Depression</Text>

          <View style={{width:240,flexDirection:'column',marginTop:20,marginLeft:(Dimensions.get('window').width-280)/2}}>
           <Text style={{color:'#00c853',width:35,height:19,fontSize:16,left: this.state.depressionValues[0]*(280-40)/100 - 20}}>{this.state.depressionValues[0]}&#37;</Text>
           <Text style={{color:'#717171',width:35,height:14,fontSize:12,left: this.state.depressionValues[0]*(280-40)/100 - 20}}>better</Text>

           <MultiSlider
                    values={[this.state.depressionValues[0]]}
                    sliderLength={240}
                    onValuesChange={this.depressionSliderValuesChange}
                    onSlidingComplete={this.enableScroll}

                    min={0}
                    max={100}
                    step={5}
                    selectedStyle={{
                      backgroundColor: '#00c853',
                    }}
                    unselectedStyle={{
                      backgroundColor: '#f0f0f0',
                    }}
                  containerStyle={{
                    height: 40,
                    width:280
                  }}
                  trackStyle={{
                    height: 6,
                    backgroundColor: '#00c853',
                  }}
                />
                    
          </View>   
          <Text style={{marginLeft:40,fontSize:14,width:112,height:16,marginTop:8,textAlign:'left',color:'#212121'}}>Lack of Appetite</Text>
          <Text style={{marginLeft:40,fontSize:14,width:71,height:16,marginTop:7,textAlign:'left',color:'#717171'}}>no change</Text>

          <View style={{width:240,flexDirection:'column',marginTop:6,marginLeft:(Dimensions.get('window').width-280)/2}}>
           <MultiSlider
                    values={[0]}
                    sliderLength={240}
                   // onValuesChange={this.depressionSliderValuesChange}
                    min={0}
                    max={100}
                    step={5}
                    selectedStyle={{
                      backgroundColor: '#00c853',
                    }}
                    unselectedStyle={{
                      backgroundColor: '#f0f0f0',
                    }}
                  containerStyle={{
                    height: 40,
                  }}
                  trackStyle={{
                    height: 6,
                    backgroundColor: '#00c853',
                  }}
                />
                    
          </View>  

      </View>
      </TouchableOpacity>
      <View style={{borderRadius:4,backgroundColor:"white",marginLeft:20,marginRight:20,marginTop:20,height:80,flexDirection:'row',shadowColor: '#000000',shadowOffset: {width: 0,height: 1},shadowRadius: 2,shadowOpacity: 0.2}}>
        <Icon name="GoodForIcon" width="13" height="15" style={{color:"white",marginTop:22,width:15,marginLeft:20,height:15}} />
        <Text style={{marginLeft:6.5,fontSize:14,height:16,marginTop:20,textAlign:'left'}}>Good for</Text>
        <Icon name="AddIcon" width="12" height="12" fill="gray" style={{position: 'absolute', top: 32, left: (Dimensions.get('window').width-32)/2, right: 0, bottom: 0,width:Dimensions.get('window').width}}/>
      </View>

      <View style={{borderRadius:4,backgroundColor:"white",marginLeft:20,marginRight:20,marginTop:20,height:80,flexDirection:'row',shadowColor: '#000000',shadowOffset: {width: 0,height: 1},shadowRadius: 2,shadowOpacity: 0.2}}>
        <Icon name="FlavorsIcon" width="13" height="15" style={{color:"white",marginTop:22,width:15,marginLeft:20,height:15}} />
        <Text style={{marginLeft:6.5,fontSize:14,height:16,marginTop:20,textAlign:'left'}}>Flavors</Text>
        <Icon name="AddIcon" width="12" height="12" fill="gray" style={{position: 'absolute', top: 32, left: (Dimensions.get('window').width-32)/2, right: 0, bottom: 0,width:Dimensions.get('window').width}}/>
      </View>

      <View style={{borderRadius:4,backgroundColor:"white",marginLeft:20,marginRight:20,marginTop:20,height:80,flexDirection:'row',shadowColor: '#000000',shadowOffset: {width: 0,height: 1},shadowRadius: 2,shadowOpacity: 0.2}}>
        <Icon name="StrainInfoIcon" width="13" height="15" style={{color:"white",marginTop:22,width:15,marginLeft:20,height:15}} />
        <Text style={{marginLeft:6.5,fontSize:14,height:16,marginTop:20,textAlign:'left'}}>Strain Info</Text>
        <Icon name="AddIcon" width="12" height="12" fill="gray" style={{position: 'absolute', top: 32, left: (Dimensions.get('window').width-32)/2, right: 0, bottom: 0,width:Dimensions.get('window').width}}/>
      </View>

      <View style={{borderRadius:4,backgroundColor:"white",marginLeft:20,marginRight:20,marginTop:20,height:80,flexDirection:'row',shadowColor: '#000000',shadowOffset: {width: 0,height: 1},shadowRadius: 2,shadowOpacity: 0.2}}>
        <Icon name="Pen" width="13" height="15" style={{color:"white",marginTop:22,width:15,marginLeft:20,height:15}} />
        <Text style={{marginLeft:6.5,fontSize:14,height:16,marginTop:20,textAlign:'left'}}>Review</Text>
        <Icon name="AddIcon" width="12" height="12" fill="gray" style={{position: 'absolute', top: 32, left: (Dimensions.get('window').width-32)/2, right: 0, bottom: 0,width:Dimensions.get('window').width}}/>
      </View>
      {/* {
      this.state.itemArray.map((item, index) => (
        <View key={index} >
        {  this.getComponent(item) }
        
        </View>
      ))
      } */}
      
      </ScrollView>
      <View style={{height:70,backgroundColor:"white",shadowColor: '#000000',shadowOffset: {width: 0,height: 1},shadowRadius: 5,shadowOpacity: 0.5}}>
          
          <Text  style={{overflow: 'hidden',textAlign:'center',marginLeft:20,marginRight:20,width: Dimensions.get('window').width - 40,borderWidth:1,borderColor:'rgb(180,180,180)',shadowColor:'red',borderRadius:20,height:35,marginTop:17.5,paddingTop:8}}>Log</Text>
            
        </View>
        <View style={{width:75,height:75,borderRadius:37.5,borderColor:'red',borderWidth:1,position:'absolute',top:30,backgroundColor:"white",alignItems:'center',marginLeft:(Dimensions.get('window').width-75)/2,flexDirection:'column'}}/>
   
      </View>
    );
  }
}

export default FormStatesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  }
});
