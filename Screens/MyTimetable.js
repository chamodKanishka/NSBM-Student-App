import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import {Header, Icon, Left, Right} from "native-base";
import {createBottomTabNavigator} from "react-navigation";
import LecTimetable from "./LecTimetable";
import Icons from 'react-native-vector-icons/Ionicons';
import ExamTimetable from "./ExamTimetable";


class MyTimtable extends Component{


    render(){
        return(
            <View style={styles.container}>
                <Header style={{backgroundColor:"#2196f3"}}>
                    <Left >
                        <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                    </Left>
                    <Right>
                        <Text style={{fontSize:24,fontWeight:"bold", color:"white"}}>My TimeTable</Text>
                    </Right>
                </Header>
                <Text>News</Text>
            </View>
        );
    }
}
//export default MyTimtable;
export default createBottomTabNavigator({
    LecTimeTable:{
      screen: LecTimetable,
        navigationOptions:{
          tabBarLabel: "Lectures",
            tabBarIcon:({ tintColor}) => (
                <Icons name="ios-paper" color={tintColor} size={24} />
            )

        }

    },
    ExamTimetable:{
        screen: ExamTimetable,
        navigationOptions: {
            tabBarLabel: "Exams",
            tabBarIcon:({ tintColor}) => (
                <Icons name="ios-paper" color={tintColor} size={24} />
                )
        }
    }
})

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});