/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Login from './Screens/Login';
import Menu from './Screens/Menu';
import RNBootSplash from "react-native-bootsplash";

RNBootSplash.hide(); // fade

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}

//Creating Stack Navigator for All Routes in Application
const AppNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {  // Extra Navigation Options
            headerShown: false,  //Make the header bar Null - No Header
            gestureEnabled: false  //Gestures disable
        },
    },
    Menu: {
      screen: Menu,
      navigationOptions: {  // Extra Navigation Options
          headerShown: false,  //Make the header bar Null - No Header
          gestureEnabled: false  //Gestures disable
      },
  },
  

});

//Make App Navigator to creating app container
const AppContainer = createAppContainer(AppNavigator);
