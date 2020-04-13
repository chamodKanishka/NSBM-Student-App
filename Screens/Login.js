import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';

import bgImage from '../images/nsbm.jpg'
import logo from '../images/logos.png'
import Menu from './Menu'
import HomeScreen from './HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/AntDesign'
import Iconsi from 'react-native-vector-icons/MaterialCommunityIcons'

const { width: WIDTH } = Dimensions.get('window')
class Login extends Component {
    constructor(){
        super()
        this.state = {
            showPass: true,
            press: false
        }
    }

    showPass = () => {
        if(this.state.press == false) {
            this.setState({ showPass: false, press: true})
        }
        else {
            this.setState({ showPass: true, press : false})
        }
    }
    render() {
        return (
            <ImageBackground source={bgImage} style={styles.mainContainer}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.logoText}>NSBM STUDENTS APP</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Icons name={'user'} size={24} color={'rgba(0,0,0,1)'}
                     style={styles.inputIcon}></Icons>
                    <TextInput
                        style={styles.input}
                        placeholder={'Username'}
                        placeholderTextColor={'rgba(0,0,0,0.5)'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                <Iconsi name={'textbox-password'} size={24} color={'rgba(0,0,0,1)'}
                     style={styles.inputIcon}></Iconsi>
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        secureTextEntry={this.state.showPass}
                        placeholderTextColor={'rgba(0,0,0,0.5)'}
                        underlineColorAndroid='transparent'
                    />

                    <TouchableOpacity style={styles.btnEye}
                        onPress={this.showPass.bind(this)}>
                        <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'} size={26} color={'rgba(0,0,0,0.5)'} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnLogin} onPress={() => this.props.navigation.navigate("Menu", {screen:Menu})}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}
export default Login;

const styles = StyleSheet.create({
    imgcont:{
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    mainContainer: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',

    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50,

    },
    logo: {
        width: 120,
        height: 120
    },
    logoText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.8
    },
    inputContainer:{
        marginTop: 10

    },
    inputIcon:{
        position: 'absolute',
        top:8,
        left:40

    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 20,
        paddingLeft: 45,
        backgroundColor: 'rgba(255,255,255,0.7)',
        color: 'rgba(255,255,255,1)',
        marginHorizontal: 25

    },

    btnLogin:{
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#007aff',
        justifyContent: 'center',
        marginTop:20,
        
    },
    text:{
        color: 'rgba(255,255,255,1)',
        fontSize:20,
        textAlign: 'center'

    },
    btnEye:{
        position:'absolute',
        top: 8,
        right: 37
    }



});