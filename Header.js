import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal,Image, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Header, Left, Right, Button, Icon, Item, Input } from 'native-base';
import Voice from 'react-native-voice';
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
export default class HeaderComponent extends Component {
    openDrawer() {
        this.props.navigation.navigate('DrawerOpen');
    }
 
 
    render() {
        const { openDrawer } = this.props;
        return (
            <Header style={{backgroundColor: '#228B22' }}>
                <Left>
                    <Button transparent onPress={() => openDrawer()}>
                    <Image source={require('../images/menu.png')}
          style={{ height: 35, width: 35}} />
                    </Button>
                </Left>
                <Right>
                <Button transparent onPress={() => openDrawer()}>
                    <Image source={require('../images/help.png')}
          style={{ height: 35, width: 35}} />
                    </Button>
                </Right>
              
            </Header >
        );
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        marginRight: -6,
    },
    buttonIcon: {
        padding: 20,
        color: 'white'
    },
    model: {
        justifyContent: 'center',
        marginTop: 60,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#f5f5dc',
        borderRadius: 5
    },
    modalContent: {
        padding: 20,
        justifyContent: 'space-between'
    },
    cancelModalBtn: {
    },
    cancelModalBtnText: {
        padding: 20,
        color: 'red'
    }
});