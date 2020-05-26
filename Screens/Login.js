import React, { Component } from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import axios from 'axios';
import bgImage from '../images/nsbm1.jpeg'
import logo from '../images/logosss.png'
import Menu from './Menu'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/AntDesign'
import Iconsi from 'react-native-vector-icons/MaterialCommunityIcons'
import Snackbar from 'react-native-snackbar-component';

const { width: WIDTH } = Dimensions.get('window')
class Login extends Component {

    constructor(){
        super()
        this.state = {
            showPass: true,
            press: false,
            email:"",
            password:"",
            role:'1',
            errorMessage: null,
            snackIsVisible: false,
        }
    }
      
      handleLogin = () => {
        axios.post(`http://192.168.43.199:8085/api/user/addUser`,{
            userEmail:this.state.email,
            userPassword: this.state.password,
            userRole: this.state.role
        })
          if(this.state.email == "chamod@gmail.com"){
              if(this.state.password == "kanishka"){
                    this.props.navigation.navigate("Menu", {screen:Menu})
                    console.log(this.state.email)
                    console.log(this.state.password)
              }
              else{
                this.setState({ 
                    snackIsVisible: !this.state.snackIsVisible
                  });
              }
              
          }
          else{
            this.setState({ 
                snackIsVisible: !this.state.snackIsVisible
              });
          }

    
      };


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
                        placeholder={'Email'}
                        placeholderTextColor={'rgba(0,0,0,0.5)'}
                        underlineColorAndroid='transparent'
                        keyboardType="email-address"
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
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
                        onChangeText={password => this.setState({password})}
                        value={this.state.password}
                    />

                    <TouchableOpacity style={styles.btnEye}
                        onPress={this.showPass.bind(this)}>
                        <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'} size={26} color={'rgba(0,0,0,0.5)'} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnLogin} onPress={this.handleLogin}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
                <Snackbar
                visible={this.state.snackIsVisible}
                //SnackBar visibility control
                textMessage="Your email or password incorrect"
                //Text on SnackBar
                actionHandler={() => {
                    //After handling click making nackBar invisible
                    this.setState({ 
                    snackIsVisible: !this.state.snackIsVisible 
                    });
                }}
                actionText="try again"
                //action Text to print on SnackBar
                distanceCallback={distance => {
                    //Number indicating distance taken up by snackbar
                    this.setState({ distance: distance });
                }}
                />
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
        width: 80,
        height: 100
    },
    logoText: {
        color: 'white',
        fontSize: 24,
        fontWeight: '500',
        marginTop: 10,
        opacity: 1
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
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: 'rgba(255,255,255,0.7)',
        color: 'rgba(55,55,55,0.8)',
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