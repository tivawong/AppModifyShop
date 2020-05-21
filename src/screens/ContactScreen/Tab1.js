import React, { Component, useContext } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { CounterContext } from '../../store/CounterProvider';

const Tab1 = props => {

    const { counter,favitemlist,itemlist, addCounter, addFavorite } = useContext(CounterContext)
    
    console.log('favitemlist', favitemlist)

    return (
        <View style={{flex:1}}>
            <Text style={{fontSize: 20}}>{counter}</Text>
            
            <Button
                onPress={()=> addCounter(1)}
                title="Add"
            />
            <Button
                onPress={()=> subCounter(1)}
                title="Sub"
            />

            <Button 
                onPress={()=> addFavorite(1)}
                title="Add Fav"
            />


            
        </View>
        
    )  
}

export default Tab1;