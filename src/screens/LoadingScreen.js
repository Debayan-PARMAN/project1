import React, { Component } from 'react';
import { View, Image, AppRegistry } from 'react-native';
import imageConstantURI from '../constants/imageConst';

export default class Loading_Screen extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
                <View>
                    <Image style={{ alignItems: 'center', width: 120, height: 20 }}
                      source={imageConstantURI.logo1.src} />
                </View>
                <View>
                    <Image style={{ alignItems: 'center', width: 50, height: 50 }}
                        source={imageConstantURI.loading.src} />
                </View>
            </View>
        );
    }
}
AppRegistry.registerComponent('project1', () => Loading_Screen);
