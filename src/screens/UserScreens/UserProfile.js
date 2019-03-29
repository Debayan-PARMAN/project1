import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState, updateUserProfile } from '../../actions/user';
import { View, Text, TouchableOpacity, TextInput, ScrollView, } from 'react-native';
import UserProfileStyle from '../../styelsheets/UserProfileStyle';
import Drop_Down from '../../components/DropDown';
import DatePicker from 'react-native-datepicker';
import { KeyboardAvoidingView } from 'react-native';
import en from '../../messages/en-us';
import { LinearGradient } from 'expo';
import Header_Blank from '../../components/Header/Header_Blank';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import { TextInputStyles } from '../../styelsheets/TextInputStyle';
import Footer from '../../components/Footer/Footer';

class User_Profile extends Component {

    static navigationOptions = {
        title: 'USER PROFILE',
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
            justifyContent: 'space-around',
            flex: 1
        },
        headerRight: (<Header_Blank />)
    };
    
    onSubmit = () => {
        this.props.updateUserProfile();
        this.props.navigation.navigate('UpdateUserProfile');
    }
    
    onValueChange = (value, id) => {
        //console.log( value, id);
        const { userDetails } = this.props.userState;
        userDetails[id] = value;
        this.props.updateState({ userDetails });
    }

     constructor(props) {
        super(props)
        this.state = { date: "2019-01-01" }
    }

    render() {
        
        const {userDetails} = this.props.userState;
        // console.log(userDetails.token);
        const { bloodGroupOptions } = this.props.common;
        const withHover = {...UserProfileStyle.GenderButton, ...UserProfileStyle.hoverButton};
        const withoutHover = {...UserProfileStyle.GenderButton};
        const withHoverText = { ...UserProfileStyle.hoverText };
        const withoutHoverText = { ...UserProfileStyle.GenderText };

        const welcomeHeading = (<View style={UserProfileStyle.welcome}>
            <Text style={UserProfileStyle.welcomeText}>
                {en.userProfileMessages.welcomeMsgLabel} {userDetails.username} {en.userProfileMessages.accountCreatedMsg}
            </Text>
        </View>);

        const staticMessageArea = (<View style={UserProfileStyle.ToServe}>
            <Text style={UserProfileStyle.ToServeText}>{en.userProfileMessages.welcomeMessageInfo}</Text>
        </View>);

        const emailArea = (<View style={UserProfileStyle.EmailAgeBloodWeight}>
            <Text style={textInputStyle.primaryTextInputFontStyle}>{en.loginLabels.emailLabel}</Text>
            <TextInput
                style={textInputStyle.primaryTextInput}
                //placeholder="Enter Email Here"
                onChangeText={(e) => this.onValueChange(e, 'emailAddress')}
                value={userDetails.emailAddress}
            />
        </View>);
        
        const DOBArea = (<View style={UserProfileStyle.EmailAgeBloodWeight}>
            <Text style={textInputStyle.primaryTextInputFontStyle}>{en.userScreensLabel.dateOfBirthLabel}(DD/MM/YY)</Text>

            <TouchableOpacity>
                <DatePicker
                    style={{ width: 200 }}
                    date={userDetails.dateOfBirth === '' ? new Date() : userDetails.dateOfBirth}
                    mode="date"
                   // placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="01-01-1960"
                    maxDate="31-12-2020"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 10,
                            marginRight: 10,
                        },
                        dateInput: {
                            marginLeft: 46,
                        }
                        // ... You can check the source to find the other keys.
                    }}
                    onDateChange={date => { this.onValueChange(date,'dateOfBirth')}}
                />
            </TouchableOpacity>
            {/* <TextInput
                style={UserProfileStyle.EmailTextInput}
                placeholder="Enter Age Hare!"
                onChangeText={(e) => this.onValueChange(e, 'age')}
                value={userDetails.age}
            /> */}
            </View>);

        const heightBloodGroupWeightArea = (<View style={UserProfileStyle.AgeBloodWeight}>
            <View style={UserProfileStyle.AgeBloodWeightHorizontalAlignment} >
                <Text style={textInputStyle.primaryTextInputFontStyle}>{en.userScreensLabel.heightLabel}(cm)</Text>
                <TextInput
                    style={textInputStyle.primaryTextInput}
                   // placeholder="Height"
                    keyboardType="numeric"
                    onChangeText={(e) => this.onValueChange(e, 'height')}
                    value={userDetails.height}
                />
            </View>
            <View style={UserProfileStyle.AgeBloodWeightHorizontalAlignment}>
                <Text style={textInputStyle.primaryTextInputFontStyle}>{en.userScreensLabel.bloodGroupLabel}</Text>
                <View style={UserProfileStyle.AgeBloodWeightTextInput} >
                    {/* <TextInput
                        style={UserProfileStyle.AgeBloodWeightTextInput}
                        placeholder="bloodGroup"                       
                        onChangeText={(e) => this.onValueChange(e, 'bloodGroup')}
                        value={userDetails.bloodGroup}
                    /> */}
              
                    <Drop_Down 
                        selectedData='bloodGroup'
                        selectedValue={userDetails.bloodGroup} 
                        options={bloodGroupOptions} 
                        onValueChange={this.onValueChange}
                        optionId='attributePk'
                        optionLabel='displayValue'
                        optionValue='attributeValue' />
                </View>
            </View>
            <View style={UserProfileStyle.AgeBloodWeightHorizontalAlignment} >
                <Text style={textInputStyle.primaryTextInputFontStyle}>{en.userScreensLabel.weightLabel}(Kg)</Text>
                <KeyboardAvoidingView behavior="padding" enabled>
                    <TextInput
                        style={textInputStyle.primaryTextInput}
                        //placeholder="Weight"
                        keyboardType="numeric"
                        onChangeText={(e) => this.onValueChange(e, 'weight')}
                        value={userDetails.weight}
                    />
                </KeyboardAvoidingView>
            </View>
        </View>);

        const genderArea = (<View style={UserProfileStyle.AgeBloodWeight}>
            <Text style={[UserProfileStyle.GenderIama, { color: '#ad4274' }]}>{en.userScreensLabel.genderTypeLabel} </Text>
                <View style={UserProfileStyle.Gender}>
                    <View style={userDetails.gender === 'M' ? withHover : withoutHover}>
                        <TouchableOpacity onPress={() => this.onValueChange('M', 'gender')} >
                        <Text style={userDetails.gender === 'M' ? withHoverText : withoutHoverText}>{en.userScreensLabel.manGenderLabel}</Text>                        
                        </TouchableOpacity>
                    </View>
                    <View style={userDetails.gender === 'W' ? withHover : withoutHover}>
                        <TouchableOpacity onPress={() => this.onValueChange('W', 'gender')} >                           
                        <Text style={userDetails.gender === 'W' ? withHoverText : withoutHoverText}>{en.userScreensLabel.womanGenderLabel}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={userDetails.gender === 'O' ? withHover : withoutHover}>
                        <TouchableOpacity onPress={() => this.onValueChange('O', 'gender')} >
                        <Text style={userDetails.gender === 'O' ? withHoverText : withoutHoverText}>{en.userScreensLabel.otherGenderLabel}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>);
        
        return (
            <View style={{flex:1}}>
            <View style={UserProfileStyle.mainWrapper}>
            <View >
                <ScrollView>
                        <KeyboardAvoidingView behavior="position">
                        {welcomeHeading}
                        {staticMessageArea}
                        {emailArea}
                        {DOBArea}
                        {heightBloodGroupWeightArea}
                        {genderArea}                        
                        <View style={UserProfileStyle.Next}>
                            <TouchableOpacity onPress={()=>this.onSubmit()} >                            
                                <LinearGradient
                                    style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1,]}
                                    colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }} >
                                    <Text style={[buttonStyle.primaryBtnText]}>{en.commonLabel.nextBtnLabel}</Text> 
                                </LinearGradient>                           
                               </TouchableOpacity>
                         </View>
                  </KeyboardAvoidingView>       
                  </ScrollView>
            </View>
           
         </View>
         <Footer navigation={this.props.navigation} />
         </View>
        );
    }
};

User_Profile.propTypes = {
    userDetails: PropTypes.object,
    common: PropTypes.object,
}
const mapStateToProps = state => ({
    userState: state.userState,
    common:state.common,
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ updateState, updateUserProfile }, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(User_Profile);