import React, { Component } from "react";
import{View, Text, StyleSheet,ScrollView,Dimensions,Image,TouchableOpacity} from "react-native";
import { Header, Left, Right, Icon} from 'native-base'
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './mails';
const KEYS_TO_FILTERS = ['user.name', 'subject'];

class SimpleMode extends Component{

    constructor(props) {
        super(props);
        this.state = {
          searchTerm: ''
        }
      }
      searchUpdated(term) {
        this.setState({ searchTerm: term })
      }

    render(){
        const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

        return(
            <View style={styles.container}>
            <Header>
                <Left>
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
                <Right>
                <Text style={{fontSize:24,fontWeight:"bold"}}>Find Place</Text>
                </Right>
            </Header>
            <SearchInput 
                onChangeText={(term) => { this.searchUpdated(term) }} 
                style={styles.searchInput}
                placeholder="Type here to search"
                />
                <ScrollView>
                {filteredEmails.map(email => {
                    return (
                    <TouchableOpacity onPress={()=>alert(email.location)} key={email.id} style={styles.emailItem}>
                        <View>
                        <Text>{email.user.name}</Text>
                        <Text style={styles.emailSubject}>{email.subject}</Text>
                        </View>
                    </TouchableOpacity>
                    )
                })}
                </ScrollView>
            </View>
        );
    }
}

export default SimpleMode;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    emailItem:{
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.3)',
        padding: 10
      },
      emailSubject: {
        color: 'rgba(0,0,0,0.5)'
      },
      searchInput:{
        padding: 10,
        borderColor: '#CCC',
        borderWidth: 1
      }
});