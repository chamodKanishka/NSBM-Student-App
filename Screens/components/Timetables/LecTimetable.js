import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import { Header, Left, Right, Icon} from 'native-base'
import { WebView } from 'react-native-webview';

class LecTimetable extends Component{

    state= {
        lec_url:''
    }

    componentDidMount() {
        axios.get(`http://192.168.43.199:8083/api/events/events`)
          .then(res => {console.log(res.data)
            const lec_url = res.data;
            this.setState({ lec_url });
          })
          .catch(error => {console.log(error)});
      }

    render(){
        return(
            <View style={styles.container}>
                <Header style={styles.header}>
                    <Left >
                        <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                    </Left>
                    <Right>
                        <Text style={styles.right}>Timetable</Text>
                    </Right>
                </Header>
                <WebView
                    source = {{ uri:{lec_url} }}
                            injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=width, initial-scale=0.8, maximum-scale=0.5, user-scalable=2.0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
                            scalesPageToFit={true}
                            onLoadEnd={this._onLoadEnd}
                />
            </View>
        );
    }
}
export default LecTimetable;

const styles = StyleSheet.create({
    container:{
        flex:1,
        height: 350,
    },
    header:{
        backgroundColor:"#2879fe"
    },
    right:{
        fontSize:24,
        color:"white"
    }
});
