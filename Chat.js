import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
import { StyleSheet, Text, View } from 'react-native';

import firebaseSDK from '../config/firebaseSDK';

export default class Chat extends React.Component{
  state = {
    messages: []
  };


  render() {
    getuser => {
      return {
        name: this.props.navigation.state.params.name,
        email: this.props.navigation.state.params.email,
        id: firebaseSvc.uid,
        _id: firebaseSvc.uid,
      };
    }
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={firebaseSDK.send}
        user={this.user}
      />
    );
  }

  componentDidMount() {
    firebaseSDK.refOn(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(this.state.messages, message)
      }))
    );
  }
  componentWillUnmount() {
    firebaseSDK.refOff();
  }
}

