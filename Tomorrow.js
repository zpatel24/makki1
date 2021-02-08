import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

const Navigation =createStackNavigator({
    Tomorrow: {
      screen: 'Tomorrow',
    }
})
export default Navigation;
 class Tomorrow extends Component{
    render() {
        return (
            <View> <Text>hi</Text></View>
        );
    }
}