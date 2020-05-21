import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import StackNavigation from './Navigation'
import Constants from 'expo-constants';
// =======================================================
// 1 Store
import { CounterProvider } from './store/CounterProvider';
// Muti Store
import ContextProvider from './store/providerComposer';
// =======================================================

const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: "tomato",
        height: Constants.statusBarHeight,
    },
});

export default class App extends React.Component {
    // componentDidMount() {
    //   StatusBar.setBarStyle('dark-content', true);
    // }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.statusBar} />
                <ContextProvider>
                    <StackNavigation />
                </ContextProvider>
            </View>
        )
    }
}

