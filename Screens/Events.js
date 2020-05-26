import React, { Component } from "react";
import{View, Text, StyleSheet, SafeAreaView,TextInput,Platform,StatusBar,ScrollView,Image,Dimensions, TouchableOpacity} from "react-native";
import { Header, Left, Right, Icon} from 'native-base'
import Category from '../Screens/components/Events/Category';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import event from "../images/event.jpg";
import axios from 'axios';
const{height,width} = Dimensions.get('window')
class Events extends Component{

    state = {
        dataList: []
      }

    componentDidMount() {
        axios.get(`http://192.168.43.199:8083/api/events/events`)
          .then(res => {console.log(res.data)
            const dataList = res.data;
            this.setState({ dataList });
          })
          .catch(error => {console.log(error)});
      }

    render(){
        const {dataList} = this.state;
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
                <Text style={{ fontSize:24, fontWeight:'700',paddingHorizontal:20}}>Events of NSBM
                </Text>
                {
                dataList.map(user =>
                <Card style={styles.event}>
                <CardImage source={event}/>
                <CardTitle title={user.title} subtitle={user.subtitle}/>
                <CardContent text={user.description}/>
                </Card>
                )}

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
        backgroundColor:"#2879fe"
    },
    right:{
        fontSize:24,
        color:"white"
    },
    event:{
        
    }
});