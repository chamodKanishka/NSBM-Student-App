
import React, { Component } from "react";
import QRCode from 'react-native-qrcode';
import { WebView } from 'react-native-webview'
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
                <WebView>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({text: text})}
                    value={this.state.text}
                />
                <QRCode
                    value={this.state.text}
                    size={300}
                    bgColor='#2879fe'
                    fgColor='white'/>
                </WebView>
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
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});
