/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import Slideshow from 'react-native-slideshow';
import HeaderComponent from './Header';
import { Container, Content, Card, Button } from 'native-base';
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'

export default class HomeScreen extends Component{
  openDrawer() {
    this.props.navigation.navigate('DrawerOpen');
}
static navigationOptions = {
  drawerIcon: (
      <Image source={require('../images/home.png')}
          style={{ height: 35, width: 35}} />
  )
}
	  constructor(props) {
    super(props);
 
    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'Les animaux de la ferme',
          //caption: 'Caption 1',
          url:require('../images/fermeAn.jpg'),
         

        }, {
          title: 'Les animaux sauvages',
          //caption: 'Caption 2',
          url:require('../images/AniSau.jpg'),
        }, {
          title: 'Les animaux aquatiques',
          //caption: 'Caption 3',
          url: require('../images/AquaAni.jpg'),
        },
        {
          title: 'Les oiseaux',
          //caption: 'Caption 3',
          url: require('../images/bird.jpg'),
        },
        
      ],
    };
  }
 
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 2000)
    });
  }
 
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
     return (
       
      <Container>
      <HeaderComponent openDrawer={() => this.openDrawer()}
              />
      <Content>   
      <View style={styles.row}>
                       
                    </View>     
    <Slideshow 
        dataSource={this.state.dataSource} style={styles.Slide}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} />
         </Content> 
    </Container>    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 70,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  row: {
   
    color: '#333333',
    marginBottom: 200,
  },
 
});
