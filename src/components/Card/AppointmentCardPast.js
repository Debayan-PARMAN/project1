import React, { Component } from 'react';
import MyAppointmentStyle from '../../styelsheets/MyAppointmentStyle';
import { View, Text, Image, TouchableOpacity,} from 'react-native';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import en from '../../messages/en-us';
import imageConstantURI from '../../constants/imageConst';

export default class Appointment_Card_Past extends Component {
    render() {
        const { AppointmentDetails } = this.props;
        //console.log(AppointmentDetails);
        return (
            
            <View style ={{ padding: 10 }}>
                {/* ************for rate tab********************* */}
                <View style={[MyAppointmentStyle.dateArea,{marginBottom: 5 }]}>
                    <Text style={MyAppointmentStyle.datetext}>Feb 11, 2019, Monday</Text>
                </View>
                <View style={MyAppointmentStyle.pastContainer}>
                    <View
                        style={MyAppointmentStyle.pastInnerContainer}>
                        <View
                            style={MyAppointmentStyle.doctorContainer}>
                            
                                <Text style={MyAppointmentStyle.doctorText}>{en.appointmentScreens.drLabel} Rajib Bhattarcharya </Text>
                            
                            
                                <Text style={MyAppointmentStyle.completeText}>{en.appointmentScreens.completedLabel} </Text>
                            
                        </View>

                        <View
                            style={MyAppointmentStyle.locationContainer}>
                            <View
                                style={MyAppointmentStyle.locationInnerContainer}>
                                <View style={MyAppointmentStyle.location}>
                                     <Text style={MyAppointmentStyle.chamberLocation}>Amri SaltLake, 10am </Text>
                                </View>
                                <View style={MyAppointmentStyle.patient}>
                                    <Text style={MyAppointmentStyle.patientName}>{en.appointmentScreens.forLabel} RupNarayan Bhattarcharya </Text>
                                </View>
                            </View>
                            <View
                                style={MyAppointmentStyle.ImageContainer}>
                                <TouchableOpacity >
                                    <Image style={MyAppointmentStyle.ImageSize}
                                        source={imageConstantURI.rightArrow.src} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View
                            style={MyAppointmentStyle.rateprescriptionorderContainer}>
                            <TouchableOpacity style={[buttonStyle.secondaryBtnStyle, buttonStyle.btnSizeStyle7]}>
                                    <Text style={MyAppointmentStyle.ratebtnText}>{en.appointmentScreens.rateLabel} </Text>                               
                            </TouchableOpacity>
                            
                           <TouchableOpacity style={[buttonStyle.secondaryBtnStyle, buttonStyle.btnSizeStyle7]}>
                                    <Text style={MyAppointmentStyle.ratebtnText}>{en.appointmentScreens.prescriptionLabel}</Text>
                               
                            </TouchableOpacity>
                             <TouchableOpacity style={[buttonStyle.secondaryBtnStyle, buttonStyle.btnSizeStyle7]}>
                                    <Text style={MyAppointmentStyle.ratebtnText}>{en.appointmentScreens.orderLabel} </Text>
                              
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
                
        );
    }
};

