import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import { Header, Left, Right, Icon} from 'native-base'

class LecTimetable extends Component{


    render(){
        return(
            <View style={styles.container}>
                <Header style={{backgroundColor:"#2196f3"}}>
                    <Left >
                        <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                    </Left>
                    <Right>
                        <Text style={{fontSize:24,fontWeight:"bold", color:"white"}}>Timetable</Text>
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
    }
});