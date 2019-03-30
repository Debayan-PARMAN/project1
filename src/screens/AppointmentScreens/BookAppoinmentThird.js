import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState } from '../../actions/user';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, AppRegistry } from 'react-native';
import { CardStyle } from '../../styelsheets/CardStyle';
import Status_Indicator from '../../components/StatusIndicator.1';
import { updateState as userUpdateState } from '../../actions/doctors';
import { updateState as docUpdateState } from '../../actions/doctors';
import BookAppointmentStyle from '../../styelsheets/BookAppointmentStyle';
import { getDoctorDetails,} from '../../actions/doctors';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import Header_Blank from '../../components/Header/Header_Blank';
import { LinearGradient } from 'expo';
import en from '../../messages/en-us';
import Footer from '../../components/Footer/Footer';
import Moment from 'moment';


class Book_Appoinment_Third extends Component {

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

    onValueChange = (value, id) => {
        const { userDetails } = this.props.userState;
        userDetails[id] = value;
        this.props.updateState({ userDetails });
    }

    onToggle = () => {
        this.props.navigation.navigate('BookAppoinmentSecond')

    }

    appointmentDetails = () => {
        //this.props.updateApponitmentDetails();
        this.props.navigation.navigate('PaymentDetails');

    }

    render() {
        const { userDetails } = this.props.userState;
        const { doctorDetails, chamberDetails, AppointmentDetails } = this.props.doctorState;
        const timeDetails = `${AppointmentDetails.appointmentDate}, ${Moment(AppointmentDetails.appointmentTime, "h:mm A").format("HH:mm")}`;

        return (
            <View style={{flex:1}}>
            <View style={BookAppointmentStyle.mainWrapper}>
                <KeyboardAvoidingView behavior="position">
                <ScrollView>
                   
                        <Status_Indicator />
                        <View style={CardStyle.mainContainer}>
                            <View style={CardStyle.flex}>
                                <Text style={CardStyle.name}>{en.appointmentScreens.drLabel} {doctorDetails.doctorName}</Text>
                            </View>
                            <View style={CardStyle.flex}>
                                <Text style={CardStyle.specialization}>BDS, MDS General Dentistry</Text>
                            </View>
                        </View>

                           <Text style={BookAppointmentStyle.HeaderText}>{en.doctorSearchLabel.locationLabel} - {chamberDetails.line1}, {chamberDetails.line2}</Text>
                            <Text style={[BookAppointmentStyle.HeaderText, { marginTop: 5 }]}>{en.appointmentScreens.dateTimeLabel} - {timeDetails}</Text>
                        
                        <View style={BookAppointmentStyle.PatientFirstPart}>
                            <View style={[BookAppointmentStyle.PatientName,]}>                                 
                                     <Text style={BookAppointmentStyle.HeaderText}>{en.appointmentScreens.patientDetailsLabel}</Text>                                                          
                                <TouchableOpacity
                                    style={[buttonStyle.secondaryBtnStyle, buttonStyle.btnSizeStyle3]}
                                    onPress={() => this.props.navigation.navigate('BookAppoinmentSecond')} >
                                    <Text style={[buttonStyle.secondaryBtnText,{fontSize:13}]}> {en.commonLabel.saveBtnLabel} </Text>
                                </TouchableOpacity>                            
                            </View>                         
                             
                            <Text style={[textInputStyle.primaryTextInputFontStyle, {marginTop:4}]}>{en.appointmentScreens.patientNameLabel}</Text></View>    
                            <TextInput style={textInputStyle.primaryTextInput}
                                    //placeholder="Patient name"
                                    value={userDetails.username}
                                    onChangeText={(e) => this.onValueChange(e, 'username')} 
                                />                         
                          
                                 <Text style={[textInputStyle.primaryTextInputFontStyle, {marginTop:4}]}>{en.loginLabels.emailLabel}</Text>
                                <TextInput style={textInputStyle.primaryTextInput}
                                    value={userDetails.emailAddress}
                                    onChangeText={(e) => this.onValueChange(e, 'emailAddress')}  />
                            
                          
                               <Text style={[textInputStyle.primaryTextInputFontStyle, {marginTop:4}]}>{en.loginLabels.mobileNumberLabel}</Text>
                                 <TextInput style={textInputStyle.primaryTextInput}
                                    maxLength={10}
                                    keyboardType="numeric"
                                    value={userDetails.contactNo}
                                    onChangeText={(e) => this.onValueChange(e, 'contactNo')}                                   
                                />                           
                          
                            <Text style={[textInputStyle.primaryTextInputFontStyle, {marginTop:4}]}>{en.appointmentScreens.ageLabel}</Text>
                                <TextInput style={[textInputStyle.primaryTextInput, { width: 200 }]}
                                    keyboardType="numeric"
                                    value={userDetails.age}
                                    onChangeText={(e) => this.onValueChange(e, 'age')}
                                />
                            <Text style={[textInputStyle.primaryTextInputFontStyle, {marginTop:4}]}>{en.appointmentScreens.genderLabel}</Text>
                                <TextInput style={[textInputStyle.primaryTextInput, { width: 130 }]}
                                    value={userDetails.gender}
                                    onChangeText={(e) => this.onValueChange(e, 'gender')}
                            />                         
   
                        <View style={BookAppointmentStyle.btnContainer}>              
                             <TouchableOpacity
                                onPress={this.appointmentDetails}>
                                <LinearGradient
                                    style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle6]}
                                    colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }} >
                                    <Text style={[buttonStyle.primaryBtnText, {fontSize:12}]}>{en.appointmentScreens.confirmBtnLabel2}</Text>
                                </LinearGradient>
                            </TouchableOpacity>                         
                        </View>

                   
                    </ScrollView> 
                    </KeyboardAvoidingView>
                    
            </View>
            <Footer navigation={this.props.navigation} />
            </View>
        );
    }
};

Book_Appoinment_Third.propTypes = {
    doctorDetails: PropTypes.object,
    userDetails: PropTypes.object,
}

const mapStateToProps = state => ({
    userState: state.userState,
    doctorState: state.doctorState,
    common: state.common
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ updateState, userUpdateState, docUpdateState, getDoctorDetails,}, dispatch)
});

AppRegistry.registerComponent('project1', () => Book_Appoinment_Third);

export default connect(mapStateToProps, mapDispatchToProps)(Book_Appoinment_Third);

