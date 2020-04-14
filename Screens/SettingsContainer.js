/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import SettingsScreen from './SettingsScreen';
import Profile from './Profile';
import MyEid from './components/Settings/MyEid';
import QrcodeScanner from './components/Settings/QrcodeScanner';
import Login from './Login';
import RNBootSplash from "react-native-bootsplash";

RNBootSplash.hide(); // fade

export default class SettingsContainer extends Component{
    render() {
        return <AppContainer />;
    }
}

//Creating Stack Navigator for All Routes in Application
const AppNavigator = createStackNavigator({
    SettingsScreen: {
        screen: SettingsScreen,
        navigationOptions: {  // Extra Navigation Options
            headerShown: false,  //Make the header bar Null - No Header
            gestureEnabled: false  //Gestures disable
          },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {  // Extra Navigation Options
        title: 'Profile',   
        //Gestures disable
          headerStyle: {
            backgroundColor: '#2879fe',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:24,
          },
        },
  },
  MyEid: {
    screen: MyEid,
    navigationOptions: {  // Extra Navigation Options
        title: 'E-ID',
        headerStyle: {
            backgroundColor: '#2879fe',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:24,
          },
    },
},
QrcodeScanner: {
    screen: QrcodeScanner,
    navigationOptions: {  // Extra Navigation Options
        title: 'QR-Scanner',
        headerStyle: {
            backgroundColor: '#2879fe',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize:24,
          },
    },
},
  

});

//Make App Navigator to creating app container
const AppContainer = createAppContainer(AppNavigator);
