import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { LinearGradient } from 'expo';
import styleConstants from '../../constants/styleConstants';

export default function ButtonComponent(props) {

    const primaryButton = (<TouchableOpacity onPress={props.buttonFunction}>
        <LinearGradient
            style={props.buttonStyle}
            colors={[styleConstants.colorStyles.primaryGradientColor, styleConstants.colorStyles.secondaryGradientColor]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }} >
            <Text style={props.buttonTextStyle}>{props.buttonLabel}</Text>
        </LinearGradient>
    </TouchableOpacity>);

    const secondayButton = (<TouchableOpacity onPress={props.buttonFunction} style={props.buttonStyle}>
        <Text style={props.buttonTextStyle}>{props.buttonLabel}</Text>
    </TouchableOpacity>);

    const thirdButton = (<TouchableOpacity onPress={props.buttonFunction}>
        <Text style={props.buttonTextStyle}>{props.buttonLabel}</Text>
    </TouchableOpacity>);

    const fourthButton = (
        <TouchableOpacity onPress={() => props.buttonFunction} >
            <View style={props.buttonStyle[0]}>
                <View style={props.buttonStyle[1]}>
                    <Image style={props.buttonImageStyle} source={props.buttonImageSRC} />
                </View>
                <View style={props.buttonStyle[2]}>
                    <Text style={props.buttonTextStyle}>{props.buttonLabel}</Text>
                </View>
            </View>
        </TouchableOpacity>);

    let buttonArea;
    switch (props.buttonType) {
        case 'type1':
            buttonArea = primaryButton;
            break;
        case 'type2':
            buttonArea = secondayButton;
            break;
        case 'type3':
            buttonArea = thirdButton;
            break;
        case 'type4':
            buttonArea = fourthButton;
            break;
        default:
            break;
    }
    return buttonArea;
}

// <ButtonComponent buttonLabel={} buttonFunction={} buttonType='type1' buttonStyle={} buttonTextStyle={} />
