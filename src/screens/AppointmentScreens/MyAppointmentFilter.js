import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DatePicker from 'react-native-datepicker';
import { Accordion } from "native-base";
import { View, Text, TouchableOpacity, AppRegistry, ScrollView } from 'react-native';
import { buttonStyle } from '../../styelsheets/CommonStyle';
import Header_Blank from '../../components/Header/Header_Blank';
import styleConstants from '../../constants/styleConstants';
import en from '../../messages/en-us';
import { LinearGradient } from 'expo';
import Footer from '../../components/Footer/Footer';

class MyAppointmentFilter extends Component {
    static navigationOptions = {
        title: 'MY APPOINTMENT FILTER',
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
        // const { appointmentList, AppointmentDetails } = this.props.doctorState;
        //console.log("h.....",appointmentList);

        const myGroupsDetails = (
            <View>
                <Text>Hello</Text>
            </View>
        );

        const dataArray = [
            { title: "My Groups", content: "My Group Lists here" },
            { title: "Doctor", content: "Doctor List here" },
            { title: "Chamber Location", content: "Chamber Location List here"},
            { title: "Appointment Status", content: "Appointment Status List here" },
            { title: "Payment Status", content: "Payment Status List here" },
          
        ];
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#fff',
            }}>
                <ScrollView>
                    <View style={{ flex: 1, height:35,justifyContent:'center',}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MyAppointment')}>
                            <Text style={{ fontSize: 16, textDecorationLine: 'underline', textAlign: 'left', marginLeft: 10 }}>{en.doctorSearchLabel.resetAllLabel} </Text>
                        </TouchableOpacity>                 
                    </View>
                    <View style={{flex: 1,
                        height: 70,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <View style={{flex: 0.5, height: 40,
                            borderWidth: 1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>

                            <View style={{ flex: 0.25,                             
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRightWidth: 1
                            }}>
                                <Text style={{}}>{en.appointmentScreens.oneDayLabel}</Text>
                            </View>

                            <View style={{flex: 0.25,alignItems: 'center',backgroundColor: '#972493',
                                justifyContent: 'center',
                            }}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                                    <Text style={{ color: '#fff' }}>{en.appointmentScreens.durationLabel}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View> 
                    <View style={{ flex: 1, height: 45,flexDirection:'row', justifyContent: 'center',}}>
                        <View style={{ width:160, height: 45, justifyContent: 'center', }}>
                            <DatePicker
                                style={{ width: 150 }}
                              //  date={userDetails.dateOfBirth === '' ? new Date() : userDetails.dateOfBirth}
                                mode="date"
                                placeholder="From date"
                                format="YYYY-MM-DD"
                                minDate="1960-01-01"
                                maxDate="2020-12-31"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 10,
                                        marginRight: 10,
                                    },
                                    dateInput: {
                                        marginLeft: 46,
                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                               // onDateChange={date => { this.onValueChange(date, 'dateOfBirth') }}
                            />
                        </View>
                        <View style={{ width: 160, height: 45, justifyContent: 'center', }}>
                            <DatePicker
                                style={{ width: 150 }}
                                //  date={userDetails.dateOfBirth === '' ? new Date() : userDetails.dateOfBirth}
                                mode="date"
                                placeholder="To date"
                                format="YYYY-MM-DD"
                                minDate="1960-01-01"
                                maxDate="2020-12-31"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                customStyles={{
                                    dateIcon: {
                                        position: 'absolute',
                                        left: 0,
                                        top: 4,
                                        marginLeft: 10,
                                        marginRight: 10,
                                    },
                                    dateInput: {
                                        marginLeft: 46,
                                    }
                                    // ... You can check the source to find the other keys.
                                }}
                            // onDateChange={date => { this.onValueChange(date, 'dateOfBirth') }}
                            />
                        </View>
                    </View>

                    <View style={{ flex: 1, height: 60, justifyContent: 'center', alignItems: 'center',borderBottomWidth:1,borderColor:'#972493',padding:5 }}>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Login')}>
                            <LinearGradient
                                style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
                                colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }} >
                                <Text style={[buttonStyle.primaryBtnText]}> {en.doctorSearchLabel.searchLabel}</Text>
                            </LinearGradient>
                        </TouchableOpacity> 
                    </View>
                    <Accordion dataArray={dataArray} expanded={0}
                        headerStyle={{ backgroundColor: "#fff" }}
                        contentStyle={{ backgroundColor: "#fff" }}
                    />
                </ScrollView>
                <Footer navigation={this.props.navigation} />
            </View>
        );
    }
};

const mapStateToProps = state => ({
    userState: state.userState,
    doctorState: state.doctorState,
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ }, dispatch)
});

AppRegistry.registerComponent('project1', () => MyAppointmentFilter);

export default connect(mapStateToProps, mapDispatchToProps)(MyAppointmentFilter);