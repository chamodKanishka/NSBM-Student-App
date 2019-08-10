import React, { Component } from "react";
import{View, Text, StyleSheet, PermissionsAndroid, BackHandler, DeviceEventEmitter} from "react-native";
import { Header, Left, Right, Icon} from 'native-base'
import Icons from 'react-native-vector-icons/Ionicons'
import Iconses from 'react-native-vector-icons/FontAwesome'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Permissions from 'react-native-permissions';
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';


export async function requestLocationPermission()
{
    try{
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                'title':'NSBM App',
                'message':'NSBM App need to access of your location for better expirience'
            }
        )
        if (granted === PermissionsAndroid.RESULTS.GRANTED){
            console.log("You can use the location")
            //alert("You can use the location");
        }
        else{
            console.log("location permission denied")
            alert("Location permission denied");
        }
        
    }
    catch(err){
        console.warn(err)
    }
    
}
class ShuttleMap extends Component{

    static navigationOptions = {
        drawerIcon : ({ tintColor }) => (
            <Iconses name="bus" style = {{ fontSize:23, color:tintColor}}/>
        )
    }
    
    async componentWillMount(){
        await requestLocationPermission()
    }
    state = {
        initialPosition: 'unknown',
    };

    componentDidMount() {
        LocationServicesDialogBox.checkLocationServicesIsEnabled({
            message: "<h2>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/><br/><a href='https//www.nsbm.lk'>Learn more</a>",
            ok: "YES",
            cancel: "NO",
            enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
            showDialog: true, // false => Opens the Location access page directly
            openLocationServices: true, // false => Directly catch method is called if location services are turned off
            preventOutSideTouch: false, //true => To prevent the location services popup from closing when it is clicked outside
            preventBackClick: false, //true => To prevent the location services popup from closing when it is clicked back button
            providerListener: false // true ==> Trigger "locationProviderStatusChange" listener when the location state changes
        }).then(function(success) {
            // success => {alreadyEnabled: true, enabled: true, status: "enabled"} 
                navigator.geolocation.getCurrentPosition((position) => {
                    let initialPosition = JSON.stringify(position);
                    this.setState({ initialPosition });
                }, error => console.log(error), { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 });
            }.bind(this)
        ).catch((error) => {
            console.log(error.message);
        });
        
        DeviceEventEmitter.addListener('locationProviderStatusChange', function(status) { // only trigger when "providerListener" is enabled
            console.log(status); //  status => {enabled: false, status: "disabled"} or {enabled: true, status: "enabled"}
        });
    }
    
    componentWillUnmount() {
        // used only when "providerListener" is enabled
        LocationServicesDialogBox.stopListener(); // Stop the "locationProviderStatusChange" listener.
    }
    render(){
        return(
            <View style={styles.container}>
            <Header>
                <Left>
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
                <Right>
                <Text style={{fontSize:24,fontWeight:"bold"}}>Shuttle Map</Text>
                </Right>
            </Header>
            <MapView
                 region={this.props.coordinate}
                 showsUserLocation={true}
                 showsMyLocationButton={true}
                 provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                 style={styles.map}
                 region={{
                 latitude: 6.8211,
                 longitude: 80.0409,
                 latitudeDelta: 0.025,
                 longitudeDelta: 0.0121,
                                     }}
                                 >
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
      marginTop:100,
      marginBottom:50,
    },
   });