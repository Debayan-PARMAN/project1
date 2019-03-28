import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userRegistration, updateState } from '../../actions/user';
import { BackHandler, View, Text, Alert, TextInput, ScrollView, ProgressBarAndroid, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import { LoginStyles, FontStyles, } from '../../styelsheets/MainStyle';
import PasswordInputText from 'react-native-hide-show-password-input';
import { LinearGradient } from 'expo';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import Header_Component_Blank from '../../components/Header/Header_Blank';
import en from '../../messages/en-us';
import PasswordComponent from '../../components/TextComponent/PasswordComponent';
import Footer from '../../components/Footer/Footer';

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
        title: 'CREATE ACCOUNT',
        headerTintColor: '#fff',
        headerBackground: (
            <LinearGradient
                colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                style={{ flex: 1, }}
                start={[0, 0]}
                end={[1, 1]}
            />
        ),
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
          
              
            <Text style={textInputStyle.primaryTextInputFontStyle}>{en.loginLabels.firstNamelabel}</Text>
                <TextInput
                    style={textInputStyle.primaryTextInput}
                   // placeholder="Type your name"
                    value={userDetails.firstName}
                    onChangeText={(e) => this.onValueChange(e, 'firstName')} 
                    />
            <Text style={[textInputStyle.primaryTextInputFontStyle,{marginTop:10}]}>{en.loginLabels.lastNamelabel}</Text>
            <TextInput
                style={textInputStyle.primaryTextInput}
                   // placeholder="Type your name"
                    value={userDetails.lastName}
                    onChangeText={(e) => this.onValueChange(e, 'lastName')}
                />
 
            </View>);

        const passwordInputArea = (
            <PasswordComponent
                style={[textInputStyle.primaryTextInput, {marginTop:10}]} 
                labelStyle={textInputStyle.primaryTextInputFontStyle}
                label='Password'
                secureTextEntry={showPassword}
                value={userDetails.password}
                onChangeText={(e) => this.onValueChange(e, 'password')}
            />
               
            );

        const passwordStrengthArea = (
            <View style={{ flex: 1, flexDirection: 'row', marginTop:10  }}>
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
            <View style={{ flex: 1,}}>
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
            <PasswordComponent
                style={textInputStyle.primaryTextInput}
                labelStyle={textInputStyle.primaryTextInputFontStyle}
                label='Confirm Password'
                secureTextEntry={showPassword}
                value={userDetails.confirmpassword}
                onChangeText={(e) => this.onValueChange(e, 'confirmpassword')}
            />
           
        );

        let passwordMatchArea = (<Text></Text>);
        if (userDetails.password.length > 1){
            passwordMatchArea = (

                <Text style={FontStyles.font} style={{textAlign:'center', color:'#ccc'}}>
                    {
                        this.matchPassword(userDetails.password, userDetails.confirmpassword) ?
                            `Passwords match` : "Passwords don't match"
                    }
                </Text>

            );
        }

        return (
                  
            <View style={{flex:1}}>
            <ScrollView style={LoginStyles.mainWrapper}> 
                    <KeyboardAvoidingView behavior="position">                   
                        {userNameArea}               
                    <View style={LoginStyles.textInput}>
                        <Text style={FontStyles.font} style={{ fontWeight: 'bold', }}>{en.createAccountMsg.createAccountMsgInfo}</Text>
                        
                        {passwordInputArea}
                        
                        {passwordStrengthArea}

                        {passwordValidateArea}
                        
                        {confirmPasswordInputArea}

                        {passwordMatchArea}
      
                    </View>
                    <View style={[LoginStyles.button, {marginTop:15}]}>                
                        <TouchableOpacity
                            onPress={this.onSubmit}>
                            <LinearGradient
                                style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
                                colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }} >
                                <Text style={[buttonStyle.primaryBtnText]}>{en.loginLabels.createAccountLable}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>                   
             </ScrollView>
             <Footer navigation={this.props.navigation} />
             </View>
           
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