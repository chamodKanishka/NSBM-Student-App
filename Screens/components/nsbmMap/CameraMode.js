import React, { Component } from "react";
import{View, Text, StyleSheet,ScrollView,Dimensions,Image} from "react-native";
import { Header, Left, Right, Icon} from 'native-base'


class CameraMode extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Header>
                <Left>
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
                <Right>
                <Text style={{fontSize:24,fontWeight:"bold"}}>Camera Map</Text>
                </Right>
            </Header>
            <Text>Camera</Text>
            </View>
        );
    }
}

export default CameraMode;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});