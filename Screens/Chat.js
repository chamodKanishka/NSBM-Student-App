import React, { Component } from "react";
import{View, Text, StyleSheet} from "react-native";
import { Header, Left, Right, Icon} from 'native-base'
import Icons from 'react-native-vector-icons/Ionicons'
import { GiftedChat, LoadEarlier } from 'react-native-gifted-chat'

class Chat extends Component{

    static navigationOptions = {
        drawerIcon : ({ tintColor }) => (
            <Icons name="ios-settings" style = {{ fontSize:23, color:tintColor}}/>
        )
    }

    state = {
    messages: [],
  }
 
  componentWillMount() {
    this.setState({
      messages: [
          {
    _id: 1,
    text: 'Now you can start chatting \nis you love this feature',
    createdAt: new Date(),
    quickReplies: {
      type: 'radio', // or 'checkbox',
      keepIt: true,
      values: [
        {
          title: '😋 Yes',
          value: 'yes',
        },
        {
          title: '📷 Yes, let me show you with a picture!',
          value: 'yes_picture',
        },
        {
          title: '😞 Nope. What?',
          value: 'no',
        },
      ],
    },
    user: {
      _id: 2,
      name: 'Chamod Kanishka',
    },
  },
  
      ],
    })
  }
 
  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }
    
    render(){
        return(
            <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
           />
        );
    }
}
export default Chat;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});