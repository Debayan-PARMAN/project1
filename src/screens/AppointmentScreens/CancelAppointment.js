import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState as userUpdateState } from '../../actions/doctors';
import { updateState as docUpdateState } from '../../actions/doctors';
import { getAppoinmentList, } from '../../actions/doctors';
import CancelAppointmentStyle from '../../styelsheets/CancelAppointmentStyle';
import { LinearGradient } from 'expo';
import Header_Blank from '../../components/Header/Header_Blank';
import { buttonStyle,  } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import { View, Text,TouchableOpacity, KeyboardAvoidingView,  ScrollView } from 'react-native';
import Footer from '../../components/Footer/Footer';

class CancelAppointment extends Component {
    // componentDidMount() {
    //     this.props.getAppoinmentList();
    // }

    static navigationOptions = {
        title: 'CANCEL APPOINTMENT',
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


    render() {
        const { AppointmentDetails } = this.props.doctorState;
        return (
            <View style={CancelAppointmentStyle.mainWrapper}>
                <ScrollView>                   
                    <KeyboardAvoidingView  behavior='position' >
                    
                    <View style={CancelAppointmentStyle.AreYouSureContainer}>
                        <Text style={CancelAppointmentStyle.AreYouSureText }>
                            {en.appointmentCancelMsg.appointmentCancelMsgInfo} {en.appointmentScreens.drLabel}{AppointmentDetails.doctorName} on {AppointmentDetails.appointmentDate} at {AppointmentDetails.appointmentTime}</Text>
                    </View>                    

                   
                        <View style={CancelAppointmentStyle.YesBtnContainer}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('CancelAppointmentComment')}>
                                <LinearGradient
                                    style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle6]}
                                    colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }} >
                                    <Text style={[buttonStyle.primaryBtnText, {fontSize:14}]}>{en.appointmentScreens.cancelBtnLabel2}</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                     </View> 

                    <View style={CancelAppointmentStyle.YesBtnContainer}>                                              
                           

                            <TouchableOpacity
                                style={[buttonStyle.secondaryBtnStyle, buttonStyle.btnSizeStyle6]}
                                onPress={() => this.props.navigation.navigate('AppointmentDetails')} >
                                <Text style={[buttonStyle.secondaryBtnText]}>{en.appointmentScreens.goBackBtnLabel}</Text>
                            </TouchableOpacity>

                    </View>                  
                </KeyboardAvoidingView>
                </ScrollView>
                <Footer navigation={this.props.navigation} />
            </View>
        );
    }
};
CancelAppointment.propTypes = {
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
    ...bindActionCreators({ userUpdateState, docUpdateState, getAppoinmentList, }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CancelAppointment);
