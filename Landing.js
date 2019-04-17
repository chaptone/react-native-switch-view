import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native'
import Style from './style/style.js';
const img = require('./img/pee-toe.jpeg')

class Landing extends Component {
  render() { 
    return ( 
      <View style={Style.container}>
        <Image source= {img} style={Style.imageStyle}></Image>
        <Text> Hello I am here </Text>
        <Button title={'click to go to next view'} onPress={() =>this.props.switchScreen('screen')}></Button>
      </View>
     );
  }
}
 
export default Landing;