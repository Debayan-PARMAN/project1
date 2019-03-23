import React, { Component } from 'react';
import { Icon, SearchBar } from 'react-native-elements';
import {
    //AppRegistry,
    Text,
    Image,
    View,
    Button,
    Alert,
    TouchableOpacity

} from 'react-native';

export default class Header_Component_Search extends Component {
    render() {
        return (
            
                <View style={{ flex: 2, }}>
                    <SearchBar lightTheme style={{
                        alignItems: 'center',
                        overflow: 'hidden',
                        backgroundColor: 'transparent',
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        marginTop: 0,
                        
                    }}
                        //lightTheme
                        round
                        //onChangeText={someMethod}
                        //onClear={someMethod}
                        placeholder='Search...'
                    />

                </View>
                
        );
    }
}



