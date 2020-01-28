import React from 'react';
import { StyleSheet ,Text, View, SafeAreaView, ScrollView,Dimensions, Image,Icons, TouchableOpacity} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import Shuttle from "./Screens/Shuttle";
import Parkings from './Screens/Parkings';
import NSBMmap from './Screens/NSBMmap';
import Login from './Screens/Login';
import QrcodeScanner from "./Screens/components/Settings/QrcodeScanner";
import MyEid from "./Screens/components/Settings/MyEid";
import Profile from "./Screens/Profile";
import  Iconsi  from 'react-native-vector-icons/Ionicons'
import MyTimtable from "./Screens/MyTimetable";
import Iconsa from "react-native-vector-icons/AntDesign"
import Iconf from "react-native-vector-icons/FontAwesome5"


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
  <View  style={{ height:150, backgroundColor:'lightblue', alignItems:'center', justifyContent:'center'}}>
      <TouchableOpacity onPress={() =>this.props.navigation.navigate("Profile", {screen:Profile})}>
  <Image source={require('./images/logo.png')} style={{ height:120, width:120, borderRadius:60}}/>
      </TouchableOpacity>
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
                drawerLabel: 'My Timetable',
                drawerIcon:({tintColor})  =>
                    <Iconsa name="table" color ={tintColor} size={25} />,
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
        Parkings:{
            screen:Parkings,
            navigationOptions:{
                drawerLabel: 'Parkings',
                drawerIcon:({tintColor}) =>
                    <Iconf name="parking" color={tintColor} size={25} />
            }},
        Login:{
          screen:Login,
           navigationOptions:{
           drawerLabel: 'Login',
        }},
        QrcodeScanner:{
            screen:QrcodeScanner,
            navigationOptions:{
                drawerLabel: 'QrScanner',
            }},
        MyEid:{
            screen:MyEid,
            navigationOptions:{
                drawerLabel: 'My E-ID',
            }},
        Profile:{
            screen:Profile,
            navigationOptions:{
                drawerLabel: 'Profile',
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
