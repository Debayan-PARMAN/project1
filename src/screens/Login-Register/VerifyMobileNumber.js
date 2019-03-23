import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { verifyOTP, updateState } from '../../actions/user';
import { View, Text, Alert, TextInput, Button, ScrollView, TouchableHighlight, Image } from 'react-native';
import { LinearGradient } from 'expo';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import { ForgotPasswordStyles, FontStyles, LoginStyles, Space } from '../../styelsheets/MainStyle';
import en from '../../messages/en-us';

class Verify_Mobile_Number extends Component {
    static navigationOptions = {
        title: 'VerifyMobileNumber',
        headerBackground: (
            <LinearGradient
                colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                style={{ flex: 1, }}
                start={[0, 0]}
                end={[1, 1]}
            />
        ),
        headerTintColor: '#fff',
        headerTitleStyle: {           
            paddingLeft: 50,          
        },
    };
    onValueChange = (value, id) => {
        const { userDetails } = this.props.userState;
        userDetails[id] = value;
        this.props.updateState({ userDetails, failureMessage: '' });
    }

    onCancelAlert = () => {
        // console.log('Ok');
        this.props.updateState({ responseTriggerred: false });
        if (this.props.userState.status === 2000) {
            this.props.updateState({ status: '' });
            this.props.navigation.navigate('CreateAccount');
        }
    }

    // onCancelAlert = () => {
    //     console.log('Cancel');
    //     this.props.updateState({ responseTriggerred: false });
    //     // this.props.navigation.navigate('Home');
    // }

    onSubmit = () => {
        // console.log('Next Button triggered');
        this.props.verifyOTP();
    }

    render() {
        const { userDetails, responseTriggerred, status, successMessage, failureMessage } = this.props.userState;
        if (responseTriggerred) {
            const message = status === 2000 ? successMessage : failureMessage;
            Alert.alert(
                '',
                message,
                [{
                    text: 'OK',
                    onPress: this.onCancelAlert,
                    style: 'cancel'
                }], {
                    cancelable: false
                }
            );
        }

        return (
            <View style={LoginStyles.mainWrapper}>
                <ScrollView>
                    <View style={LoginStyles.bannerArea2_Text}>
                        <Text style={FontStyles.font}>{en.loginLabels.mobileNumberVerifyLabel}</Text>
                    </View>
                    <View style={Space.space_20}>
                    </View>

                    <View style={LoginStyles.textInput}>
                        <Text style={[FontStyles.font, { color: '#808080' }]}>{en.verifyMobileNumberMsg.verifyMobileNumberMsgInfo} {userDetails.contactNo} </Text>
                        
                        
                        <TextInput
                            style={LoginStyles.textInput_pass_email}
                            placeholder="Type your OTP"
                            value={userDetails.userOTP}
                            onChangeText={(e) => this.onValueChange(e, 'userOTP')}
                        />
                    </View>
                    <View style={Space.space_30}>
                    </View>

                    
                                <View style={LoginStyles.button}>
                                <View style={{ flex: 0.7, }}>
                                </View>
                                <View style={{ flex: 1, }}>
                                    <LinearGradient
                                        colors={['#a25ca8', '#582491']}
                                        style={HomeStyles.signinbtn}>
                                        <TouchableHighlight onPress={this.onSubmit}>
                                    <Text style={[HomeStyles.signinbtnText]}>{en.commonLabel.nextBtnLabel}</Text>
                                        </TouchableHighlight>
                                    </LinearGradient>
                                </View>
                                <View style={{ flex: 0.7, }}>
                                </View>
          </View>

                    

                </ScrollView>
            </View>
        );
    }
};

Verify_Mobile_Number.propTypes = {
    userDetails: PropTypes.object,
}

const mapStateToProps = state => ({
    userState: state.userState
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ verifyOTP, updateState }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Verify_Mobile_Number);