import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { updateState, addAddress } from '../../actions/user';
//import { getStates } from '../../actions/common';

import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
//import AddAddressStyle from '../../styelsheets/AddAddressStyle';
// import Drop_Down from '../components/DropDown';


class UpdateScreen extends Component {
    static navigationOptions = {
        title: 'AddNewGroupMember',
        headerStyle: {
            backgroundColor: '#572a6f',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            // fontWeight: 'bold',
            paddingLeft: 30,
            //justifyContent: 'center',
            //alignItems: 'center',
        },
    };
    render() {
        const { userDetails } = this.props.userState;
        const userName = (
            <View style={{ height: 70, padding: 5, marginTop: 5 }}>
                <Text style={{ padding: 5, fontSize: 15 }}>User Name</Text>
                <TextInput
                    style={{ height: 45, borderColor: 'gray', padding: 5, borderWidth: 1, borderRadius: 5 }}
                    placeholder="User Name"
                    value = { editMember.userName }
                    onChangeText={(e) => this.onValueChange(e, 'userName')}
                />
            </View>
        );
        const relationshipName = (
            <View style={{ height: 70, padding: 5, marginTop: 10 }}>
                <Text style={{ padding: 5, fontSize: 15 }}>Relationship Name</Text>
                <TextInput
                    style={{ height: 45, borderColor: 'gray', padding: 5, borderWidth: 1, borderRadius: 5 }}
                    placeholder="Relationship Name"
                    value = { editMember.relationshipName }
                 onChangeText={(e) => this.onValueChange(e, 'relationshipName')}
                />
            </View>
        );
        const firstName = (
            <View style={{ height: 80, padding: 5, marginTop: 10 }}>
                <Text style={{ padding: 5, fontSize: 15 }}>First Name</Text>
                <TextInput
                    style={{ height: 45, borderColor: 'gray', padding: 5, borderWidth: 1, borderRadius: 5 }}
                    placeholder="First Name"
                    value = { editMember.firstName }
                    onChangeText={(e) => this.onValueChange(e, 'firstName')}
                />
            </View>
        );
        const lastName = (
            <View style={{ height: 80, padding: 5, marginTop: 10 }}>
                <Text style={{ padding: 5, fontSize: 15 }}>First Name</Text>
                <TextInput
                    style={{ height: 45, borderColor: 'gray', padding: 5, borderWidth: 1, borderRadius: 5 }}
                    placeholder="First Name"
                    value = { editMember.lastName }
                    onChangeText={(e) => this.onValueChange(e, 'lastName')}
                />
            </View>
        );
        const age = (
            <View style={{ height: 80, padding: 5, marginTop: 10 }}>
                <Text style={{ padding: 5, fontSize: 15 }}>First Name</Text>
                <TextInput
                    style={{ height: 45, borderColor: 'gray', padding: 5, borderWidth: 1, borderRadius: 5 }}
                    placeholder="Age"
                    value = { editMember.age }
                    onChangeText={(e) => this.onValueChange(e, 'age')}
                />
            </View>
        );

        

        const updatebuttonArea = (
            <View style={{ flex: 1, height: 40, marginTop: 10, justifyContent: 'center', alignItems: 'center', }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                    <View style={{ width: 120, height: 30, backgroundColor: '#572a6f', borderWidth: 1, borderRadius: 5 }}>
                        <Text style={{ textAlign: 'center', alignItems: 'center', color: '#fff', justifyContent: 'center', marginTop: 3 }}>Update</Text>

                    </View>
                </TouchableOpacity>
            </View>
        );

        return (
            <View style={{ flex: 1, }}>
                <ScrollView>
                    <View style={{ flex: 1, marginTop: 10, height: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 17, }}>Update</Text>
                    </View>
                    { userName }
                    { relationshipName }
                    { firstName } 
                    { lastName }
                    { age }
                    { updatebuttonArea }

                </ScrollView>
            </View>
        );
    }
};

UpdateScreen.propTypes = {
    userDetails: PropTypes.object,
    commonState: PropTypes.object
}
const mapStateToProps = state => ({
    userState: state.userState,
    commonState: state.common
});
const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateScreen);