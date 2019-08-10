import React,{ Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

class Hostal extends Component{
    render(){
        return(
            <View style={{width: this.props.width/2-30, height: this.props.width/2-30, borderWidth:0.5, borderColor:'#dddddd', marginBottom:20}}>
            <View style={{flex:1}}>
                <Image 
                 style={{flex:1,width:null,height:null, resizeMode:'cover'}} 
                 source={require('../../../images/nsbm.jpg')}/>
            </View>
            <View style={{flex:1, alignItems:'flex-start', justifyContent:'space-evenly',paddingLeft:10}}>
                <Text style={{ fontSize:14, color:'#b63838'}}>Location</Text>
                <Text style={{fontSize:12, fontWeight:'bold'}}>Price</Text>
                <Text style={{fontSize:12}}>Contact No</Text>

            </View>
        </View>
        );
    }

}

export default Hostal;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    }
})