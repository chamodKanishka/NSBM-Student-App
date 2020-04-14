import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import { Header, Left, Right, Icon} from 'native-base'
import { WebView } from 'react-native-webview';

class ExamTimetable extends Component{


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
                            injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=width, initial-scale=0.8, maximum-scale=0.5, user-scalable=2.0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
                            scalesPageToFit={true}
                            onLoadEnd={this._onLoadEnd}
                />
            </View>
        );
    }
}
export default ExamTimetable;

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