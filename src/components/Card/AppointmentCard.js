import React, { Component } from 'react';
import MyAppointmentStyle from '../../styelsheets/MyAppointmentStyle';
import { View, Text, Image, TouchableOpacity,} from 'react-native';
import { Card } from 'react-native-elements';
import { DoctorCardStyle } from '../../styelsheets/DoctorCardStyle';
import imageConstantURI from '../../constants/imageConst';

export default class Appointment_Card extends Component {
    navigateTo = () => {
        this.props.doctorSpecializations();
        //this.props.navigation.navigate('MyAppointmentPast');
    };

    render() {
        const { AppointmentDetails } = this.props;
        //console.log(AppointmentDetails);
        return (
            <Card container style={DoctorCardStyle}>
            <View>
                    <View style={MyAppointmentStyle.dateArea}>
                    <Text style={MyAppointmentStyle.datetext}>{AppointmentDetails.appointmentDate}</Text>
                    </View>
                    <View style={MyAppointmentStyle.cardArea}>
                        <View style={MyAppointmentStyle.doctordetails}>
                            <View style={MyAppointmentStyle.cardInnerArea}>
                                <Text style={MyAppointmentStyle.doctorName}>{en.appointmentScreens.drLabel} {AppointmentDetails.doctorName} </Text>
                            <Text style={MyAppointmentStyle.chamberLocation}>{AppointmentDetails.chamberName},{AppointmentDetails.appointmentTime}</Text>
                            <Text style={MyAppointmentStyle.patientName}>{AppointmentDetails.appointmentByName}</Text>
                            <Text style={MyAppointmentStyle.confirmpaid}>{AppointmentDetails.paymentStatus}               {AppointmentDetails.totalFees}</Text>
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
            </Card>      
        );
    }
};

