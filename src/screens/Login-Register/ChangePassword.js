import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetPassword, updateState } from '../../actions/user';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import en from '../../messages/en-us';
import { LinearGradient } from 'expo';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
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
             <View style={{ flex: 1, padding:5}}>
                <ScrollView>                                      
             <View style={{ flex:1,marginTop:15}}>
                <Text style={[textInputStyle.primaryTextInputFontStyle, { marginTop: 4 }]}>{en.loginLabels.newPasswordLabel}</Text>
                     <TextInput style={textInputStyle.primaryTextInput}
                    placeholder="************"
                    value={userDetails.password}    
                    onChangeText={(e) => this.onValueChange(e, 'password')}
                />
            </View>  

              <View style={{ flex: 1, height: 40, marginTop: 15, justifyContent: 'center',alignItems: 'center', }}>
                          <TouchableOpacity onPress={this.onSubmit}>
                            <View style={{ width: 120, height: 35, backgroundColor: '#572a6f',alignItems: 'center', justifyContent: 'center',   borderWidth: 1, borderRadius: 5 }}>
                                <Text style={{ textAlign: 'center', color: '#fff', }}>{en.commonLabel.submitLabel}</Text>
                            </View>
                          </TouchableOpacity>                      
                       </View>                                                             
                                 
                </ScrollView>                  
            </View>           
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