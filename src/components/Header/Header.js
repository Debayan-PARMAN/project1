import React, { Component } from 'react';
//import Icon from 'react-native-vector-icons/FontAwesome';
//import { Icon, SearchBar } from 'react-native-elements';
import Header_Component_Menu from './Header_Menu';
import Header_Component_Search from './Header_Search';
import Header_Component_SearchButton from './Header_SearchButton'; 
import {
    //AppRegistry,
    Text,
    Image,
    View,
    Button,
    Alert,
    TouchableOpacity

} from 'react-native';
import { HeaderStyles } from '../../styelsheets/MainStyle';

export default class Header_Component extends Component {
    render() {
        return (
            <View Container='Header' style={HeaderStyles.container}>
                <Header_Component_Menu/>
                <Header_Component_Search/>
                <Header_Component_SearchButton/>
            </View>
        );
    }
}



