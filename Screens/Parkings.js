import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import { Header, Left, Right, Icon} from 'native-base';
import CardView from 'react-native-cardview';

class Parking extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Header style={styles.header}>
                <Left>
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
                <Right>
                <Text style={styles.right}>Parking</Text>
                </Right>
            </Header>
                <View style={styles.MainContainer}>

                    <CardView
                        cardElevation={5}
                        cardMaxElevation={5}
                        cornerRadius={5}
                        style={styles.cardViewStyle}>

                        <Text style={styles.cardView_InsideText}> Simple CardView </Text>

                    </CardView>

                </View>
            </View>
        );
    }
}
export default Parking;

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
    },
    MainContainer: {

        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',

    },

    cardViewStyle:{

        width: 250,
        height: 150,

    },

    cardView_InsideText:{

        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        marginTop: 50

    }
});
