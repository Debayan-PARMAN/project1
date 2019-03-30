import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, AppRegistry } from 'react-native';
import { CardStyle } from '../../styelsheets/CardStyle';
import ToggleSwitch from 'toggle-switch-react-native';
import Status_Indicator from '../../components/StatusIndicator';
import { updateState as userUpdateState } from '../../actions/doctors';
import { updateState as docUpdateState } from '../../actions/doctors';
import { getDoctorDetails, } from '../../actions/doctors';
import Header_Blank from '../../components/Header/Header_Blank';
import { joiningString } from '../../Utils';
import { LinearGradient } from 'expo';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import en from '../../messages/en-us';
import Footer from '../../components/Footer/Footer';
import Moment from 'moment';


class Book_Appoinment extends Component {
    getDoctorQualification = (doctorData) => {
        return joiningString(doctorData.doctorQualifications.map(item => item.qualification));
    }

    static navigationOptions = {
        title: 'BOOK APPOINTMENT',
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

    onToggle = () => {
        const { AppointmentDetails } = this.props.doctorState;
        if (AppointmentDetails.appointmentDate !==''){
            this.props.navigation.navigate('BookAppoinmentSecond')
        }else{
            alert('Please Select Date in Previous Page.......');
        }
        

    }

    render() {
        const { doctorDetails, chamberDetails, AppointmentDetails } = this.props.doctorState;

        // console.log(AppointmentDetails);
        const timeDetails = `${AppointmentDetails.appointmentDate}, ${Moment(AppointmentDetails.appointmentTime, "h:mm A").format("HH:mm")}`;
    
        return (
            <View style={{flex:1}}>
            <View style={BookAppointmentStyle.mainWrapper}>
                <ScrollView>
                    <KeyboardAvoidingView behavior='position' >
                        <Status_Indicator />
                        <View style={CardStyle.mainContainer}>
                            <View style={CardStyle.flex}>
                                <Text style={CardStyle.name}>{en.appointmentScreens.drLabel} {doctorDetails.doctorName}</Text>
                            </View>
                            <View style={CardStyle.flex}>
                                <Text style={CardStyle.specialization}>BDS, MDS General Dentistry</Text>
                            </View>
                        </View>                       
                        <Text style={CardStyle.name}>
                            { en.doctorSearchLabel.locationLabel } - {chamberDetails.line1}, {chamberDetails.line2}
                        </Text>
                        <Text style={CardStyle.name}>
                            {en.appointmentScreens.dateTimeLabel} - {timeDetails}
                        </Text>
                       
                        <View style={BookAppointmentStyle.TabMainContainer}>
                            <View style={[BookAppointmentStyle.TabContainer, {backgroundColor: '#93278f'}]}>
                                <TouchableOpacity onPress={() => console.log('First Consultation')}>
                                    <Text style={BookAppointmentStyle.TabText1}>
                                    {en.appointmentScreens.consultationLabel}
                               </Text></TouchableOpacity>
                            </View>
                            <View style={BookAppointmentStyle.TabContainer} >
                                <TouchableOpacity onPress={() => console.log('Follow Up')}>
                                    <Text style={BookAppointmentStyle.TabText2}>
                                    { en.appointmentScreens.followUpLabel }
                               </Text></TouchableOpacity>
                            </View>
                        </View>
                        <View style={BookAppointmentStyle. PatientContainer}>
                            <View style={BookAppointmentStyle. PatientName}>
                                <View style={BookAppointmentStyle.PatientFirstPart}>
                                    <Text style={textInputStyle.primaryTextInputFontStyle}>{ en.appointmentScreens.patientNameLabel }</Text>
                                </View> 
                                <View style={BookAppointmentStyle.PatientSecondPart}>
                                    <Text style={BookAppointmentStyle.HeaderText}>{ en.appointmentScreens.textLabel }</Text>
                                    <ToggleSwitch
                                        onColor = '#d8c0ef'
                                        offColor='#d8c0ef'
                                        size='small'
                                        onToggle={this.onToggle} />
                                 </View>       
                            </View>
                            
                            <View style={BookAppointmentStyle.TextInputContainer}>
                                <TextInput style={textInputStyle.primaryTextInput}
                                />
                            </View>
                            <View style={BookAppointmentStyle.TextInputContainer}>
                                <Text style={textInputStyle.primaryTextInputFontStyle}>{en.loginLabels.emailLabel}</Text>
                                    <TextInput style={textInputStyle.primaryTextInput}
                                />
                            </View>
                            <View style={BookAppointmentStyle.TextInputContainer}>
                                <Text style={textInputStyle.primaryTextInputFontStyle}>{en.loginLabels.mobileNumberLabel}</Text>
                                <TextInput style={[textInputStyle.primaryTextInput, { width: 200 }]}
                                />
                            </View>
                            <View style={BookAppointmentStyle.TextInputContainer}>
                                <Text style={textInputStyle.primaryTextInputFontStyle}>{en.appointmentScreens.ageLabel}</Text>
                                <TextInput style={[textInputStyle.primaryTextInput, { width: 130 } ]}
                                    />                                     
                            </View>                         
                            <Text style={[textInputStyle.primaryTextInputFontStyle, {marginTop:5}]}>{en.appointmentScreens.genderLabel}</Text>
                            <View style={BookAppointmentStyle.genderBtnContainer}>
                                <TouchableOpacity
                                    style={[buttonStyle.secondaryBtnStyle, buttonStyle.btnSizeStyle4]}
                                    onPress={() => console.log('Men Botton Tiggered')} >
                                    <Text style={[buttonStyle.secondaryBtnText]}>{en.userScreensLabel.manGenderLabel}</Text>
                                </TouchableOpacity>
                               
                                <TouchableOpacity
                                    style={[buttonStyle.secondaryBtnStyle, buttonStyle.btnSizeStyle4]}
                                    onPress={() => console.log('Women Botton Tiggered')} >
                                    <Text style={[buttonStyle.secondaryBtnText]}>{en.userScreensLabel.womanGenderLabel}</Text>
                                </TouchableOpacity> 
                                                              
                                <TouchableOpacity
                                    style={[buttonStyle.secondaryBtnStyle, buttonStyle.btnSizeStyle4]}
                                    onPress={() => console.log('Others Botton Tiggered')} >
                                    <Text style={[buttonStyle.secondaryBtnText]}>{en.userScreensLabel.otherGenderLabel}</Text>
                                </TouchableOpacity>       
                                
                            </View>
                        </View>
                    </KeyboardAvoidingView>

                    <View style={BookAppointmentStyle.btnContainer}>
                        <TouchableOpacity onPress={this.onToggle}>                    
                            <LinearGradient
                                style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle6,]}
                                colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }} >
                                <Text style={[buttonStyle.primaryBtnText]}>Next</Text>
                            </LinearGradient>
                        </TouchableOpacity> 
                    </View>
         </ScrollView>
        
        </View>
        <Footer navigation={this.props.navigation} />
        </View>
        );
    }
};

Book_Appoinment.propTypes = {
    doctorDetails: PropTypes.object,
    userDetails: PropTypes.object,
}

const mapStateToProps = state => ({
    userState: state.userState,
    doctorState: state.doctorState,
    common: state.common
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ userUpdateState, docUpdateState, getDoctorDetails, }, dispatch)
});
AppRegistry.registerComponent('project1', () => Book_Appoinment);

export default connect(mapStateToProps, mapDispatchToProps)(Book_Appoinment);

