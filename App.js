import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './Landing.js';
import Show from './Show.js';

export default class App extends React.Component {
  state={
    currentState: 'landing'
  }
  switchScreen = (screen) => {
    this.setState({currentState:screen})
  }
  renderScreen = () => {
    if (this.state.currentState == 'landing') {
      return(
        <Landing switchScreen={this.switchScreen}/>
      )
    }else{
      return(
        <Show switchScreen={this.switchScreen}/>
      )
    }
  }
  render() {
    return (
        this.renderScreen()
    );
  }
}
