
import React, { Component } from "react";
import QRCode from 'react-native-qrcode-generator';
import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput
} from 'react-native';

class MyEid extends Component{
    state = {
        text: 'http://facebook.github.io/react-native/',
    };

    render(){
        return(
            <View style={styles.container}>
                <QRCode
          value={this.state.text}
          size={400}
          bgColor='black'
          fgColor='white'/>
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
        justifyContent: 'center'
    }

});
