import React, { Component, useContext } from 'react';
import { Text, StyleSheet, View, Button, FlatList,Image } from 'react-native';
import { CounterContext } from '../../store/CounterProvider';

class FlatListfav extends Component {
    render(){
        // const {item, index, favitemlist} = this.props;
        return(
            <View style={{flex: 1, margin:5, backgroundColor: this.props.index % 2 === 0 ? '#FF7903' : '#FF4003'}}>
                <View style={{flexDirection:'row'}}>
                    <Image style={{width: 125, height: 125, margin: 8,resizeMode: 'stretch'}} source={this.props.item.imageUrl} />
                    <View style={{flexDirection:'column',marginLeft:30,justifyContent:'center',flex:1}}> 
                        <Text style={{fontWeight:'bold',color:'white', padding: 10, fontSize:16}}>{this.props.item.name}</Text>
                        <Text style={{color:'white', padding: 10, fontSize:16}}>{this.props.item.price}</Text>
                    </View>
                </View>
                <View style={{height:1, backgroundColor:'white'}}></View>
            </View>
        )
    }
}


const Tab2 = () => {
    
    const { favitemlist } = useContext(CounterContext);
    // console.log('favitemlist', favitemlist)
    return (
        <View style={{flex:1}}>
        <FlatList 
            data={favitemlist}
            renderItem={({item, key }) => {
                // console.log(`Item = ${JSON.stringify(item)}, index =${index}`)
                return(
                    <FlatListfav item={item} key={key} favitemlist={favitemlist}/>
                    
                );
            }}
        >
        </FlatList>
    </View>
        
    )  
}

export default Tab2;