import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Header = props => {
    return (
        <View style={{width:'100%', height:60, paddingTop:12, backgroundColor:'#151B54',alignItems:'center' }}>
            <Text style={{color: '#FFFFFF', fontSize:30,fontFamily:'CSChatThai'}}> {props.title} </Text>
        </View>
    );
}

export default Header;