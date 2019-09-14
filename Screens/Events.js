import React, { Component } from "react";
import{View, Text, StyleSheet, SafeAreaView,TextInput,Platform,StatusBar,ScrollView,Image,Dimensions} from "react-native";
import { Header, Left, Right, Icon} from 'native-base'
import Category from '../Screens/components/Events/Category';

const{height,width} = Dimensions.get('window')
class Events extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Header style={styles.header}>
                <Left>
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
                <Right>
                <Text style={styles.right}>Events</Text>
                </Right>
            </Header>
            <ScrollView
                scrollEventThrottle={16}
            >
            <View style={{flex:1, backgroundColor:'white',paddingTop:20}}>
                <Text style={{ fontSize:24, fontWeight:'700',paddingHorizontal:20}}>Find Events Organized on NSBM
                </Text>
                <View style={{height:130, marginTop:20}}>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    >
                       <Category imageUri={require('../images/nsbm.jpg')}
                       name='NSBM'/>
                       <Category imageUri={require('../images/nsbm.jpg')}
                       name='NSBM'/>
                       <Category imageUri={require('../images/nsbm.jpg')}
                       name='NSBM'/>
                       <Category imageUri={require('../images/nsbm.jpg')}
                       name='NSBM'/>
                       <Category imageUri={require('../images/nsbm.jpg')}
                       name='NSBM'/>
                    </ScrollView>

                </View>
                <View style={{ marginTop:40, paddingHorizontal:20}}>
                    <Text style={{fontSize:24, fontWeight:'700'}}>
                       Aurudu Event
                    </Text>
                    <Text style={{fontWeight:'100', marginTop:10}}>Showing mostpopular or upcoming biggest event </Text>
                    <View style={{ width: width- 40,height:200, marginTop:20}}>
                        <Image 
                        style={{flex:1,height:null,width:null, resizeMode:'cover', borderRadius:5, borderWidth:1,borderColor:'#dddddd'}}
                         source={require('../images/nsbm.jpg')}/>
                    </View>
                </View>
            </View>

            </ScrollView>
            </View>
            
        );
    }
}
export default Events;

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