import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';

import Header from '../../components/Header';
import BrakeItems from '../../components/Items/BrakeItems';

const Brake = props => {
    return (
        <View style={{flex:1}}>
            {/* Header */}
            <View style={{flex:0.1,flexDirection:'row'}}>
                <View style={{flex:1, height:60, backgroundColor:'#151B54'}}>
                    {/* 1 */}
                    <View
                        style={{
                        alignItems: "flex-start",
                        marginVertical: Platform.OS ? 18 : 18,
                        marginLeft: '10%',
                        }}
                    >
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                props.navigation.navigate("Home");
                            }}
                        >
                            <Image
                                source={require("../../images/arrows.png")}
                                style={{
                                    width: Platform.OS === "ios" ? 20 : 20,
                                    height: Platform.OS === "ios" ? 20 : 20
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* 2 */}
                <View style={{flex:1}}>
                    <Header title="Brake"/>
                </View>
                {/* 3 */}
                <View style={{flex:1, height:60, backgroundColor:'#151B54'}} />
            </View>
            {/* View */}
            <View style={{flex:1}}>
                <BrakeItems />
            </View>
            
            {/* Tab */}
            {/* <View style={{ flex: 0.09 }}>
                <Tabbar navigation={props.navigation} col={"Home"} />
            </View> */}
        </View>
        
    )  
}

export default Brake;