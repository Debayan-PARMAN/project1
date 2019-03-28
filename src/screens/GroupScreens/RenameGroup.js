import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateState, addGroup } from '../../actions/group';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import AddAddressStyle from '../../styelsheets/AddAddressStyle';
import { buttonStyle, textInputStyle } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import { LinearGradient } from 'expo';
import en from '../../messages/en-us';
import Footer from '../../components/Footer/Footer';

class AddGroup extends Component {
    static navigationOptions = {
        title: 'RENAME GROUP',
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
            // fontWeight: 'bold',
            paddingLeft: 50,
            //justifyContent: 'center',
            //alignItems: 'center',
        },
    };

    onValueChange = (value, id) => {
        const { renameGroup } = this.props.userState;
        renameGroup[id] = value;
        this.props.updateState({ renameGroup })
    }


    onSubmit = () => {
        this.props.addGroup();
        this.props.navigation.navigate('MyGroups');
    }





    render() {

        const customAddressArea = (
            <View style={{ height: 45, marginTop: 10, marginTop: 5, backgroundColor: '#fff', }}>
                <TextInput
                    style={{ height: 45, borderColor: 'gray', borderBottomWidth: 1, padding: 6, marginTop: 0 }}
                    placeholder="Group Name"
                    value={addGroup.groupName}
                    onChangeText={(e) => this.onValueChange(e, 'groupName')}
                />
            </View>
        );

        const groupBtn = (
            <View style={{ flex: 1, height: 40, marginTop: 20, flexDirection: 'row', justifyContent: 'center', }}>
                <TouchableOpacity onPress={this.onSubmit} >
                    <View style={{ width: 120, height: 30, backgroundColor: '#972493', borderWidth: 1, borderRadius: 3 }}>
                        <Text style={{ textAlign: 'center', alignItems: 'center', color: '#fff', justifyContent: 'center', marginTop: 3 }}>Add Group</Text>

                    </View>
                </TouchableOpacity>
            </View>
        );

        return (
            <View style={UserProfileStyle.mainWrapper}>
                <ScrollView>
                    <View style={{ flex: 1, }} >
                        <View style={AddAddressStyle.AddAddress}>
                            <Text style={AddAddressStyle.AddAddressText}>
                                Add New Group
                        </Text>
                        </View>



                    </View>

                    <View style={AddAddressStyle.EnterAddress}>

                        <View style={{ flex: 1 }}>
                            <View style={{ flex: 1, padding: 10, backgroundColor: 'fff', }}>
                                {customAddressArea}
                                {groupBtn}
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <Footer navigation={this.props.navigation} />
            </View>
        );
    }
};

AddGroup.propTypes = {
    addGroup: PropTypes.object,
    //commonState: PropTypes.object
}
const mapStateToProps = state => ({
    userState: state.userState,
    //commonState: state.common
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ updateState, addGroup, }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddGroup);