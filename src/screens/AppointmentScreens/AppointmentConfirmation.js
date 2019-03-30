import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Image, Text, TouchableOpacity, ScrollView, TouchableHighlight, AppRegistry } from 'react-native';
import { LinearGradient } from 'expo';
import Header_Home from '../../components/Header/Header_Menu';
import { AppointmentConfirmationStyle } from '../../styelsheets/AppointmentConfirmationStyle';
import { updateState as userUpdateState } from '../../actions/doctors';
import { updateState as docUpdateState } from '../../actions/doctors';
import { getDoctorDetails, } from '../../actions/doctors';
import { updateState } from '../../actions/user';
import imageConstantURI from '../../constants/imageConst';
import { buttonStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import en from '../../messages/en-us';
import Moment from 'moment';
import Header_Blank from '../../components/Header/Header_Blank';
import Footer from '../../components/Footer/Footer';

class Appointment_Confirmation extends Component {
    onHome = () => {
        this.props.navigation.navigate('Home');
    };

    static navigationOptions = {
        title: 'BOOKING CONFIRMATION',
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
        headerRight: (<Header_Blank />),
         headerLeft: (<Header_Home onHome={this.onHome} />)
    };
       
   

    render() {
        const {chamberDetails, AppointmentDetails } = this.props.doctorState;
        //const { userDetails } = this.props.userState;
        
        const timeDetails = `${Moment(AppointmentDetails.appointmentDate).format("DD-MM-YYYY")}, ${Moment(AppointmentDetails.appointmentTime, "h:mm A").format("HH:mm")}`;
        const heart_right = (
            <View style={AppointmentConfirmationStyle.heartImageContainer}>
                <Image style={AppointmentConfirmationStyle.heartImageStyle}
                    source={imageConstantURI.heartRight.src}/>
            </View>
        );

        const exclamation = (
            <View style={AppointmentConfirmationStyle.heartImageContainer}>
                <Image style={AppointmentConfirmationStyle.heartImageStyle}
                    source={imageConstantURI.exclamation.src} />
               
            </View>
        );

        const confirm = (
            <View style={AppointmentConfirmationStyle.appointmentConfirmedContainer}>
                <Text style={AppointmentConfirmationStyle.appointmentConfirmedText}>{en.appointmentScreens.appointmentConfirmedLabel}</Text>              
                <Text style={AppointmentConfirmationStyle.appointmentConfirmedText}>{en.appointmentScreens.refNoLabel} {AppointmentDetails.appointmentRefNo}</Text>                          
            </View>  
        );

        const declined = (
            <View style={AppointmentConfirmationStyle.appointmentConfirmedContainer}>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={AppointmentConfirmationStyle.appointmentConfirmedText}>{en.appointmentScreens.appointmentDeclinedLabel}</Text>
                </TouchableHighlight>                
            </View>  
        );
        
        const body = (
                <View>
                <View style={AppointmentConfirmationStyle.flex}>
                    <View style={AppointmentConfirmationStyle.drContainer}>
                        <View style={AppointmentConfirmationStyle.flex}>
                            <Text style={AppointmentConfirmationStyle.drName}>
                                {en.appointmentScreens.drLabel} {AppointmentDetails.doctorName}
                            </Text>
                        </View>
                        <View style={AppointmentConfirmationStyle.drDegreeContainer}>
                            <Text style={AppointmentConfirmationStyle.drDegreeText}>

                            </Text>
                        </View>
                        <View style={AppointmentConfirmationStyle.drSpecialization}>
                            <Text>

                            </Text>
                        </View>
                    </View>
                    <View style={AppointmentConfirmationStyle.locationContainer}>
                        <View>
                            <Text>
                                {en.doctorSearchLabel.locationLabel}
                                </Text>
                        </View>
                        <View>
                            <Text style={AppointmentConfirmationStyle.text}>
                                {chamberDetails.line1}, {chamberDetails.line2}
                            </Text>
                        </View>
                    </View>
                    <View style={AppointmentConfirmationStyle.dateTimeContainer}>
                        <View>
                            <Text>
                                {en.appointmentScreens.appointmentDateLabel}
                                </Text>
                        </View>
                        <View>
                            <Text style={AppointmentConfirmationStyle.text}>
                                {timeDetails}
                            </Text>
                        </View>
                    </View>
                    <View style={AppointmentConfirmationStyle.addressContainer}>
                        <Text>
                            {chamberDetails.city}, {chamberDetails.state}, {chamberDetails.city}, {chamberDetails.pinCode}
                        </Text>
                    </View>
                    <View style={AppointmentConfirmationStyle.getDirectionContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                            <LinearGradient
                                style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1,]}
                                colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }} >
                                <Text style={[buttonStyle.primaryBtnText]}>{en.appointmentScreens.getDirectionLabel} </Text>
                            </LinearGradient>
                        </TouchableOpacity>                       
                    </View>
                </View>
                <View style={AppointmentConfirmationStyle.flex}>
                    <View style={AppointmentConfirmationStyle.pnameStatusContainer}>
                        <View>
                            <Text style={AppointmentConfirmationStyle.text}>
                                {en.appointmentScreens.patientNameLabel}
                                </Text>
                        </View>
                        <View style={AppointmentConfirmationStyle.pnameStatus}>
                            <Text>
                                {AppointmentDetails.userName}
                            </Text>
                        </View>
                    </View>
                    <View style={AppointmentConfirmationStyle.pnameStatusContainer}>
                        <View>
                            <Text style={AppointmentConfirmationStyle.text}>
                                {en.appointmentScreens.paymentStatusLabel}
                            </Text>
                        </View>
                        <View style={AppointmentConfirmationStyle.pnameStatus}>
                            <Text>
                                    {AppointmentDetails.paymentStatus}
                            </Text>
                        </View>
                    </View>
                    <View style={AppointmentConfirmationStyle.buttonContainer}>
                            <TouchableHighlight
                                style={[buttonStyle.secondaryBtnStyle, buttonStyle.btnSizeStyle1]}
                                onPress={() => this.props.navigation.navigate('Home')}                            >
                                <Text style={[buttonStyle.secondaryBtnText]}>{en.commonLabel.cancelBtnLabel}</Text>
                            </TouchableHighlight>
                            <TouchableHighlight
                                style={[buttonStyle.secondaryBtnStyle, buttonStyle.btnSizeStyle1]}
                                onPress={() => this.props.navigation.navigate('Home')}>
                                <Text style={[buttonStyle.secondaryBtnText]}>{en.commonLabel.rescheduleBtnLabel} </Text>
                            </TouchableHighlight>
                    </View>
                </View>
            </View>
            );
        


        return (
            <View style={{ flex: 1 }}>
            <View style={AppointmentConfirmationStyle.mainContainer}>
                <ScrollView>
                    <View style={AppointmentConfirmationStyle.flex}>
                        <View style={AppointmentConfirmationStyle.subContainer}>
                            <View style={AppointmentConfirmationStyle.flex}>
                                <Text style={AppointmentConfirmationStyle.medePal}> {en.commonLabel.medEPalLabel}</Text>
                            </View>
                            { heart_right}
                            <View style={AppointmentConfirmationStyle.flex}>
                                <View style={AppointmentConfirmationStyle.downloadImageContainer}>
                                    <TouchableOpacity>
                                        <Image style={AppointmentConfirmationStyle.downloadImageStyle}
                                            source={imageConstantURI.download.src}/>
                                    </TouchableOpacity>
                                </View>
                                <View style={AppointmentConfirmationStyle.pdfContainer}>
                                    <Text style={AppointmentConfirmationStyle.text}> {en.commonLabel.pdfLabel}</Text>
                                </View>
                            </View>
                        </View>
                      { confirm }
                    </View>
                    { body }
                   
                </ScrollView>                
               </View>
                <Footer navigation={this.props.navigation} />
            </View> 
        );

    }
}

Appointment_Confirmation.propTypes = {
    doctorDetails: PropTypes.object,
    userDetails: PropTypes.object,
}

const mapStateToProps = state => ({
    userState: state.userState,
    doctorState: state.doctorState,
    common: state.common,
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ updateState, userUpdateState, docUpdateState, getDoctorDetails, }, dispatch)
});

AppRegistry.registerComponent('project1', () => Appointment_Confirmation);

export default connect(mapStateToProps, mapDispatchToProps)(Appointment_Confirmation);
