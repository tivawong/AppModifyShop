import React, { useContext } from 'react';
import { Text, 
    StyleSheet, 
    View, 
    ScrollView, 
    Dimensions,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    FlatList
} from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';
import Swiper from 'react-native-swiper';
import Header from '../../components/Header';
import Category from '../../components/Category';
import Works from '../../components/Works';
import NewItems from '../../components/NewItem';
import Tabbar from '../../components/Tabbar';

const Home = props => {

    return (        
        <View style={{flex:1}}>
            
            <Header title="Modify Shop"/>
            <View style={{flex: 1}}>
                <ScrollView>
                    <View>
                        <SwiperFlatList
                            autoplay
                            autoplayDelay={3}
                            autoplayLoop
                            // showPagination  
                            // paginationDefaultColor='#0000A0'
                            // paginationActiveColor='#FF0000'
                        >
                            <View style={{height: height/2 * 0.5,width,justifyContent: 'center',backgroundColor: 'tomato'}}>
                                <Image
                                    source={require('../../images/car1.jpg')}
                                    style={{ width: '100%', height: '100%' }}
                                    resizeMode={'cover'}
                                />
                            </View>
                            <View style={{height: height/2 * 0.5,width,justifyContent: 'center',backgroundColor: 'black'}}>
                                <Image
                                    source={require('../../images/car2.jpg')}
                                    style={{ width: '100%', height: '100%' }}
                                    resizeMode={'cover'}
                                />
                            </View>
                            <View style={{height: height/2 * 0.5,width,justifyContent: 'center',backgroundColor: 'yellow'}}>
                                <Image
                                    source={require('../../images/car3.jpg')}
                                    style={{ width: '100%', height: '100%' }}
                                    resizeMode={'cover'}
                                />
                            </View>
                            <View style={{height: height/2 * 0.5,width,justifyContent: 'center',backgroundColor: 'blue'}}>
                                <Image
                                    source={require('../../images/car4.jpg')}
                                    style={{ width: '100%', height: '100%' }}
                                    resizeMode={'cover'}
                                />
                            </View>
                        </SwiperFlatList>
                    </View>
                    {/* Menu */}
                    <View style={{height: 200, borderBottomWidth:2, borderColor:'#AAABBB',flexDirection:'column'}}>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <View style={{flex:1}}>
                                <View style={{justifyContent:'center',marginLeft:35,marginTop:10}}>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate("Engine")}
                                    >
                                        <Image
                                            source={require('../../images/car-engine.png')}
                                            style={{ width: '50%', height: '70%' }}
                                            resizeMode={'center'}
                                        />       
                                        <Text style={{paddingHorizontal:7,fontSize:19,fontFamily:'CSChatThai'}}>Engine</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <View style={{justifyContent:'center',marginLeft:35,marginTop:10}}>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate("Brake")}
                                    >
                                        <Image
                                            source={require('../../images/brake.png')}
                                            style={{ width: '50%', height: '70%' }}
                                            resizeMode={'center'}
                                        />       
                                        <Text style={{paddingHorizontal:8,fontSize:19,fontFamily:'CSChatThai'}}>Brake</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <View style={{justifyContent:'center',marginLeft:35,marginTop:10}}>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate("Bumper")}
                                    >
                                        <Image
                                            source={require('../../images/bumper.png')}
                                            style={{ width: '50%', height: '70%' }}
                                            resizeMode={'center'}
                                        />       
                                        <Text style={{fontSize:19,fontFamily:'CSChatThai'}}>Bumper</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <View style={{flex:1}}>
                                <View style={{justifyContent:'center',marginLeft:20,marginTop:8}}>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate("ShockBrake")}
                                    >
                                        <Image
                                            source={require('../../images/shock-breaker.png')}
                                            style={{ width: '50%', height: '70%',marginLeft:13 }}
                                            resizeMode={'center'}
                                        />       
                                        <Text style={{fontSize:19,fontFamily:'CSChatThai'}}>Shock-Brake</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <View style={{justifyContent:'center',marginLeft:35,marginTop:8}}>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate("Wheel")}
                                    >
                                        <Image
                                            source={require('../../images/wheel.png')}
                                            style={{ width: '50%', height: '70%' }}
                                            resizeMode={'center'}
                                        />       
                                        <Text style={{paddingHorizontal:5,fontSize:19,fontFamily:'CSChatThai'}}>Wheel</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flex:1}}>
                                <View style={{justifyContent:'center',marginLeft:35,marginTop:8}}>
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate("Tire")}
                                    >
                                        <Image
                                            source={require('../../images/tire.png')}
                                            style={{ width: '50%', height: '70%' }}
                                            resizeMode={'center'}
                                        />       
                                        <Text style={{paddingHorizontal:15,fontSize:19,fontFamily:'CSChatThai'}}>Tire</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{height: 220, borderBottomWidth:2, borderColor:'#7F38EC'}}>
                        <View style={{flex:0.2,justifyContent: 'center',alignItems: 'center'}}>
                            <Text style={{fontSize:30,fontWeight:'normal',fontFamily:'CSChatThai'}}>ผลงานของร้าน</Text>
                        </View>
                        <View style={{flex:0.8}}>
                            <Swiper showsButtons={true} paginationDefaultColo='black'>
                                <Works 
                                    imageUri={require('../../images/car5.jpg')}
                                    nameWorks="Honda Jazz 2015"
                                />
                                <Works 
                                    imageUri={require('../../images/car6.jpg')}
                                    nameWorks="Toyota Vios 2006"
                                />
                                <Works 
                                    imageUri={require('../../images/car7.jpg')}
                                    nameWorks="Honda Jazz 2017"
                                />
                            </Swiper>  
                        </View>
                    </View>

                    <View style={{height: 400,width: width, borderBottomWidth:2, borderColor:'#F88017'}}>
                        <View style={{marginTop:10,marginLeft: 20, alignItems:'flex-start', justifyContent:'center'}}>
                            <Text style={{fontSize: 30, fontWeight:'normal',fontFamily:'CSChatThai'}}>สินค้าใหม่</Text>
                        </View>
                        <View style={{flex:1,marginTop: 5,marginHorizontal: 20,flexDirection:'row'}}>
                            <TouchableOpacity
                                onPress={()=> props.navigation.navigate("Bumper")}
                            >
                                <NewItems 
                                    imageUri={require('../../images/Taillight.png')}
                                    nameNewItems="FIT RS MC"
                                    priceNewItems="27,XXX ฿"
                                    rating={4.5}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=> props.navigation.navigate("Bumper")}
                            >
                                <NewItems 
                                    imageUri={require('../../images/USDMbumper.jpg')}
                                    nameNewItems="USDM Bumper"
                                    priceNewItems="5X,XXX ฿"
                                    rating={2.5}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1,marginTop: 5,marginHorizontal: 20,flexDirection:'row'}}>
                            <TouchableOpacity
                                onPress={()=> props.navigation.navigate("Tire")}
                            >
                                <NewItems 
                                    imageUri={require('../../images/tireRE003.jpg')}
                                    nameNewItems="Tire RE003"
                                    priceNewItems="2,5XX ฿"
                                    rating={3}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity 
                                onPress={()=> props.navigation.navigate("Wheel")}
                            >
                                <NewItems 
                                    imageUri={require('../../images/wheelTC105N.jpg')}
                                    nameNewItems="Wheel TC105N"
                                    priceNewItems="39,XXX ฿"
                                    rating={4.5}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{height: 250,backgroundColor:'#FFFFFF'}}>
                        <View style={{marginTop:10,marginLeft: 20, alignItems:'flex-start', justifyContent:'center'}}>
                            <Text style={{fontSize:30, fontWeight: 'normal',fontFamily:'CSChatThai'}}>
                                ติดต่อซื้อ & ขาย
                            </Text>
                        </View>
                        <ScrollView scrollEventThrottle={16}>
                            <View style={{height:180, marginTop:5 }}>
                                <ScrollView horizontal={true}>
                                    <Category 
                                        imageUri={require('../../images/car1.jpg')}
                                        name="Honda Jazz"
                                        price="64X,XXX ฿"
                                    />
                                    <Category 
                                        imageUri={require('../../images/car5.jpg')}
                                        name="Honda Jazz"
                                        price="625,XXX ฿"
                                    />
                                    <Category 
                                        imageUri={require('../../images/car7.jpg')}
                                        name="Honda Jazz"
                                        price="63X,XXX ฿"
                                    />
                                </ScrollView>
                            </View>
                        </ScrollView>
                    </View>
                    
                </ScrollView>
            </View>

            <View style={{ flex: 0.09 }}>
                <Tabbar navigation={props.navigation} col={"Home"} />
            </View>
            
        </View>
        
    )
}
export const { width, height } = Dimensions.get('window');

export default Home;