import React, { Component } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { FooterStyles } from '../../styelsheets/MainStyle';
export default class Footer_Icons extends Component {
    navigateTo = (link) => {
        console.log(link);
        this.props.navigation.navigate(link);
    }
    render() {
        const { iconLabel, iconSrc, iconLink} = this.props;
        const imageContainer = (<Image style={FooterStyles.imageStyles} source={iconSrc} />);
        return (
            <View style={FooterStyles.icons}>
                <TouchableOpacity onPress={() => this.navigateTo(iconLink)}>
                    <View style={FooterStyles.wrapper} >
                        {imageContainer}
                        <Text style={FooterStyles.textStyles}>{iconLabel}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    };
};
