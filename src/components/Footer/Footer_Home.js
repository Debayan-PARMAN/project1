import React, { Component } from 'react';
import {
    //AppRegistry,
    Text,
    Image,
    View,
    TouchableOpacity

} from 'react-native';

export default class Footer_Component_Home extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', paddingTop: 2 }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <View style={{ paddingLeft: 4 }}>
                        <Image style={{ alignItems: 'center', width: 20, height: 20 }}
                            source={require('../../../assets/images/home.png')}
                        />
                    </View>
                    <Text style={{ alignItems: 'center', fontSize: 10, color: 'white' }}>Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}



