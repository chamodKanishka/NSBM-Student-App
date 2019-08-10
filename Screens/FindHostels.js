import React, { Component } from "react";
import{View, Text, StyleSheet, SafeAreaView,TextInput,Platform,StatusBar,ScrollView,Image,Dimensions} from "react-native";
import { Header, Left, Right, Icon} from 'native-base'
import Icons from 'react-native-vector-icons/Ionicons'
import Hostals from '../Screens/components/Events/Hostal'

const{height,width} = Dimensions.get('window')
class FindHostels extends Component{
    static navigationOptions = {
        drawerIcon : ({ tintColor }) => (
            <Icons name="ios-home" style = {{ fontSize:23, color:tintColor}}/>
        )
    }
    
    render(){
        return(
       <View style={styles.container}>
            <Header>
                <Left>
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
                <Right>
                <Text style={{fontSize:24,fontWeight:"bold"}}>Find Hostals</Text>
                </Right>
            </Header>
            <ScrollView
                scrollEventThrottle={16}
            >
            <View style={{ marginTop:40}}>
                    <Text style={{ fontSize:24, fontWeight:'700', paddingHorizontal:20}}>Hostals around the campus</Text>
                    <View style={{ paddingHorizontal:20,marginTop:20, flexDirection:'row', flexWrap:'wrap', justifyContent:'space-between'}}>
                        <Hostals width={width}/>
                        <Hostals width={width}/>
                        <Hostals width={width}/>
                        <Hostals width={width}/>
                        <Hostals width={width}/>
                        <Hostals width={width}/>
                        <Hostals width={width}/>
                        <Hostals width={width}/>
                    </View>
                </View>
            </ScrollView>
        </View>
            
        );
    }
}
export default FindHostels;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});