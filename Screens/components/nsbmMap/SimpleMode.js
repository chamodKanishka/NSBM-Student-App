import React, { Component } from "react";
import{View, Text, StyleSheet,ScrollView,Dimensions,Image,TouchableOpacity} from "react-native";
import { Header, Left, Right, Icon} from 'native-base'
import SearchInput, { createFilter } from 'react-native-search-filter';
import location from './Location';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
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
        const filteredLocations = location.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
        return(
            <View style={styles.container}>
            <Header style={styles.header}>
                <Left>
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
                <Right>
                <Text style={styles.right}>Find Place</Text>
                </Right>
            </Header>
            <SearchInput 
                onChangeText={(term) => { this.searchUpdated(term) }}
                clearIcon={this.state.searchTerm!==''&&<Icons name="format-clear"/>}
                clearIconViewStyles={{position:'absolute',top: 18,right: 32}}
                fuzzy={true} 
                sortResults={true}
                style={styles.searchInput}
                placeholder="Type here to search"
                />
                <ScrollView>
                {filteredLocations.map(location => {
                    return (
                    <TouchableOpacity onPress={()=>alert(location.location)} key={location.id} style={styles.locationItem}>
                        <View>
                        <Text>{location.user.name}</Text>
                        <Text style={styles.Locationsubject}>{location.subject}</Text>
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
    locationItem:{
        borderBottomWidth: 0.5,
        borderColor: 'rgba(0,0,0,0.3)',
        padding: 10
      },
      Locationsubject: {
        color: 'rgba(0,0,0,0.5)'
      },
      searchInput:{
        padding: 10,
        borderColor: '#CCC',
        borderWidth: 1
      },
    header:{
        backgroundColor:"#2879fe"
    },
    right:{
        fontSize:24,
        color:"white"
    }
});