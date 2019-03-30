import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState } from '../../actions/user';
import { getStates } from '../../actions/common';
import { LinearGradient } from 'expo';
import Header_Blank from '../../components/Header/Header_Blank';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import { View, Text, Image, TouchableOpacity, AppRegistry, ScrollView } from 'react-native';
import AddAddressStyle from '../../styelsheets/AddAddressStyle';
import imageConstantURI from '../../constants/imageConst';
// import Drop_Down from '../components/DropDown';
import en from '../../messages/en-us';
import Footer from '../../components/Footer/Footer';

class Address extends Component {
    static navigationOptions = {
        title: 'MY ADDRESSES',
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

    openSelectedAddress = (id) => {
        const {userDetails} = this.props.userState;
        const tempArr = userDetails.addressList.filter(address => address.id === id);
        userDetails.addressDetails = tempArr[0];
        userDetails.addressDetails.addressExits = true;
        this.props.updateState({ userDetails});
        this.props.navigation.navigate('AddAddress')
    }

    createNewAddress = () => {
        const { userDetails } = this.props.userState;
        userDetails.addressDetails = {
            addressType: '',
            line1: '',
            line2: '',
            country: '',
            city: '',
            pinCode: '',
            state: '',
        }
        this.props.updateState({ userDetails });
        this.props.navigation.navigate('AddAddress')
    }

    render() {
        const { userDetails } = this.props.userState;
        // const { countries, states } = this.props.commonState;
       const addressTypeArea = userDetails.addressList.length > 0 ? 
            userDetails.addressList.map((address,index) => 
                <TouchableOpacity onPress={() => this.openSelectedAddress(address.id)} key={index}>
                    <View style={AddAddressStyle.AddnewAreaContainer }>
                        <View style={AddAddressStyle.Container1 }>
                            <Text style={AddAddressStyle.AddressTypeText}>{address.addressType}</Text>
                        </View>
                        <View style={AddAddressStyle.Container2}>                            
                                <Image style={[AddAddressStyle.ImageView, {padding:6}]}
                                    source={imageConstantURI.rightArrow.src} />
                            
                        </View>
                    </View>
                </TouchableOpacity>)
            :
            <View></View>;
        const addnewaddressArea = (
            <TouchableOpacity onPress={() => this.createNewAddress()} >
                <View style={AddAddressStyle.AddnewAreaContainer}>
                    <View style={AddAddressStyle.Container1}>
                        <Text style={AddAddressStyle.AddressTypeText}>+ {en.userScreensLabel.addNewAddressLabel}</Text>
                    </View>
                    <View style={AddAddressStyle.Container2}>
                      
                        <Image style={[AddAddressStyle.ImageView, { padding: 6 }]}
                                source={imageConstantURI.rightArrow.src} />
                       
                    </View>
                </View>
            </TouchableOpacity>);     

        return (
            <View style = {{ flex: 1 }}>
            <View style={AddAddressStyle.mainWrapper}>
                  <ScrollView>                                          
                        <View style={AddAddressStyle.AddressType}>
                           {/* // <Text style={AddAddressStyle.AddressTypeText}>{en.userScreensLabel.addressTypeLabel}</Text> */}
                        </View>
                        {addressTypeArea}
                        {/* {officeArea}
                        {othersArea} */}
                        {addnewaddressArea}                    
                                         
                   </ScrollView>                  
            </View>
            <Footer navigation={this.props.navigation} />
                </View>
        );
    }
};

Address.propTypes = {
    userDetails: PropTypes.object,
    commonState: PropTypes.object
}
const mapStateToProps = state => ({
    userState: state.userState,
    commonState: state.common
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ updateState, Address, getStates }, dispatch)
});

AppRegistry.registerComponent('project1', () => Address);

export default connect(mapStateToProps, mapDispatchToProps)(Address);