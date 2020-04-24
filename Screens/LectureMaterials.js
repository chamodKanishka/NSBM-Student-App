import React, { Component } from "react";
import{View, Text, StyleSheet, Dimensions} from "react-native";
import { Header, Left, Right, Icon} from 'native-base';

import Pdf from 'react-native-pdf';


class LectureMaterials extends Component{


    render(){
        const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};
        return(
            <View style={styles.container}>
            <Header style={styles.header}>
                <Left >
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
                <Right>
                <Text style={styles.right}>Lecture Materials</Text>
                </Right>
            </Header>
            <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    onPressLink={(uri)=>{
                        console.log(`Link presse: ${uri}`)
                    }}
                    style={styles.pdf}/>
            </View>
        );
    }
}
export default LectureMaterials;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        backgroundColor:"#2879fe"
    },
    right:{
        fontSize:24,
        color:"white"
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});
