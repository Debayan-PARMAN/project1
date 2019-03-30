import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState as userUpdateState } from '../../actions/doctors';
import { updateState as docUpdateState } from '../../actions/doctors';
import { cancelAppointment , updateState } from '../../actions/doctors';
import { View, Text, AppRegistry, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import CancelAppointmentStyle from '../../styelsheets/CancelAppointmentStyle';
import { LinearGradient } from 'expo';
import Header_Blank from '../../components/Header/Header_Blank';
import { buttonStyle, } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import en from '../../messages/en-us';
import Footer from '../../components/Footer/Footer';

class CancelAppointmentComment extends Component {
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

    onValueChange = (value, id) => {
        const { commentText } = this.props.doctorState;
        commentText[id] = value;
        this.props.updateState({commentText});
    }

    onCancel = () => {
        const { commentText } = this.props.doctorState;
        if (commentText.appointmentCxlReason !== ''){
            this.props.cancelAppointment();
            this.props.navigation.navigate('MyAppointment');
            
        }else{
            alert("Field comment section");
        }
        
    }

    render() {
        //console.log(commentText);
        const { commentText } = this.props.doctorState;

        return (
            <View style={CancelAppointmentStyle.mainWrapper}>
                <ScrollView>            

                    {/*  <Text style={[CancelAppointmentStyle.AreYouSureText, {margin:10}]}>
                            {en.appointmentScreens.cancelCommentHeading}</Text>*/}
                   
                    <View style={CancelAppointmentStyle.CancelCommentContainer}>
                        <Text style={CancelAppointmentStyle.PleaseShareText}>Please Share the Reason </Text>
                        {/* <View style={{ flex: 0.7, height: 120,}}> */}   
                      <View style = {{justifyContent:'center',alignItems:'center'}}>                     
                            <TextInput
                            style={CancelAppointmentStyle.CancelCommentContainerTextInput}
                                editable={true}
                                maxLength={250}
                                multiline={true}
                                //placeholder="Please Type your Comment "
                                onChangeText={(e) => this.onValueChange(e, 'appointmentCxlReason')}
                                value={commentText.appointmentCxlReason}
                            />
                        {/* </View> */}
                        </View>
                    </View>

                    <View style={CancelAppointmentStyle.YesBtnContainer}>
                        <TouchableOpacity onPress={this.onCancel} >
                            <LinearGradient
                                style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
                                colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }} >
                                <Text style={[buttonStyle.primaryBtnText]}>{en.commonLabel.submitLabel}</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                  
                    <Text style={[CancelAppointmentStyle.AreYouSureText,]}>{en.appointmentScreens.orLabel}</Text>
                   
                    <View style={CancelAppointmentStyle.YesBtnContainer}>               
                       

                        <TouchableOpacity
                            style={[buttonStyle.secondaryBtnStyle, buttonStyle.btnSizeStyle6]}
                            onPress={() => this.props.navigation.navigate('AppointmentDetails')} >
                            <Text style={[buttonStyle.secondaryBtnText]}>{en.appointmentScreens.goBackBtnLabel}</Text>
                        </TouchableOpacity>
                        
                    </View>

                </ScrollView>
                <Footer navigation={this.props.navigation} />
            </View>
        );
    }
};
CancelAppointmentComment.propTypes = {
    doctorDetails: PropTypes.object,
    userDetails: PropTypes.object,
    //appointmentList: PropTypes.object,
    AppointmentDetails: PropTypes.object,
    commentText: PropTypes.object,
}
const mapStateToProps = state => ({
    userState: state.userState,
    doctorState: state.doctorState,
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ userUpdateState, docUpdateState, updateState, cancelAppointment }, dispatch)
});

AppRegistry.registerComponent('project1', () => CancelAppointmentComment);

export default connect(mapStateToProps, mapDispatchToProps)(CancelAppointmentComment);
