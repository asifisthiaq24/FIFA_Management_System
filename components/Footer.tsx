import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import { Header } from 'react-native-elements'

class Footer extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#000' }}>
                <Header backgroundColor="#000"
                    centerComponent={{ text: '©️ 2019 Asif Isthiaq', style: styles.welcome3 }}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
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

export default Footer;
