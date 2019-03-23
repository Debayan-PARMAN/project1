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

class GroupMemberCard extends Component {   
    render() { 
        const { memberData } = this.props;
        //console.log(memberData.groupPermission.status);      
        return (   
                  
            <Card style={GroupStyle.CardContainer}>                   
                <View style={GroupStyle.CardRow1}>
                    <Text style={GroupStyle.MemberNameText}>{en.commonLabel.nameLabel} : { memberData.name }</Text>                        
                    
                    <Text style={GroupStyle.relationNameText}> { memberData.groupRole }</Text>
                   
                </View>

                <View style={GroupStyle.CardmidContainer}>
                    <View style={GroupStyle.midtextContainer}>
                       <Text style={GroupStyle.MemberNameText}>{en.commonLabel.contactNoLabel} : { memberData.contactNo }</Text>                         
                       <Text style={[GroupStyle.MemberNameText, {marginTop:5}]}>{en.loginLabels.emailLabel} : { memberData.emailAddress }</Text>
                    </View>
                    <TouchableOpacity onPress={(e) => this.props.onSelectedMember(memberData.id)}>
                        <View style={GroupStyle.imageCont}>
                            <Image style={GroupStyle.ArrowContainer} source={imageConstantURI.rightArrow.src}/>
                        </View>
                    </TouchableOpacity>
                </View>                   
                <Text style={[GroupStyle.MemberNameText,{marginTop: 3}]}>{en.appointmentScreens.statusLabel} : { memberData.groupPermission.status ? 'True' : 'False'}</Text>
                </Card>             
                
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
