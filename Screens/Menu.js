import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import  Iconsi  from 'react-native-vector-icons/Ionicons'
import Parking from './Parkings'
import LocalMap from './NSBMmap'
import HomeScreen from './HomeScreen'
import Shuttle from './Shuttle'
import SettingsScreen from './SettingsScreen'
import MyTimetable from './MyTimetable'
import Iconsa from "react-native-vector-icons/AntDesign"

// function HomeScreens({ navigation }) {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button
//           onPress={() => navigation.navigate('Notifications')}
//           title="Go to notifications"
//         />
//       </View>
//     );
//   }
  
  function NotificationsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    );
  }

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Parking">
            <Drawer.Screen name="Parking" component={Parking}/>
            
            
            <Drawer.Screen name="Home"
             component={HomeScreen}
             options={{
              drawerIcon:({tintColor})  =>
              <Iconsi name="md-home" color ={tintColor} size={25} />
            }}/>

            <Drawer.Screen name="My Timetable"
             component={MyTimetable}
             options={{
              drawerIcon:({tintColor})  =>
              <Iconsa name="table" color ={tintColor} size={25} />
            }}/>
            
            
            <Drawer.Screen name="Local Map" 
            component={LocalMap}
            options={{
              drawerIcon:({tintColor})  =>
                <Iconsi name="md-map" color ={tintColor} size={25} />,
                 drawerLabel: 'Local Map',
                }}/>
            
            
            <Drawer.Screen 
            name="Shuttles" 
            component={Shuttle}
            options={{
              drawerLabel: 'Shuttle',
                  drawerIcon:({tintColor}) =>
                      <Iconsi name="md-bus" color={tintColor} size={25} />
              
         }}/>


         <Drawer.Screen 
         name="Settings" 
         component={SettingsScreen}
         options = {{
          drawerIcon : ({ tintColor }) => (
              <Iconsi name="ios-settings" style = {{ fontSize:23, color:tintColor}}/>
          )
      }}/>


            <Drawer.Screen name="Notifications" component={NotificationsScreen}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}