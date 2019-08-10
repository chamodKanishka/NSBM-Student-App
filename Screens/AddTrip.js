import React, { Component } from "react";
import{View, Text, StyleSheet,TouchableOpacity,ScrollView} from "react-native";
import { Header, Left, Right, Icon} from 'native-base';
import Icons from 'react-native-vector-icons/Ionicons';
import { Dropdown } from 'react-native-material-dropdown';
import RadioForm,{ RadioButton, RadioButtonLabel } from 'react-native-simple-radio-button';
import NumericInput from 'react-native-numeric-input'
import Button from 'react-native-button';
import TimePicker from "react-native-24h-timepicker";
//import { ScrollView } from "react-native-gesture-handler";

class AddTrips extends Component{


    constructor() {
        super();
        this.state = {
          time: ""
        };
      }
     
      onCancel() {
        this.TimePicker.close();
      }
     
      onConfirm(hour, minute) {
        this.setState({ time: `${hour}:${minute}` });
        this.TimePicker.close();
      }

    static navigationOptions = {
        drawerIcon : ({ tintColor }) => (
            <Icons name="ios-settings" style = {{ fontSize:23, color:tintColor}}/>
        )
    }
    
    render(){
        let data = [{
            value: 'NSBM',
        },{
            value: 'School Junction'
        }
    ]

    var radio_props =[
        {label: 'Male', value:0},
        {label: 'Female', value:1},
        {label: 'Both', value:2}

    ]

    var Sradio_props =[
        {label: 'In My Batch', value:4},
        {label: 'In My Faculty', value:5},
        {label: 'Anyone', value:6}

    ]

    /*var RadioButtonProject = React.createClass({
        getInitialState: function(){
            return{
                value:0,
            }
        }
    },
    )*/
        return(
            <View style={styles.container}>
            <Header>
                <Left>
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
                <Right>
                <Text style={{fontSize:24,fontWeight:"bold"}}>Add Trip</Text>
                </Right>
            </Header>
            <ScrollView>
            <Dropdown
            label='Start Point'
            data={data}/>
            <Dropdown
            label='End Point'
            data={data}/>
            <Text style={{margin:20, marginLeft:120}}>Target Gender</Text>
            <RadioForm
                labelStyle={{marginRight:40}}
                formHorizontal={true}
                animation={true}
                radio_props={radio_props}
                initial={0}
                onPress={(value) => {this.setState({value:value})}}
            />

            <Text style={{margin:20, marginLeft:120}}>Target Crowd</Text>           
           <RadioForm
                labelStyle={{marginRight:10}}
                formHorizontal={true}
                animation={true}
                radio_props={Sradio_props}
                initial={0}
                onPress={(value) => {this.setState({value:value})}}
            />
        <Text style={{margin:20, marginLeft:120}}>Count of invite</Text> 
        <NumericInput type='up-down' onChange={value => console.log(value)}
            minValue = {1}
            maxValue = {10}
            initValue = {3}
            upDownButtonsBackgroundColor ={'lightblue'}
        />

        <TouchableOpacity
          onPress={() => this.TimePicker.open()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>TIMEPICKER</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{this.state.time}</Text>
        <TimePicker
          ref={ref => {
            this.TimePicker = ref;
          }}
          onCancel={() => this.onCancel()}
          onConfirm={(hour, minute) => this.onConfirm(hour, minute)}
        />
        <Button
        style={{fontSize: 20, color: 'red', fontWeight:'small', marginTop:48}}
        styleDisabled={{color: 'red'}}
        onPress={() => this._handlePress()}>Cancel</Button>

        <Button
        style={{ fontSize: 20, color: 'white' }}
        styleDisabled={{ color: 'lightblue' }}
        containerStyle={{ padding: 10,/* height: 45,*/ overflow: 'hidden', borderRadius: 4, backgroundColor: 'lightblue' }}
        onPress={() => this._handlePress()}>Confirm</Button>

            </ScrollView> 
            </View>

        );
    }
}
export default AddTrips;

const styles = StyleSheet.create({
    container:{
        flex:1,
    backgroundColor: "#fff",
    },
    label:{
        paddingRight:50
    },
    NumericInput:{
        
    },
    Button:{
        paddingRight:5
    },
    text: {
        fontSize: 20,
        //alignContent:'center'
        marginLeft: 20,
      },
    button: {
        backgroundColor: "#4EB151",
        paddingVertical: 11,
        paddingHorizontal: 17,
        borderRadius: 3,
        marginVertical: 50,
        alignItems:'center',
        marginLeft:100,
        marginRight:100
      },
      buttonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "600",
      },
      TouchableOpacity:{
        alignItems: "center",
      }
    
});