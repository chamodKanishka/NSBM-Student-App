import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import {Header, Icon, Left, Right} from "native-base";
import { createBottomTabNavigator } from 'react-navigation'
import News from "./News";
import Icons from "react-native-vector-icons/Ionicons";
import ShuttleMap from "./ShuttleMap";
import TimeTable from "./TimeTable"

class Shuttle extends Component{


    render(){
        return(
            <View style={styles.container}>
                <Header style={{backgroundColor:"#2196f3"}}>
                    <Left >
                        <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                    </Left>
                    <Right>
                        <Text style={{fontSize:24,fontWeight:"bold", color:"white"}}>News</Text>
                    </Right>
                </Header>
                <Text>News</Text>
            </View>
        );
    }
}
export default createBottomTabNavigator({
    ShuttleMap:{
        screen:ShuttleMap,
        navigationOptions:{
            tabBarLabel:"Map",
            tabBarIcon:({ tintColor}) => (
                <Icons name="md-map" color={tintColor} size={24} />
            )
        }

    },
    TimeTable:{
        screen:TimeTable,
        navigationOptions:{
            tabBarLabel:"Time Table",
            tabBarIcon:({ tintColor}) => (
                <Icons name="ios-paper" color={tintColor} size={24} />
            )
        }

    },
})

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});