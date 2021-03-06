import React, { Component } from 'react';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import { Icon, SearchBar } from 'react-native-elements';
import {
    Image,
    View,
    Alert,
    TouchableOpacity

} from 'react-native';

export default class Home extends Component {
    onHome  = () => {
       // console.log("clicked");
        this.props.navigation.navigate('Home');
    };
    render() {
        return (
            <View style={{ alignItems: 'center',paddingLeft:10}}>
                <TouchableOpacity onPress={(e) => this.props.onHome}>
                    <View >
                        <Image style={{ paddingLeft: 10, alignItems: 'center', width: 25, height: 25}}
                        source={require('../../../assets/images/home.png')} />
                    </View>
                </TouchableOpacity>
            </View>               
        );
    }
}