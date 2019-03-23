import React, { Component } from 'react';
import {
    //AppRegistry,
    Text,
    Image,
    View,
    TouchableOpacity

} from 'react-native';
export default class Footer_Component_Notification extends Component {
    render() {
        return (
                <View style={{ flex: 1, alignItems: 'center', paddingTop: 2 }}>
                    <TouchableOpacity onPress={() => console.log('Notifications')}>
                        <View style={{ paddingLeft: 18 }}>
                            <Image style={{ alignItems: 'center', width: 20, height: 20 }}
                                source={require('../../../assets/images/notification.png')}
                            />
                        </View>
                        <Text style={{ alignItems: 'center', fontSize: 10, color: 'white' }}>Notifications</Text>
                    </TouchableOpacity>

                </View>
                
        );
    }
}



