import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { updateState as docUpdateState, getChamberSlots, findDoctors } from '../../actions/doctors';
import ToggleSwitch from 'toggle-switch-react-native';
import { SearchDoctorStyle } from '../../styelsheets/SearchDoctorStyle';
import Search_Doctor_Card from '../../components/Card/SearchDoctorCard';
import Header_Blank from '../../components/Header/Header_Blank';
import { addGroup, getMyGroup, viewGroupMember, deleteGroupMember, searchMember } from '../../actions/group';
import en from '../../messages/en-us';
import { LinearGradient } from 'expo';
import { textInputStyle } from '../../styelsheets/CommonStyle';
import Footer from '../../components/Footer/Footer';

class Search_Doctor extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOn: false
        };
    }

    componentWillUnmount() {
        const searchDetails = {
            searchQuery: '',
            location: '',
            pincode: '',
            name: '',
            speciality: '',
            condition: '',
            homeVisitFlag: '',
        };
        this.props.docUpdateState({ searchDetails });
        const totalElements = ' ';
        this.props.docUpdateState({ totalElements })
        // onPress = () =>{this.props.navigation.navigate('FindDoctor')}
    }

    static navigationOptions = {
        title: 'FIND DOCTOR',
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
    
    // onTogglePass = () => {
    //     this.props.navigation.navigate('');
    // }

    onNavigate = () => {
        this.props.navigation.navigate('DoctorAppoinment');
        this.props.getChamberSlots();
    }

    onDoctorDetails = () => {
        this.props.navigation.navigate('DoctorAppoinment')
    }

    appointmentPage = () => {
        this.props.navigation.navigate('SearchDoctor');
    }

    selectedDoctor = (selectedId) => {
        const { doctorslist } = this.props.doctorState;
        let doctorDetails = {};
        const selectedDoctorDetails = doctorslist.filter(doctor => doctor.doctorPk === selectedId);
        doctorDetails = selectedDoctorDetails[0];
        this.props.docUpdateState({ doctorDetails });
        this.props.navigation.navigate('DoctorAppoinment');
    }

    onTogglePass = () => {
       const isOn = !this.state.isOn;
       this.setState({isOn});
    }

    render() {
        const { searchDetails, doctorslist, totalElements, loading } = this.props.doctorState;
        const nameLocation = (
            <View style={SearchDoctorStyle.textInputMainContainer}>
                <View style={SearchDoctorStyle.textInputSubContainer1}>
                    <TextInput  style={textInputStyle.primaryTextInput} value={searchDetails.name} editable={false}/>
                </View>
                <View style={SearchDoctorStyle.textInputSubContainer2}>
                    <TextInput  style={textInputStyle.primaryTextInput}
                        value={searchDetails.pincode} editable={false} />
                </View>
            </View>
        );

        const speciality = (
            <View>
                <TextInput  style={textInputStyle.primaryTextInput}
                    value={searchDetails.speciality} editable={false} />
            </View>
        );

        const hospitalList = (
            <View>
                <TextInput  style={textInputStyle.primaryTextInput} 
                //placeholder="Hospitaltist" 
                value={searchDetails.hospitals} editable={false} />
            </View>
        );
        //const unMount = console.log('componentWillMount');    


        let doctorListArea = (<Text> {en.commonLabel.noDataMsg} </Text>);
        //console.log(doctorslist);
        if (doctorslist.length > 0) {
            doctorListArea = (
                <ScrollView>
                    {doctorslist.map(doctor =>
                        <Search_Doctor_Card key={doctor.doctorPk}
     doctorData={doctor} selectedDoctor={this.selectedDoctor} />)}
                </ScrollView>
            );
        }

        return (
            <View style={SearchDoctorStyle.flex} >
                <View style={SearchDoctorStyle.mainContainer}>
                    {searchDetails.name !== '' || searchDetails.pincode !== '' ? nameLocation : searchDetails.speciality !== '' ? speciality : hospitalList }
                    
                    <View style={SearchDoctorStyle.middleContainer1}>
                        <View style={SearchDoctorStyle.middleSubContainer1}>
                            <View style={SearchDoctorStyle.flex1}>
                                <Text style={SearchDoctorStyle.bodyText}>{en.doctorSearchLabel.ShowingLabel} {totalElements} {en.doctorSearchLabel.resultsLabel} </Text>
                            </View>
                            <View style={SearchDoctorStyle.acceptHousecall}>
                                <Text style={SearchDoctorStyle.bodyText}>{en.doctorSearchLabel.acceptHousecallLabel}</Text>
                            </View>
                            <View style={SearchDoctorStyle.toggleContainer}>
                                <ToggleSwitch isOn={this.state.isOn}
                                    onColor='#d8c0ef' 
                                    offColor='#d8c0ef'
                                    size='small'
                                    onToggle={() => this.onTogglePass() }
                                />
                            </View>
                        </View>
                        <View style={SearchDoctorStyle.middleSubContainer2}>
                            <View style={SearchDoctorStyle.flex1}></View>
                            <View style={SearchDoctorStyle.filter}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Filter')}>
                                    <Text style={SearchDoctorStyle.filterText}>{en.doctorSearchLabel.filterLabel}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    
                </View>
                <View style={SearchDoctorStyle.flex}>
                    {loading ? <Text>{en.commonLabel.loadingDataMsg}</Text> : doctorListArea}
                </View>
                <Footer navigation={this.props.navigation} />
            </View>
        );
    }
}

Search_Doctor.propTypes = {
    doctorDetails: PropTypes.object,
    myGroup: PropTypes.object,
    // userDetails: PropTypes.object,
}

const mapStateToProps = state => ({
    doctorState: state.doctorState,
    groupState: state.groupState,
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ getChamberSlots, docUpdateState, addGroup, getMyGroup, viewGroupMember, deleteGroupMember, searchMember, findDoctors }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Search_Doctor);


