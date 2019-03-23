import React from 'react';
import Carousel from 'react-native-banner-carousel';
import { StyleSheet, Image, View, Dimensions } from 'react-native';

const BannerWidth = Dimensions.get('window').width*0.97;
const BannerHeight = 140;

const images = [
    'https://career.webindia123.com/career/options/images/medical-tourism.jpg',
    'https://www.smiths-medical.com/~/media/M/Smiths-medical_com/Images/Hero%20Backgrounds/Acapella-Home-Test-Hero.jpg',
    'https://www.mathworks.com/content/mathworks/www/en/solutions/medical-devices/_jcr_content/mainParsys/column_0/1/feature_0/items/item_1.adapt.full.high.jpg/1515585842889.jpg'
];

export default class Auto_Carousel extends React.Component {
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri: image }} />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Carousel
                    autoplay
                    autoplayTimeout={4000}
                    loop
                    index={0}
                    pageSize={BannerWidth}
                >
                    {images.map((image, index) => this.renderPage(image, index))}
                </Carousel>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width:300,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#000',
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
});