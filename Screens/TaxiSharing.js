import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import { Header, Left, Right, Icon} from 'native-base'
import Icons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from 'react-navigation'
import Chat from './Chat';
import AddTrip from './AddTrip';
import FindTrip from './FindTrip';
import MyTrip from './MyTrip';

class TaxiSharing extends Component{
    static navigationOptions = {
        drawerIcon : ({ tintColor }) => (
            <Icons name="md-car" style = {{ fontSize:23, color:tintColor}}/>
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
                <Text style={{fontSize:24,fontWeight:"bold"}}>Taxi Sharing</Text>
                </Right>
            </Header>
            <Text>TaxiSharing</Text>
            </View>
        );
    }
}
/*export default TaxiSharing;*/

export default createBottomTabNavigator({
    
    AddTrip:{
        screen:AddTrip,
        navigationOptions:{
            tabBarLabel:"Add Trip",
            tabBarIcon:({ tintColor}) => (
                <Icons name="ios-add" color={tintColor} size={24} />
            )
        }

    },
    FindTrip:{
        screen:FindTrip,
        navigationOptions:{
            tabBarLabel:"Find Trip",
            tabBarIcon:({ tintColor}) => (
                <Icons name="ios-search" color={tintColor} size={24} />
            )
        }

    },
    Chat:{
        screen:Chat,
        navigationOptions:{
            tabBarLabel:"Chat",
            tabBarIcon:({ tintColor}) => (
                <Icons name="ios-chatbubbles" color={tintColor} size={24} />
            )
        }

    },
    MyTrip:{
        screen:MyTrip,
        navigationOptions:{
            tabBarLabel:"My Trip",
            tabBarIcon:({ tintColor}) => (
                <Icons name="ios-chatbubbles" color={tintColor} size={24} />
            )
        }

    }
})

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});