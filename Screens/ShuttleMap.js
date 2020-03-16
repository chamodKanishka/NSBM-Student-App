import React, { Component } from "react";
import{View, Text, StyleSheet, PermissionsAndroid, BackHandler, DeviceEventEmitter} from "react-native";
import { Header, Left, Right, Icon} from 'native-base';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import LightMap from "./components/mapColor/lightmap"
import DarkMap from "./components/mapColor/darkmap"
import Logo from '../images/logoss.png'
class ShuttleMap extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Header style={styles.header}>
                <Left>
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
                <Right style={styles.right}>
                <Text style={styles.text}>Shuttle Map</Text>
                </Right>
            </Header>
                <MapView
                    region={this.props.coordinate}
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    showsCompass={true}
                    showsBuildings={true}
                    showsTraffic={true}
                    customMapStyle={LightMap}
                    region={{
                        latitude: 6.8211,
                        longitude: 80.0409,
                        latitudeDelta: 0.025,
                        longitudeDelta: 0.0121,
                }}
                >
                    <Marker
                        title={"NSBM Green University Town"}
                        coordinate={{
                            latitude: 6.8211,
                            longitude: 80.0409,
                        }}
                        pinColor={"green"}
                        description={"National School of Bussiness Management"}
                        icon={Logo}
                        rotation={0}
                        opacity={1.0}
                     />
                </MapView>
            </View>
        );
    }
}
export default ShuttleMap;

const styles = StyleSheet.create({
    container: {
        flex:1,
        height: null,
        width: null,
        //justifyContent:,
        alignItems:'stretch',
        ...StyleSheet.absoluteFillObject,
  
      },
      map: {
        ...StyleSheet.absoluteFillObject,
        marginTop:60,
        marginLeft:5,
        marginRight:5
      },
      header:{
        backgroundColor:"#2196f3"
    },
    right:{
        fontSize:24,
        color:"white"
    }, 
    text:{
        fontSize:24, 
        color:"white"
    }
   });