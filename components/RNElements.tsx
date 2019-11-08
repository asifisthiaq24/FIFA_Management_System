import React, { Fragment, Component, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Animated } from 'react-native';
import { ListItem, Header, Avatar, Image} from 'react-native-elements'
import Header_ from './Header_';
import Footer from './Footer';
import FadeInView from './FadeInView';

class RNElements extends Component {
    static navigationOptions = { title: 'Home', header: null };

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#000' }}>
                <Header_ iconName='home' />
                <Image
                    source={require("../images/cr2.jpg")}
                    style={{ width: 370, height: 200, padding: 0, margin: 0 }}
                />
                <View style={{ padding: 25, flex: 1, flexDirection: 'row' }}>

                    <View >
                        <FadeInView >
                            <Avatar
                                size="xlarge"
                                // rounded
                                overlayContainerStyle={{ backgroundColor: 'grey', }}
                                title="Create New Tournament"
                                onPress={() => console.log("Works!")}
                                activeOpacity={0.4}
                                titleStyle={{ fontSize: 20 }}
                                source={require("../images/cnt.png")}
                            />
                        </FadeInView>
                    </View>
                    <View style={{ marginLeft: 'auto' }}>
                        <FadeInView>
                            <Avatar
                                size="xlarge"
                                // rounded
                                overlayContainerStyle={{ backgroundColor: 'grey', }}
                                title="View Previous Tournaments"
                                onPress={() => this.props.navigation.navigate('ViewTournamentScreen')}
                                activeOpacity={0.4}
                                containerStyle={{ flex: 0, marginLeft: 0, marginTop: 0, }}
                                // placeholderStyle={{backgroundColor:'#000'}} 
                                titleStyle={{ fontSize: 20 }}
                                source={require("../images/vpt.png")}

                            />
                        </FadeInView>
                    </View>

                </View>
                <Footer />
            </View>
        );
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
export default RNElements;