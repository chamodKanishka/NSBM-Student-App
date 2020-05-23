import React, { Component } from "react";
import{View, Text, StyleSheet, Button, ScrollView} from "react-native";
import { Header, Left, Right, Icon} from 'native-base';
import {Card} from 'react-native-shadow-cards';
import axios from 'axios';

class News extends Component{

    state = {
        dataList: []
      }

    componentDidMount() {
        axios.get(`http://192.168.43.199:8085/api/user/viewAll`)
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
                <Left >
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
                <Right>
                <Text style={styles.right}>Notifications</Text>
                </Right>
            </Header>
            <ScrollView>
            {
                dataList.map(user => 
            
            <Card style={styles.card} title="Learn More">
            <Button
                title={user.fName}
                Color="#fff"
                accessibilityLabel="Learn more about this purple button"
                 />
                <Text>{user.lName}</Text>
                <Text>{user.userEmail}</Text>
                <Text>{user.cNo}</Text>
                <Text>{user.userPassword}</Text>
            </Card>
            ) }
            </ScrollView>
            </View>
        );
    }
}
export default News;

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
    card:{
        width:'93%',
        margin:10,
        padding:10,
        elevation:5
    }
});
