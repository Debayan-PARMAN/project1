import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState } from '../../actions/common';
import { updateState as userUpdateState } from '../../actions/doctors';
import { updateState as docUpdateState, findDoctors } from '../../actions/doctors';
import { View, Text, TouchableOpacity, TextInput, AppRegistry, ScrollView } from 'react-native';
import { LoginStyles } from '../../styelsheets/MainStyle';
import { FindDoctorStyle } from '../../styelsheets/FindDoctorStyle';
import Specialities from '../../screens/DoctorScreens/Specialities';
import Hospitallist from '../../screens/DoctorScreens/Hospitallist';
import {buttonStyle,textInputStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import Header_Blank from '../../components/Header/Header_Blank';
import {LinearGradient } from 'expo';
import  en from '../../messages/en-us';
import Footer from '../../components/Footer/Footer';

class Find_Doctor extends Component {
   
    static navigationOptions = {
        title: 'FIND DOCTOR',
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

    

    onPressSpeicalityButton = () => {
        this.props.updateState({ selectedBTN: 'Specialities' });
        //console.log('Specialities')
    }

    onPressHospitalsButton = () => {
        
        this.props.updateState({ selectedBTN: 'Hospitallist' });
        //console.log('Hospitallist')
    }

    onValueChange = (value, id) => {
        const { searchDetails } = this.props.doctorState;
        searchDetails[id] = value;
        this.props.docUpdateState({searchDetails})
    }
    
    onSearchDetails = () => {
        // console.log('Search the data');
        // const { searchDetails } = this.props.doctorState;
        // if (searchDetails.name !== '' || searchDetails.pincode!== '' ) {

            this.props.findDoctors();
            this.props.navigation.navigate('SearchDoctor');
        // }

        // else {
        //     Alert.alert(
        //         '',
        //         message = 'Please Input Value',
        //         [{
        //             text: 'Cancel',
        //             onPress: this.onCancelAlert,
        //             style: 'cancel'
        //         }], {
        //             cancelable: false
        //         }
        //     );
        // }
    }

    onSpecialities = (value) => {
        // console.log(value);
        const {searchDetails} = this.props.doctorState;
        searchDetails.speciality = value;
        this.props.docUpdateState({searchDetails});
        this.props.findDoctors();
        this.props.navigation.navigate('SearchDoctor');
    }

    onHospitals = (value) => {
         //console.log(value);
        const { searchDetails } = this.props.doctorState;
        searchDetails.hospitals = value;
        this.props.docUpdateState({ searchDetails });
        this.props.findDoctors();
        this.props.navigation.navigate('SearchDoctor');
    }

    

     onValueChangeAddress = (value, id) => {
       const { addressDoctor } = this.props.doctorState;
       addressDoctor[id] = value;
       this.props.docUpdateState({ addressDoctor })
    //    console.log(addressDoctor);
    }
    

    render() {
        const { searchDetails,  } = this.props.doctorState;
        const { selectedBTN,specialitylist, hospitallist } = this.props.common;
        const withHover = {...FindDoctorStyle.buttonStyle, ...FindDoctorStyle.hoverButton};
        const withHoverOther = {...FindDoctorStyle.otherAddress, ...FindDoctorStyle.hoverButton}
        const withoutHover = {...FindDoctorStyle.buttonStyle};
        const withoutHoverOther = {...FindDoctorStyle.otherAddress};
        const withHoverText = {...FindDoctorStyle.orStyle1};
        const withoutHoverText = {...FindDoctorStyle.orStyle};
        
        const searchQuery = (
            <View style={ FindDoctorStyle.flex4 }>
                <Text style={textInputStyle.primaryTextInputFontStyle}>{en.commonLabel.nameLabel}</Text>
                <TextInput style={textInputStyle.primaryTextInput}
                   // placeholder="Name"
                    value = {searchDetails.name }
                  onChangeText={(e) => this.onValueChange(e, 'name')}
                />
            </View>
        );
        
        // const address = (
        //     <View style={ FindDoctorStyle. addressContainer }>
        //         <View style={searchDetails.addressSearch === 'H' ? withHover : withoutHover}>
                    
        //             <TouchableOpacity onPress={() => this.onValueChange('H', 'addressSearch')}>
        //                 <Text style={ searchDetails.addressSearch === 'H' ? withHoverText : withoutHoverText }>Home</Text>
        //             </TouchableOpacity>
                    
        //         </View>
        //         <View style={searchDetails.addressSearch === 'O' ? withHover : withoutHover}>
        //             <TouchableOpacity onPress={() => this.onValueChange('O', 'addressSearch')}>
        //                 <Text style={  searchDetails.addressSearch === 'O' ? withHoverText : withoutHoverText }>Office</Text>
        //             </TouchableOpacity>
        //         </View>
        //         <View style={ searchDetails.addressSearch === 'Other' ? withHoverOther : withoutHoverOther} >
        //             <TouchableOpacity onPress={() => this.onValueChange('Other', 'addressSearch')}>
        //                 <Text style={  searchDetails.addressSearch === 'Other' ? withHoverText : withoutHoverText }>Other saved address</Text>
        //             </TouchableOpacity>
        //         </View>
        //     </View>
        // );

        const addressSearch = (
            <View style = {  FindDoctorStyle.locationContainer }>
                <Text style={textInputStyle.primaryTextInputFontStyle}>{en.doctorSearchLabel.locationLabel}</Text>
                <TextInput style={textInputStyle.primaryTextInput}
                    //editable={false} 
                   // placeholder="Kolkata"
                    value = { searchDetails.pincode }
                    onChangeText={(e) => this.onValueChange(e, 'pincode')}
                    />
               
            </View>
        );

        const hospitalListBtn = (
            <View style={selectedBTN === 'Hospitallist' ? withHoverOther : withoutHoverOther}>
                <TouchableOpacity onPress={this.onPressHospitalsButton}>
                    <Text style={selectedBTN === 'Hospitallist' ? withHoverText : withoutHoverText}>{en.doctorSearchLabel.hospitalLable}</Text>
                </TouchableOpacity>
            </View>
        );

        const specialityListBtn = (
            <View style={selectedBTN === 'Specialities' ? withHoverOther : withoutHoverOther}>
                <TouchableOpacity onPress={this.onPressSpeicalityButton}>
                    <Text style={selectedBTN === 'Specialities' ? withHoverText : withoutHoverText }>{en.doctorSearchLabel.specialitiesLabel}</Text>
                </TouchableOpacity>
            </View>
        );

        const buttonArea = (
            <View style={ FindDoctorStyle.margin1 }>

                { specialityListBtn }
                { hospitalListBtn }

            </View>
        );

        // <View style={FindDoctorStyle.nearBy}>
        //     <Text>Near By</Text>
        // </View>

        // {address}

        // < View style = { FindDoctorStyle.orContainer } >
        //     <Text style={FindDoctorStyle.OR} >Or</Text>
        // </View >

        return (
          
                <View style={ FindDoctorStyle.mainContainer }>

                    <View style={ FindDoctorStyle.subContainer }>

                        {searchQuery}    

                        { addressSearch }

                        <View style={LoginStyles.button}>
                            <View style={ FindDoctorStyle.flex1 }>
                            </View>
                            <View style = { FindDoctorStyle.linearGradiantContainer }>                               

                            <TouchableOpacity
                                onPress={this.onSearchDetails}>
                                <LinearGradient
                                    style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
                                    colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }} >
                                    <Text style={[buttonStyle.primaryBtnText]}> {en.doctorSearchLabel.searchLabel}</Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            </View>
                            <View style={ FindDoctorStyle.flex2 }>
                            </View>
                        </View>
                        <View style={ FindDoctorStyle.height }></View>
                        <View style={ FindDoctorStyle.margin2 } />
                        <View style={ FindDoctorStyle.flex3 }>
                            <Text style={ FindDoctorStyle.browseText }>{en.doctorSearchLabel.browseDoctorBy} </Text>
                        </View>
                        { buttonArea }
                    </View>
                    <View style={ FindDoctorStyle.scrollviewContainer  }>
                        <ScrollView>
                            {
                                selectedBTN === 'Specialities' ?
                                    <Specialities keyValue='specializationPk' list={specialitylist} onSpecialities={this.onSpecialities} />
                                    :
                                    <Hospitallist keyValue='hospitalPk' list1={hospitallist} onHospitals={this.onHospitals} />     
                            }
                        </ScrollView>
                    </View>
                    <Footer navigation={this.props.navigation} />
                </View>         


        );
    }
};

Find_Doctor.propTypes = {
    doctorDetails: PropTypes.object,
    userDetails: PropTypes.object,
}

const mapStateToProps = state => ({
    userState: state.userState,
    doctorState: state.doctorState,
    common: state.common
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ userUpdateState, docUpdateState, findDoctors, updateState}, dispatch)
});
AppRegistry.registerComponent('project1', () => Find_Doctor);

export default connect(mapStateToProps, mapDispatchToProps)(Find_Doctor);
