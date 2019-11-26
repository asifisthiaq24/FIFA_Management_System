import React, { Fragment, Component, useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Animated } from 'react-native';
import { ListItem, Header, Avatar, Image, PricingCard, Tile } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from "react-native-modal";
import Header_ from './Header_';
import Footer from './Footer';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import {
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



export default class ViewTournaments extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         tableHead: ['Pos', 'Player', 'P', 'W','D','L','+/-','PTS'],
    //         // tableTitle: ['Asif', 'Basic', 'Bashar', 'Araf'],
    //         tableTitle: ['i', 'ii', 'iii', 'iv'],
    //         tableData: [
    //             ['Asif', '3','1', '2', '3','3','3'],
    //             ['Basic', 'c','1', '2', '3','3','3'],
    //             ['Bashar', '3','1', '2', '3','3','3'],
    //             ['Araf', 'c','1', '2', '3','3','3']
    //         ]
    //     }
    // }
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Pos', 'Player', 'P', 'W', 'D', 'L', '+/-', 'PTS'],
            widthArr: [30, 110, 35, 35, 35, 35, 35, 50]
        }
    }
    static navigationOptions = { title: 'VTournaments', header: null };
    render() {
        const list = [
            {
                name: 'UCL',
                avatar_url: 'https://i.pinimg.com/originals/ce/7a/09/ce7a09b053e7dd1d6db9285b3fe79698.png',
                subtitle: 'Winner : Asif'
            },
            {
                name: 'UCL',
                avatar_url: 'https://i.pinimg.com/originals/ce/7a/09/ce7a09b053e7dd1d6db9285b3fe79698.png',
                subtitle: 'Winner : Asif'
            },
            {
                name: 'UCL',
                avatar_url: 'https://i.pinimg.com/originals/ce/7a/09/ce7a09b053e7dd1d6db9285b3fe79698.png',
                subtitle: 'Winner : Asif'
            },
            {
                name: 'UCL',
                avatar_url: 'https://i.pinimg.com/originals/ce/7a/09/ce7a09b053e7dd1d6db9285b3fe79698.png',
                subtitle: 'Winner : Asif'
            },
            {
                name: 'UCL',
                avatar_url: 'https://i.pinimg.com/originals/ce/7a/09/ce7a09b053e7dd1d6db9285b3fe79698.png',
                subtitle: 'Winner : Asif'
            },
            {
                name: 'UCL',
                avatar_url: 'https://i.pinimg.com/originals/ce/7a/09/ce7a09b053e7dd1d6db9285b3fe79698.png',
                subtitle: 'Winner : Asif'
            },
            {
                name: 'UCL',
                avatar_url: 'https://i.pinimg.com/originals/ce/7a/09/ce7a09b053e7dd1d6db9285b3fe79698.png',
                subtitle: 'Winner : Asif'
            },

            
            //... // more items
        ];
        //const state = this.state;
        const state = this.state;
        // const tableData = [];
        // for (let i = 0; i < 14; i += 1) {
        //     const rowData = [];
        //     for (let j = 0; j < 8; j += 1) {
        //         rowData.push(`${i}${j}`);
        //     }
        //     tableData.push(rowData);
        // }
        const tableData = [
            ['i', 'Asif', '3', '1', '2', '3', '3', '3'],
            ['ii', 'Basic', 'c', '1', '2', '3', '3', '3'],
            ['iii', 'Bashar', '3', '1', '2', '3', '3', '3'],
            ['iv', 'Araf', 'c', '1', '2', '3', '3', '3'],
            // ['i', 'Asif', '3', '1', '2', '3', '3', '3'],
            // ['ii', 'Basic', 'c', '1', '2', '3', '3', '3'],
            // ['iii', 'Bashar', '3', '1', '2', '3', '3', '3'],
            // ['iv', 'Araf', 'c', '1', '2', '3', '3', '3'],
        ]
        console.log(tableData);
        return (
            // {/* <Fragment> */}

            <ScrollView
                //   contentInsetAdjustmentBehavior="automatic"
                style={styles.scrollView}>
                <View style={{ flex: 1, backgroundColor: '#000' }}>
                    <Header_ iconName='arrow-left' navigation={this.props.navigation} />
                    {/* <View style={styles.container}>
                    <Table>
                        <Row data={state.tableHead} flexArr={[0, 1, 1, 1, 1, 1, 1]} style={styles.head} textStyle={styles.text} />
                        <TableWrapper style={styles.wrapper}>
                            <Col data={state.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text2} />
                            <Rows data={state.tableData} flexArr={[2, 1, 1, 1, 1, 1, 1]} style={styles.row} textStyle={styles.text2} />
                        </TableWrapper>
                    </Table>
                </View> */}
                    <Tile
                        imageSrc={require('../images/ucl.png')}
                        title="UCL"
                        featured
                        caption=""
                        titleStyle={{
                            color: '#122438',
                            fontWeight: 'bold',
                            fontFamily: 'Cockin'
                        }}
                        height={40}
                    />
                    <View style={styles.container}>
                        <ScrollView horizontal={false}>
                            <View>
                                <Table borderStyle={{ borderWidth: 0, borderColor: '#C1C0B9' }}>
                                    <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text} />
                                </Table>
                                <ScrollView style={styles.dataWrapper}>
                                    <Table borderStyle={{ borderWidth: 0, borderColor: '#C1C0B9' }}>
                                        {
                                            tableData.map((rowData, index) => (
                                                <Row
                                                    key={index}
                                                    data={rowData}
                                                    widthArr={state.widthArr}
                                                    style={[styles.row, index % 2 && { backgroundColor: '#efefef' }]}
                                                    textStyle={styles.text2}
                                                />
                    // '#F7F6E7'

                                            ))
                                        } 
                                    </Table>
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                    <View>
                        {
                            list.map((l, i) => (
                                <ListItem
                                    key={i}
                                    leftAvatar={{ source: { uri: l.avatar_url } }}
                                    title={l.name}
                                    subtitle={l.subtitle}
                                    bottomDivider
                                />
                            ))
                        }
                    </View>

                    <Footer />
                </View>
            </ScrollView>
            // </Fragment>
        )
    }
};
const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
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
    },
    // container: { flex: 1, paddingBottom: 0, paddingTop: 0,marginBottom:10, backgroundColor: '#fff' },
    // head: { height: 40, backgroundColor: '#284957' },
    // wrapper: { flexDirection: 'row' },
    // title: { flex: 0,textAlign: 'center'},
    // row: { height: 28, textAlign: 'center'},
    // text: { textAlign: 'center',color:'#fff' },
    // text2: { textAlign: 'center',color:'#000' },
    container: { flex: 2.2, padding: 0, paddingTop: 0, marginBottom: 10, backgroundColor: '#fff' },
    header: { height: 50, backgroundColor: '#122438' },
    text: { textAlign: 'center', fontWeight: '100', color: '#fff' },
    text2: { textAlign: 'center', fontWeight: '100', color: '#000' },
    dataWrapper: { marginTop: -1 },
    row: { height: 40, backgroundColor: '#E7E6E1' }
});