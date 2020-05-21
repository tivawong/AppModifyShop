import React, { Component, useContext } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { CounterContext } from '../../store/CounterProvider';

const Tab1 = props => {

    const { counter,favitemlist,subCounter, addCounter, addFavorite } = useContext(CounterContext)
    
    console.log('favitemlist', favitemlist)

    return (
        <View style={{flex:1, alignItems:'center',margin: 50}}>
            <Text style={{fontSize: 50, color:'tomato'}}>{counter}</Text>
            <View style={{marginTop:50}}>
                <Button
                    onPress={()=> addCounter(1)}
                    title="Clap 👏"
                />
                <Button
                    onPress={()=> subCounter(1)}
                    title=" Don't Clap 👋"
                />      
            </View>      
        </View>
        
    )  
}

export default Tab1;