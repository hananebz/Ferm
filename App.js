import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";

//library imports 
import { Container, Content, Icon, Header, Body } from 'native-base'
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'


import HomeScreen from "./components/HomeScreen";
import JeuScreen from "./components/JeuScreen";


export default class App extends Component {

  render() {
    return (
      <MyApp />
    )
  }
}

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
      <Image
          style={styles.drawerImage}
          source={require('./images/Logo.jpg')} />
      </Body>
    </Header>
    <Content style={styles.DrawerItems}>
      <DrawerItems {...props} />
    </Content>

  </Container>

);

const MyApp = DrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Accueil: {
    screen: HomeScreen,  
  },
  Jouer: {
    screen: JeuScreen,
    
},
  
},
  {
    initialRouteName: 'Accueil',
    
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 200,
    width: 288,
    //borderRadius: 75
    marginLeft:-10
  },
  DrawerItems:{
    fontSize: 25, 
    backgroundColor: '#FFF8DC',
  }

})