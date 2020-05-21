import React, { Component } from 'react'
import { Text, 
    View, 
    Image,
    Platform,
} from 'react-native'
import StarRating from 'react-native-star-rating'

const NewItems = props => {
    return (
        <View style={{width: 150, height: 150, borderWidth:0.5, borderColor:'#dddddd',marginHorizontal: 10, justifyContent:'space-between'}}>
            <View style={{flex:1}}>
                <Image 
                    style={{flex:1, width: null, height: null, resizeMode:'cover'}}
                    source={props.imageUri}
                />
            </View>
            <View style={{flex:0.3,alignItems:'center',justifyContent:'space-evenly'}}>
                <Text style={{marginTop:5,fontWeight:'bold',color:'#b63838',fontSize:15,fontFamily:'CSChatThai'}}>{props.nameNewItems}</Text>
                <Text style={{marginVertical:5,fontWeight:'bold',color:'black',fontSize:13,fontFamily:'CSChatThai'}}>{props.priceNewItems}</Text>
                <StarRating 
                    disabled={true}
                    maxStars={5}
                    rating={props.rating}
                    starSize={10}
                />
            </View>
        </View>
    );
}
export default NewItems;
