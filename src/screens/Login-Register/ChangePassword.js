import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetPassword, updateState } from '../../actions/user';
import { View, Text, TouchableOpacity, TextInput, ScrollView, showPassword } from 'react-native';
import en from '../../messages/en-us';
import { LinearGradient } from 'expo';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import PasswordComponent from '../../components/TextComponent/PasswordComponent';
import styleConstants from '../../constants/styleConstants';

class ChangePassword extends Component {
    static navigationOptions = {
        title: 'CHANGE PASSWORD',
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
            // fontWeight: 'bold',
            paddingLeft: 30,
            //justifyContent: 'center',
            //alignItems: 'center',
        },
    };   
    onValueChange = (value, id) => {
        const { userDetails } = this.props.userState;
        userDetails[id] = value;
        this.props.updateState({ userDetails });
    }

    onSubmit = () => {
        const { userDetails } = this.props.userState;
        if (userDetails.password !== '' && userDetails.password.length >= 8) {
            this.props.resetPassword();
            this.props.navigation.navigate('Home');

        } else {
            alert("Enter valid Password minimum 8 characters");
        }

    }
    render() {   
         const { userDetails } = this.props.userState;           
            
        return (
           
            <ScrollView style={LoginStyles.mainWrapper}>                                      
             <View style={{ flex:1,marginTop:15}}>               

                        <PasswordComponent
                            style={textInputStyle.primaryTextInput}
                            labelStyle={textInputStyle.primaryTextInputFontStyle}
                            label='Password'
                            secureTextEntry={showPassword}
                            value={userDetails.password}
                            onChangeText={(e) => this.onValueChange(e, 'password')}
                        />
            </View>  

              <View style={{ flex: 1, height: 40, marginTop: 15, justifyContent: 'center',alignItems: 'center', }}>
                         
                        <TouchableOpacity onPress={this.onSubmit}>
                            <LinearGradient
                                style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1,]}
                                colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }} >
                                <Text style={[buttonStyle.primaryBtnText]}>{en.commonLabel.submitLabel}</Text>
                            </LinearGradient>
                        </TouchableOpacity>                     
                       </View>                                                             
                                 
                </ScrollView>                  
            
        ); 
      }
};

ChangePassword.propTypes = {
    userDetails: PropTypes.object,
    commonState: PropTypes.object
}
const mapStateToProps = state => ({
    userState: state.userState,
    commonState: state.common
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ updateState, resetPassword}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);