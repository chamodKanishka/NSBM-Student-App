import React, { Component } from "react";
import{View, Text, StyleSheet,Image} from "react-native";
import { Header, Left, Right,Center, Icon} from 'native-base'
import PhotoUpload from "react-native-photo-upload";
import  Icons  from 'react-native-vector-icons/Ionicons'
import SettingsScreen from "./SettingsScreen";
class Profile extends Component{
    render(){
        return(
            <View style={styles.container}>
            <Header style={{backgroundColor:"green"}}>
                <Left>
                    <Icons name="md-arrow-back" size={30} onPress={() =>this.props.navigation.navigate("Settings", {screen:SettingsScreen})}/>

                </Left>
                <Right>
                <Text style={{fontSize:24,fontWeight:"bold", color:"white"}}>Profile</Text>
                </Right>
            </Header>
             <View style={{ height:150,alignItems:'center', justifyContent:'center', marginBottom:50,}}>
                 <PhotoUpload
                     onPhotoSelect={avatar => {
                         if (avatar) {
                             console.log('Image base64 string: ', avatar)
                         }
                     }}
                 >
                     <Image
                         style={{
                             paddingVertical: 30,
                             width: 150,
                             height: 150,
                             borderRadius: 75,
                             marginTop: 50,
                         }}
                         resizeMode='cover'
                         source={{
                             uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                         }}
                     />
                 </PhotoUpload>
                </View>
                <View style={{marginLeft:20,}}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.label}>Contact No:</Text>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.label}>Degree:</Text>
                <Text style={styles.label}>Batch:</Text>
            </View>
            </View>
        );
    }
}
export default Profile;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    label:{
        fontSize:20,
        fontWeight:'700',
        marginBottom:30
    }
});
