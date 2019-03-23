import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions,Text, TouchableOpacity } from 'react-native';
import { Constants } from 'expo';

const { width } = Dimensions.get('window');
const height = width * 0.4

class Carousel extends Component {
    render() {
        const { images } = this.props;
        if (images && images.length) {
            return (
                <View
                    style={styles.scrollContainer}
                >
                    <ScrollView
                        horizontal
                        pagingEnabled
                        autoPlayWithInterval={3000}
                        showsHorizontalScrollIndicator={true}
                    >
                        {images.map(image => (
                            <Image style={styles.image} source={image.source} >
                            
                            </Image>
                        ))}
                    </ScrollView>
                </View>
            );
        }
        // console.log('Please provide images');
        return null;
    }
}

export default class App extends Component {
    render() {
        const images = [
            {
                source: {
                    uri: 'http://www.jicjo.com/Portals/Portal1/Upload/Block/Image/medical-2.jpg',
                },
            },
            {
                source: {
                    uri: 'https://www.smiths-medical.com/~/media/M/Smiths-medical_com/Images/Hero%20Backgrounds/Acapella-Home-Test-Hero.jpg',
                },
            },
            {
                source: {
                    uri: 'https://www.mathworks.com/content/mathworks/www/en/solutions/medical-devices/_jcr_content/mainParsys/column_0/1/feature_0/items/item_1.adapt.full.high.jpg/1515585842889.jpg',
                },
            },
            {
                source: {
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9cXRHBftAjSTtcUDJvDdHJ38ztybxUlDBR2H8UZmoupW4TIxzg',
                },
            },

        ];

        return (
            
            <View style={styles.container}>
                <View style={{ height:5, }}></View>
                <TouchableOpacity><Carousel images={images} /></TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight0*0.35,
    },
    scrollContainer: {
        height,
    },
    image: {
        width,
        height,
    },
});
