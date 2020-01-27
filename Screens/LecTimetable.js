import React, { Component } from "react";
import{View, Text, StyleSheet,WebView} from "react-native";
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
                <WebView
                    source = {{ uri:
                            'https://docs.google.com/spreadsheets/d/1e7z2sxXT1WcK0iH8iQwRUjQpLULEd_tvtO7C1tJ9gFY/edit#gid=806617593' }}
                />
            </View>
        );
    }
}
export default LecTimetable;

const styles = StyleSheet.create({
    container:{
        flex:1,
        height: 350,
    },
    header:{
        backgroundColor:"#2196f3"
    },
    right:{
        fontSize:24,
        color:"white"
    }
});
