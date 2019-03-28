import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState, addAddress } from '../../actions/user';
import { getStates } from '../../actions/common';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import { View, Text, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo';
import Header_Blank from '../../components/Header/Header_Blank';
import AddAddressStyle from '../../styelsheets/AddAddressStyle';
import Drop_Down from '../../components/DropDown';
import en from '../../messages/en-us';

class AddAddress extends Component {
    static navigationOptions = {
        title: 'ADD ADDRESS',
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

    onNavigate = () => {
        this.props.navigation.navigate('UpdateUserProfile');
    }

    onSubmit = () => {
        // console.log('Add Address Button triggered');
        const { userDetails } = this.props.userState;
        //console.log("userDetails.addressDetails ---------------", userDetails.addressDetails);
        if (userDetails.addressDetails.addressExits) {
            userDetails.addressList.forEach((address) => {
                if (address.id === userDetails.addressDetails.id) {
                    address = userDetails.addressDetails;
                }
                else{
                    //console.log("Match not found");
                }
            });
                userDetails.addressExits = false;
            //console.log("Updated address list  ################# ",userDetails.addressList);
        } 
        else {
            userDetails.addressList.push(userDetails.addressDetails);  
        }
       
        userDetails.addressDetails = {
            addressType: '',
            line1: '',
            line2: '',
            country: '',
            city: '',
            pinCode: '',
            state: '',
        }
        
        // console.log('onSubmit Address ', userDetails.addressDetails);
        // console.log('onSubmit AddressList ', userDetails.addressList);
        this.props.addAddress();
        this.props.updateState({userDetails});
        this.props.navigation.navigate('UpdateUserProfile');
    }

    onValueChange = (value, id) => {
        // console.log('onValueChange id ', id);
        // console.log('onValueChange value ', value);      
        const { userDetails } = this.props.userState;
        if (id === 'selectedCountry'){
            userDetails[id]=value;
            userDetails.addressDetails.country = value;
        }else{    
        userDetails.addressDetails[id] = value;
        }
        this.props.updateState({ userDetails});

    } 

    onToggle = (value) => {
        // console.log(value);
        const {userDetails} = this.props.userState;
        switch(value){
            case 'Home':
                userDetails.addressDetails.addressType = "Home";
                userDetails.addCustomAddress = false;
                break;
            case 'Office':
                userDetails.addressDetails.addressType = "Office";
                userDetails.addCustomAddress = false;
                break; 
            default:
                userDetails.addressDetails.addressType = "";
                userDetails.addCustomAddress = true;
                break;
        }
        this.props.updateState({ userDetails });
    }

    render() {
        const { userDetails } = this.props.userState;
        const { countries, states } = this.props.commonState;
        // console.log(countries);


        const customAddressArea = (
           <View>
                <Text style={[textInputStyle.primaryTextInputFontStyle, { marginTop: 8 }]}>Provide Address Type</Text>
                    <TextInput
                        style={textInputStyle.primaryTextInput}
                        //placeholder="Provide Address Type"
                        value={userDetails.addressDetails.addressType}
                        onChangeText={(e) => this.onValueChange(e, 'addressType')}
                    />
            </View>  
        );

        const selectCountryArea = (
            <View style={AddAddressStyle.countryContainer}>
                <Drop_Down
                    selectedData='selectedCountry'
                    selectedValue={userDetails.selectedCountry} 
                    options={countries} 
                    onValueChange={(e) => this.onValueChange(e,'selectedCountry')}
                    optionId='id'
                    optionLabel='countryName'
                    //optionValue='countryCode'
                    optionValue='countryName'
                />
                {/* <TextInput
                    style={{ height: 45, borderColor: 'gray', padding: 6, marginTop: 0 }}
                    placeholder="Country"
                    value={userDetails.addressDetails.country}
                    onChangeText={(e) => this.onValueChange(e, 'country')}
                /> */}
            </View>
        );

        const selectStateArea = (
            <View >
                {/* <Drop_Down
                    selectedData='selectedState'
                    selectedValue={userDetails.selectedStates}
                    options={states}
                    onValueChange={this.onValueChange}
                    optionId='id'
                    optionLabel='stateName'
                    optionValue='stateCode'
                /> */}
                <Text style={[textInputStyle.primaryTextInputFontStyle, { marginTop: 6 }]}>State</Text>
                 <TextInput
                            style={textInputStyle.primaryTextInput}
                   // placeholder="State"             
                   
                    value={userDetails.addressDetails.state}
                    onChangeText={(e) => this.onValueChange(e, 'state')}
                />
            </View>
        );
        const pinCode = (
            <View>
                <Text style={[textInputStyle.primaryTextInputFontStyle, { marginTop: 6 }]}>6 digit 0-9 pin code</Text>
                 <TextInput
                            style={textInputStyle.primaryTextInput}
                    //placeholder="6 digit 0-9 pin code"
                    keyboardType="numeric"
                    value={userDetails.addressDetails.pinCode}
                    onChangeText={(e) => this.onValueChange(e, 'pinCode')}
                />
            </View>
        );

        const flatHouse = (
            <View>
                <Text style={[textInputStyle.primaryTextInputFontStyle, { marginTop: 6 }]}>Flat/House/Floor/Building</Text>
                    <TextInput
                            style={textInputStyle.primaryTextInput}
                    //placeholder="Flat/House/Floor/Building"
                    value={userDetails.addressDetails.line1}
                    onChangeText={(e) => this.onValueChange(e, 'line1')}
                />
                </View>
                    );
        const landmark = (
            <View>
                <Text style={[textInputStyle.primaryTextInputFontStyle, { marginTop: 6 }]}>Landmark</Text>
           <TextInput
                            style={textInputStyle.primaryTextInput}
                //placeholder="Landmark"
                value={userDetails.addressDetails.line2}
                onChangeText={(e) => this.onValueChange(e, 'line2')}
            />
            </View>
               );
        const city = (
                <View>
                <Text style={[textInputStyle.primaryTextInputFontStyle, {marginTop:6}]}>City</Text>
                        <TextInput
                            style={textInputStyle.primaryTextInput}
                          //  placeholder="City"
                            value={userDetails.addressDetails.city}
                            onChangeText={(e) => this.onValueChange(e, 'city')}
                        />
                </View>
                   );
        const addressBtn = (
            <View style={AddAddressStyle.btnContainer}>
                <TouchableOpacity onPress={() => { this.onSubmit() }} >
                    <LinearGradient
                        style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
                        colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }} >
                        <Text style={[buttonStyle.primaryBtnText]}>{en.userScreensLabel.addAddressLabel}</Text>
                    </LinearGradient>                   
                </TouchableOpacity>
            </View>
        );

        return (
            <View style={AddAddressStyle.mainWrapper}>
                <ScrollView>                   
                    <KeyboardAvoidingView behavior="position">
                            {/*<HomeAddress/>*/}                          
                                    {customAddressArea }
                                    { selectCountryArea }
                                    { pinCode }
                                    { flatHouse }
                                    { landmark }
                                    { city }
                                    { selectStateArea }
                                    { addressBtn }                              
                    </KeyboardAvoidingView>   
                </ScrollView>                  
            </View>
        );
    }
};

AddAddress.propTypes = {
    userDetails: PropTypes.object,
    commonState: PropTypes.object
}
const mapStateToProps = state => ({
    userState: state.userState,
    commonState: state.common
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ updateState, addAddress, getStates }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAddress);