import React, { Component } from "react";
import{View, Text, StyleSheet,Image, PermissionsAndroid} from "react-native";
import { Header, Left, Right,Center, Icon} from 'native-base'
import PhotoUpload from "react-native-photo-upload";
import  Icons  from 'react-native-vector-icons/Ionicons'
import SettingsScreen from "./SettingsScreen";
import CommonUser from "./commonUser";
import axios from 'axios';

async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'NSBM Transport App Camera Permission',
          message:
            'NSBM Transort App needs access to your camera, ' +
            'so you can share location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }


class Profile extends Component{

    state = {
        profileData:[],
        

    }
    componentDidMount() {
        // axios.get(`http://192.168.43.199:8083/api/student/student/ch@gmail.com`)
        //   .then(res => {
        //     // this.exam_url=res.data.docUrl.url.examUrl
        //     const name = res.data;
        //     this.setState({ name });
        //     console.log(res.data)
        //   })
        //   .catch(error => {console.log(error)});
      }

    async componentDidMount(){
        await requestCameraPermission()
    }
    
    render(){
        return(
            <View style={styles.container}>
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
                        <Text style={styles.label}>Name:    {CommonUser.student.name}</Text>
                         <Text style={styles.label}>Email:   {CommonUser.student.email}</Text>
                        <Text style={styles.label}>Degree:  {CommonUser.student.degree}</Text>
                        <Text style={styles.label}>Batch:   {CommonUser.student.batch}</Text>
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
        fontSize:18,
        marginBottom:30
    },
    head:{
        backgroundColor: '#2879fe',
    }
});
