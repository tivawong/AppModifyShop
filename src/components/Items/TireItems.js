import React, { Component,useContext } from 'react'
import { Text, 
    View, 
    Image,
    Platform,
    FlatList,
    AppRegistry,
    TouchableOpacity
} from 'react-native'
import flatListTire from '../../Data/flatListTire';
// `
import { CounterContext } from '../../store/CounterProvider';
import { Feather } from '@expo/vector-icons';

class FlatListItem extends Component {
    render(){
        const {item, index, addFavorite} = this.props;
        return(
            <View style={{flex: 1, margin:5 ,backgroundColor: this.props.index % 2 === 0 ? '#FF7903' : '#FF4003'}}>
                <View style={{flexDirection:'row'}}>
                    <Image style={{width: 125, height: 125, margin: 8,resizeMode: 'stretch'}} source={this.props.item.imageUrl} />
                    <View style={{flexDirection:'column',marginLeft:5,justifyContent:'center',flex:1}}> 
                        <Text style={{fontWeight:'bold',color:'white', padding: 10, fontSize:13}}>{this.props.item.name}</Text>
                        <Text style={{color:'white', padding: 10, fontSize:15}}>{this.props.item.price}</Text>
                    </View>
                    <TouchableOpacity 
                    style={{flex:0.2,justifyContent:'center',marginLeft: 7}}
                    onPress={()=>addFavorite(item,index)}
                >
                    <Feather name="heart" size={24} color="black" />
                </TouchableOpacity>
                </View>
                
                <View style={{height:1, backgroundColor:'white'}}></View>
            </View>
        )
    }
}

const TireItems = props => {
    const { addFavorite } = useContext(CounterContext);
    return (
        <View style={{flex:1}}>
            <FlatList 
                data={flatListTire}
                renderItem={({item, index}) => {
                    // console.log(`Item = ${JSON.stringify(item)}, index =${index}`)
                    return(
                        <FlatListItem item={item} index={index}  addFavorite={addFavorite} />
                    );
                }}
            >
            </FlatList>
        </View>
    );
}
export default TireItems;
