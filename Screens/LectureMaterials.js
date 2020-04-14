import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import { Header, Left, Right, Icon} from 'native-base';


class LectureMaterials extends Component{


    render(){
        const resourceType = 'base64';
        return(
            <View style={styles.container}>
            <Header style={styles.header}>
                <Left >
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
                <Right>
                <Text style={styles.right}>Lecture Materials</Text>
                </Right>
            </Header>
            </View>
        );
    }
}
export default LectureMaterials;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        backgroundColor:"#2879fe"
    },
    right:{
        fontSize:24,
        color:"white"
    }
});
