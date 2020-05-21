import React, { Component } from "react";
import{View, Text, StyleSheet, SafeAreaView,TextInput,Platform,StatusBar,ScrollView,Image,Dimensions, TouchableOpacity} from "react-native";
import { Header, Left, Right, Icon} from 'native-base'
import Category from '../Screens/components/Events/Category';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'
import event from "../images/event.jpg"
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
                <Text style={{ fontSize:24, fontWeight:'700',paddingHorizontal:20}}>Events of NSBM
                </Text>
                <View style={{height:130, marginTop:20}}>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    >
                       <TouchableOpacity>
                       <Category imageUri={require('../images/event.jpg')}
                       name='Firebase(FOSS)'/>
                       </TouchableOpacity>
                       <TouchableOpacity>
                       <Category imageUri={require('../images/nsbm.jpg')}
                       name='IPT'/>
                       </TouchableOpacity><TouchableOpacity>
                       <Category imageUri={require('../images/event.jpg')}
                       name='NSBM'/>
                       </TouchableOpacity><TouchableOpacity>
                       <Category imageUri={require('../images/event.jpg')}
                       name='NSBM'/>
                       </TouchableOpacity><TouchableOpacity>
                       <Category imageUri={require('../images/event.jpg')}
                       name='NSBM'/>
                       </TouchableOpacity>
                    </ScrollView>

                </View>
                <Card style={styles.event}>
                <CardImage source={event}/>
                <CardTitle title="This is title" subtitle="This is sub title"/>
                <CardContent text="Your Description device will reboot in few seconds once successful, be patient meanwhile,
                Your Description device will reboot in few seconds once successful, be patient meanwhile,
                Your Description device will reboot in few seconds once successful, be patient meanwhile,
                Your Description device will reboot in few seconds once successful, be patient meanwhile"/>
                </Card>
                <Card style={styles.event}>
                <CardImage source={event}/>
                <CardTitle title="This is title" subtitle="This is sub title"/>
                <CardContent text="Your Description device will reboot in few seconds once successful, be patient meanwhile,
                Your Description device will reboot in few seconds once successful, be patient meanwhile,
                Your Description device will reboot in few seconds once successful, be patient meanwhile,
                Your Description device will reboot in few seconds once successful, be patient meanwhile"/>
                </Card>
                <Card style={styles.event}>
                <CardImage source={event}/>
                <CardTitle title="This is title" subtitle="This is sub title"/>
                <CardContent text="Your Description device will reboot in few seconds once successful, be patient meanwhile,
                Your Description device will reboot in few seconds once successful, be patient meanwhile,
                Your Description device will reboot in few seconds once successful, be patient meanwhile,
                Your Description device will reboot in few seconds once successful, be patient meanwhile"/>
                </Card>
                <Card style={styles.event}>
                <CardImage source={event}/>
                <CardTitle title="This is title" subtitle="This is sub title"/>
                <CardContent text="Your Description device will reboot in few seconds once successful, be patient meanwhile,
                Your Description device will reboot in few seconds once successful, be patient meanwhile,
                Your Description device will reboot in few seconds once successful, be patient meanwhile,
                Your Description device will reboot in few seconds once successful, be patient meanwhile"/>
                </Card>
                <Card style={styles.event}>
                <CardImage source={event}/>
                <CardTitle title="This is title" subtitle="This is sub title"/>
                <CardContent text="Your Description device will reboot in few seconds once successful, be patient meanwhile,
                Your Description device will reboot in few seconds once successful, be patient meanwhile,
                Your Description device will reboot in few seconds once successful, be patient meanwhile,
                Your Description device will reboot in few seconds once successful, be patient meanwhile"/>
                </Card>

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