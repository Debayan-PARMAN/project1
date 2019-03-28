import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { updateState, addAddress } from '../actions/user';
import { getStates } from '../../actions/common';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, } from 'react-native';
import { CheckBox } from 'react-native-elements';
import GroupStyle from '../../styelsheets/GroupStyle';
import { updateState, deleteMember, editMember } from '../../actions/group';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import Header_Blank from '../../components/Header/Header_Blank';
import styleConstants from '../../constants/styleConstants';
import { LinearGradient } from 'expo';
import en from '../../messages/en-us';
import Footer from '../../components/Footer/Footer';

class GroupMember extends Component {
    componentWillUnmount() {
        // console.log('Component is being unmounted');
        const { memberDetails } = this.props.userState;
        memberDetails.groupPermission = {
            editPermissionFlag: false,
            viewPermissionFlag: false,
            notifyPermissionFlag: false,
        };
        this.props.updateState({ memberDetails });

    }
    static navigationOptions = {
        title: 'GROUP MEMBER',
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
    onSubmit = () => {
        this.props.deleteMember();
        this.props.navigation.navigate('GroupDetails');
    } 

    onClick = (id) => {
        console.log("button trigger", id);
        const { memberDetails } = this.props.userState;
        memberDetails.groupPermission[id] = !memberDetails.groupPermission[id];
        this.props.updateState({ memberDetails });
    };
    
    
    updateMember = () => {
        this.props.editMember();
        this.props.navigation.navigate('GroupDetails');
    }
    render() {  
        const { memberDetails } = this.props.userState;      
        const adminSection = (
            <View style={GroupStyle.adminContainer}>                         
                <Text style={GroupStyle.headerText}>{ memberDetails.name }</Text>                                
            </View>
        );
        const groupBtn = (
            <View style={GroupStyle.groupbtnContainer }>
                <TouchableOpacity
                    style={[buttonStyle.secondaryBtnStyle, buttonStyle.btnSizeStyle1]}
                    onPress={this.onSubmit}>
                    <Text style={[buttonStyle.secondaryBtnText]}>{en.groupLabels.removeBtnLabel}</Text>
                </TouchableOpacity>
                
                
                <TouchableOpacity
                    onPress={this.onSubmit}>
                    <LinearGradient
                        style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
                        colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }} >
                        <Text style={[buttonStyle.primaryBtnText]}>{en.groupLabels.updateBtnLabel}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
        return (
            <View style={{flex:1}}>
            <View style={GroupStyle.mainWrapper}>
                <ScrollView>
                    {/* <View style={{ flex: 1, }} >
                        <View style={{ flex: 1, justifyContent: 'center', borderBottomWidth: 1,alignItems: 'center',height: 45,}}>
                            <Text style={{ fontWeight: 'bold' }}> {memberDetails.groupName}{en.groupLabels.memberLabel} </Text>
                        </View>                       
                    </View> */}                      
                                {adminSection}
                                 <View style={GroupStyle.Container}>
                                   <View style={GroupStyle.SubContainer}>                                                                    
                                       <View style={GroupStyle.SubContainer1}>                                                   
                                             <View style={GroupStyle.SubContainer2}> 
                                                <View style={GroupStyle.ratebtn}>
                                                    <CheckBox checked={memberDetails.groupPermission.editPermissionFlag}
                                                        onPress={() => this.onClick('editPermissionFlag')} 
                                                    />
                                            <Text style={GroupStyle.ratebtnText}>{en.groupLabels.editCheckboxLabel}</Text>
                                                </View>
                                                <View style={GroupStyle.ratebtn}>
                                                    <CheckBox checked={memberDetails.groupPermission.viewPermissionFlag} 
                                                        onPress={() =>this.onClick('viewPermissionFlag') }/>
                                                    <Text style={GroupStyle.ratebtnText}>{en.groupLabels.viewCheckboxLabel} </Text>
                                                </View>
                                                <View style={GroupStyle.notificationbtn}>
                                                <CheckBox checked={memberDetails.groupPermission.notifyPermissionFlag} 
                                                        onPress={() =>this.onClick('notifyPermissionFlag') }/>
                                            <Text style={GroupStyle.ratebtnText}>{en.groupLabels.notificationCheckboxLabel} </Text>
                                                </View>
                                            </View>
                                           </View>                                                                     
                                         </View>
                                       </View>                              
                                {groupBtn}                                                    
                </ScrollView>
            </View>
            <Footer navigation={this.props.navigation} />
            </View>
        );
    }
};

GroupMember.propTypes = {
    // userDetails: PropTypes.object,
    // commonState: PropTypes.object,
    memberDetails: PropTypes.object
}
const mapStateToProps = state => ({
    userState: state.userState,
    commonState: state.common
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ updateState, GroupMember, getStates, deleteMember, editMember }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupMember);