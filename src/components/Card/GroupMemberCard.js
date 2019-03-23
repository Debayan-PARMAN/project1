import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Card, CheckBox } from 'react-native-elements'
import imageConstantURI from '../../constants/imageConst';
import { updateState, } from '../../actions/user';
import GroupStyle from '../../styelsheets/GroupStyle';
import { viewGroupMember, deleteGroup, addMember } from '../../actions/group';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import en from '../../messages/en-us';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';

class GroupMemberCard extends Component {   
    render() { 
        const { memberData } = this.props;
        //console.log(memberData.groupPermission.status);      
        return (   
                  
            <View style = {{ paddingTop: 7, paddingLeft:10, paddingRight: 10 }}>                   
                <View style={GroupStyle.CardRow1}>
                    <View style = {{ flexDirection: 'row',}}>
                        <Text style={textInputStyle.primaryTextInputFontStyle}>{en.commonLabel.nameLabel}   : </Text>
                        <Text style={GroupStyle.chamberLocation}>{ memberData.name }</Text>                        
                    </View>
                    
                    <Text style={GroupStyle.relationNameText}> { memberData.groupRole }</Text>
                   
                </View>

                <View style={GroupStyle.CardmidContainer}>
                    <View style={GroupStyle.midtextContainer}>

                        <View style={{ flexDirection: 'row',marginTop:5 } }>
                            <Text style={textInputStyle.primaryTextInputFontStyle}>Mobile : </Text>
                            <Text style={GroupStyle.chamberLocation}>{memberData.contactNo}</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 5}}>
                            <Text style={textInputStyle.primaryTextInputFontStyle}>{en.loginLabels.emailLabel}   : </Text>
                            <Text style={GroupStyle.chamberLocation}>{memberData.emailAddress}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={(e) => this.props.onSelectedMember(memberData.id)}>
                        <View style={GroupStyle.imageCont}>
                            <Image style={GroupStyle.ArrowContainer} source={imageConstantURI.rightArrow.src}/>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View style={{ flexDirection: 'row', marginTop: 5}}>
                    <Text style={textInputStyle.primaryTextInputFontStyle}>{en.appointmentScreens.statusLabel} : </Text>
                    <Text style={GroupStyle.chamberLocation}>{memberData.groupPermission.status ? 'True' : 'False'}</Text>
                </View>
                <View style={{ borderBottomWidth: 1, borderBottomColor: "#ccc", marginTop: 7 }}/>
                    
            </View>             
                
        );
    }
};

GroupMemberCard.propTypes = {
    groupDetails: PropTypes.object,
}

const mapStateToProps = state => ({
    userState: state.userState,
});

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ updateState, viewGroupMember, deleteGroup, addMember }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupMemberCard);
