import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, AppRegistry } from 'react-native';
import { SpecialitiesStyle } from '../../styelsheets/SpecialitiesStyle';
import imageConstantURI from '../../constants/imageConst';
import Footer from '../../components/Footer/Footer';

class Specialities extends Component {
    render() {
        const { list, keyValue } = this.props;
        return (
            <View style={{flex:1}}>
                <View style = { SpecialitiesStyle.mainContainer }>
                    {list.map((data, index) =>
                        <TouchableOpacity onPress={() => this.props.onSpecialities(data.specialization)} key={index}>
                        <View key={data[keyValue]} style={ SpecialitiesStyle.subContainer }>
                            <View style = { SpecialitiesStyle.textContainer }>
                                <Text style={SpecialitiesStyle.textStyle} >{data.specialization}</Text>
                                <Text></Text>
                            </View>
                            <View style= { SpecialitiesStyle.imageContainer }>
                                <Image style={ SpecialitiesStyle.imageStyle } source={imageConstantURI.rightAngle.src}/>
                            </View>
                        </View>
                        </TouchableOpacity>
                    )}
                </View>
                <Footer navigation={this.props.navigation} />
            </View>
        );
    }
}

AppRegistry.registerComponent('project1', () => Specialities);

export default Specialities;