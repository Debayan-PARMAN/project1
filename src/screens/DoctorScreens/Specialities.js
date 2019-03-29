import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SpecialitiesStyle } from '../../styelsheets/SpecialitiesStyle';
import imageConstantURI from '../../constants/imageConst';
import { buttonStyle, } from '../../styelsheets/CommonStyle';
import styleConstants from '../../constants/styleConstants';
import Footer from '../../components/Footer/Footer';

class Specialities extends Component {
    render() {
        const { list, keyValue } = this.props;
        //console.log(list);

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
export default Specialities;