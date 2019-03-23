import React, { Component } from 'react';
import { View,Alert,Button,} from 'react-native';
import { LoginStyles, FontStyles } from '../../styelsheets/MainStyle';


export default class Search_Button extends Component {
    render() {
     return (           <View>
                        <View style={{ flex: 0.7, }}>

                        </View>

                        <View style={{ flex: 0.5, marginTop: 10 }}>

                            <Button onPress={() => this.props.navigation.navigate('SearchDoctor')}

                                style={FontStyles.font}

                                //onPress={this.onSubmit}

                                title="Search"

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