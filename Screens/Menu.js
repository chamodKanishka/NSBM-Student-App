import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import  Iconsi  from 'react-native-vector-icons/Ionicons'
import LocalMap from './NSBMmap'
import HomeScreen from './HomeScreen'
import Shuttle from './Shuttle'
import SettingsContainer from './SettingsContainer';
import MyTimetable from './MyTimetable'
import LectureMaterials from './LectureMaterials'
import Iconsa from "react-native-vector-icons/AntDesign"
import Iconu from "react-native-vector-icons/Entypo"
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

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">            
            
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

            <Drawer.Screen name="Lecture Materials"
             component={LectureMaterials}
             options={{
              drawerIcon:({tintColor})  =>
              <Iconu name="text-document" color ={tintColor} size={25} />
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
         component={SettingsContainer}
         options = {{
          drawerIcon : ({ tintColor }) => (
              <Iconsi name="ios-settings" style = {{ fontSize:23, color:tintColor}}/>
          )
      }}/>
        </Drawer.Navigator>
    </NavigationContainer>
  );
}