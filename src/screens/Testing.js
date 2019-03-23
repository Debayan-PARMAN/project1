import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, TouchableHighlight, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { joiningString } from '../Utils';
import { LinearGradient } from 'expo';
import { DoctorCardStyle } from '../styelsheets/DoctorCardStyle';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import imageConstantURI from '../constants/imageConst';

import { updateState as userUpdateState } from '../actions/doctors';
import { updateState as docUpdateState } from '../actions/doctors';


class Testing extends Component {
    getDoctorQualification = (doctorData) => {
        return joiningString(doctorData.doctorQualifications.map(item => item.qualification));
    }
    getDoctorSpecialization = (doctorData) => {
        return joiningString(doctorData.doctorSpecializations.map(item => item.specialization));
    }

    getDoctorChamberDetails = (doctorData) => {
        return (
            <View>
                {doctorData.doctorChamberList.map(item =>
                    <View style={DoctorCardStyle.doctorName} key={item.chamberPk}>
                        <Image style={DoctorCardStyle.locationImage} source={imageConstantURI.defaultPlaceHolder.src} />
                        <Text>{item.hospitalName} - {item.line2} - Rs. {item.fees}</Text>
                    </View>)}
            </View>)
    };



    render() {
        //const { doctorData } = this.props;
        
        return (
            <View style={DoctorCardStyle.mainContainerAppiontment}>
                <View style={DoctorCardStyle.height1}>               
                    <View style={DoctorCardStyle.subContainer1}>
                        <View style = { DoctorCardStyle.flex1 }>
                            <View style = { DoctorCardStyle.flex2 }>
                                <Image style={DoctorCardStyle.profileImage} source={imageConstantURI.appLogo.src} />
                            </View>
                            <View style={DoctorCardStyle.heartIconContainer}>
                                <Image style={ DoctorCardStyle.heartIconImage } source={imageConstantURI.heartIcon.src} />
                            </View>
                        </View>
                        <View style={DoctorCardStyle.textContainer}>
                            <Text style={DoctorCardStyle.doctorName}>Dr. Subodh Paul</Text>
                            <Text>BDS, MDS</Text>
                            <Text>Medical registration verified</Text>
                            <Text>1 speciality(General Dentistry)</Text>
                            <Text>18 years of experience, 2 chamber locations</Text>
                            <Text>12 reviews</Text>

                        </View>
                    </View>
                    <View style={ DoctorCardStyle.borderLine}/>
                    <View style={DoctorCardStyle.margin2}>
                        <Text style={ DoctorCardStyle.fontWeight }>Chambers</Text>
                    </View>
                </View>
            </View>    
        );
           
    }
}

Testing.propTypes = {
    doctorDetails: PropTypes.object,
    userDetails: PropTypes.object,
}

const mapStateToProps = state => ({
    userState: state.userState,
    doctorState: state.doctorState,
    common: state.common
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ userUpdateState, docUpdateState }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Testing);




