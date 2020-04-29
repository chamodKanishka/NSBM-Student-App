import React, { Component } from "react";
import{View, Text, StyleSheet, PermissionsAndroid, Button, BackHandler, DeviceEventEmitter, TouchableOpacity} from "react-native";
import { Header, Left, Right, Icon} from 'native-base';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import LightMap from "./components/mapColor/lightmap"
import DarkMap from "./components/mapColor/darkmap"
import Logo from '../images/logoss.png'


async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'NSBM Transport App Location Permission',
          message:
            'NSBM Transort App needs access to your location, ' +
            'so you can share location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }


class ShuttleMap extends Component{
    async componentDidMount(){
        await requestLocationPermission()
    }
    
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
                <View style={styles.touch}>
                <TouchableOpacity
                
                  style={[styles.bubble, styles.button]}
                >
                  <Text>Refresh</Text>
              </TouchableOpacity>
              </View>
                
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
      touch:{
        flexDirection: 'column-reverse',
        alignItems:'flex-end',
        marginBottom:-5
      },
      map: {
        ...StyleSheet.absoluteFillObject,
        marginTop:60,
        marginLeft:5,
        marginRight:5
      },
      header:{
        backgroundColor:"#2879fe"
    },
    right:{
        fontSize:24,
        color:"white"
    }, 
    text:{
        fontSize:24, 
        color:"white"
    },
    bubble: {

      backgroundColor: 'rgba(255,255,255,0.5)',
      // paddingHorizontal: 28,
      // paddingVertical: 18,
      borderRadius: 20,
      alignItems:'center',
    },
    button: {
      width: 80,
      // height:60,
      padding: 15,
      // alignItems: 'flex-end',
      // marginHorizontal: 10,
    },
    buttonContainerUpDown: {
      ...StyleSheet.absoluteFillObject,
      flexDirection: 'row',
      justifyContent: 'center',
    },
   });