import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState, addMember } from '../../actions/group';
import { View, Text, TouchableOpacity, TextInput, ScrollView, AppRegistry } from 'react-native';
import { FindDoctorStyle } from '../../styelsheets/FindDoctorStyle';
import GroupStyle from '../../styelsheets/GroupStyle';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import Header_Blank from '../../components/Header/Header_Blank';
import { LinearGradient } from 'expo';
import en from '../../messages/en-us';
import Footer from '../../components/Footer/Footer';

class AddNewGroupMember extends Component {
    static navigationOptions = {
        title: 'ADD NEW GROUP MEMBER',
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

    componentWillUnmount() {
        // console.log('Component is being unmounted');
        const addMember = {
            name: '',
            contactNo: '',
            emailAddress: '',
            minor: '',
        };
        
        this.props.updateState({ addMember });

    }


        onValueChange = (value, id) => {
            const { addMember } = this.props.userState;
            addMember[id] = value;
            this.props.updateState({ addMember })
        }
        addMember = () => {
            console.log("button trigger");
            this.props.addMember();
            this.props.navigation.navigate('GroupDetails');
        }
      
    render() {   
        //const { addMember } = this.props.userState;
        const withHover = { ...FindDoctorStyle.buttonStyle, ...FindDoctorStyle.hoverButton };
        const withoutHover = { ...FindDoctorStyle.buttonStyle };
        const withHoverText = { ...FindDoctorStyle.orStyle1 };
        const withoutHoverText = { ...FindDoctorStyle.orStyle };

        const { groupDetails } = this.props.userState;
        const { addMember } = this.props.userState;
         const nameArea = (
             <View style={GroupStyle.textInputContainer}>
                <Text style={textInputStyle.primaryTextInputFontStyle}>{en.commonLabel.nameLabel}</Text>
                <TextInput
                    style={textInputStyle.primaryTextInput}
                    //placeholder="Name"
                     value={addMember.name}
                     onChangeText={(e) => this.onValueChange(e,'name')}
                />
            </View>
        );
        const mobileArea = (
            <View style={GroupStyle.textInputContainer}>
                <Text style={textInputStyle.primaryTextInputFontStyle}>{en.loginLabels.mobileNumberLabel}</Text>
                <TextInput
                    style={textInputStyle.primaryTextInput}
                   // placeholder="Provide Mobile Number"
                    value={addMember.contactNo}
                    onChangeText={(e) => this.onValueChange(e,'contactNo')}
                />
            </View>
        );
        const emailArea = (
            <View style={GroupStyle.textInputContainer}>
                <Text style={textInputStyle.primaryTextInputFontStyle}>{en.loginLabels.emailLabel}</Text>
                <TextInput
                    style={textInputStyle.primaryTextInput}
                   // placeholder="Provide Email Address"
                    value={addMember.emailAddress}
                    onChangeText={(e) => this.onValueChange(e,'emailAddress')}
                />
            </View>
        );  

         const minoradultbuttonArea = (
             <View style={GroupStyle.toggleBtnContainer}>
                 <View style={GroupStyle.toggleBtnSideView}></View>
                 <View style={addMember.minor === 'true' ? withHover : withoutHover}>
                     <TouchableOpacity onPress={() => this.onValueChange('true', 'minor')}>
                         <Text style={addMember.minor === 'true' ? withHoverText : withoutHoverText}>{en.groupLabels.minorTabLabel}</Text>
                     </TouchableOpacity>
                 </View>
                 <View style={addMember.minor === 'false' ? withHover : withoutHover}>
                     <TouchableOpacity onPress={() => this.onValueChange('false', 'minor')}>
                         <Text style={addMember.minor === 'false' ? withHoverText : withoutHoverText}>{en.groupLabels.adultTabLabel}</Text>
                     </TouchableOpacity>
                 </View>
                 <View style={GroupStyle.toggleBtnSideView}></View>
             </View>                   
                 );  

        const addbuttonArea = (       
            <View style={GroupStyle.btnContainer}>
                <TouchableOpacity onPress={this.addMember}>
                    <LinearGradient
                        style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
                        colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }} >
                        <Text style={[buttonStyle.primaryBtnText]}>{en.commonLabel.addBtnLabel}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );  
        
        return (
            <View style={{flex:1}}>
            <View style={GroupStyle.mainWrapper}>
                <ScrollView>                      
                    {nameArea}
                    {mobileArea}
                    {emailArea}
                    {minoradultbuttonArea}
                    {addbuttonArea}
                </ScrollView>   
                            
            </View>
            <Footer navigation={this.props.navigation} />  
            </View>
            
        );   }
};

AddNewGroupMember.propTypes = {
    userDetails: PropTypes.object,
    commonState: PropTypes.object
}
const mapStateToProps = state => ({
    userState: state.userState,
    commonState: state.common
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ updateState, addMember }, dispatch)
});

AppRegistry.registerComponent('project1', () => AddNewGroupMember);

export default connect(mapStateToProps, mapDispatchToProps)(AddNewGroupMember);