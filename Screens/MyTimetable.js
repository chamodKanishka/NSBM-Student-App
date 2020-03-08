import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import {Header, Icon, Left, Right} from "native-base";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import LecTimetable from "./components/Timetables/LecTimetable";
import Icons from 'react-native-vector-icons/Ionicons';
import ExamTimetable from "./components/Timetables/ExamTimetable";

const Tab = createMaterialBottomTabNavigator();


class MyTimtable extends Component{


    render(){
        return(
            <Tab.Navigator>
            <Tab.Screen 
            name="Lectures" 
            component={LecTimetable} 
            options={{
                tabBarLabel: "Lectures",
                  tabBarIcon:({ tintColor}) => (
                      <Icons name="ios-paper" color={tintColor} size={24} />
                  )
      
              }}/>


            <Tab.Screen 
            name="Exams" 
            component={ExamTimetable} 
            options={{
                tabBarLabel: "Exams",
                tabBarIcon:({ tintColor}) => (
                    <Icons name="ios-paper" color={tintColor} size={24} />
                    )
            }
        }/>
          </Tab.Navigator>
        );
    }
}
export default MyTimtable;