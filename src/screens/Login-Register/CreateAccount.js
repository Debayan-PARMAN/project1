import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userRegistration, updateState } from '../../actions/user';
import {  BackHandler, View, Text, Alert, TextInput, ScrollView, ProgressBarAndroid, KeyboardAvoidingView, TouchableHighlight, Image } from 'react-native';
import { LoginStyles, FontStyles, } from '../../styelsheets/MainStyle';
import PasswordInputText from 'react-native-hide-show-password-input';
import { LinearGradient } from 'expo';
import Header_Component_Blank from '../../components/Header/Header_Blank';
import en from '../../messages/en-us';

class Create_Account extends Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        return true;
    }

    static navigationOptions = {
        title: 'MED-e-Pal',
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            paddingLeft: 50,
            //justifyContent: 'center',
            //alignItems: 'center',
        },
        headerLeft: (<Header_Component_Blank />),
    };

    onValueChange = (value, id) => {
        const { userDetails } = this.props.userState;
        switch(id){
            case 'password':
                userDetails.password = value;
                this.validatePassword(value);
                break;
            case 'confirmpassword':
                userDetails.confirmpassword = value;
                break;
            default:
                userDetails[id] = value;
                break;
        }
        this.props.updateState({ userDetails });
    }

    onCancelAlert = () => {
        this.props.updateState({ responseTriggerred: false });
        const {status} = this.props.userState;
        if(status === 'PASS'){
            this.props.navigation.navigate('UserProfile');
        } else {
            this.props.navigation.navigate('Home');
        }

    }

    onSubmit = () => {
        const {userDetails} = this.props.userState;
        // console.log("DATA:",userDetails);
        if (userDetails.username === '' && userDetails.password === ''){
            return ;
        }
        // console.log('Registration Button triggered');
        this.props.userRegistration();
    }

    validatePassword = (pwd) => {
        // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8}$/g;
        // const regex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/g;
        // Minimum eight charactes, at least one uppercase letter, one lowercase letter, one number and one special character:
        const {userDetails} = this.props.userState;
        const regex = [];
        regex.push("[A-Z]"); //Uppercase Alphabet.
        regex.push("[a-z]"); //Lowercase Alphabet.
        regex.push("[0-9]"); //Digit.
        regex.push("[$@$!%*#?&]"); //Special Character.

        let passed = 0;

        //Validate for each Regular Expression.
        for (let i = 0; i < regex.length; i++) {
            if (new RegExp(regex[i]).test(pwd)) {
                passed++;
            }
        }
        //Validate for length of Password.
        if (passed > 2 && pwd.length > 8) {
            passed++;
        }

        //Display status.
        let color = "";
        let strength = "";
        switch (passed) {
            case 0:
                strengthText = "";
                strength = 0;
                color = "red";
                break;
            case 1:
                strengthText = "Weak";
                strength = 0.4;
                color = "orange";
                break;
            case 2:
                strengthText = "Good";
                strength = 0.6;
                color = "darkorange";
                break;
            case 3:
            case 4:
                strengthText = "Strong";
                strength = 0.8;
                color = "green";
                break;
            case 5:
                strengthText = "Very Strong";
                strength = 1;
                color = "darkgreen";
                break;
        }

        userDetails.passwordStrength = {
            strength,
            strengthText,
            color,
        }
        
        this.props.updateState({userDetails});
    }

    matchPassword = (pwd, cpwd) => {
        if(pwd === cpwd){
            return true;
        } else {
            return false
        }

    }

    render() {
        const { userDetails, showPassword, responseTriggerred, successMessage, failureMessage } = this.props.userState;
        if (responseTriggerred) {
            const message = userDetails.token ? successMessage : failureMessage;
            // console.log(userDetails.token);
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

        const userNameArea = (<View style={LoginStyles.textInput}>
            <Text style={[FontStyles.font, { color: '#808080' }]}>{en.loginLabels.firstNamelabel}</Text>
                <TextInput
                    style={LoginStyles.textInput_pass_email}
                    placeholder="Type your name"
                    value={userDetails.firstName}
                    onChangeText={(e) => this.onValueChange(e, 'firstName')} 
                    />
            <Text style={[FontStyles.font, { color: '#808080' }]}>{en.loginLabels.lastNamelabel}</Text>
                <TextInput
                    style={LoginStyles.textInput_pass_email}
                    placeholder="Type your name"
                    value={userDetails.lastName}
                    onChangeText={(e) => this.onValueChange(e, 'lastName')}
                />
 
            </View>);

        const passwordInputArea = (<View style={LoginStyles.textInput}>
                    <PasswordInputText
                    // style={LoginStyles.textInput}
                    //color="black"
                    placeholder="Type your Password"
                    secureTextEntry={showPassword}
                    value={userDetails.password}
                    onChangeText={(e) => this.onValueChange(e, 'password')} 
                    />
                </View>
            );

        const passwordStrengthArea = (
            <View style={{ flex: 1, height: 30, flexDirection: 'row', paddingRight: 10, paddingLeft: 10 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: 'left', fontWeight: 'bold' }} style={FontStyles.font}>{en.loginLabels.passwordStrengthLabel}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={userDetails.passwordStrength.strength}
                    />    
                </View>
                <View style={{ flex: 0.5 }}>
                    <Text style={{ textAlign: 'right', fontWeight: 'bold' }}>{userDetails.passwordStrength.strengthText}</Text>
                </View>
            </View>
        );

        const passwordValidateArea = (
            <View style={{ flex: 1, paddingTop: 10,  paddingRight: 10, paddingLeft: 10 }}>
                <View style={{ flex: 0.6 }}>
                    <Text style={FontStyles.font} style={{textAlign:'center', color:'red'}}>
                    {
                        userDetails.passwordInvalid ?
                        `* Minimum eight charactes, at least one uppercase letter, one lowercase letter, one number and one special character`
                        : ""
                    }
                    </Text>
                </View>
            </View>
        );    

        const confirmPasswordInputArea = (
            <View style={LoginStyles.textInput}>
                <PasswordInputText
                    //style={LoginStyles.textInput_pass_email}
                    //color="black"
                    placeholder="Confirm Password"
                    secureTextEntry={showPassword}
                    value={userDetails.confirmpassword}
                    onChangeText={(e) => this.onValueChange(e, 'confirmpassword')}
                />
            </View>
        );

        let passwordMatchArea = (<Text></Text>);
        if (userDetails.password.length > 1){
            passwordMatchArea = (
            <View style={{ flex: 1, paddingTop: 15, }}>
                <Text style={FontStyles.font} style={{textAlign:'center', color:'#ccc'}}>
                    {
                        this.matchPassword(userDetails.password, userDetails.confirmpassword) ?
                            `Passwords match` : "Passwords don't match"
                    }
                </Text>
            </View>
            );
        }

        return (
            <KeyboardAvoidingView style={LoginStyles.mainWrapper} behavior="padding" enabled>
                <View style={LoginStyles.bannerArea2_Text}>
                    <Text style={FontStyles.font}>{en.createAccountMsg.createAccountHeading}</Text>
                </View>
                <ScrollView>
                    <View style={{ height: 10 }}></View>
                    <View style={{paddingLeft:10, paddingRight:10}}>
                        {userNameArea}
                    </View>
                    

                    <View style={{ height: 10 }}></View>

                    
                    <View style={LoginStyles.textInput}>
                        <Text style={FontStyles.font} style={{ fontWeight: 'bold', paddingLeft: 10, paddingRight: 10 }}>{en.createAccountMsg.createAccountMsgInfo}</Text>
                        
                        {passwordInputArea}
                        
                        {passwordStrengthArea}

                        {passwordValidateArea}
                        
                        {confirmPasswordInputArea}

                        {passwordMatchArea}
                        
                        <View style={{ height: 30 }}></View>
                        
                    </View>

                    <View style={{ height: 30 }}></View>
                    <View style={LoginStyles.button}>
                        <View style={{ flex: 0.7, }}></View>
                        <View style={{ flex: 1, }}>
                            <LinearGradient colors={['#a25ca8', '#582491']} style={HomeStyles.signinbtn}>
                                <TouchableHighlight onPress={this.onSubmit}>
                                    <Text style={[HomeStyles.signinbtnText]}>{en.loginLabels.createAccountLable}</Text>
                                </TouchableHighlight>
                            </LinearGradient>
                        </View>
                        <View style={{ flex: 0.7, }}></View>
                        
                    </View>
                    <View style={{ height: 20 }}>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
};

Create_Account.propTypes = {
    userDetails: PropTypes.object,
}

const mapStateToProps = state => ({
    userState: state.userState
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ userRegistration, updateState }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Create_Account);