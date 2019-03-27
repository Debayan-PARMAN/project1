import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { forgotPassword, updateState } from '../../actions/user';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { LinearGradient } from 'expo';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import { ForgotPasswordStyles, FontStyles } from '../../styelsheets/MainStyle';
import en from '../../messages/en-us';

class ForgotPassword extends Component {
    static navigationOptions = {
        title: 'FORGOT PASSWORD',
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
            paddingLeft: 30,
        },
    };

    onValueChange = (value, id) => {
        const { userDetails } = this.props.userState;
        userDetails[id] = value;
        this.props.updateState({ userDetails });
    }

    onSubmit = () => {
        const { userDetails } = this.props.userState;
        if (userDetails.contactNo !== '' && userDetails.contactNo.length === 13) {
            this.props.forgotPassword();
            this.props.navigation.navigate('ForgotPasswordOtp');

        } else {
            alert("Enter Mobile Number");
        }

    }

    render() {
        const { userDetails } = this.props.userState;


        return (
            <View style={ForgotPasswordStyles.mainWrapper}>
                <ScrollView>
                    <View style={ForgotPasswordStyles.topContainer}>
                        <View style={ForgotPasswordStyles.topTabContainer}>
                            <View style={ForgotPasswordStyles.EmailContainer}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                    <Text style={FontStyles.font}>{en.loginLabels.emailLabel}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={[ForgotPasswordStyles.EmailContainer, { backgroundColor: '#93278f' }]}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                    <Text style={{ color: '#fff' }}>{en.loginLabels.mobileNumberLabel} </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <Text style={[textInputStyle.primaryTextInputFontStyle, { marginTop: 15 }]}>{en.loginLabels.mobileNumberLabel}</Text>
                    <TextInput style={textInputStyle.primaryTextInput}
                       // placeholder="Enter Number"
                        value={userDetails.contactNo}
                        maxLength={13}
                       // keyboardType="numeric"
                        onChangeText={(e) => this.onValueChange(e, 'contactNo')}
                    />

                    <View style={ForgotPasswordStyles.btnContainer}>
                        <TouchableOpacity onPress={this.onSubmit}>
                            <LinearGradient
                                style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1,]}
                                colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }} >
                                <Text style={[buttonStyle.primaryBtnText]}>{en.commonLabel.otpBtn}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        );
    }
};

ForgotPassword.propTypes = {
    userDetails: PropTypes.object,
    //commonState: PropTypes.object
}
const mapStateToProps = state => ({
    userState: state.userState,
    //commonState: state.common
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ updateState, forgotPassword }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);