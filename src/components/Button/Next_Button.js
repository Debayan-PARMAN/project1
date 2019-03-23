import React, { Component } from 'react';
import { View,Alert,Button,} from 'react-native';
import { LoginStyles, FontStyles } from '../../styelsheets/MainStyle';
//import { ScrollView } from 'react-native-gesture-handler';

export default class Next_Btn extends Component {
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
            backgroundColor: '#AA8CC5',
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
                console.log(error);
            });
    }

    render() {
     return (
         <View style={LoginStyles.button}>
             <View style={{ flex: 0.7, }}>
             </View>
             <View style={HomeStyles.signin}>
                 <LinearGradient
                     colors={['#a25ca8', '#582491']}
                     style={HomeStyles.signinbtn}>
                     <TouchableHighlight onPress={this.onSubmit}>
                         <Text style={[HomeStyles.signinbtnText]}>Next</Text>
                     </TouchableHighlight>
                 </LinearGradient>
             </View>
             <View style={{ flex: 0.7, }}>
             </View>
         </View>
        );
    }
}

