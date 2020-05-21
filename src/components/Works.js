import React, { Component } from 'react'
import { Text, 
    View, 
    Image,
    Platform,
    TouchableOpacity
} from 'react-native'

const Works = props => {
    return (
        <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
            <Image
                source={props.imageUri}
                style={{ width: Platform.OS === 'ios' ? '75%': 200, height:  Platform.OS === 'ios' ? '90%': 140 }}
                resizeMode={'center'}
            />       
            <Text style={{fontWeight:'bold'}}>{props.nameWorks}</Text>
        </View>
    );
}
export default Works;
