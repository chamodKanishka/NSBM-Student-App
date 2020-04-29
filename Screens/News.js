import React, { Component } from "react";
import{View, Text, StyleSheet, Button, ScrollView} from "react-native";
import { Header, Left, Right, Icon} from 'native-base';
import {Card} from 'react-native-shadow-cards';
import axios from 'axios';

class News extends Component{

    state = {
        title:'What is the purpose of Title',
        description:'What is the advantage of Decription'
      }

    componentDidMount() {
        axios.get(`url`)
          .then(res => {
            const title = res.data;
            this.setState({ title });
            const description = res.data;
            this.setState({ description });
          })
          .catch(error => {console.log(error)});
      }

    render(){
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
            <Card style={styles.card} title="Learn More">
            <Button
                onPress={()=>{}}
                title={this.state.title}
                Color="#fff"
                accessibilityLabel="Learn more about this purple button"
                />
                <Text>{this.state.description}</Text>
            </Card>
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
