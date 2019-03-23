import React, { Component } from 'react';
import {
    //AppRegistry,
    Text,
    Image,
    View,
    TouchableOpacity

} from 'react-native';


export default class Footer_Component_Help extends Component {
    render() {
        return (
            
                <View style={{ flex: 1, alignItems: 'center', paddingTop: 2 }}>
                    <TouchableOpacity onPress={() => console.log('Help')}>
                        <View style={{ paddingLeft: 0 }}>
                            <Image style={{ alignItems: 'center', width: 20, height: 20 }}
                                source={require('../../../assets/images/help.png')}
                            />
                        </View>
                        <Text style={{ alignItems: 'center', fontSize: 10, color: 'white' }}>Help</Text>
                    </TouchableOpacity>
                </View>
            
        );
    }
}



