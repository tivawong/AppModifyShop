import React, { Component } from 'react'
import { Text, 
    View, 
    Image,
    Platform
} from 'react-native'

const Category = props => {
    return (
        <View style={{height:180,width:200,borderWidth:0.5,borderColor:'#dddddd',marginHorizontal:15}}>
            <View style={{flex:3,borderWidth:1}}>
                <Image
                    source={props.imageUri}
                    style={{ width: Platform.OS==='ios'? null:null, height: Platform.OS==='ios'?'100%':'100%' }}
                    resizeMode={'cover'}
                    />
            </View>
            <View style={{flex:1,borderWidth:1,paddingLeft:10,paddingRight:10,flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{paddingTop:10}}>{props.name}</Text>
                <Text style={{paddingTop:8}}>{props.price}</Text>
            </View>
        </View>
    );
}
export default Category;
