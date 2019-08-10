import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import { Header, Left, Right, Icon} from 'native-base'
import Icons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from 'react-navigation'
import SimpleMode from '../Screens/components/nsbmMap/SimpleMode'
import CameraMode from '../Screens/components/nsbmMap/CameraMode'

class NSBMmap extends Component{
    static navigationOptions = {
        drawerIcon : ({ tintColor }) => (
            <Icons name="md-map" style = {{ fontSize:23, color:tintColor}}/>
        )
    }
    render(){
        return(
            <View style={styles.container}>
            <Header>
                <Left>
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
                <Right>
                <Text style={{fontSize:24,fontWeight:"bold"}}>NSBM Map</Text>
                </Right>
            </Header>
            <Text>NSBMmap</Text>
            </View>
        );
    }
}
//export default NSBMmap;

export default createBottomTabNavigator({
    
    SimpleMode:{
        screen:SimpleMode,
        navigationOptions:{
            tabBarLabel:"Find Place",
            tabBarIcon:({ tintColor}) => (
                <Icons name="md-browsers" color={tintColor} size={24} />
            )
        }

    },
    CameraMode:{
        screen:CameraMode,
        navigationOptions:{
            tabBarLabel:"Camera Mode",
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