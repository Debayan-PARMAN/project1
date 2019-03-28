import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogin, checkNoExits, updateState, otpLogin, numberCheck } from '../../actions/user';
import { View, Text, Alert, TextInput, ScrollView } from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google } from '../../styelsheets/MainStyle';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import Header_Blank from '../../components/Header/Header_Blank';
import ToggleSwitch from 'toggle-switch-react-native';
import ButtonComponent from '../../components/Button/ButtonComponent';
import PasswordComponent from '../../components/TextComponent/PasswordComponent';
import styleConstants from '../../constants/styleConstants';
import { LinearGradient } from 'expo';
import en from '../../messages/en-us';
import imageConstantURI from '../../constants/imageConst';
import Footer from '../../components/Footer/Footer';

class LogIn extends Component {
    static navigationOptions = {
        title: 'MEMBER SIGNIN',
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
            textAlign: "center",
            justifyContent:'space-around', 
            flex:1         

        },
        headerRight: (<Header_Blank />)      
    };
  
    onValueChange = (value, id) => {
        const { userDetails } = this.props.userState;
        userDetails[id] = value;
        // if (id === "contactNo") {
        //     if ((value.length - 3) >= 10) {
        //         this.props.updateState({ toggleEnable: true });
        //         // this.props.updateState({ toggleEnable: true, otpToggle: true });
        //     }
        //     else {
        //         this.props.updateState({ toggleEnable: false });
        //         // this.props.updateState({ toggleEnable: false , otpToggle: false });

        //     }
        // }
        this.props.updateState({ userDetails });
    }

    onNavigate = () => {
        this.props.navigation.navigate('Registration');
    }

    onTogglePass = (isOn) => {
        // const { toggleEnable } = this.props.userState;
        // if (toggleEnable) {
            const showPassword = !this.props.userState.showPassword;
            const otpToggle = !this.props.userState.otpToggle;
            this.props.updateState({ showPassword, otpToggle });
        // }
        // else {
            return;
       // }
    }

    onSubmit = () => {

        const { userDetails } = this.props.userState;
        if (userDetails.contactNo !== '' && userDetails.password !== '') {

            this.props.userLogin();
            //this.props.navigation.navigate('SearchDoctor');
        }

        else {
            Alert.alert(
                '',
                message = 'Please Input Value',
                [{
                    text: 'Cancel',
                    onPress: this.onCancelAlert,
                    style: 'cancel'
                }], {
                    cancelable: false
                }
            );
        }
    }

        //this.props.userLogin();
    

    onGetOtp = () => {
        const { otpActions, userDetails } = this.props.userState;
        
    

    if(userDetails.contactNo !== '' ) {

    otpActions.otpSent = true;
    this.props.updateState({ otpActions });
    this.props.numberCheck();
}

        else {
    Alert.alert(
        '',

        message = 'Please Input Mobile Number',
        [{
            text: 'Cancel',
            onPress: this.onCancelAlert,
            style: 'cancel'
        }], {
            cancelable: false
        }
    );
}


        //this.props.otpLogin();
    }


    loginWithOtp = () => {

        const { userDetails } = this.props.userState;
        if (userDetails.contactNo !== '' && userDetails.userOTP !== '') {

            this.props.otpLogin();
            //this.props.navigation.navigate('SearchDoctor');
        }

        else {
            Alert.alert(
                '',
                message = 'Please Input Value',
                [{
                    text: 'Cancel',
                    onPress: this.onCancelAlert,
                    style: 'cancel'
                }], {
                    cancelable: false
                }
            );
        }
    

        //this.props.otpLogin();
    }

    onCancelAlert = () => {
        this.props.updateState({ responseTriggerred: false });
        if (this.props.userState.userDetails.token) {
            this.props.navigation.navigate('Home');
        }

    }

    render() {
        const { userDetails, showPassword, responseTriggerred, successMessage, failureMessage, otpToggle, toggleEnable, otpActions
        } = this.props.userState;
        
        const contactNumberArea = (<View style={LoginStyles.textInput}>
            <Text style={textInputStyle.primaryTextInputFontStyle}>{en.loginLabels.mobileNumberLabel}</Text>
            <TextInput
                style={textInputStyle.primaryTextInput}
               // placeholder="Enter your Mobile Number"
                value={userDetails.contactNo}
                maxLength={13}
                // keyboardType="numeric"
                onChangeText={(e) => this.onValueChange(e, 'contactNo')} />
        </View>);

        const passwordSection = (<View style={LoginStyles.textInput}>
            <PasswordComponent
                style={textInputStyle.primaryTextInput}
                labelStyle={textInputStyle.primaryTextInputFontStyle}
                label='Password'
                secureTextEntry={showPassword}
                value={userDetails.password}
                onChangeText={(e) => this.onValueChange(e, 'password')}
            />
        </View>);

        const otpSection = (<View style={LoginStyles.textInput}>
            <Text style={textInputStyle.primaryTextInputFontStyle}>{en.OTPMsg.OTPMsgInfo}</Text>
            <TextInput
                style={textInputStyle.primaryTextInput}
                //placeholder="Type your OTP"
                value={userDetails.userOTP}
                onChangeText={(e) => this.onValueChange(e, 'userOTP')} />
        </View>);

        const signInPasswordButton = (<ButtonComponent buttonLabel={en.commonLabel.signInBtn}
            buttonFunction={() => this.onSubmit()}
            buttonType='type1'
            buttonStyle={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
            buttonTextStyle={[buttonStyle.primaryBtnText]} />);

        const signInOTPButton = (<ButtonComponent buttonLabel={en.commonLabel.signInBtn}
            buttonFunction={() => this.loginWithOtp()}
            buttonType='type1'
            buttonStyle={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
            buttonTextStyle={[buttonStyle.primaryBtnText]} />);

        const sendOTPButton = (<ButtonComponent buttonLabel={en.commonLabel.otpBtn}
            buttonFunction={() => this.onGetOtp()}
            buttonType='type1'
            buttonStyle={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
            buttonTextStyle={[buttonStyle.primaryBtnText]} />);

        const resendOTPButton = (<ButtonComponent buttonLabel={en.loginLabels.resendOTPLabel}
            buttonFunction={() => this.onGetOtp()}
            buttonType='type3'
            buttonStyle={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
            buttonTextStyle={[FontStyles.ForgetPasswordFont, LoginStyles.text_underline]} />);

        const forgotPasswordButton = (<ButtonComponent buttonLabel={en.loginLabels.forgotPasswordLabel}
            buttonFunction={() => this.props.navigation.navigate('ForgotPassword')}
            buttonType='type3'
            buttonStyle={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
            buttonTextStyle={[FontStyles.ForgetPasswordFont, LoginStyles.text_underline]} />);

        const createAccountButton = (<ButtonComponent buttonLabel={en.commonLabel.createAccountBtn}
            buttonFunction={() => this.onNavigate()}
            buttonType='type1'
            buttonStyle={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
            buttonTextStyle={[buttonStyle.primaryBtnText]} />
        );

        const faceBookButton = (
            <ButtonComponent buttonLabel={en.loginLabels.facebookLabel}
                buttonFunction={() => console.log('Login with facebook')}
                buttonType='type4'
                buttonStyle={[Button_fb_google.second_container, Button_fb_google.third_container, LoginStyles.toggleButton_Sub_Container_Row1]}
                buttonImageSRC={imageConstantURI.facebook.src}
                buttonImageStyle={Button_fb_google.image}
                buttonTextStyle={[FontStyles.font, { color: 'white' }]} />
        );

        const googleButton = (
            <ButtonComponent buttonLabel={en.loginLabels.googleLabel}
                buttonFunction={() => console.log('Login with google')}
                buttonType='type4'
                buttonStyle={[Button_fb_google.second_container, Button_fb_google.third_container, LoginStyles.toggleButton_Sub_Container_Row1]}
                buttonImageSRC={imageConstantURI.google.src}
                buttonImageStyle={Button_fb_google.image}
                buttonTextStyle={[FontStyles.font, { color: 'white' }]} />
        );


        const OTPsignInArea = !otpActions.otpSent ? sendOTPButton : signInOTPButton;

        const otpArea = (
            <View>
                <View style={LoginStyles.forget_pass_view}>
                    {resendOTPButton}
                    {/* <TouchableOpacity onPress={this.onGetOtp}>
                        <Text style={FontStyles.ForgetPasswordFont} style={LoginStyles.text_underline}>{en.loginLabels.resendOTPLabel}</Text>
                    </TouchableOpacity> */}
                </View>
            </View>);

        const singUpArea = (
            <View>
                <View style={LoginStyles.bannerArea2_Text}>
                    <Text style={FontStyles.font}>------------------------------------- {en.commonLabel.orLabel} -------------------------------------</Text>
                </View>
                <View style={Button_fb_google.first_container}>
                    {faceBookButton}
                </View>
                <View style={Button_fb_google.first_container}>
                    {googleButton}
                </View>

                <View style={LoginStyles.forget_pass_view}>
                    <Text style={FontStyles.font}>{en.signinMsg.signinMsgInfo}</Text>
                </View>

                <View style={LoginStyles.button}>
                    {createAccountButton}
                </View>
            </View>
        );

        const passwordArea = (
            <View style={{ flex: 1, justifyContent: 'center', alignItem: 'center' }}>
                <View style={LoginStyles.forget_pass_view}>
                    {forgotPasswordButton}
                </View>
                {singUpArea}
            </View>
        );

        if (responseTriggerred) {
            const message = userDetails.token ? successMessage : failureMessage;
            Alert.alert(
                '',
                message,
                [{
                    text: 'Ok',
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
                    {contactNumberArea}

                    {showPassword ? passwordSection : otpSection}

                    <View style={[LoginStyles.checkBox_Main_Container1, { paddingTop: 10 }]}></View>

                    <View style={LoginStyles.toggleButton_Main_Container}>
                        <View style={{ flex: 1, }}></View>
                        <View style={LoginStyles.toggleButton_Sub_Container}>

                            {showPassword ? signInPasswordButton : OTPsignInArea}


                        </View>
                        <View style={LoginStyles.toggleButtonContainer}>
                            {
                             //   toggleEnable ?
                                    <ToggleSwitch onColor='#d8c0ef' offColor='#d8c0ef' isOn={otpToggle} onToggle={(isOn) => this.onTogglePass(isOn)} />
                                  //  :
                            //  <ToggleSwitch offColor='#eee' onToggle={this.onTogglePass} />
                            }
                            <Text style={FontStyles.font}>{showPassword ? 'Use OTP' : 'Use Password'}</Text>
                        </View>
                    </View>

                    {showPassword ? passwordArea : otpArea}
                    
                     </ScrollView>
                <Footer navigation={this.props.navigation} />
                </View>
           
        );
    }
}

LogIn.propTypes = {
    userDetails: PropTypes.object,
}

const mapStateToProps = state => ({
    userState: state.userState
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ userLogin, checkNoExits, numberCheck, updateState, otpLogin }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(LogIn);