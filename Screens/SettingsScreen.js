import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import Icons from 'react-native-vector-icons/Ionicons'
import { Header, Left, Right, Icon} from 'native-base'
import ReactNativeSettingsPage, { 
    SectionRow, 
    NavigateRow,
    CheckRow,
    SwitchRow,
    SliderRow
} from 'react-native-settings-page';
import MyAccount from './MyAccount';

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
        navigation.navigate('MyAccount');
    }
    
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
                <SectionRow text='Usage'>
                    <Icons name="ios-contact"/>
                    <NavigateRow
                        text='Profile'
                        iconName='ios-contact'
                        onPressCallback={this.navigateToProfile} />
                    <NavigateRow
                        text='My E-ID'
                        iconName='your-icon-name'
                        onPressCallback={this.navigateToProfile} />
                    <NavigateRow
                        text='QR-Scanner'
                        iconName='your-icon-name'
                        onPressCallback={this.navigateToProfile} />
                    <SwitchRow 
                        text='Enable Dark Mode' 
                        iconName='your-icon-name'
                        _value={this.state.switch}
                        _onValueChange={() => { this.setState({ switch: !this.state.switch }) }} />

                    <SwitchRow 
                        text='Allow Push Notification' 
                        iconName='your-icon-name'
                        _value={this.state.switch}
                        _onValueChange={() => { this.setState({ switch: !this.state.switch }) }} />
                    <CheckRow 
                        text='Hide My Details'
                        iconName='your-icon-name'
                        _color='#000'
                        _value={this.state.check}
                        _onValueChange={() => { this.setState({ check: !this.state.check }) }} />
                    <SliderRow 
                        text='Slider Row'
                        iconName='your-icon-name'
                        _color='#000'
                        _min={0}
                        _max={100}
                        _value={this.state.value}
                        _onValueChange={value => { this.setState({ value }) }} />
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
