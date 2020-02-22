import React, { Component } from "react";
import{View,Views, Text, StyleSheet,Button, TouchableOpacity, Image,ScrollView} from "react-native";
import { Header, Left, Right, Icon} from 'native-base'
import { createAppContainer, createMaterialTopTabNavigator,createDrawerNavigator,createStackNavigator } from 'react-navigation';
import { Table, Row, Rows } from 'react-native-table-component';

class TimeTable extends Component{
    static navigationOptions={
        drawerIcon: ({tintColor}) =>(
            <Icon name="home" style={{ color:tintColor}}/>
        )
    }
    toggleDrawer= () => {
        this.props.navigationProps.toggleDrawer();
    }
    render(){
        return(
            
            <View style={{ flexDirection:"row"}}>
                <Left style={{marginLeft:20}}> 
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
            </View>
        );
    }
}

class Home_Screen extends Component{
    static navigationOptions =
    {
        title: 'NSBM Shuttle',
    };

    gotoNextActivity = () => {
        this.props.navigation.navigate('Second');
    }
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['NSBM to Kottawa', 'Kottawa to NSBM'],
          tableData: [
            ['7 A.M - 8 A.M', '8 A.M - 9 A.M'],
            ['a', 'b'],
            ['1', '2'],
            ['a', 'b'],
            ['a', 'b'],
            ['1', '2'],
            ['a', 'b'],
            ['a', 'b'],
            ['1', '2'],
            ['a', 'b']
          ]
        }
      }
    render(){
        const state = this.state;
        return(
            
            <View style={styles.container}>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
      </View>
        );
    }
}
class Setting_Screen extends Component{
    static navigationOptions =
    {
        title: 'Public & Private Transport',
    };
    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Start to NSBM', 'NSBM to End'],
          tableData: [
            ['Nugegoda','7 A.M - \n8 A.M', '8 A.M - \n9 A.M','Kirulapone',],
            ['Nugegoda','7 A.M - \n8 A.M', '8 A.M - \n9 A.M','Kirulapone',],
            ['Nugegoda','7 A.M - \n8 A.M', '8 A.M - \n9 A.M','Kirulapone',],
            ['a', 'b'],
            ['1', '2'],
            ['a', 'b'],
            ['a', 'b'],
            ['1', '2'],
            ['a', 'b'],
            ['a', 'b'],
            ['1', '2'],
            ['a', 'b']
          ]
        }
      }

    render(){
        const state = this.state;
        return(
            <View style={styles.container}>
                <ScrollView>
                <Text style={{ fontSize:20, fontWeight:'bold',marginBottom:20}}>C.T.B</Text>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                <Rows data={state.tableData} textStyle={styles.text}/>
                </Table>
                <Text style={{ fontSize:20, fontWeight:'bold',marginTop:20, marginBottom:20}}>Other</Text>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
                <Rows data={state.tableData} textStyle={styles.text}/>
        </Table>
        </ScrollView>
      </View>
        );
    }

}
//export default TimeTable;
export const Tab_1 = createMaterialTopTabNavigator({
    NSBM:{
        screen:Home_Screen,
        navigationOptions:{
            drawerIcon:<Icon name="home" />
          }
    },
    Public:{
        screen:Setting_Screen,
    }
},{
    tabBarPosition:'top',
    swipeEnabled:true,
    tabBarOptions:{
        activeTintColor: '#fff',
        pressColor: '#004D40',
        inactiveTintColor:'#fff',
        style:{
            backgroundColor:'#00B8D4'
        },

        labelStyle:{
            fontSize:16,
            fontWeight:'200'
        }
    }
}
);

const First_2_Tabs = createStackNavigator({
    First:{
        screen:Tab_1,
        navigationOptions:({ navigation }) => ({
            title: 'Time Table',
            headerLeft:<TimeTable navigationProps={navigation}/>,
            headerStyle:{
                backgroundColor:'#00B8D4',
                elevation:0,

            },
            headerTintColor:'#fff',
        })
    },
});

const MyDrawerNavigator= createDrawerNavigator({
    Home_Menu_Label:{
        screen:First_2_Tabs,
    }
});

export default First_2_Tabs;


const styles = StyleSheet.create({
    // container:{
    //     flex:1,
    //     alignItems:'stretch',
    //     ...StyleSheet.absoluteFillObject,
    // },
    Tabs: {
        ...StyleSheet.absoluteFillObject,
        marginTop:100,
        marginBottom:50
      },
      container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
        head: { height: 40, backgroundColor: '#f1f8ff' },
        text: { margin: 6, fontWeight:'bold', fontSize:15, },
});
