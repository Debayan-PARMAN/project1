import React, { Component } from 'react';
import { View,TouchableOpacity, Text} from 'react-native';
import { LoginStyles } from '../../styelsheets/MainStyle';
import { LinearGradient } from 'expo';
import { buttonStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import en from '../../messages/en-us';

export default class Send_Otp_Btn extends Component {
    render() {
     return (
        <View style={LoginStyles.button}>
            <View style={{ flex: 0.7, }}></View>
            <View style={HomeStyles.signin}>
                <TouchableOpacity onPress={this.props.onSubmit}>
                    <LinearGradient
                        style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
                        colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }} >
                        <Text style={[buttonStyle.primaryBtnText]}> {en.commonLabel.otpBtn}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.7, }}></View>
        </View>
        );
    }
}

