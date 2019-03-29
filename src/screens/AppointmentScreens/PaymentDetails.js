import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateState } from '../../actions/user';
import { View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Button} from 'react-native';
import { LoginStyles, FontStyles,} from '../../styelsheets/MainStyle';
import { CardStyle } from '../../styelsheets/CardStyle';
import Status_Indicator from '../../components/StatusIndicator.2';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { updateState as userUpdateState } from '../../actions/doctors';
import { updateState as docUpdateState } from '../../actions/doctors';
import { getDoctorDetails, updateApponitmentDetails } from '../../actions/doctors';
import imageConstantURI from '../../constants/imageConst';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import Header_Blank from '../../components/Header/Header_Blank';
import { LinearGradient } from 'expo';
import en from '../../messages/en-us';
import Footer from '../../components/Footer/Footer';
import Moment from 'moment';

class Payment_Details extends Component {

    static navigationOptions = {
        title: 'PAYMENT DETAILS',
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

    onToggle = () => {
        this.props.navigation.navigate('BookAppoinmentSecond')

    }

    appointmentDetails = () => {
        
            this.props.updateApponitmentDetails();
            this.props.navigation.navigate('AppointmentConfirmation');
       

    }

    onSelect(index, value) {
        this.setState({
            text: `Selected index: ${index} , value: ${value}`
        })
    }

    render() {
       
        const { doctorDetails, chamberDetails, AppointmentDetails } = this.props.doctorState;
       
        const doctorName = (
            <View style={CardStyle.mainContainer}>
                <View style={CardStyle.flex}>
                    <Text style={CardStyle.name}>{en.doctorSearchLabel.drLabel} {doctorDetails.doctorName}</Text>
                </View>
                <View style={CardStyle.flex}>
                    <Text style={CardStyle.specialization}>BDS, MDS General Dentistry</Text>
                </View>
            </View>
        );

        const chamberArea = (
            <View style={BookAppointmentStyle.chamberArea}>
                <Text style={[BookAppointmentStyle.HeaderText,]}>{chamberDetails.line1}, {chamberDetails.line2}, {AppointmentDetails.appointmentDate},  {Moment(AppointmentDetails.appointmentTime, "h:mm A").format("HH:mm")}</Text>
            </View>
        );

        const feesArea = (
            <View style={BookAppointmentStyle.consultencyContainer}>               
                    <Text style={[BookAppointmentStyle.HeaderText, ]}>{en.appointmentScreens.consultancyFeeLabel}</Text>
                    <Text style={[BookAppointmentStyle.HeaderText, { textAlign: 'right' }]}>{chamberDetails.fees} {en.doctorSearchLabel.rsLabel}</Text>
            </View>
        );

        const GSTArea = (
            <View style={BookAppointmentStyle.consultencyContainer}>               
                    <Text style={[BookAppointmentStyle.HeaderText, ]}>{en.appointmentScreens.gstLabel}</Text>              
                    <Text style={[BookAppointmentStyle.HeaderText,{textAlign:'right'}]}>10 {en.appointmentScreens.rsLabel2}</Text>
            </View>
        );

        const paymentArea = (
            <View style={BookAppointmentStyle.consultencyContainer}>              
                    <Text style={[BookAppointmentStyle.HeaderText,]}>{en.appointmentScreens.totalPayableLabel}</Text>
                    <Text style={[BookAppointmentStyle.HeaderText, { textAlign: 'right' }]}>{chamberDetails.fees} {en.appointmentScreens.rsLabel2}</Text>
            </View>
        );

        const promoCodeArea = (
            <View>
                <Text style={[textInputStyle.primaryTextInputFontStyle, { marginTop: 4 }]}>{en.appointmentScreens.promoCodeLabel}</Text>
                <View style={BookAppointmentStyle.consultencyContainer}>   
                    <View style={BookAppointmentStyle.promocodeContainer}>                
                        <TextInput style={textInputStyle.primaryTextInput}
                           // placeholder="Select Promo Code"
                            //editable={false}
                            //value={userDetails.username}
                            //onChangeText={(e) => this.onValueChange(e, 'username')} 
                        />  
                    </View>                   
                    <View style={BookAppointmentStyle.promocodeContainer2}>  
                        <TouchableOpacity
                            style={[buttonStyle.secondaryBtnStyle, buttonStyle.btnSizeStyle3]}
                            onPress={() => console.log('Promo Apply')}>
                            <Text style={[buttonStyle.secondaryBtnText, { fontSize: 13 }]}> {en.appointmentScreens.applyLabel} </Text>
                        </TouchableOpacity> 
                    </View>
                </View>
            </View>
           
        );

        const saveCard = (
            <TouchableOpacity onPress={() => console.log('Payment')}>
                <View style={BookAppointmentStyle.paymentoptionsContainer}>
                        <View style={BookAppointmentStyle.paymentoptions1stContainer}>
                            <Image style={BookAppointmentStyle.imageBox}
                            source={imageConstantURI.card.src} />                               
                            <Text style={[BookAppointmentStyle.HeaderText, {marginLeft:4}]}>{en.appointmentScreens.savedCardLabel}</Text> 
                        </View>
                                <Image style={BookAppointmentStyle.imageBox1}
                                    source={imageConstantURI.rightArrow.src}
                                />
                        </View>
            </TouchableOpacity>
        );

        const otherCard = (
        <TouchableOpacity onPress={() => console.log('Payment')}>
            <View style={BookAppointmentStyle.paymentoptionsContainer}>
                <View style={BookAppointmentStyle.paymentoptions1stContainer}>
                    <Image style={BookAppointmentStyle.imageBox}
                    source={imageConstantURI.card.src} />                             
                    <Text style={[BookAppointmentStyle.HeaderText, {marginLeft:4}]}>{en.appointmentScreens.cardLabel}</Text> 
                </View> 
                   
                        <Image style={BookAppointmentStyle.imageBox1}
                            source={imageConstantURI.rightArrow.src}
                        />            
            </View>
        </TouchableOpacity>
        );

        const netBankingArea = (
            <TouchableOpacity onPress={() => console.log('Payment')}>
               <View style={BookAppointmentStyle.paymentoptionsContainer}>
                <View style={BookAppointmentStyle.paymentoptions1stContainer}>
                    <Image style={BookAppointmentStyle.imageBox}
                    source={imageConstantURI.keyBoard.src}/>               
                    <Text style={[BookAppointmentStyle.HeaderText, {marginLeft:4}]}>{en.appointmentScreens.netBanking}</Text>
                </View>                
                    <Image style={BookAppointmentStyle.imageBox1}
                            source={imageConstantURI.rightArrow.src}
                        />
                </View>
           </TouchableOpacity>
        );

        const morePaymentArea = (
           <TouchableOpacity onPress={() => console.log('Payment')}>
                <View style={BookAppointmentStyle.paymentoptionsContainer}>            
                    <View style={BookAppointmentStyle.paymentoptions1stContainer}>                
                        <Image style={BookAppointmentStyle.imageBox}
                            source={imageConstantURI.card.src} />                
                        <Text style={[BookAppointmentStyle.HeaderText, {marginLeft:4}]}>{en.appointmentScreens.paymentLabel}</Text>
                    </View>             
                            <Image style={BookAppointmentStyle.imageBox1}
                                source={imageConstantURI.closeIcon.src} />                  
                    </View>
            </TouchableOpacity>      
        );

        const payDuringArea = (
            <View style={BookAppointmentStyle.paymentoptionsContainer}>
                <RadioGroup style={{ index: 1 }} onSelect={(index, value) => this.onSelect(index, value)}>
                    <RadioButton value={'pay'}>
                       <Text style={[BookAppointmentStyle.HeaderText, {marginLeft:4}]}>{en.appointmentScreens.payDuringLabel}</Text>
                    </RadioButton>
                </RadioGroup>
            </View>
        );

        const buttonArea = (          
                <View style={[BookAppointmentStyle.btnContainer, {marginTop:15}]}>
                    <TouchableOpacity
                        onPress={this.appointmentDetails}>
                        <LinearGradient
                            style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle6]}
                            colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }} >
                            <Text style={[buttonStyle.primaryBtnText, { fontSize: 12 }]}>{en.appointmentScreens.confirmProceedLabel}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>           
        );

        return (
            <View style={{flex:1}}>
            
            <View style={BookAppointmentStyle.mainWrapper}>
                <ScrollView>
                    <KeyboardAvoidingView behavior="position">
                        <Status_Indicator />
                        { doctorName }
                        { chamberArea }
                        { feesArea }
                        { GSTArea }
                        { paymentArea }
                        { promoCodeArea }                     
                        <View style={BookAppointmentStyle.PaymentArea}>
                            { saveCard }                               
                            { otherCard }                           
                            { netBankingArea }                          
                            { morePaymentArea }                           
                            { payDuringArea }
                        </View>                     
                            { buttonArea }      
                    </KeyboardAvoidingView>
                </ScrollView>

            </View>
            <Footer navigation={this.props.navigation} />
            </View>
        );
    }
};

Payment_Details.propTypes = {
    doctorDetails: PropTypes.object,
    userDetails: PropTypes.object,
}

const mapStateToProps = state => ({
    userState: state.userState,
    doctorState: state.doctorState,
    common: state.common,
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ updateState, userUpdateState, docUpdateState, getDoctorDetails, updateApponitmentDetails }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Payment_Details);


