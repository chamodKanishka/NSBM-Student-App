import React, { Component } from "react";
import{View, Text, StyleSheet,ScrollView, Button} from "react-native";
import { Header, Left, Right, Icon,} from 'native-base'
import Icons from 'react-native-vector-icons/Ionicons'
import CardView from 'react-native-cardview'
import AwesomeButton from "react-native-really-awesome-button";


function Buttons() {
    return (
      <AwesomeButton style={backgroundColor='green'}
        progress
        onPress={next => {
          /** Do Something **/
          next();
        }}
      > </AwesomeButton>
    );
  }

class FindTrips extends Component{

    static navigationOptions = {
        drawerIcon : ({ tintColor }) => (
            <Icons name="ios-settings" style = {{ fontSize:23, color:tintColor}}/>
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
                <Text style={{fontSize:24,fontWeight:"bold"}}>Find Trips</Text>
                </Right>
            </Header>
            <ScrollView>            
            <CardView style={{ marginTop:10}}
                    cardElevation={5}
                    cardMaxElevation={10}
                    cornerRadius={5}>
                    <Text style={{fontSize:18,fontWeight:"medium", marginTop:10, marginBottom:10}}>
                        Start:  
                        {"\n"}
                        {"\n"}
                         End:
                    </Text>
                    <AwesomeButton  type="primary" style={{activityColor:'lightblue',
                                    activeOpacity:'lightblue',
                                    backgroundActive:'lightblue',
                                    backgroundColor:'lightblue',
                                    backgroundDarker:'lightblue',
                                    backgroundShadow:'lightblue',
                                    borderColor:'lightblue',
            }}
                    progress
                    onPress={next => {
                    /** Do Something **/
                    next();
                    }}
                >
                    Request
                </AwesomeButton>
            </CardView>
            <CardView style={{ marginTop:10}}
                    cardElevation={5}
                    cardMaxElevation={10}
                    cornerRadius={5}>
                    <Text style={{fontSize:18,fontWeight:"medium", marginTop:10, marginBottom:10}}>
                        Start Point:                   End Point:
                    </Text>
            </CardView>
            <CardView style={{ marginTop:10}}
                    cardElevation={5}
                    cardMaxElevation={10}
                    cornerRadius={5}>
                    <Text style={{fontSize:18,fontWeight:"medium", marginTop:10, marginBottom:10}}>
                        Start Point:                   End Point:
                    </Text>
            </CardView>
            <CardView style={{ marginTop:10}}
                    cardElevation={5}
                    cardMaxElevation={10}
                    cornerRadius={5}>
                    <Text style={{fontSize:18,fontWeight:"medium", marginTop:10, marginBottom:10}}>
                        Start Point:                   End Point:
                    </Text>
            </CardView>
            <CardView style={{ marginTop:10}}
                    cardElevation={5}
                    cardMaxElevation={10}
                    cornerRadius={5}>
                    <Text style={{fontSize:18,fontWeight:"medium", marginTop:10, marginBottom:10}}>
                        Start Point:                   End Point:
                    </Text>
            </CardView>
            <CardView style={{ marginTop:10}}
                    cardElevation={5}
                    cardMaxElevation={10}
                    cornerRadius={5}>
                    <Text style={{fontSize:18,fontWeight:"medium", marginTop:10, marginBottom:10}}>
                        Start Point:                   End Point:
                    </Text>
            </CardView>
            <CardView style={{ marginTop:10}}
                    cardElevation={5}
                    cardMaxElevation={10}
                    cornerRadius={5}>
                    <Text style={{fontSize:18,fontWeight:"medium", marginTop:10, marginBottom:10}}>
                        Start Point:                   End Point:
                    </Text>
            </CardView>
            <CardView style={{ marginTop:10}}
                    cardElevation={5}
                    cardMaxElevation={10}
                    cornerRadius={5}>
                    <Text style={{fontSize:18,fontWeight:"medium", marginTop:10, marginBottom:10}}>
                        Start Point:                   End Point:
                    </Text>
            </CardView>
            <CardView style={{ marginTop:10}}
                    cardElevation={5}
                    cardMaxElevation={10}
                    cornerRadius={5}>
                    <Text style={{fontSize:18,fontWeight:"medium", marginTop:10,  marginBottom:10}}>
                        Start Point:                   End Point:
                    </Text>
            </CardView>
            <CardView style={{ marginTop:10}}
                    cardElevation={5}
                    cardMaxElevation={10}
                    cornerRadius={5}>
                    <Text style={{fontSize:18,fontWeight:"medium", marginTop:10, marginBottom:10}}>
                        Start Point:                   End Point:
                    </Text>
            </CardView>
            </ScrollView>
            </View>
        );
    }
}
export default FindTrips;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});