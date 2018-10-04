
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView,Image } from 'react-native';
import DrawerNavigator from 'react-navigation';

import ImageSliderz from 'react-native-image-slideshow';


export default class JeuScreen extends Component {

  render() {
    return (
      <ImageSliderz 
      dataSource={[
        { url:require('../images/fermeAn.jpg') },
        { url:require('../images/AniSau.jpg') },
        { url:require('../images/AquaAni.jpg') }
    ]}/>
    );
  }
}

