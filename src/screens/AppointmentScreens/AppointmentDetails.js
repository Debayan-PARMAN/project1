
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState as userUpdateState } from '../../actions/doctors';
import { updateState as docUpdateState } from '../../actions/doctors';
import AppointmentDetailsStyle from '../../styelsheets/AppointmentDetailsStyle';
import { View, Text, Image, TouchableOpacity,ScrollView } from 'react-native';
import imageConstantURI from '../../../src/constants/imageConst';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import { LinearGradient } from 'expo';
import { updateState, doctorSpecializations } from '../../actions/doctors';
import { cancelAppointment } from '../../actions/doctors';
import en from '../../messages/en-us';

class AppointmentDetails extends Component {
    
    static navigationOptions = {
        title: 'APPOINTMENT DETAILS',
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
            paddingLeft: 40,
            //justifyContent: 'center',
            //alignItems: 'center',
        },
    };        

    render() {

        const { AppointmentDetails, doctorDetails } = this.props.doctorState;
        //console.log(doctorDetails.doctorSpecializationList);
        const specialities = doctorDetails.doctorSpecializationList !== undefined
            && doctorDetails.doctorSpecializationList.length > 0 ?
            doctorDetails.doctorSpecializationList.map(item => item.specialization).join(',')
            :
            ''       
        return (
            <View style={AppointmentDetailsStyle.mainWrapper}>
                <ScrollView>    
                    <View style={AppointmentDetailsStyle.TopFlex}>
                        <View style={AppointmentDetailsStyle.ImageContainer}>
                            <Image style={AppointmentDetailsStyle.profileImageArea}
                                source={imageConstantURI.doctorImage.src} />
                        </View>
                        <View style={AppointmentDetailsStyle.DoctorNameContainer}>
                            <Text style={AppointmentDetailsStyle.DoctorName}>{en.appointmentScreens.drLabel} {AppointmentDetails.doctorName}</Text> 
                            <Text style={AppointmentDetailsStyle.DoctorDesignation}>{specialities} </Text>
                        </View>
                    </View>

                    <View style={AppointmentDetailsStyle.AppointmentStatusContainer}>                       
                        <Text style={AppointmentDetailsStyle.HeaderText}>{en.appointmentScreens.appointmentStatusLabel}</Text>
                        <Text style={AppointmentDetailsStyle.FooterText}>{AppointmentDetails.appointmentState} </Text>                       
                    </View>
                    <View style={[AppointmentDetailsStyle.LocationContainer,{height:85}]}>
                        <Text style={AppointmentDetailsStyle.HeaderText}>{en.doctorSearchLabel.locationLabel}</Text>
                        <Text style={AppointmentDetailsStyle.FooterText}>{AppointmentDetails.chamberAddress}Amri Hospital</Text>
                      
                            <Text style={AppointmentDetailsStyle.FooterText}>127 Eastern MetroPolitan Bypass, Netai Nagar,</Text>
                            <Text style={AppointmentDetailsStyle.FooterText}>Mukundupur, Kolkata, West Bengal 700099 </Text>
                       
                    </View>

                     <View style={AppointmentDetailsStyle.LocationContainer}>  
                        <Text style={AppointmentDetailsStyle.HeaderText}>{en.appointmentScreens.appointmentDateLabel}</Text>
                        <Text style={AppointmentDetailsStyle.FooterText}>{Moment(AppointmentDetails.appointmentDate).format("DD-MM-YYYY")}, {Moment(AppointmentDetails.appointmentTime, "h:mm A").format("HH:mm")} </Text>
                    </View>

                   

                   <View style={AppointmentDetailsStyle.LocationContainer}>  
                        <Text style={AppointmentDetailsStyle.HeaderText}>{en.appointmentScreens.patientNameLabel}</Text>
                        <Text style={AppointmentDetailsStyle.FooterText}>{AppointmentDetails.userName}</Text>
                    </View>

                    <View style={AppointmentDetailsStyle.PaymentStatusContainer}>
                        <View style={AppointmentDetailsStyle.PaymentStatusLeftContainer}>
                            <Text style={AppointmentDetailsStyle.HeaderText}>{en.appointmentScreens.paymentStatusLabel} </Text>
                            <Text style={AppointmentDetailsStyle.FooterText}>{AppointmentDetails.paymentStatus} </Text>
                        </View>
                        
                        <View style={AppointmentDetailsStyle.PaymentStatusRightContainer}>
                            <TouchableOpacity style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle5]}
                            onPress={() => { }} >                            
                                <Text style={[buttonStyle.primaryBtnText]}>{en.appointmentScreens.payLabel} </Text>                         
                         </TouchableOpacity> 
                         </View>                       
                    </View>

                    <View style={AppointmentDetailsStyle.BtnContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CancelAppointment')}>                       
                         <View style={[buttonStyle.secondaryBtnStyle, buttonStyle.btnSizeStyle2]}>                           
                                <Text style={[buttonStyle.secondaryBtnText]}>{en.commonLabel.cancelBtnLabel} </Text>
                         </View>       
                        </TouchableOpacity>   
                        <TouchableOpacity onPress={() => { }} >
                            <View style={[buttonStyle.secondaryBtnStyle, buttonStyle.btnSizeStyle2]}>
                                <Text style={[buttonStyle.secondaryBtnText]}>{en.commonLabel.rescheduleBtnLabel}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
};
AppointmentDetails.defaultProps = {
    doctorDetails: {},
    userDetails: {},
    AppointmentDetails: {},
}
AppointmentDetails.propTypes = {
    doctorDetails: PropTypes.object,
    userDetails: PropTypes.object,
    //appointmentList: PropTypes.object,
    AppointmentDetails: PropTypes.object,
}
const mapStateToProps = state => ({
    userState: state.userState,
    doctorState: state.doctorState,
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ userUpdateState, updateState, docUpdateState, cancelAppointment, doctorSpecializations }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentDetails);

