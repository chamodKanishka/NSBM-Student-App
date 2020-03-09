import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import Icons from 'react-native-vector-icons/Ionicons';
import { Header, Left, Right, Icon} from 'native-base'
import ReactNativeSettingsPage, { 
    SectionRow, 
    NavigateRow,
    CheckRow,
    SwitchRow,
    SliderRow
} from 'react-native-settings-page';
//import Profile from "./Profile";
import { NavigationContainer } from '@react-navigation/native';
// import QrcodeScanner from "./components/Settings/QrcodeScanner";


class SettingsScreen extends Component{

    static navigationOptions = {
        drawerIcon : ({ tintColor }) => (
            <Icons name="ios-settings" style = {{ fontSize:23, color:tintColor}}/>
        )
    }

    state = {
        check: false,
        switch: false,
        value: 40
    }

    navigateToProfile = () => {
        const { navigation } = this.props
    navigation.navigate('Profile');
    }
    navigateToMyEid = () => {
        const { navigation } = this.props
        navigation.navigate('MyEid');
    }
    // navigateToQrScanner = () => {
    //     const { navigation } = this.props
    //     navigation.navigate('QrcodeScanner');
    // }
    
    render(){
        return(
            <View style={styles.container}>
            <Header style={styles.header}>
                <Left>
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
                <Right>
                <Text style={styles.right}>Settings</Text>
                </Right>
            </Header>
            <ReactNativeSettingsPage>
                {/* iconName only use FontAwesome icons */}
                <SectionRow text='Settings list'>
                    <NavigateRow
                        text='Profile'
                        iconName='user'
                        onPressCallback={this.navigateToProfile} />
                    <NavigateRow
                        text='My E-ID'
                        iconName='vcard-o'
                        onPressCallback={this.navigateToMyEid} />
                    <NavigateRow
                        text='QR-Scanner'
                        iconName='qrcode'
                        // onPressCallback={this.navigateToQrScanner}
                        />
                    <NavigateRow
                        text='Sign My University'
                        iconName='sign-in'
                        onPressCallback={this.navigateToProfile} />
                    <SwitchRow 
                        text='Enable Dark Mode' 
                        iconName='moon-o'
                        _value={this.state.switch}
                        _onValueChange={() => { this.setState({ switch: !this.state.switch }) }} />

                    <SwitchRow 
                        text='Allow Push Notification' 
                        iconName='sticky-note'
                        _value={this.state.switch}
                        _onValueChange={() => { this.setState({ switch: !this.state.switch }) }} />
                    <NavigateRow
                        text='Log Out'
                        iconName='sign-out'
                        onPressCallback={this.navigateToMyEid} />
                </SectionRow>
            </ReactNativeSettingsPage>
            </View>
        );
    }
}
export default SettingsScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        backgroundColor:"#2196f3"
    },
    right:{
        fontSize:24,
        color:"white"
    }
});
