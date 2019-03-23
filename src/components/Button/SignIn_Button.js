import React, { Component } from 'react';
import { View, TouchableOpacity,Text} from 'react-native';
import { LoginStyles } from '../../styelsheets/MainStyle';
import { LinearGradient } from 'expo';
import en from '../../messages/en-us';

export default class SignIn_Btn extends Component {
    render() {
        return (
        <View style={LoginStyles.button}>
            <View style={{ flex: 0.7, }}></View>
            <View style={HomeStyles.signin}>
                <TouchableOpacity onPress={this.props.onSubmit}>
                    <LinearGradient colors={['#a25ca8', '#582491']} style={HomeStyles.signinbtn}>
                        <Text style={[HomeStyles.signinbtnText]}>{en.commonLabel.signInBtn}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.7, }}></View>
        </View>
        );
    }
}

