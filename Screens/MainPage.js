import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import { Header, Left, Right, Icon,Font} from 'native-base'

import { createBottomTabNavigator } from 'react-navigation'
import Icons from 'react-native-vector-icons/Ionicons'

import News from './News';
import Events from './Events';
import Profile from './Profile';

class MainPage extends Component{
    static navigationOptions={
        drawerIcon: ({tintColor}) =>(
            <Icon name="home" style={{ color:tintColor}}/>
        )
    }
    render(){
        return(
            <View style={styles.container}>
            <Header>
                <Left>
                    
                </Left>
            </Header>
            <Text>HomeScreen</Text>
            </View>
        );
    }
}
/*export default HomeScreen;*/
export default createBottomTabNavigator({
    News:{
        screen:News,
        navigationOptions:{
            tabBarLabel:"News",
            tabBarIcon:({ tintColor}) => (
                <Icons name="md-browsers" color={tintColor} size={24} />
            )
        }

    },
    Events:{
        screen:Events,
        navigationOptions:{
            tabBarLabel:"Events",
            tabBarIcon:({ tintColor}) => (
                <Icons name="ios-paper" color={tintColor} size={24} />
            )
        }

    },
    Profile:{
        screen:Profile,
        navigationOptions:{
            tabBarLabel:"Profile",
            tabBarIcon:({ tintColor}) => (
                <Icons name="md-person" color={tintColor} size={24} />
            )
        }

    }
})


const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});
const navigationOptions={
    drawerIcon: ({tintColor}) =>(
        <Icon name="home" style={{ color:tintColor}}/>
    )
};