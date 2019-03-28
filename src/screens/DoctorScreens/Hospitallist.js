import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SpecialitiesStyle } from '../../styelsheets/SpecialitiesStyle';
import imageConstantURI from '../../constants/imageConst';
import en from '../../messages/en-us';
import Footer from '../../components/Footer/Footer';

class Hospitallist extends Component {
    render() {
        const { list1, keyValue } = this.props;
        //console.log("ARPAN KHAN........",list1);

        return (
            <View style={{flex:1}}>
            <View style = { SpecialitiesStyle.mainContainer }>
                {list1.map((data, index) =>
                    <TouchableOpacity onPress={() => this.props.onHospitals(data.hospitalName)} key={index}>
                    <View key={data[keyValue]} style={ SpecialitiesStyle.subContainer }>
                        <View style = { SpecialitiesStyle.textContainer }>
                            <Text style={SpecialitiesStyle.textStyle} >{data.hospitalName}</Text>
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
export default Hospitallist;