import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import { Header, Left, Right, Icon} from 'native-base'

class TripsScreen extends Component{
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
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
                <Right></Right>
            </Header>
            <Text>PastEvents</Text>
            </View>
        );
    }
}
export default TripsScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});