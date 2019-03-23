import React, { Component } from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome';

import { Image, View, Alert, TouchableOpacity } from 'react-native';

export default class Header_Component_SearchButton extends Component {
    render() {
        return (
            <View style={{alignItems: 'center',paddingRight:10}}>
                <TouchableOpacity onPress={() => Alert.alert('Clicked on Search Button')}>
                    <View>
                        <Image style={{ alignItems: 'flex-start', width: 20, height: 20 }}
                            source={require('../../../assets/images/search.png')}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}



