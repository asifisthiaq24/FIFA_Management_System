import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import RNElements from './components/RNElements';
import ViewTournaments from './components/ViewTournaments';

const AppNavigator = StackNavigator(
    {
        HomeScreen: { screen: RNElements },
        ViewTournamentScreen: { screen: ViewTournaments },
    },
    { headerMode: 'screen' }
);

export default class MainApp extends Component {
    render() {
        return (
            <AppNavigator />
        );
    }
}
