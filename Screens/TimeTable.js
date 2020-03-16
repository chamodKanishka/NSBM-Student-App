import * as React from 'react';
import { Button, View , Text} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NsbmShuttles from './components/Timetables/NsbmShuttles';
import OtherShuttles from './components/Timetables/OtherShuttles';
import { Header, Left, Right, Icon} from 'native-base'
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="NSBM Shuttles" component={NsbmShuttles} />
      <Tab.Screen name="Others" component={OtherShuttles} />
    </Tab.Navigator>
  );
}