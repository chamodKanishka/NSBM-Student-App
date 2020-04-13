import React, { Component } from "react";
import{View, Text, StyleSheet, Button, ScrollView} from "react-native";
import { Header, Left, Right, Icon} from 'native-base';
import {Card} from 'react-native-shadow-cards';

class News extends Component{


    render(){
        return(
            <View style={styles.container}>
            <Header style={styles.header}>
                <Left >
                    <Icon name="menu" onPress={() =>this.props.navigation.openDrawer()}/>
                </Left>
                <Right>
                <Text style={styles.right}>Notifications</Text>
                </Right>
            </Header>
            <ScrollView>
            <Card style={styles.card} title="Learn More">
            <Button
                onPress={()=>{}}
                title="Title"
                Color="#fff"
                accessibilityLabel="Learn more about this purple button"
                />
                <Text>Open up App.js to start working on your app!
                    Changes you make will automatically reload.
                Shake your phone to open the developer menu.
                Open up App.js to start working on your app!
                    Changes you make will automatically reload.
                Shake your phone to open the developer menu.
                Open up App.js to start working on your app!
                    Changes you make will automatically reload.
                Shake your phone to open the developer menu</Text>
            </Card>
            <Card style={styles.card} title="Learn More">
            <Button
                onPress={()=>{}}
                title="Title"
                Color="#fff"
                accessibilityLabel="Learn more about this purple button"
                />
                <Text>Open up App.js to start working on your app!
                    Changes you make will automatically reload.
                Shake your phone to open the developer menu.</Text>
            </Card><Card style={styles.card} title="Learn More">
            <Button
                onPress={()=>{}}
                title="Title"
                Color="#fff"
                accessibilityLabel="Learn more about this purple button"
                />
                <Text>Open up App.js to start working on your app!
                    Changes you make will automatically reload.
                Shake your phone to open the developer menu.</Text>
            </Card><Card style={styles.card} title="Learn More">
            <Button
                onPress={()=>{}}
                title="Title"
                Color="#fff"
                accessibilityLabel="Learn more about this purple button"
                />
                <Text>Open up App.js to start working on your app!
                    Changes you make will automatically reload.
                Shake your phone to open the developer menu.</Text>
            </Card><Card style={styles.card} title="Learn More">
            <Button
                onPress={()=>{}}
                title="Title"
                Color="#fff"
                accessibilityLabel="Learn more about this purple button"
                />
                <Text>Open up App.js to start working on your app!
                    Changes you make will automatically reload.
                Shake your phone to open the developer menu.</Text>
            </Card><Card style={styles.card} title="Learn More">
            <Button
                onPress={()=>{}}
                title="Title"
                Color="#fff"
                accessibilityLabel="Learn more about this purple button"
                />
                <Text>Open up App.js to start working on your app!
                    Changes you make will automatically reload.
                Shake your phone to open the developer menu.</Text>
            </Card><Card style={styles.card} title="Learn More">
            <Button
                onPress={()=>{}}
                title="Title"
                Color="#fff"
                accessibilityLabel="Learn more about this purple button"
                />
                <Text>Open up App.js to start working on your app!
                    Changes you make will automatically reload.
                Shake your phone to open the developer menu.</Text>
            </Card><Card style={styles.card} title="Learn More">
            <Button
                onPress={()=>{}}
                title="Title"
                Color="#fff"
                accessibilityLabel="Learn more about this purple button"
                />
                <Text>Open up App.js to start working on your app!
                    Changes you make will automatically reload.
                Shake your phone to open the developer menu.</Text>
            </Card><Card style={styles.card} title="Learn More">
            <Button
                onPress={()=>{}}
                title="Title"
                Color="#fff"
                accessibilityLabel="Learn more about this purple button"
                />
                <Text>Open up App.js to start working on your app!
                    Changes you make will automatically reload.
                Shake your phone to open the developer menu.</Text>
            </Card><Card style={styles.card} title="Learn More">
            <Button
                onPress={()=>{}}
                title="Title"
                Color="#fff"
                accessibilityLabel="Learn more about this purple button"
                />
                <Text>Open up App.js to start working on your app!
                    Changes you make will automatically reload.
                Shake your phone to open the developer menu.</Text>
            </Card><Card style={styles.card} title="Learn More">
            <Button
                onPress={()=>{}}
                title="Title"
                Color="#fff"
                accessibilityLabel="Learn more about this purple button"
                />
                <Text>Open up App.js to start working on your app!
                    Changes you make will automatically reload.
                Shake your phone to open the developer menu.</Text>
            </Card><Card style={styles.card} title="Learn More">
            <Button
                onPress={()=>{}}
                title="Title"
                Color="#fff"
                accessibilityLabel="Learn more about this purple button"
                />
                <Text>Open up App.js to start working on your app!
                    Changes you make will automatically reload.
                Shake your phone to open the developer menu.</Text>
            </Card><Card style={styles.card} title="Learn More">
            <Button
                onPress={()=>{}}
                title="Title"
                Color="#fff"
                accessibilityLabel="Learn more about this purple button"
                />
                <Text>Open up App.js to start working on your app!
                    Changes you make will automatically reload.
                Shake your phone to open the developer menu.</Text>
            </Card>
            </ScrollView>
            </View>
        );
    }
}
export default News;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    header:{
        backgroundColor:"#2196f3"
    },
    right:{
        fontSize:24,
        color:"white"
    },
    card:{
        width:'93%',
        margin:10,
        padding:10,
        elevation:5
    }
});
