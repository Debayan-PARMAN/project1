import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState } from '../../actions/user';
import { View, Text, Image, TouchableOpacity, ScrollView, CheckBox,} from 'react-native';
import GroupStyle from '../../styelsheets/GroupStyle';
import imageConstantURI from '../../constants/imageConst';
import { viewGroupMember, deleteGroup } from '../../actions/group';
import GroupMemberCard from '../../components/Card/GroupMemberCard';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import Header_Blank from '../../components/Header/Header_Blank';
import { LinearGradient } from 'expo';
import en from '../../messages/en-us';
import Footer from '../../components/Footer/Footer';

class GroupDetails extends Component {

    componentDidMount() {
        this.props.viewGroupMember();
    }
    static navigationOptions = {
        title: 'GROUP DETAILS',
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

    
    onSelectedMember = (id) => {
        const { viewMember } = this.props.userState;
        let memberDetails = {};
        const selectedMemberDetails = viewMember.filter(member => member.id === id);
        memberDetails = selectedMemberDetails[0];
        this.props.updateState({ memberDetails });
        this.props.navigation.navigate('GroupMember');
    }

    onDelete = () => {
        console.log("button trigger");
        this.props.deleteGroup();
        this.props.navigation.navigate('MyGroups');
    }  

    
    render() {
        const { groupDetails } = this.props.userState;
        const { viewMember } = this.props.userState;
        //console.log(groupDetails);
        
        const adminSection = (
            <View style={ GroupStyle.adminContainer}>
                <TouchableOpacity onPress={() => { }} 
                    style={[buttonStyle.secondaryBtnStyle, buttonStyle.btnSizeStyle3]}>
                        <Text style={[buttonStyle.secondaryBtnText]}>{en.groupLabels.adminLabel}</Text>                   
                </TouchableOpacity>
                <View style={GroupStyle.ownerNameContainer}>
                    <Text style={[GroupStyle.headerText,{marginTop:1.5}]}>{groupDetails.groupOwnerName}</Text>
                </View>
            </View>
        );
        const groupBtn = (
            <View style={GroupStyle.groupDetailsbtnContainer}> 
               <View>            
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('AddNewGroupMember')}>
                        <LinearGradient
                            style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
                            colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }} >
                            <Text style={[buttonStyle.primaryBtnText]}>{en.groupLabels.addMemberBtn}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View>
                <TouchableOpacity
                    style={[buttonStyle.secondaryBtnStyle, buttonStyle.btnSizeStyle1]}
                    onPress={this.onDelete} >
                    <Text style={[buttonStyle.secondaryBtnText]}>{en.groupLabels.deleteGroupBtn}</Text>
                </TouchableOpacity>
                </View> 
            </View>
        );

        

        let memberArea = (<Text style={GroupStyle.text_p}> {en.groupMsg.groupMsgInfo} </Text>);
        //console.log(doctorslist);
        if (viewMember !== undefined && viewMember.length > 0) {
            memberArea = (
                <ScrollView>
                    {viewMember.map(member =>
                        <GroupMemberCard key={member.id}
                            memberData={member} onSelectedMember={this.onSelectedMember} />)}
                    
                </ScrollView>
            );
        }

        return (
            <View style={{flex:1}}>
            <View style={GroupStyle.mainWrapper}>         
                   
                <View style={GroupStyle.groupDetailsfixedContainer}>
                    <Text style={ GroupStyle.headerText }> {en.groupLabels.groupLabel} {groupDetails.groupName} </Text>
                    {groupBtn}
                </View>                                               
                    { memberArea }                        
                </View>
                <Footer navigation={this.props.navigation} />
                </View>   
        );
    }
};

GroupDetails.propTypes = {
    groupDetails: PropTypes.object,
    //commonState: PropTypes.object
}
const mapStateToProps = state => ({
    userState: state.userState,
    //commonState: state.common
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ updateState, viewGroupMember, deleteGroup }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupDetails);