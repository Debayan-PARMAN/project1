import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState } from '../../actions/user';
import { getStates } from '../../actions/common';
import { getMyGroup } from '../../actions/group';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import GroupStyle from '../../styelsheets/GroupStyle';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import Header_Blank from '../../components/Header/Header_Blank';
import { LinearGradient } from 'expo';
import en from '../../messages/en-us';

class MyGroups extends Component {

    componentDidMount() {
        this.props.getMyGroup();
    }
    static navigationOptions = {
        title: 'MY GROUPS',
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

    
    openSelectedGroup = (id) => {
            const { myGroup } = this.props.userState;
            let groupDetails = {};
            const selectedGroupDetails = myGroup.filter(group => group.id === id);
            groupDetails = selectedGroupDetails[0];
            this.props.updateState({ groupDetails });
            this.props.navigation.navigate('GroupDetails');
    }


    createNewGroup = () => {
       
        //this.props.updateState({ userDetails });
        this.props.navigation.navigate('AddGroup');
    }

    

    render() {
        const { myGroup } = this.props.userState;
    
        const groupTypeArea = myGroup.length > 0 ?
            myGroup.map((group, index) =>
                <TouchableOpacity onPress={() => this.openSelectedGroup(group.id)} key={index}>
                    <View style={GroupStyle.horizontalrowContainer}>
                        <View style={GroupStyle.horizontalrowleftContainer}>
                            <Text style={[GroupStyle.text_p, {padding: 2}]}>{group.groupName}</Text>
                        </View>
                        <View style={GroupStyle.horizontalrowrightContainer}>
                            <View style={{ padding: 6 }} >
                                <Image style={GroupStyle.imageContainer}
                                    source={imageConstantURI.rightArrow.src}/>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity >)
            :
            <View></View>;

        const createnewArea = (         
            <View style={GroupStyle.btnContainer}>                 
                <TouchableOpacity
                    onPress={() => this.createNewGroup()} >
                    <LinearGradient
                        style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
                        colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }} >
                        <Text style={[buttonStyle.primaryBtnText]}>{en.groupLabels.createNewLabel}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );

        return (
            <View style={GroupStyle.mainWrapper}>
                <ScrollView>                 

                     <View style={[GroupStyle.SubContainer, {height:40}]} >
                        <Text style={GroupStyle.headerText}>{en.groupLabels.memberOfLabel} {myGroup.length} {en.groupLabels.groupsLabel} </Text>
                        </View>
                        
                        { groupTypeArea }                       
                        
                        {createnewArea}                     
                   
                </ScrollView>
            </View>
        );
    }
};

MyGroups.propTypes = {
    userDetails: PropTypes.object,
    commonState: PropTypes.object,
    myGroup: PropTypes.object,
}
const mapStateToProps = state => ({
    userState: state.userState,
    commonState: state.common,
    
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ updateState, getMyGroup, getStates }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MyGroups);