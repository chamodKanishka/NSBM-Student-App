import * as React from 'react';
import { Button, View , Text, StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NsbmShuttles from './components/Timetables/NsbmShuttles';
import OtherShuttles from './components/Timetables/OtherShuttles';
import { Header, Left, Right, Icon} from 'native-base'
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
            <Header style={styles.header}>
                <Left>
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
                <Right style={styles.right}>
                <Text style={styles.text}>Timetables</Text>
                </Right>
            </Header>
    <Tab.Navigator 
    shifting={true}
    activeColor="white"
    inactiveColor="black"
    tabBarOptions={{
      labelStyle: { fontSize: 16, color: "white" },
      style: { backgroundColor: '#2196f3', },
    }}>


      <Tab.Screen name="NSBM Shuttles" 

      component={NsbmShuttles}
       />

      <Tab.Screen 
      name="Others" 
      component={OtherShuttles} 
      />
    </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    height: null,
    width: null,
    //justifyContent:,
    alignItems:'stretch',
    ...StyleSheet.absoluteFillObject,

  },
  tab: {
      backgroundColor:"#2196f3"
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