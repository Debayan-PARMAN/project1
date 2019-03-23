import React, { Component } from 'react';
import { View, Alert, Button, TouchableHighlight, Text} from 'react-native';
import { LoginStyles, FontStyles } from '../../styelsheets/MainStyle';
import { LinearGradient } from 'expo';
//import { ScrollView } from 'react-native-gesture-handler';

export default class GetDirection_Btn extends Component {
    render() {
     return (
        <View style={LoginStyles.button}>
             <View style={{ flex: 0.7, }}>
             </View>
             <View style={{ flex: 1, }}>
                 <LinearGradient
                     colors={['#a25ca8', '#582491']}
                     style={HomeStyles.signinbtn}>
                     <TouchableHighlight onPress={this.props.onSubmit}>
                         <Text style={[HomeStyles.signinbtnText]}>Get Direction</Text>
                     </TouchableHighlight>
                 </LinearGradient>
             </View>
             <View style={{ flex: 0.7, }}>
             </View>
           
        </View>
        );
    }
}