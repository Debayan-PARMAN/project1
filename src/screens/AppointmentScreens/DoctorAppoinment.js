import React, { Component } from 'react'; 
import { View, Text, TouchableOpacity, KeyboardAvoidingView, ScrollView,Image} from 'react-native'; 
import { LoginStyles,} from '../../styelsheets/MainStyle'; 
import { CardStyle } from '../../styelsheets/CardStyle';
import {DoctorCardStyle} from '../../styelsheets/DoctorCardStyle';
import imageConstantURI from '../../constants/imageConst';
import { getDoctorDetails, } from '../../actions/doctors';
import Doctor_Card from '../../components/Card/DoctorCard';
import DatePicker from 'react-native-datepicker';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState as docUpdateState } from '../../actions/doctors';
import { updateState } from '../../actions/doctors';
import { LinearGradient } from 'expo';
import Header_Blank from '../../components/Header/Header_Blank';
import { buttonStyle, } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import en from '../../messages/en-us';
import Footer from '../../components/Footer/Footer';

class Doctor_Appoinment extends Component {

    // getDoctorQualification = (doctorData) => {
    //     return joiningString(doctorData.doctorQualifications.map(item => item.qualification));

    // }


    componentDidMount() {
        const { userDetails } = this.props.userState;
        console.log(userDetails);
        if (userDetails.userId !== ""){
            this.props.getDoctorDetails();
        }else{
            this.props.navigation.navigate('Login');
            alert("Please Login first");
            
        }
        
        //this.props.onOpenModal(DatePicker);
    }

    static navigationOptions = {
        title: 'DOCTOR APPOINTMENT',
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
    ///Pass Value////
    selectedChamber = (chamberDetails,timeSlot) => {
        const { AppointmentDetails } = this.props.doctorState; 
        AppointmentDetails.appointmentTime = timeSlot;
        this.props.updateState({ chamberDetails, AppointmentDetails});
         this.props.navigation.navigate('BookAppoinment');
    }

    onTimeSlot = () => {
        // console.log('click.....');
        this.props.navigation.navigate('BookAppoinment');
    }

    onDateSelect = (newdate) => {
        const { AppointmentDetails } = this.props.doctorState; 
        AppointmentDetails.appointmentDate = newdate;
        this.setState({ date: newdate });
        this.props.updateState({ AppointmentDetails});
    }

    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }
    render() {
        
        const { doctorDetails, doctordata,  } = this.props.doctorState;
             
        //console.log("Docdata....", this.getDoctorQualification(doctorData) );
        //const { list, keyValue } = this.props.common.singleDoctorDetails;
        //console.log("DETAILS of doctor Getting Chember list:",doctorDetails);
        //console.log("DETAILS of doctor Getting Chember list:", doctorDetails.doctorChamberList);

        const datePickerArea = (<View style={{justifyContent:'center',}}>
                <TouchableOpacity>
                    <DatePicker
                        style={{ width: 200, }}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        minDate={this.state.date}
                        maxDate="2019-31-12"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        mode="date"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 20,
                                top: 4,
                                marginLeft: 5,
                                marginRight: 5,
                            },
                            dateInput: {
                                marginLeft: 10,
                            }

                        }}
                        onDateChange={(date) => { this.onDateSelect(date) }}
                    />
                </TouchableOpacity>
            </View>
        );

        const doctorDetailArea = (<View style={DoctorCardStyle.mainContainerAppiontment}>
                <View style={DoctorCardStyle.height1}> 
                    <View style={DoctorCardStyle.subContainer1}>
                        <View style = { DoctorCardStyle.flex1 }>
                            <View style = { DoctorCardStyle.flex2 }>
                            <Image style={DoctorCardStyle.profileImage} source={imageConstantURI.doctorImage.src} />
                            </View>
                            <View style={DoctorCardStyle.heartIconContainer}>
                                {/* <Image style={ DoctorCardStyle.heartIconImage } source={imageConstantURI.heartIcon.src} /> */}
                            </View>
                        </View>
                        <View style={DoctorCardStyle.textContainer}>
                            <Text style={DoctorCardStyle.doctorName} >{en.appointmentScreens.drLabel} { doctorDetails.doctorName} </Text>
                            <Text style={DoctorCardStyle.doctorDescription} >{en.appointmentScreens.registrationLabel}</Text>
                            <Text style={DoctorCardStyle.doctorDescription} >{doctorDetails.yearsOfExperience} {en.doctorSearchLabel.experienceLabel}</Text>
                            <Text style={DoctorCardStyle.doctorDescription} >12 {en.commonLabel.reviewLabel}</Text>
                        </View>
                        </View>
                       {/* <View style={ DoctorCardStyle.borderLine}/> */}
                        <View style={DoctorCardStyle.margin2}>
                    <Text style={DoctorCardStyle.doctorDescription}>{en.appointmentScreens.chamberLabel}</Text>
                    </View>
                </View>
            </View>
            // <View style={[CardStyle.mainContainer, { flex: 0.1 }]}>
            //     <View style={ CardStyle.flex }>
            //         <Text style={CardStyle.name}>Dr. {doctorDetails.doctorName}</Text>
            //     </View>
            //     <View style={CardStyle.flex}>
            //         <Text style={CardStyle.specialization}>
            //             {/*this.getDoctorQualification(doctorQualifications)*/}
            //         </Text>
            //     </View>
            // </View>
        );

        const doctorChamberDetails = (
            <View style={{ flex: 1 }}>
                {doctorDetails.doctorChamberList !== undefined && doctorDetails.doctorChamberList.length !== 0 ?
                    <ScrollView>    
                        {doctorDetails.doctorChamberList.map(chamber => 
                            <Doctor_Card key={chamber.chamberPk} chamberDetails={chamber} onTimeSlot={this.onTimeSlot} selectedChamber={this.selectedChamber} />
                        )}   
                      
                   </ScrollView>
                     : 
                    <Text>{en.commonLabel.loadingDataMsg}</Text>
                }
            </View>
        );
                
        return (
            <View style={{flex:1}}>
            <View style={DoctorCardStyle.mainWrapper}>
                <KeyboardAvoidingView behavior="position">
                    {datePickerArea}
                    {doctorDetailArea}                   
                    {doctorChamberDetails}
 
                </KeyboardAvoidingView>
            </View>
            <Footer navigation={this.props.navigation} />
            </View>
        );
    }
};

Doctor_Appoinment.propTypes = {
    doctorDetails: PropTypes.object,
    AppointmentDetails: PropTypes.object,    
    userDetails: PropTypes.object,
}

const mapStateToProps = state => ({
    userState: state.userState,
    doctorState: state.doctorState,
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ updateState, getDoctorDetails,}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Doctor_Appoinment);
