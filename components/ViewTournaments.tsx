import React, { Fragment, Component, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Animated } from 'react-native';
import { ListItem, Header, Avatar, Image, PricingCard } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";


export default class ViewTournaments extends Component {
    static navigationOptions = { title: 'VTournaments', header: null };
    render() {
      return (
        <View>
          <Text>This is the Settings screen</Text>
          <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Home"/>
        </View>
      )
    }
  };
const styles = StyleSheet.create({
    welcome: {
        fontSize: 17,
        textAlign: 'center',
        margin: 10,
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Cockin'
    },
    welcome2: {
        fontSize: 13,
        textAlign: 'center',
        //margin: 10,
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Cockin'
    },
    welcome3: {
        fontSize: 12,
        textAlign: 'center',
        //margin: 10,
        color: '#a3a3a3',
        fontWeight: 'bold',
        fontFamily: 'Cockin'
    },
    MainContainer: {
        // Setting up View inside component in Vertically center.
        justifyContent: 'center',
        // Setting up View inside component align horizontally center.
        //alignItems: 'center',
        flex: 1
    }
});