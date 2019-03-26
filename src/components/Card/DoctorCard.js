import React, { Component } from 'react';
import {View,Text,TouchableOpacity,ScrollView, Image, Button,} from 'react-native';
import { Card, } from 'react-native-elements'
//import { URI } from '../constants';
import GetDirection_Btn from '../Button/GetDirection_Button';
// import Doctor_Address from './DoctorAddress';
import { CardStyle } from '../../styelsheets/CardStyle';
import imageConstantURI from '../../constants/imageConst';
//import CalendarStrip from 'react-native-calendar-strip-slide-navigation';
// import { LoginStyles, FontStyles, Button_fb_google } from '../styelsheets/MainStyle';
import { LoginStyles, FontStyles } from '../../styelsheets/MainStyle';
import en from '../../messages/en-us';

export default class Doctor_Card extends Component {
    render() {

        const { chamberDetails } = this.props;

        //console.log("Chember List : ",chamberDetails);

        const addressArea = (
            <View style={{ paddingBottom: 10 }}>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 7, marginBottom: 7 }}>
                    <View style={{ flex: 0.06, justifyContent: 'center', }}>
                        <Image style={{ height: 15, width: 15, }} source={imageConstantURI.defaultPlaceHolder.src} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 15 }}>{chamberDetails.line1}, {chamberDetails.line2}</Text>
                    </View>
                </View>
                <View>
                    <Text>{chamberDetails.city}, {chamberDetails.state}, {chamberDetails.city}, {chamberDetails.pinCode}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 15 }}>{en.doctorSearchLabel.rsLabel} {chamberDetails.fees}</Text>
                </View>
            </View>
        );

        const slotArea = (
            <View>
                <View style={[CardStyle.secondContainer, { paddingTop: 7, paddingBottom: 7, }]}>
                    <View style={CardStyle.flex}>
                        <Text>{en.doctorSearchLabel.morningLabel}</Text>
                    </View>
                    <View style={CardStyle.flex}>
                        <Text style={CardStyle.slotStyle}>{en.doctorSearchLabel.slotsLabel}</Text>
                    </View>
                </View>
                <ScrollView horizontal>
                    <View style={CardStyle.buttonContainer}>
                        <View style={CardStyle.buttonStyle}><TouchableOpacity onPress={(e) => this.props.selectedChamber(chamberDetails,'09:15:00')}><Text style={CardStyle.buttonText}>9:15</Text></TouchableOpacity></View>
                        <View style={CardStyle.buttonStyle}><TouchableOpacity onPress={(e) => this.props.selectedChamber(chamberDetails, '09:30:00')}><Text style={CardStyle.buttonText}>9:30</Text></TouchableOpacity></View>
                        <View style={CardStyle.buttonStyle}><TouchableOpacity onPress={(e) => this.props.selectedChamber(chamberDetails, '17:30:00')}><Text style={CardStyle.buttonText}>5:30</Text></TouchableOpacity></View>
                    </View>
                </ScrollView>
            </View>
        );

        return (
            <Card container style={CardStyle}>
                {addressArea}
                <View style={LoginStyles.button}>
                    <View style={{ flex: 0.2, }}>
                    </View>
                    <View style={{ flex: 1, }}>
                        <Button onPress={(e) => this.props.selectedChamber(chamberDetails)}
                            style={FontStyles.font}
                            //onPress={this.props.onSubmit}
                            title={en.appointmentScreens.bookAppointmentLabel}
                            color="#743894"
                            width="10"
                        />
                    </View>
                    <View style={{ flex: 0.2, }}>
                    </View>
                </View>
                {slotArea}
            </Card>
        );
    }
};