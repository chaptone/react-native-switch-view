import React, { Component } from 'react';
import { Text, View, Image, Button } from 'react-native'
import Style from './style/style.js';
const img = require('./img/running.jpg')

class Show extends Component {
  render() { 
    return ( 
      <View style={Style.container}>
        <Image source={img} style={Style.imageStyle}></Image>
        <Button title='Back to Landing' onPress={() => this.props.switchScreen('landing')}></Button>
      </View>
     );
  }
}
 
export default Show;