import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, TouchableHighlight, FlatList } from 'react-native';
import { Card } from 'react-native-elements';
import { joiningString } from '../../Utils';
import { LinearGradient } from 'expo';
import { DoctorCardStyle } from '../../styelsheets/DoctorCardStyle';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import imageConstantURI from '../../constants/imageConst';
import { updateState as userUpdateState } from '../../actions/doctors';
import { updateState as docUpdateState } from '../../actions/doctors';
import en from '../../messages/en-us';
import Star from 'react-native-star-view';

class Search_Doctor_Card extends Component {
    getDoctorQualification = (doctorData) => {
        return joiningString(doctorData.doctorQualifications.map(item => item.qualificationShort));
    }
    getDoctorSpecialization = (doctorData) => {
        return joiningString(doctorData.doctorSpecializations.map(item => item.specialization));
    }

    getDoctorChamberDetails = (doctorData) => {
        return (
            <View>
                {doctorData.doctorChamberList.map(item =>
                    <View style={DoctorCardStyle.chamberArea} key={item.chamberPk}>
                        <View style = {DoctorCardStyle.locationImageContainer}>
                            <Image style={DoctorCardStyle.locationImage} source={imageConstantURI.defaultPlaceHolder.src} />
                        </View>
                        <View style = {DoctorCardStyle.hospitalName}>
                            <Text style={DoctorCardStyle.fontAll}>{item.hospitalName} - {item.line2} </Text>
                        </View>
                        <View style = {DoctorCardStyle.fee}>
                            <Text style={DoctorCardStyle.fontAll}>{en.doctorSearchLabel.rsLabel} {item.fees}</Text>
                        </View>
                    </View>)}
            </View>)
    };


    render() {
        // const { searchDetails } = this.props.doctorState;
        const { doctorData } = this.props;
        const starStyle = {
            width: 100,
            height: 20,
            marginBottom: 20,

        };
        return (
            <Card container style={DoctorCardStyle}>
                <View style = { DoctorCardStyle.mainContainer }>
                    <View style = { DoctorCardStyle.subContainer1}>
                    <View style = {{  marginRight: 8 }}>                    
                        <View style = { DoctorCardStyle.imageContainer }>
                            <Image style={DoctorCardStyle.profileImage} source={imageConstantURI.doctorImage.src} />
                        </View>
                            <View>
                                <Star score={doctorData.rating} style={starStyle} />
                            </View>
                    </View>
                        <View style = { DoctorCardStyle.mainContainer }>
                            <TouchableOpacity onPress={(e) => this.props.selectedDoctor(doctorData.doctorPk)} >
                                <Text style={DoctorCardStyle.doctorName}>{en.doctorSearchLabel.drLabel} {doctorData.doctorName}</Text>
                            </TouchableOpacity>
                            <Text style={DoctorCardStyle.fontAll}>{this.getDoctorQualification(doctorData)}</Text>
                            <Text style={DoctorCardStyle.fontAll}>{this.getDoctorSpecialization(doctorData)}</Text>
                            <Text style={DoctorCardStyle.fontAll}>{doctorData.yearsOfExperience} {en.doctorSearchLabel.experienceLabel}</Text>
                        </View>
                        <TouchableOpacity onPress = {
                            (e) => this.props.selectedDoctor(doctorData.doctorPk) } >
                        <View style = {DoctorCardStyle.rightAngleContainer}>
                            
                                <Image style = {DoctorCardStyle.rightAngleStyle} source={imageConstantURI.rightAngle.src}/>
                            
                        </View>
                        </TouchableOpacity>
                    </View>
                     
                    <View style = { DoctorCardStyle.margin }>
                        {this.getDoctorChamberDetails(doctorData)}
                    </View>
                    <View style = { DoctorCardStyle.border }/>
                    <View style = {DoctorCardStyle.subContainer1}>
                        <View style = { DoctorCardStyle.reviewImageContainer}>
                            <View>
                                <Image style = { DoctorCardStyle.reviewImage } source={imageConstantURI.review.src}/>    
                            </View>
                            <View>
                                <Text style={DoctorCardStyle.margin1}>{doctorData.numReviews} {en.commonLabel.reviewLabel}</Text>
                            </View>
                        </View>
                        <View style = { DoctorCardStyle.likeImageContainer}>
                              <View>
                                <Image style = {DoctorCardStyle.image} source={imageConstantURI.like.src}/>   
                            </View>
                            <View>
                                <Text style={DoctorCardStyle.margin1}>{en.commonLabel.favouriteLabel}</Text>
                            </View>
                        </View> 
                        <View style = { DoctorCardStyle.rateImagecontainer}>
                             <View>
                                <Image style = { DoctorCardStyle.image} source={imageConstantURI.rating.src}/>   
                            </View>
                            <View>
                                <Text style={DoctorCardStyle.margin1}>{en.commonLabel.rateLabel}</Text>
                            </View>
                        </View>  
                    </View>    
                </View>
            </Card>
        );
    }
};

Search_Doctor_Card.propTypes = {
    doctorDetails: PropTypes.object,
    userDetails: PropTypes.object,
}

const mapStateToProps = state => ({
    userState: state.userState,
    doctorState: state.doctorState,
    common: state.common
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ userUpdateState, docUpdateState }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Search_Doctor_Card);