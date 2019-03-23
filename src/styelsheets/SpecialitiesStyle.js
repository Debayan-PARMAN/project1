import { StyleSheet } from 'react-native';

export const SpecialitiesStyle = StyleSheet.create({

    mainContainer: {
        flex: 1, 
        justifyContent: 'space-between',
    },

    subContainer: {
        flex: 1, 
        flexDirection: 'row', 
        marginTop: 5, 
        marginBottom: 3, 
        borderBottomWidth: 1,
        borderColor: '#972493',
    },
     imageContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
        flex: 0.1,
    },
    textContainer: {
        flex: 0.9, 
        marginBottom:5,
    },
    textStyle : {
        fontWeight: styleConstants.fontStyles.fontWeight,
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: styleConstants.fontStyles.bodyFontSize2,
        color: styleConstants.fontStyles.fontColor,
    },
    imageStyle: {
        height: 15, 
        width: 15,
    },

});