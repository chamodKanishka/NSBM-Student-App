import React from 'react';
import { StyleSheet ,Text, View, SafeAreaView, ScrollView,Dimensions, Image,Icons} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import ShuttleMap from './Screens/ShuttleMap';
import Shuttle from "./Screens/Shuttle";
import Parkings from './Screens/Parkings';
import TaxiSharing from './Screens/TaxiSharing';
import BuyFoods from './Screens/BuyFoods';
import NSBMmap from './Screens/NSBMmap';
import Login from './Screens/Login'
import MyAccount from './Screens/MyAccount'
import { Icon }  from 'native-base';
import  Iconsi  from 'react-native-vector-icons/Ionicons'
import MyTimtable from "./Screens/MyTimtable";


const {width} = Dimensions.get('window')

export default class App extends React.Component{
  render(){
    return(
      <AppDrawerNavigator/>
    );
  }
}

const CustomDrawerComponent = (props) =>(
  <SafeAreaView style={{flex: 1}}>
  <View style={{ height:150, backgroundColor:'white', alignItems:'center', justifyContent:'center'}}>
  <Image source={require('./images/logo.png')} style={{ height:120, width:120, borderRadius:60}}/>
  </View>
  <ScrollView>
    <DrawerItems {...props}/>
  </ScrollView>

  </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({

  Home:{
    screen:HomeScreen,
    navigationOptions:{
      drawerIcon:({tintColor})  =>
      <Iconsi name="md-home" color ={tintColor} size={25} />
    }

  },
  MyTimetable:{
            screen:MyTimtable,
            navigationOptions:{
                drawerIcon:({tintColor})  =>
                    <Iconsi name="md-map" color ={tintColor} size={25} />,
            }},
   LocalMap:{
    screen:NSBMmap,
     navigationOptions:{
      drawerIcon:({tintColor})  =>
        <Iconsi name="md-map" color ={tintColor} size={25} />,
         drawerLabel: 'Local Map',
            }},
  Shuttle:{
    screen:Shuttle,
     navigationOptions:{
     drawerLabel: 'Shuttle',
         drawerIcon:({tintColor}) =>
             <Iconsi name="md-bus" color={tintColor} size={25} />
     
}},

TaxiShare:{
  screen:TaxiSharing,
   navigationOptions:{
   drawerLabel: 'Taxi Sharing',
    drawerIcon:({tintColor}) =>
    <Iconsi name="md-car" color={tintColor} size={25} />
}},
        Parkings:{
            screen:Parkings,
            navigationOptions:{
                drawerLabel: 'Parkings',
                drawerIcon:({tintColor}) =>
                    <Iconsi name="md-car" color={tintColor} size={25} />
            }},
Login:{
  screen:Login,
   navigationOptions:{
   drawerLabel: 'Login',
}},

Settings:SettingsScreen,
},
  {
    contentComponent: CustomDrawerComponent,
    contentOptions:{
      activeTintColor:'green'
  
    }


})

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});