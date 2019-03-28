import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState as userUpdateState } from '../../actions/doctors';
import { updateState as docUpdateState } from '../../actions/doctors';
import { getAppoinmentList, cancelAppointment } from '../../actions/doctors';
import MyAppointmentStyle from '../../styelsheets/MyAppointmentStyle';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Appointment_Card_Past from '../../components/Card/AppointmentCardPast';
import Header_Blank from '../../components/Header/Header_Blank';
import { updateState } from '../../actions/doctors';
import { LinearGradient } from 'expo';
import Footer from '../../components/Footer/Footer';

class MyAppointmentPast extends Component {
    componentDidMount() {
        this.props.getAppoinmentList();
        //this.props.cancelAppointment();
    }

    static navigationOptions = {
        title: 'MY APPOINTMENT PAST',
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

    selectedAppointment = (AppointmentDetails) => {
        //console.log("APP",AppointmentDetails);
        //const {AppointmentDetails} = this.props.doctorState;
        this.props.updateState({ AppointmentDetails});
        this.props.navigation.navigate('DoctorDetails');
    }
      
    render() {
        const { appointmentList, AppointmentDetails } = this.props.doctorState;
        //console.log("h.....",appointmentList);
        return (
            <View style={MyAppointmentStyle.mainWrapper}>
                <ScrollView>
                    <View style={MyAppointmentStyle.toptabArea}>
                        <View style={MyAppointmentStyle.toptab}>
                         
                            <View style={MyAppointmentStyle.past}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('MyAppointment')}><Text style={{}}>{en.appointmentScreens.upcomingLabel} </Text></TouchableOpacity>
                            </View>
                         
                            <View style={MyAppointmentStyle.upcoming}>
                                <Text style={MyAppointmentStyle.upcomingtext}>{en.appointmentScreens.pastLabel} </Text>
                            </View>
                        </View>                                                                            
                    </View>
                    
                        <Appointment_Card_Past/>
                    

                    </ScrollView>
                    <Footer navigation={this.props.navigation} />
             </View>
        );
    }
};

MyAppointmentPast.propTypes = {
    doctorDetails: PropTypes.object,
    userDetails: PropTypes.object,
    appointmentList: PropTypes.object,
    AppointmentDetails: PropTypes.object,
}
const mapStateToProps = state => ({
    userState: state.userState,
    doctorState: state.doctorState,
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ userUpdateState, updateState, docUpdateState, getAppoinmentList, cancelAppointment }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MyAppointmentPast);