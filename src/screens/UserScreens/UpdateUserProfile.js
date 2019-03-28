import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState, updateUserProfile } from '../../actions/user';
import { View, Image, Text, Alert, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import UpdateUserProfileStyle from '../../styelsheets/UpdateUserProfileStyle';
import { KeyboardAvoidingView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import imageConstantURI from '../../../src/constants/imageConst';
import { LinearGradient } from 'expo';
import Header_Blank from '../../components/Header/Header_Blank';
import Drop_Down from '../../components/DropDown';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import AddAddressStyle from '../../styelsheets/AddAddressStyle';
import styleConstants from '../../constants/styleConstants';

class Update_User_Profile extends Component {

    

    static navigationOptions = {
        title: 'UPDATE USER PPROFILE',
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

    onValueChange = (value, id) => {
        const { userDetails } = this.props.userState;
        userDetails[id] = value;
        this.props.updateState({ userDetails });
    }

    onUpdateProfile = () => {
        //console.log('function triggered');
        const { userDetails } = this.props.userState;
        userDetails.fieldsEditable = true;
        this.props.updateState({ userDetails });
    }

    onSaveUpdatedProfile = () => {
        //console.log('function triggered');
        const { userDetails } = this.props.userState;
        userDetails.fieldsEditable = false;
        this.props.updateState({ userDetails });
    }

    onSubmit = () => {
        // console.log('Save Profile Button triggered');
        this.onSaveUpdatedProfile();
        this.props.updateUserProfile();
        // this.props.navigation.navigate('AddAddress');
        // this.onUpdateProfile();
        this.props.navigation.navigate('Home');
    }

     componentWillUnmount() {

      this.onSubmit();
     }
    render() {

        const {userDetails} = this.props.userState;
        const { bloodGroupOptions } = this.props.common;
        // console.log("userDetails", userDetails);

        const userProfileTabs = (<View style={UpdateUserProfileStyle.userProfileTabs}>
            <View style={UpdateUserProfileStyle.userProfileInnerTabs}>
                <View style={UpdateUserProfileStyle.userProfileInnerFirstTabs} >
                    <Text style={UpdateUserProfileStyle.tabText}>{en.userScreensLabel.personalTabLabel}</Text>
                </View>
                <View style={UpdateUserProfileStyle.userProfileInnerSecondTabs} >
                    <Text style={UpdateUserProfileStyle.userProfileInnerSecondTabsText}>{en.userScreensLabel.medicalTabLabel}</Text>
                </View>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('LifeStyle')} >
                <View style={UpdateUserProfileStyle.userProfileInnerLastTabs} >
                    <Text style={UpdateUserProfileStyle.userProfileInnerSecondTabsText}>{en.userScreensLabel.lifestyleTabLabel}</Text>
                </View>
                </TouchableOpacity>
              </View> 
            </View>
        );

        const userDetailsArea = (<View style={UpdateUserProfileStyle.userNameArea} >
            <View style={UpdateUserProfileStyle.userNameFirstArea} >
                <Text style={UpdateUserProfileStyle.userdetailsText}>{userDetails.userName}</Text>
                <Text style={UpdateUserProfileStyle.userdetailsText} >{userDetails.emailAddress}</Text>
                <Text style={UpdateUserProfileStyle.userdetailsText} >{userDetails.contactNo}</Text>
            </View>
            <View style={UpdateUserProfileStyle.userNameLastArea} >
                <Image style={UpdateUserProfileStyle.profileImageArea}
                    source={imageConstantURI.profileImage.src} />
            </View>
        </View>);

        let dobArea = '';
        if(!userDetails.fieldsEditable){
            dobArea = (<View>
                <Text style={textInputStyle.primaryTextInputFontStyle}>{en.userScreensLabel.dateOfBirthLabel}</Text>
                <TextInput editable={userDetails.fieldsEditable} style={textInputStyle.primaryTextInput}
                onChangeText={(e) => this.onValueChange(e, 'age')}
                    value={userDetails.dateOfBirth} />
                    
        </View>);
        }
         else {
            dobArea = (<View style={UpdateUserProfileStyle.datearea}>
                <Text style={textInputStyle.primaryTextInputFontStyle}>Date of Birth</Text>                             
                <DatePicker
                    style={{ width: 200 }}
                    date={userDetails.dateOfBirth}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="1960-01-01"
                    maxDate="2020-12-31"
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
                   // placeholder="dateofBirth"
                    onDateChange={(date) => { this.onValueChange(date, 'dateOfBirth') }}
                />
            </View>);
        }

        const row1 = (<View style={UpdateUserProfileStyle.bloodheightweight}>
            <View style={UpdateUserProfileStyle.bloodgroup} >
                <Text style={textInputStyle.primaryTextInputFontStyle}>{en.userScreensLabel.bloodGroupLabel}</Text>
                {
                    !userDetails.fieldsEditable ?
                    <TextInput editable={userDetails.fieldsEditable}
                        value={userDetails.bloodGroup}
                        style={textInputStyle.primaryTextInput}
                        //placeholder="bloodGroup"
                        onChangeText={(e) => this.onValueChange(e, 'bloodGroup')}
                        value={userDetails.bloodGroup}
                    />
                    :
                    <Drop_Down
                        selectedData='bloodGroup'
                        selectedValue={userDetails.bloodGroup}
                        options={bloodGroupOptions}
                        onValueChange={this.onValueChange}
                        optionId='attributePk'
                        optionLabel='displayValue'
                        optionValue='attributeValue' />
                }
            </View>

            <View style={UpdateUserProfileStyle.heightWeightArea} >
                <Text style={textInputStyle.primaryTextInputFontStyle}>{en.userScreensLabel.heightLabel}</Text>
                <TextInput editable={userDetails.fieldsEditable}
                    style={textInputStyle.primaryTextInput}
                    //placeholder="Height"
                    keyboardType="numeric"
                    onChangeText={(e) => this.onValueChange(e, 'height')}
                    value={userDetails.height} 
                    />
            </View>

            <View style={UpdateUserProfileStyle.heightWeightArea} >
                <Text style={textInputStyle.primaryTextInputFontStyle}>{en.userScreensLabel.weightLabel}</Text>
                <TextInput editable={userDetails.fieldsEditable}
                    style={textInputStyle.primaryTextInput}
                   // placeholder="Weight"
                    keyboardType="numeric"
                    onChangeText={(e) => this.onValueChange(e, 'weight')}
                    value={userDetails.weight} />
            </View>
        </View>);

        const row2 = (<View style={{ flex:1,height: 60, marginTop: 10, flexDirection: 'row' }}>
            <View style={{ flex:0.45, height: 60, }} >
            <Text editable={userDetails.fieldsEditable} style={textInputStyle.primaryTextInputFontStyle}>{en.userScreensLabel.genderLabel}</Text>
                <TextInput editable={userDetails.fieldsEditable}
                    style={textInputStyle.primaryTextInput}
                    //placeholder="gender"
                    onChangeText={(e) => this.onValueChange(e, 'gender')}
                    value={userDetails.gender} />
            </View>
            <View style={{ flex: 0.45, height: 60, marginLeft: 20 }} >
                <Text editable={userDetails.fieldsEditable} style={textInputStyle.primaryTextInputFontStyle}>{en.userScreensLabel.maritalStatusLable}</Text>
                <TextInput editable={userDetails.fieldsEditable}
                    style={textInputStyle.primaryTextInput}
                   // placeholder="maritialStatus"
                    onChangeText={(e) => this.onValueChange(e, 'maritialStatus')}
                    value={userDetails.maritialStatus} />
            </View>
        </View>);
        const addressArea = (
            <View style={{ flex: 1,marginTop:15}} >
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Address')} >
                    <View style={AddAddressStyle.AddnewAreaContainer}>
                        <View style={[AddAddressStyle.Container1,{borderColor:'#ccc'}]}>
                            <Text style={AddAddressStyle.AddressTypeText}>My Addresses</Text>
                        </View>
                        <View style={[AddAddressStyle.Container2,{borderColor:'#ccc'}]}>

                            <Image style={[AddAddressStyle.ImageView, { padding: 6 }]}
                                source={imageConstantURI.rightArrow.src} />

                        </View>
                    </View>
                </TouchableOpacity >
                {/* <Text style={UpdateUserProfileStyle.address}>{en.userScreensLabel.addressLabel}</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Address')} >

                    <View style={UpdateUserProfileStyle.addaddress}>
                    {userDetails.addressList.length > 0 ? 
                            <Text style={UpdateUserProfileStyle.addaddressText}>{en.userScreensLabel.addressFoundText}.... {userDetails.addressList.length}</Text>
                        :   
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Address')} >
                            <View style={{ flex: 1,flexDirection: 'row', }}>
                                <View style={UpdateUserProfileStyle.addaddresslogoContainer} >
                            <Image style={UpdateUserProfileStyle.addaddresslogo}
                                          source={imageConstantURI.add.src} />
                           </View>
                           
                                    <Text style={[UpdateUserProfileStyle.addaddressText, { marginTop: 12,}]}>{en.userScreensLabel.addAddressLabel}</Text>
                           
                           </View>
                        </TouchableOpacity>
                    } 
                      
                    </View>
                </TouchableOpacity> */}
            </View>
        );
        
        const buttonArea = (<View style={UpdateUserProfileStyle.buttons}>
            {!userDetails.fieldsEditable ? 
                <View style={UpdateUserProfileStyle.updateprofilebtn}>
                    <TouchableOpacity onPress={() => this.onUpdateProfile()} >
                        <LinearGradient
                            style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
                            colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }} >
                            <Text style={[buttonStyle.primaryBtnText]}> {en.commonLabel.updateProfileBtn}</Text>
                        </LinearGradient>                   
                </TouchableOpacity>
            </View>
            :
                <View style={UpdateUserProfileStyle.updateprofilebtn}>
                <TouchableOpacity onPress={() => { this.onSubmit() }} >
                        <LinearGradient
                            style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
                            colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }} >
                            <Text style={[buttonStyle.primaryBtnText]}> {en.commonLabel.saveProfileBtn}</Text>
                        </LinearGradient>                   
                </TouchableOpacity>
            </View>
            }           
          
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')} 
                    style={[buttonStyle.secondaryBtnStyle, buttonStyle.btnSizeStyle1]}>                    
                    <Text style={[buttonStyle.secondaryBtnText]}>{en.commonLabel.skipBtn}</Text>
                </TouchableOpacity>
         
        </View>
        );        
        return (
            <View style={UserProfileStyle.mainWrapper}>
                <View>
                    <ScrollView>
                        <KeyboardAvoidingView behavior="position">
                            <View style={UpdateUserProfileStyle.health}>
                                {/* <Text style={UpdateUserProfileStyle.healthText}>{en.userScreensLabel.healthProfileHeading}</Text> */}
                            </View>
                            {userProfileTabs}
                            <View style={UpdateUserProfileStyle.userdetailsArea}>
                                {userDetailsArea}
                                {dobArea}
                                {row1}
                                {row2}
                                {addressArea}
                            </View>
                            {buttonArea}
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </View>
        );
    }
};

Update_User_Profile.propTypes = {
    userDetails: PropTypes.object,
    common: PropTypes.object,
}
const mapStateToProps = state => ({
    userState: state.userState,
    common: state.common,
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ updateState, updateUserProfile }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Update_User_Profile);