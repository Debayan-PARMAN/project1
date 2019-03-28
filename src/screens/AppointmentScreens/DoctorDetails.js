import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState as userUpdateState } from '../../actions/doctors';
import { updateState as docUpdateState } from '../../actions/doctors';
import MyAppointmentStyle from '../../styelsheets/MyAppointmentStyle';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { updateState, doctorSpecializations } from '../../actions/doctors';
import Header_Blank from '../../components/Header/Header_Blank';
import {cancelAppointment } from '../../actions/doctors';
import en from '../../messages/en-us';

class Doctor_Details extends Component {
    // componentWillMount() {
    //     this.props.doctorSpecializations();
    // }

    static navigationOptions = {
        title: 'DOCTOR DETAILS',
        headerStyle: {
            backgroundColor: '#572a6f',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            textAlign: "center",
            justifyContent: 'space-around',
            flex: 1
        },
        headerRight: (<Header_Blank />)
    };

    // getDoctorSpecialization = doctorDetailsList => {
    //     if (doctorDetailsList !== []){
    //         // console.log("For Speciality", doctorDetailsList);
    //         return doctorDetailsList.map(item => item.specialization).join(',');
    //     }
    // };

    render() {
        const { AppointmentDetails, doctorDetails} = this.props.doctorState;
        console.log(doctorDetails.doctorSpecializationList);
        const specialities = doctorDetails.doctorSpecializationList !== undefined 
            && doctorDetails.doctorSpecializationList.length > 0 ?
            doctorDetails.doctorSpecializationList.map(item => item.specialization).join(',')
            :
            ''
        // this.getDoctorSpecialization(doctorDetails.doctorSpecializationList);
        // console.log("hello", doctorDetails.doctorSpecializationList);

        return (
            <View style={MyAppointmentStyle.mainWrapper}>
                <ScrollView>
                    <View
                        style={{ flex: 1, height: 120, flexDirection: 'row', }}>
                        <View style={{ flex: 0.3, margin: 10 }}>
                            <Image
                                style={UpdateUserProfileStyle.profileImageArea}

                                source={imageConstantURI.profileImage.src} />

                        </View>
                        <View style={{ flex: 0.7, margin: 10 }}>
                            <Text style={{ fontSize: 17, }}>{en.appointmentScreens.drLabel} {AppointmentDetails.doctorName}</Text>
                            <Text style={{ fontSize: 17, }}>{specialities}</Text>
                        </View>
                    </View>

                    <View style={{
                        flex: 1, height: 45,
                    }}>
                        <Text style={{
                            fontSize: 17, padding:
                                1, marginLeft: 10, fontWeight: 'bold',
                        }}>Appointment Status</Text>
                        <Text style={{
                            fontSize: 15, padding: 1,
                            marginLeft: 10,
                        }}>{AppointmentDetails.appointmentState} </Text>
                    </View>
                    <View style={{ flex: 1, height: 45, marginTop: 8 }}>
                        <Text style={{
                            fontSize: 17, padding: 1,
                            marginLeft: 10, fontWeight: 'bold',
                        }}>Location</Text>
                        <Text style={{
                            fontSize: 15, padding: 1,
                            marginLeft: 10,
                        }}>{AppointmentDetails.chamberAddress} </Text>
                    </View>

                    <View style={{ flex: 1, height: 45, marginTop: 8 }}>
                        <Text style={{
                            fontSize: 17, padding: 1,
                            marginLeft: 10, fontWeight: 'bold',
                        }}>Appointment Date and Time</Text>
                        <Text style={{
                            fontSize: 15, padding: 1,
                            marginLeft: 10,
                        }}>{AppointmentDetails.appointmentDate}, {AppointmentDetails.appointmentTime} </Text>
                    </View>

                    <View style={{ flex: 1, height: 45, marginTop: 8 }}>
                        <Text style={{
                            fontSize: 16, padding: 1,
                            marginLeft: 10,
                        }}>127 Eastern MetroPolitan Bypass, Netai Nagar,</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, }}>Mukundupur, Kolkata, West Bengal 700099 </Text>
                    </View>

                    <View style={{ flex: 1, height: 45, marginTop: 8 }}>
                        <Text style={{
                            fontSize: 17, padding: 1,
                            marginLeft: 10, fontWeight: 'bold',
                        }}>Patient Name</Text>
                        <Text style={{
                            fontSize: 15, padding: 1,
                            marginLeft: 10,
                        }}>{AppointmentDetails.userName} </Text>
                    </View>

                    <View style={{
                        flex: 1, height: 35, flexDirection:
                            'row', marginTop: 15
                    }}>
                        <View style={{
                            flex: 0.7, justifyContent:
                                'center'
                        }}>
                            <Text style={{
                                fontSize: 17, padding: 1,
                                marginLeft: 10, fontWeight: 'bold',
                            }}>Payment Status </Text>
                            <Text style={{
                                fontSize: 15, padding:
                                    1, marginLeft: 10,
                            }}>{AppointmentDetails.paymentStatus}</Text>
                        </View>

                        <View style={{
                            flex: 0.20, borderRadius: 5,
                            borderWidth: 1, backgroundColor: '#572a6f', justifyContent: 'center'
                        }}>
                            <TouchableOpacity onPress={() => { }} >
                                <Text style={{
                                    fontSize: 15, color: '#fff',
                                    padding: 1, textAlign: 'center'
                                }}>Pay </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={{
                        flex: 1, height: 40, marginTop: 40,
                        flexDirection: 'row', justifyContent: 'center',
                    }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CancelAppointment')}>
                            <View style={{
                                width: 120, height: 30,
                                backgroundColor: '#572a6f', borderWidth: 1, borderRadius: 5
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    alignItems: 'center', color: '#fff', justifyContent: 'center',
                                    marginTop: 3
                                }}>Cancel</Text>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }} >
                            <View style={{
                                width: 120, height: 30,
                                borderWidth: 1, marginLeft: 10, borderRadius: 5
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    color: '#000',
                                    justifyContent: 'center',
                                    marginTop: 3}}>
                                    Reschedule</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        );

    }
};
Doctor_Details.defaultProps  = {
    doctorDetails: {},
    userDetails: {},
    AppointmentDetails: {},
}

Doctor_Details.propTypes = {
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
    ...bindActionCreators({ userUpdateState, updateState, docUpdateState, cancelAppointment, doctorSpecializations}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Doctor_Details);