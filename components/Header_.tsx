import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Header, Avatar } from 'react-native-elements'
import Modal from "react-native-modal";
import FadeInView from './FadeInView';

class Header_ extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        isModalVisible: false
    };
    toggleModal = () => {
        console.log('is')
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    render() {
        console.log('Test')
        const iconName = this.props.iconName;
        //const i = <Icon name={iconName}/>
        console.log(iconName)
        return (
            <View style={{ flex: 1, backgroundColor: '#000' }}>
                <Header backgroundColor="#000"
                    leftComponent={{ icon: iconName,type:'font-awesome', color: '#fff'}}
                    centerComponent={{ text: 'FIFA MANAGEMENT SYSTEM', style: styles.welcome2 }}
                    //rightComponent={{ icon: 'home', color: '#fff' }}
                    rightComponent={
                    <FadeInView>
                    <Avatar
                        rounded
                        source={require("../images/asif.jpg")}
                        onPress={this.toggleModal}
                    />
                    </FadeInView>}
                />
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={styles.MainContainer}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                            <Avatar
                                size="xlarge"
                                rounded
                                activeOpacity={0.7}
                                source={require("../images/asif.jpg")}
                            />
                        </View>
                        <Text style={styles.welcome}>FIFA MANAGEMENT SYSTEM</Text>
                        <Text style={styles.welcome}>Developed by Asif Isthiaq</Text>
                        <View style={{ margin: 15 }}>
                            <Button title="OK" onPress={this.toggleModal} />
                        </View>
                    </View>
                </Modal>
            </View>

        );
    }
}

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

export default Header_;
