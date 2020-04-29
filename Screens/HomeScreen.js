import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import { Header, Left, Right, Icon,Font} from 'native-base'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons'

import News from './News';
import Events from './Events';


const Tab = createMaterialBottomTabNavigator();


class HomeScreen extends Component{
    /*static navigationOptions={
        drawerIcon: ({tintColor}) =>(
            <Icon name="home" style={{ color:tintColor}}/>
        )
    }*/
    render(){
        return(
            <Tab.Navigator
            shifting={true}
            activeColor="white"
            inactiveColor="black">
            <Tab.Screen 
            name="Notifications" 
            component={News}
            options={{
                tabBarLabel:"Notifications",
                tabBarIcon:({ tintColor}) => (
                    <Icons name="ios-paper" color={tintColor} size={26} />
                )
            }} />
            <Tab.Screen 
            name="Events" 
            component={Events} 
            options={{
                tabBarLabel:"Events",
                tabBarIcon:({ tintColor}) => (
                    <Icons name="md-browsers" color={tintColor} size={26} />
                )
            }}/>
            </Tab.Navigator>
        );
    }
}
export default HomeScreen;
// export default createBottomTabNavigator({
//     News:{
//         screen:News,
        // navigationOptions:{
        //     tabBarLabel:"News",
        //     tabBarIcon:({ tintColor}) => (
        //         <Icons name="md-browsers" color={tintColor} size={24} />
        //     )
        // }

//     },
//     Events:{
//         screen:Events,
        // navigationOptions:{
        //     tabBarLabel:"Events",
        //     tabBarIcon:({ tintColor}) => (
        //         <Icons name="ios-paper" color={tintColor} size={24} />
        //     )
        // }

//     },
// })


// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//     }
// });
// const navigationOptions={
//     drawerIcon: ({tintColor}) =>(
//         <Icon name="home" style={{ color:tintColor}}/>
//     )
// };