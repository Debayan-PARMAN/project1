import React, { Component } from 'react';
import { View, Image, Text, Alert, TouchableOpacity, TextInput, CheckBox, Button, ScrollView, TouchableHighlight } from 'react-native';

import { KeyboardAvoidingView } from 'react-native';

export default class LifeStyle extends React.Component {
     

     constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
             <View style={{flex:1}}>                
                <View style={{
                    flex: 1,
                     width:350,
                    // alignItems: 'center',
                    // justifyContent: 'center',
                    padding: 10,
                    // marginTop: 5,
                    backgroundColor: '#fff',}}>
                           
                            <View style={{height: 60, marginTop: 10, padding: 5, backgroundColor: '#fff', }}>
                                <Text style={{ color: '#000', justifyContent: 'center',fontWeight:'bold', marginTop: 4 }}>Smocking Habits</Text>
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}
                                    // placeholder="6 digit 0-9 pin code "                                                       
                                />
                            </View>
                            <View style={{height: 60, marginTop: 10, padding: 5, backgroundColor: '#fff', }}>
                                <Text style={{ color: '#000', justifyContent: 'center',fontWeight:'bold', marginTop: 4 }}>Acholchol Consumption</Text>
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}
                                    // placeholder="6 digit 0-9 pin code "                                                       
                                />
                            </View>
                            <View style={{height: 60, marginTop: 10, padding: 5, backgroundColor: '#fff', }}>
                                <Text style={{ color: '#000', justifyContent: 'center',fontWeight:'bold', marginTop: 4 }}>Food Preference</Text>
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}
                                    // placeholder="6 digit 0-9 pin code "                                                       
                                />
                            </View>
                            <View style={{height: 60, marginTop: 10, padding: 5, backgroundColor: '#fff', }}>
                                <Text style={{ color: '#000', justifyContent: 'center',fontWeight:'bold', marginTop: 4 }}>Occupation</Text>
                                <TextInput
                                    style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}
                                    // placeholder="6 digit 0-9 pin code "                                                       
                                />
                            </View>

                            
                            {/* <View style={{ height: 45, marginTop: 10, marginTop: 5, backgroundColor: '#fff', }}>
                                <TextInput
                                    style={{ height: 45, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}
                                    placeholder="Flat/House/Floor/Building "
                                />
                            </View>
                            <View style={{ height: 45, marginTop: 10, marginTop: 5, backgroundColor: '#fff', }}>
                                <TextInput
                                    style={{ height: 45, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}
                                    placeholder="Landmark"
                                />
                            </View>
                            <View style={{ height: 45, marginTop: 10, marginTop: 5, backgroundColor: '#fff', }}>
                                <TextInput
                                    style={{ height: 45, borderColor: 'gray', borderBottomWidth: 1, marginTop: 0 }}
                                    placeholder="City"
                                />
                            </View>

                            <View style={{ height: 45, marginTop: 10, marginTop: 10, backgroundColor: '#fff', borderRadius: 3, borderWidth: 1 }}>
                             
                            </View>
                            <View style={{ flex: 1, height: 40, marginTop: 20, flexDirection: 'row', justifyContent: 'center', }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('')} >
                                    <View style={{ width: 120, height: 30, backgroundColor: '#972493', borderWidth: 1, borderRadius: 3 }}>
                                        <Text style={{ textAlign: 'center', alignItems: 'center', color: '#fff', justifyContent: 'center', marginTop: 3 }}>Add Address</Text>

                                    </View>
                                </TouchableOpacity>
                            </View> */}
                        </View>                      
                    </View>          
          );
    }
};