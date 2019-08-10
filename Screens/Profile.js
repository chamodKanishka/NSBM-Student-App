import React, { Component } from "react";
import{View, Text, StyleSheet,Image} from "react-native";
import { Header, Left, Right,Center, Icon} from 'native-base'

class Profile extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Header style={{backgroundColor:"green"}}>
                <Left>
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                   
                </Left>
                <Right>
                <Text style={{fontSize:24,fontWeight:"bold", color:"white"}}>Profile</Text>
                </Right>
            </Header>
             <View style={{ height:150,alignItems:'center', justifyContent:'center', marginBottom:50,}}>
                <Image source={require('../images/logo.png')} style={{ height:120, width:120, borderRadius:60}}/>
                </View>
                <View style={{marginLeft:20,}}>
                <Text style={{fontSize:20, fontWeight:'700',marginBottom:30}}>Name:</Text>
                <Text style={{fontSize:20, fontWeight:'700',marginBottom:30}}>Contact No:</Text>
                <Text style={{fontSize:20, fontWeight:'700',marginBottom:30}}>Email:</Text>
                <Text style={{fontSize:20, fontWeight:'700',marginBottom:30}}>Degree:</Text>
                <Text style={{fontSize:20, fontWeight:'700',marginBottom:30}}>Batch:</Text>
            </View>
            </View>
        );
    }
}
export default Profile;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
});