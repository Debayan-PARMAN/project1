import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SearchDoctorStyle } from '../../styelsheets/SearchDoctorStyle';
import { updateState as userUpdateState } from '../../actions/doctors';
import { updateState as docUpdateState } from '../../actions/doctors';
import { View, Image, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Search_Doctor_Card from '../../components/Card/SearchDoctorCard';
import ToggleSwitch from 'toggle-switch-react-native';
import imageConstantURI from '../../constants/imageConst';
import { textInputStyle } from '../../styelsheets/CommonStyle';
import { LinearGradient } from 'expo';
import en from '../../messages/en-us';
import Footer from '../../components/Footer/Footer';

class Find_Doctor_Filter extends Component {
    
     static navigationOptions = {
         title: 'FIND DOCTOR',
         headerBackground: (
             <LinearGradient
                 colors={['#a25ca8', '#582491']}
                 style={{ flex: 1, }}
                 start={[0, 0.5]}
                 end={[1, 0]}

             />
         ),
         headerTintColor: '#fff',
         headerTitleStyle: {
             fontWeight: 'bold',
             paddingLeft: 50,
             textAlign: "center",
             justifyContent: 'center',
             flex: 0.8,
         }
     };

     onToggle = () => {
         this.props.navigation.navigate('');
     }

     onNavigate = () => {
        //  console.log('Search the data');
         this.props.navigation.navigate('DoctorAppoinment')
     }
     onDoctorDetails = () => {
         this.props.navigation.navigate('DoctorAppoinment')
     }

     
     selectedDoctor = (selectedId) => {
         const { doctorslist } = this.props.doctorState;
         let doctorDetails = {};
         const selectedDoctorDetails = doctorslist.filter(doctor => doctor.doctorPk === selectedId);
        //  console.log(selectedDoctorDetails[0]);
        //  console.log(selectedId);
         doctorDetails = selectedDoctorDetails[0];

         this.props.docUpdateState({ doctorDetails });

         this.props.navigation.navigate('DoctorAppoinment');
        //  console.log("button triger");
     }

    
    render() {
        const { searchDetails, doctorslist, totalElements, loading } = this.props.doctorState;
        
        const nameLocation = (<View style={SearchDoctorStyle.textInputMainContainer}>
            <View style={SearchDoctorStyle.textInputSubContainer1}>
                <TextInput style={textInputStyle.primaryTextInput}
                    value={searchDetails.name} editable={false} />
            </View>
            <View style={SearchDoctorStyle.textInputSubContainer2}>
                <TextInput style={textInputStyle.primaryTextInput}
                    value={searchDetails.pincode} editable={false} />
            </View>
        </View>
        );

        const speciality = (
                            <View>
                                <TextInput style={textInputStyle.primaryTextInput}
                                value={searchDetails.speciality} editable={false} />
                            </View> 
         );
        
         const result = (
             <View style={SearchDoctorStyle.flex1}>
                 <Text style={SearchDoctorStyle.bodyText}>{en.doctorSearchLabel.ShowingLabel} {totalElements} {en.doctorSearchLabel.resultsLabel}</Text>
             </View>
         );

         const acceptHousecall = (
             <View style={SearchDoctorStyle.acceptHousecall}>
                 <Text style={SearchDoctorStyle.bodyText}>{en.doctorSearchLabel.acceptHousecallLabel}</Text>
             </View>
         );


        const toggle = (
            <View style={SearchDoctorStyle.toggleContainer}>
            <ToggleSwitch
                isOn={false}
                    onColor='#972493'
                    offColor='#972493'
                size='small'
                onToggle={this.onToggle}
            />
        </View>
        );

        const filter = (  
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Filter')}>           
                <Text style={[SearchDoctorStyle.filterText, {textAlign:'right'}]}>{en.doctorSearchLabel.filterLabel}</Text>
                </TouchableOpacity>
               
        );

        let doctorListArea = (<Text> {en.commonLabel.noDataMsg}</Text>);

        if (doctorslist.length > 0) {
            doctorListArea = (
                <ScrollView>
                    {doctorslist.map(doctor =>
                        <Search_Doctor_Card key={doctor.doctorPk} doctorData={doctor} selectedDoctor={this.selectedDoctor} />)}
                </ScrollView>
            );
        }


        return (
            <View style={ SearchDoctorStyle.flex }>
                <View style={ SearchDoctorStyle.mainContainer1 }>
                    {searchDetails.name !== '' || searchDetails.pincode !== '' ? nameLocation : speciality}
                    
                    <View style={ SearchDoctorStyle.middleContainer2 }>
                        <View style={ SearchDoctorStyle.middleSubContainer1 }>
                            { result }
                            { acceptHousecall }
                            { toggle }
                        </View>
                        <View style={ SearchDoctorStyle.middleSubContainer1 }>                           
                            
                            <View style={ SearchDoctorStyle.middleSubContainer1a }>
                                <View style={ SearchDoctorStyle.ratingsDaysContainer }>
                                    <Text style={SearchDoctorStyle.bodyText}>Any ratings, Any day and afternoon</Text>
                                </View>
                                <View style={ SearchDoctorStyle.imageContainer }>
                                        <TouchableOpacity>
                                        <Image style={ SearchDoctorStyle.imageStyle }
                                                source={imageConstantURI.closeIcon.src}
                                            />
                                        </TouchableOpacity>
                                    </View>
                               
                                </View>                          
                                                       
                            <Text style={SearchDoctorStyle.bodyText}>(3)</Text>                              
                                
                                { filter }
                                
                            
                        </View>
                    </View>
                    
                </View>
                <View style={ SearchDoctorStyle.flex }>
                    {loading ? <Text>{en.commonLabel.loadingDataMsg}</Text> : doctorListArea}
                </View>
                <Footer navigation={this.props.navigation} />
            </View>         
                
        );
    }
}


Find_Doctor_Filter.propTypes = {
    doctorDetails: PropTypes.object,
    userDetails: PropTypes.object,
}

const mapStateToProps = state => ({
    userState: state.userState,
    doctorState: state.doctorState,
    common: state.common
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ userUpdateState, docUpdateState, }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Find_Doctor_Filter);

