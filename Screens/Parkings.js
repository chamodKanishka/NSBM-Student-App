import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import { Header, Left, Right, Icon} from 'native-base'

class Parking extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Header>
                <Left>
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
                <Right>
                <Text style={{fontSize:24,fontWeight:"bold"}}>Parking</Text>
                </Right>
            </Header>
            <Text>Parking</Text>
            </View>
        );
    }
}
export default Parking;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});