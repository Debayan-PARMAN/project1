import React, { Component } from 'react';
import { View, Alert, Button, } from 'react-native';
import { LoginStyles, FontStyles } from '../../styelsheets/MainStyle';
//import { ScrollView } from 'react-native-gesture-handler';

export default class BookAppointment_Btn extends Component {
    render() {
        return (
            <View style={LoginStyles.button}>
                <View style={{ flex: 0.2, }}>
                </View>
                <View style={{ flex: 1, }}>
                    <Button onPress={() => this.props.navigation.navigate('Home')}
                        style={FontStyles.font}
                        //onPress={this.props.onSubmit}
                        title="Book Appointment"
                        color="#AA8CC5"
                        width="10"
                    />
                </View>
                <View style={{ flex: 0.2, }}>
                </View>
            </View>
        );
    }
}