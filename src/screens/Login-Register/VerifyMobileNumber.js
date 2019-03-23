import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { verifyOTP, updateState } from '../../actions/user';
import { View, Text, Alert, TextInput,ScrollView, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import { ForgotPasswordStyles, FontStyles, LoginStyles, Space } from '../../styelsheets/MainStyle';
import en from '../../messages/en-us';

class Verify_Mobile_Number extends Component {
    static navigationOptions = {
        title: 'VERIFY MOBILE NUMBER',
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
                   
                    <View style={LoginStyles.textInput}>
                        <Text style={textInputStyle.primaryTextInputFontStyle}>
                           {en.verifyMobileNumberMsg.verifyMobileNumberMsgInfo} {userDetails.contactNo} </Text>
                        
                        
                        <TextInput
                            style={textInputStyle.primaryTextInput}
                           // placeholder="Type your OTP"
                            value={userDetails.userOTP}
                            onChangeText={(e) => this.onValueChange(e, 'userOTP')}
                        />
                    </View>
                    <View style={Space.space_20}>
                    </View>

                    
                                <View style={LoginStyles.button}>                             

                            <TouchableOpacity onPress={this.onSubmit}>
                                <LinearGradient
                                    style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
                                    colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }} >
                                    <Text style={[buttonStyle.primaryBtnText]}>{en.commonLabel.nextBtnLabel}</Text>
                                </LinearGradient>
                            </TouchableOpacity>    
                               
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