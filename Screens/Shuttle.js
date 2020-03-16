import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import {Header, Icon, Left, Right} from "native-base";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import News from "./News";
import Icons from "react-native-vector-icons/Ionicons";
import ShuttleMap from "./ShuttleMap";
import TimeTable from "./TimeTable"


const Tab = createMaterialBottomTabNavigator();
class Shuttle extends Component{


    render(){
        return(
            <Tab.Navigator
            shifting={true}
            activeColor="white"
            inactiveColor="black">
            <Tab.Screen 
            name="Shuttle" 
            component={ShuttleMap} 
            options={{
                tabBarLabel:"Map",
                tabBarIcon:({ tintColor}) => (
                    <Icons name="md-map" color={tintColor} size={26} />
                )
            }}/>
            <Tab.Screen 
            name="Timetables" 
            component={TimeTable} 
            options={{
                tabBarLabel:"Timetables",
                tabBarIcon:({ tintColor}) => (
                    <Icons name="ios-paper" color={tintColor} size={26} />
                )
            }}/>
            {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
          </Tab.Navigator>
        );
    }
}
export default Shuttle;
// export default createBottomTabNavigator({
//     ShuttleMap:{
//         screen:ShuttleMap,
        // navigationOptions:{
        //     tabBarLabel:"Map",
        //     tabBarIcon:({ tintColor}) => (
        //         <Icons name="md-map" color={tintColor} size={24} />
        //     )
        // }

//     },
//     TimeTable:{
//         screen:TimeTable,
//         navigationOptions:{
//             tabBarLabel:"Time Table",
//             tabBarIcon:({ tintColor}) => (
//                 <Icons name="ios-paper" color={tintColor} size={24} />
//             )
//         }

//     },
// })

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});