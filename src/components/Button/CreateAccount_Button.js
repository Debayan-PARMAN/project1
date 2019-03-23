import React, { Component } from 'react';
import { View,Alert,Button,} from 'react-native';
import { LoginStyles, FontStyles } from '../../styelsheets/MainStyle';
import en from '../../messages/en-us';

export default class CreateAccount_Btn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            otp: '',
            successMessage: '',
            failureMessage: '',
            alertTrigger: false,
            showPassword: true,
        };
    }

    static navigationOptions = {
        title: 'MED-e-Pal',
        headerStyle: {
            backgroundColor: '#daadd6',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
            paddingLeft: 50,
        }
    };

    onValueChange = (value, id) => {
        // console.log(id, value);
        this.setState({ [id]: value });
    }

    onSubmit = () => {

        // console.log('Submit Button triggered');
        const path = `http://206.189.150.18:9090/rest/v1/users/login`;
        const { username, password } = this.state;
        fetch(path, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // "userName": 'debayan.sen@parmancs.com1',
                "userName": username,
                // "password": 'mystrio7',
                "password": password,
                "registrationProvider": "SBIS",
                "roleName": "INDIVIDUAL"
            }),
        })
            .then(function (response) {
                return response.json();
            })
            .then((response) => {
                // console.log(response.token);
                if (response.token) {
                    this.setState({ successMessage: `User ${response.username} has successfully logged in.` });
                    Alert.alert(this.state.successMessage);
                } else {
                    this.setState({ failureMessage: 'Invalid username or password!' });
                    Alert.alert(this.state.failureMessage);
                }
            })
            .catch((error) => {
                // console.log(error);
            });
    }

    render() {
        return (
            <View style={LoginStyles.button}>
                <View style={{ flex: 0.7, }}>
                </View>
                <View style={{ flex: 1, }}>
                    <Button onPress={() => this.props.navigation.navigate('Registration')}
                        style={FontStyles.font}
                        //onPress={this.onSubmit}
                        title="{en.commonLabel.createAccountBtn}"
                        color="#AA8CC5"
                        width="10"
                    />
                </View>
                <View style={{ flex: 0.7, }}>
                </View>
                </View>
        );
    }
}

