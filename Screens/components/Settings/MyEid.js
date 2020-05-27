
import React, { Component } from "react";
import QRCode from 'react-native-qrcode2';
import CommonUser from "../../commonUser";
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';

class MyEid extends Component{
    state = {
        text: CommonUser.student.sId,
    };

    render(){
        return(
            <View style={styles.maincontainer}>
            <View style={styles.container}>
                <QRCode
                    value={this.state.text}
                    size={500}
                    bgColor='black'
                    fgColor='white'/>
            </View>
            </View>

        );
    }
}
export default MyEid;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        // padding:200,
        // marginLeft:100
        paddingLeft:250,
        paddingTop:200,
        // resizeMode: false

    },
    maincontainer:{
        flex:1,
    },
    header:{
        backgroundColor:"#2879fe"
    },
    right:{
        fontSize:24,
        color:"white",
    }

});
