import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState, addGroup } from '../../actions/group';
import { View, Text, TouchableOpacity, TextInput, ScrollView,  } from 'react-native';
import GroupStyle from '../../styelsheets/GroupStyle';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import Header_Blank from '../../components/Header/Header_Blank';
import { LinearGradient } from 'expo';
import en from '../../messages/en-us';
import Footer from '../../components/Footer/Footer';

class AddGroup extends Component {
    static navigationOptions = {
        title: 'ADD NEW GROUP',
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
    onValueChange = (value, id) => {
        const { addGroup } = this.props.userState;
        addGroup[id] = value;
        this.props.updateState({ addGroup })
    }
    onSubmit = () => {
        this.props.addGroup();
        this.props.navigation.navigate('MyGroups');
    }  
   render() {
       const customAddressArea = ( 
        <View>
            <Text style={textInputStyle.primaryTextInputFontStyle}>Group Name</Text>
            <TextInput style={textInputStyle.primaryTextInput}
                    onChangeText={(e) => this.onValueChange(e, 'groupName')}
                /> 
        </View>
        );

        const groupBtn = (
            <View style={GroupStyle.btnContainer}>
                <TouchableOpacity onPress={this.onSubmit} >
                    <LinearGradient
                        style={[buttonStyle.primaryBtnStyle, buttonStyle.btnSizeStyle1]}
                        colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }} >
                        <Text style={[buttonStyle.primaryBtnText]}>{en.groupLabels.addGroupLabel}</Text>
                    </LinearGradient>                   
                </TouchableOpacity>     
            </View>
        );
        return (
            <View style={{flex:1}}>
            <View style={GroupStyle.mainWrapper}>
                <ScrollView>                 
                    { customAddressArea }
                    { groupBtn }                          
                </ScrollView>
                
            </View>
             <Footer navigation={this.props.navigation} />
            </View>
           
        );
    }
};

const mapStateToProps = state => ({
    userState: state.userState,
    //commonState: state.common
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ updateState, addGroup, }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGroup);