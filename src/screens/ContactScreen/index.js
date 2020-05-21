import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { Tab, Tabs, TabHeading, ScrollableTab, Icon, Container } from 'native-base';
import { Avatar } from "react-native-elements";


import Header from '../../components/Header';
import Tabbar from '../../components/Tabbar';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const Contact = props => {
    return (
        <View style={{flex:1}}>
            
            <Header title="Contact"/>

            <View style={{flex:0.3}}>
                <View style={{flex:1}}>
                    <Image
                        style={{width: null, height:120}} 
                        resizeMode={'cover'}
                        source={require('../../images/car2.jpg')} />
                </View>
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={{marginTop:-10,marginLeft:20}}>
                        <Avatar
                            size="large"
                            rounded
                            source={require('../../images/ice.jpg')}
                        />
                    </View>
                    <View style={{marginLeft:15,marginTop:35}}>  
                        <Text style={{fontSize:25, fontFamily:'CSChatThai',color:'#000073'}}>Name : Tiva Wongs</Text>
                        <Text style={{fontSize:20, fontFamily:'CSChatThai',color:'#000073'}}>Contact Github : Tivaiice</Text>
                    </View>
                    
                </View>
            </View>

            <View style={{flex:0.7}}>
                <Container>
                    <Tabs renderTabBar={()=> <ScrollableTab />}>
                        <Tab heading={ 
                            <TabHeading>
                                {/* <Text> Profile   </Text> */}
                                <Icon type="FontAwesome" name="tasks" />
                            </TabHeading>
                            }>
                            <Tab1 />

                        </Tab>
                        <Tab heading={ 
                            <TabHeading>
                                {/* <Text> Profile   </Text> */}
                                <Icon type="FontAwesome" name="heart" />
                            </TabHeading>
                            }>
                            <Tab2 />

                        </Tab>
                    </Tabs>
                </Container>
            </View>

            <View style={{ flex: 0.09 }}>
                <Tabbar navigation={props.navigation} col={"Contact"} />
            </View>
        </View>
        
    )  
}

export default Contact;