import React, { Component } from "react";
import{View, Text, StyleSheet,ScrollView,Dimensions,Image} from "react-native";

class MyAccount extends Component{
    constructor() {
        super();
        this.state = {
          username: "",
          allowPushNotifications: false,
          gender: ""
        };
      }
    render(){
        return(
            <Text>Hello</Text>
        );
    }
}
export default MyAccount;


const colors = {
    white: "#FFFFFF",
    monza: "#C70039",
    switchEnabled: "#C70039",
    switchDisabled: "#efeff3",
    blueGem: "#27139A",
  };

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});