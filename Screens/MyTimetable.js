import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import {Header, Icon, Left, Right} from "native-base";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import LecTimetable from "./LecTimetable";
import Icons from 'react-native-vector-icons/Ionicons';
import ExamTimetable from "./ExamTimetable";

const Tab = createMaterialBottomTabNavigator();


class MyTimtable extends Component{


    render(){
        return(
            <Tab.Navigator>
            <Tab.Screen name="Lectures" component={LecTimetable} />
            <Tab.Screen name="Exams" component={ExamTimetable} />
          </Tab.Navigator>
        );
    }
}
export default MyTimtable;