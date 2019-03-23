import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestOTP, updateState, numberCheckRegistration } from '../../actions/user';
import { View, Image, Text, Alert, TouchableOpacity, TextInput, ScrollView, TouchableHighlight,} from 'react-native';
import { LoginStyles, FontStyles, Button_fb_google, } from '../../styelsheets/MainStyle';
import imageConstantURI from '../../constants/imageConst';
import { LinearGradient } from 'expo';
import { TextInputStyles } from '../../styelsheets/TextInputStyle';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import en from '../../messages/en-us';

class Registration extends Component {

  static navigationOptions = {
    title: 'CREATE ACCOUNT',
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
      fontWeight: 'bold',
      paddingLeft: 30,
      //alignItems:'center',
    },
  };

  onValueChange = (value, id) => {
    const { userDetails } = this.props.userState;
    userDetails[id] = value;
    this.props.updateState({ userDetails });
  }

  

  onCancelAlert = () => {
    this.props.updateState({ responseTriggerred: false });
    // this.props.navigation.navigate('Home');
  }

  onSubmit = () => {
    //console.log('Registration Button triggered');
    const {userDetails} = this.props.userState;
    const regex = /[0-9]/g;

    if (!(regex.test(userDetails.contactNo) && userDetails.contactNo.length === 13)){
      Alert.alert(
        '',
        message='Provide a valid number',
        [{
          text: 'Cancel',
          onPress: this.onCancelAlert,
          style: 'cancel'
        }], {
          cancelable: false
        }
      );
    }
    else {
      this.props.numberCheckRegistration(this.props.navigation.navigate)
    }
  }
  render() {
    const { userDetails } = this.props.userState;
   
    return (
      <View style={LoginStyles.mainWrapper}>
        <ScrollView>
          {/* <View style={LoginStyles.bannerArea2_Text}>
            <Text style={FontStyles.font}>{en.commonLabel.createAccountBtn}</Text>
          </View> */}
          <View style={LoginStyles.textInput}>
            <Text style={textInputStyle.primaryTextInputFontStyle}>{en.loginLabels.mobileNumberLabel}</Text>         
            <TextInput
              style={textInputStyle.primaryTextInput}
              // placeholder="Enter your Mobile Number"
              value={userDetails.contactNo}
              maxLength={13}
              // keyboardType="numeric"
              onChangeText={(e) => this.onValueChange(e, 'contactNo')} />
          </View>         
          <View style={[LoginStyles.button, { marginTop: 20 }]}>          
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
          <View style={[LoginStyles.bannerArea2_Text, { marginTop: 15 }]}>
            <Text style={FontStyles.font}>----------------------------------------- {en.commonLabel.orLabel} -----------------------------------------</Text>
          </View>         
          <View style={[Button_fb_google.first_container, { marginTop: 15 }]}>
            <TouchableOpacity onPress={() => console.log('Login with facebook')}>
              <View style={Button_fb_google.second_container}>
                <View style={Button_fb_google.third_container}>
                  <Image style={Button_fb_google.image}
                    source={imageConstantURI.facebook.src}
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
                    source={imageConstantURI.google.src}
                  />
                </View>
                <View style={LoginStyles.toggleButton_Sub_Container_Row1}>
                  <Text style={FontStyles.font} style={{ color: 'white' }}>{en.loginLabels.googleLabel}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={LoginStyles.forget_pass_view}>
            <Text style={FontStyles.font}>{en.createAccountMsg.createAccountpageInfo}</Text>
          </View>
          <View style={LoginStyles.button}>          
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Login')}>
              <LinearGradient
                style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
                colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }} >            
                  <Text style={[buttonStyle.primaryBtnText]}> {en.loginLabels.signInLabel}</Text>                
              </LinearGradient>
            </TouchableHighlight>                      
          </View>
        </ScrollView>
      </View>
    );
  }
};

Registration.propTypes = {
  userDetails: PropTypes.object,
}

const mapStateToProps = state => ({
  userState: state.userState
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ requestOTP, updateState, numberCheckRegistration }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);