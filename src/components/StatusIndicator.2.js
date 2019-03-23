import React, { Component } from 'react';
import { View, Image, Text,} from 'react-native';
import {Button_fb_google,} from '../styelsheets/MainStyle';


export default class Status_Indicator extends Component {

    render() {

        return (
            
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 2, }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                <Image style={Button_fb_google.image}
                                    source={require('../../assets/images/like2.png')}
                                />
                                <View style={{ width: 50 }}>
                                    <Text style={{ textAlign: 'center' }}>Patient details</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                <Image style={Button_fb_google.image}
                                    source={require('../../assets/images/like2.png')}
                                />
                                <View style={{ width: 50 }}>
                                    <Text style={{ textAlign: 'center' }}>Review details</Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                                <Image style={Button_fb_google.image}
                                    source={require('../../assets/images/like1.png')}
                                />
                                <View style={{ width: 60 }}>
                                    <Text style={{ textAlign: 'center' }}>Payment details</Text>
                                </View>
                            </View>
                        </View>
                        
        );
    }
};

