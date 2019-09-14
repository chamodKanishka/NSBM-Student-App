import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import { Header, Left, Right, Icon} from 'native-base'

class LecTimetable extends Component{


    render(){
        return(
            <View style={styles.container}>
                <Header style={styles.header}>
                    <Left >
                        <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                    </Left>
                    <Right>
                        <Text style={styles.right}>Timetable</Text>
                    </Right>
                </Header>
                <Text>Lectures</Text>
            </View>
        );
    }
}
export default LecTimetable;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        backgroundColor:"#2196f3"
    },
    right:{
        fontSize:24,
        color:"white"
    }
});