import React, { Component } from 'react';

import { View, Image, Text, TouchableOpacity } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
import { LinearGradient } from 'expo';
import { buttonStyle,} from '../styelsheets/CommonStyle';
import styleConstants from '../constants/styleConstants';
import en from '../messages/en-us';

export default class Login_Second_Container extends Component {
    // onNavigate = () => {
    //     console.log('click.....');
    //     this.props.navigation.navigate('Registration');
    // }
    render() {

        return (
            <View>
            <View style={LoginStyles.bannerArea2_Text}>
                <Text style={FontStyles.font}>------------------------------------- {en.commonLabel.orLabel} -------------------------------------</Text>
            </View>
            <View style={Button_fb_google.first_container}>
                <TouchableOpacity onPress={() => console.log('Login with facebook')}>
                    <View style={Button_fb_google.second_container}>
                        <View style={Button_fb_google.third_container}>
                            <Image style={Button_fb_google.image}
                                source={require('../../assets/images/facebook.png')}
                            />
                        </View>
                        <View style={LoginStyles.toggleButton_Sub_Container_Row1}>
                                <Text style={FontStyles.font} style={{ color: 'white' }}>{en.loginLabels.facebookLabel}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={Button_fb_google.first_container}>
                <TouchableOpacity onPress={() => console.log('Login with google')}>
                    <View style={Button_fb_google.second_container}>
                        <View style={Button_fb_google.third_container}>
                            <Image style={Button_fb_google.image}
                                source={require('../../assets/images/google.png')}
                            />
                        </View>
                        <View style={LoginStyles.toggleButton_Sub_Container_Row1}>
                                <Text style={FontStyles.font} style={{ color: 'white' }}>{en.loginLabels.googleLabel}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={LoginStyles.forget_pass_view}>
                    <Text style={FontStyles.font}>{en.signinMsg.signinMsgInfo}</Text>
            </View>

            <View style={LoginStyles.button}>                   
                        {/* <TouchableOpacity
                            onPress={this.props.onNavigate}
                        //onPress={() => this.props.navigation.navigate('Registration')}
                        >
                        <LinearGradient
                            colors={['#a25ca8', '#582491']}
                            style={HomeStyles.signinbtn}>                            
                                <Text style={[HomeStyles.signinbtnText]}>{en.commonLabel.createAccountBtn}</Text>                            
                        </LinearGradient>
                        </TouchableOpacity> */}
                         <TouchableOpacity
                            onPress={this.props.onNavigate}>
                            <LinearGradient
                                style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
                                colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }} >
                                <Text style={[buttonStyle.primaryBtnText]}>{en.commonLabel.createAccountBtn}</Text>
                            </LinearGradient>
                        </TouchableOpacity>                   
                   </View>
            </View>
        );
    }
};