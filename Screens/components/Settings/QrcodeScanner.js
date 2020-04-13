import React, { Component } from 'react';
import { StyleSheet, View, Text, Platform, TouchableOpacity, Linking, PermissionsAndroid } from 'react-native';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
import Icons from 'react-native-vector-icons/Ionicons';
import { Header, Left, Right, Icon} from 'native-base';
import SettingsScreen from '../../SettingsScreen'


async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'NSBM Transport App Camera Permission',
          message:
            'NSBM Transort App needs access to your camera, ' +
            'so you can scan QR codes.',
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


class QrcodeScanner extends Component {
    async componentDidMount(){
        await requestCameraPermission()
    }

    constructor() {
        super();
        this.state = {
            QR_Code_Value: '',
            Start_Scanner: false,
        };
    }

    openLink_in_browser = () => {
        Linking.openURL(this.state.QR_Code_Value);
    }

    onQR_Code_Scan_Done = (QR_Code) => {
        this.setState({ QR_Code_Value: QR_Code });
        this.setState({ Start_Scanner: false });
    }

    open_QR_Code_Scanner=()=> {
        var that = this;
        if (Platform.OS === 'android') {
            async function requestCameraPermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA, {
                            'title': 'Camera App Permission',
                            'message': 'Camera App needs access to your camera '
                        }
                    )
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {

                        that.setState({ QR_Code_Value: '' });
                        that.setState({ Start_Scanner: true });
                    } else {
                        alert("CAMERA permission denied");
                    }
                } catch (err) {
                    alert("Camera permission err", err);
                    console.warn(err);
                }
            }
            requestCameraPermission();
        } else {
            that.setState({ QR_Code_Value: '' });
            that.setState({ Start_Scanner: true });
        }
    }
    render() {
        if (!this.state.Start_Scanner) {

            return (
                <View style={styles.container}>
                        <Header style={styles.header}>
                <Left>
                        <Icons name="md-arrow-back" size={30} onPress={() =>this.props.navigation.navigate("Settings", {screen:SettingsScreen})}/>

                </Left>
                    <Right>
                    <Text style={styles.right}>E-ID</Text>
                    </Right>
                </Header>
                <View style={styles.MainContainer}>

                    <Text style={{ fontSize: 22, textAlign: 'center' }}>Click button to start scan</Text>

                    <Text style={styles.QR_text}>
                        {this.state.QR_Code_Value ? 'Scanned QR Code: ' + this.state.QR_Code_Value : ''}
                    </Text>

                    {this.state.QR_Code_Value.includes("http") ?
                        <TouchableOpacity
                            onPress={this.openLink_in_browser}
                            style={styles.button}>
                            <Text style={{ color: '#FFF', fontSize: 14 }}>Open Link in default Browser</Text>
                        </TouchableOpacity> : null
                    }

                    <TouchableOpacity
                        onPress={this.open_QR_Code_Scanner}
                        style={styles.button}>
                        <Text style={{ color: '#FFF', fontSize: 14 }}>
                            Start
                        </Text>
                    </TouchableOpacity>

                </View>
                </View>
            );
        }
        return (
            <View style={{ flex: 1 }}>

                <CameraKitCameraScreen
                    showFrame={true}
                    scanBarcode={true}
                    laserColor={'#FF3D00'}
                    frameColor={'#00C853'}
                    colorForScannerFrame={'black'}
                    onReadCode={event =>
                        this.onQR_Code_Scan_Done(event.nativeEvent.codeStringValue)
                    }
                />

            </View>
        );
    }
}
export default QrcodeScanner;
const styles = StyleSheet.create({

    MainContainer: {
        flex: 1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    QR_text: {
        color: '#000',
        fontSize: 19,
        padding: 8,
        marginTop: 12
    },
    button: {
        backgroundColor: '#2979FF',
        alignItems: 'center',
        padding: 12,
        width: 300,
        marginTop: 14
    },
    container:{
        flex:1,
    },
    header:{
        backgroundColor:"#2879fe"
    },
    right:{
        fontSize:24,
        color:"white",
    }
});
