import React, { Component } from 'react';
import MyAppointmentStyle from '../../styelsheets/MyAppointmentStyle';
import { View, Text, Image, TouchableOpacity,} from 'react-native';
// import { Card } from 'react-native-elements';
// import { DoctorCardStyle } from '../../styelsheets/DoctorCardStyle';
import imageConstantURI from '../../constants/imageConst';
import en from '../../messages/en-us';
import Moment from 'moment';

export default class Appointment_Card extends Component {
    navigateTo = () => {
        this.props.doctorSpecializations();
        //this.props.navigation.navigate('MyAppointmentPast');
    };

    render() {
        const { AppointmentDetails } = this.props;
        //console.log(AppointmentDetails);
        return (
    
                <View style = {{ padding: 10 }}>
                    <View style={MyAppointmentStyle.dateArea}>
                    <Text style={MyAppointmentStyle.datetext}>{Moment(AppointmentDetails.appointmentDate).format("DD-MM-YYYY")}</Text>
                    </View>
                    <View style={MyAppointmentStyle.cardArea}>
                        <View style={MyAppointmentStyle.doctordetails}>
                            <View style={MyAppointmentStyle.cardInnerArea}>
                                <Text style={MyAppointmentStyle.doctorName}>{en.appointmentScreens.drLabel} {AppointmentDetails.doctorName} </Text>
                            <Text style={MyAppointmentStyle.chamberLocation}>{AppointmentDetails.chamberName}, {Moment(AppointmentDetails.appointmentTime, "h:mm A").format("HH:mm")}</Text>
                            <Text style={MyAppointmentStyle.patientName}>{en.appointmentScreens.forLabel} {AppointmentDetails.appointmentByName}</Text>
                            <Text style={MyAppointmentStyle.confirmpaid}>{AppointmentDetails.paymentStatus}               {AppointmentDetails.appointmentState}</Text>
                            </View>
                            <View style={MyAppointmentStyle.rightArrow}>
                                <TouchableOpacity onPress={(e) => this.props.selectedAppointment(AppointmentDetails)}>
                                    <Image style={MyAppointmentStyle.rightArrowImageContainer}
                                        source={imageConstantURI.rightArrow.src}/>
                                    </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>
                 
        );
    }
};

