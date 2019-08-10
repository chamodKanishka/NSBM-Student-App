import React, { Component } from "react";
import{View, Text, StyleSheet,ScrollView,Dimensions,Image} from "react-native";
import { Header, Left, Right, Icon} from 'native-base'
import Icons from 'react-native-vector-icons/Ionicons'
import Category from '../Screens/components/Events/Category';

const{height,width} = Dimensions.get('window')
class BuyFoods extends Component{
    static navigationOptions = {
        drawerIcon : ({ tintColor }) => (
            <Icons name="ios-restaurant" style = {{ fontSize:23, color:tintColor}}/>
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
                <Text style={{fontSize:24,fontWeight:"bold"}}>Order Foods</Text>
                </Right>
            </Header>
            <ScrollView
                scrollEventThrottle={16}
            >
            <View style={{flex:1, backgroundColor:'white',paddingTop:20}}>
                <Text style={{ fontSize:24, fontWeight:'700',paddingHorizontal:20}}>Hostle Canteen
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
                <Text style={{ fontSize:24, fontWeight:'700',paddingHorizontal:20}}>MainHall Canteen
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
                <Text style={{ fontSize:24, fontWeight:'700',paddingHorizontal:20}}>Juice Bar
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
                <Text style={{ fontSize:24, fontWeight:'700',paddingHorizontal:20}}>Mini Mart
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
            </View>

            </ScrollView>
            </View>
        );
    }
}
export default BuyFoods;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});