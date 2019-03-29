import { StyleSheet } from 'react-native';
import styleConstants from '../constants/styleConstants';

export const CardStyle = StyleSheet.create({
    container: {
        padding:0,
    },
    mainContainer: {
        flex: 1, 
        flexDirection: 'row',         
        marginTop: 10,
    },
    flex: {
        flex: 1,
    },
    name: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: styleConstants.fontStyles.bodyFontSize2,
        color: styleConstants.fontStyles.fontColor,
        fontWeight: styleConstants.fontStyles.fontWeight,
    },
    specialization: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: styleConstants.fontStyles.bodyFontSize5,
        color: styleConstants.fontStyles.fontColor,
        textAlign: 'right',
    },
    secondContainer: {
        flex: 1, 
        flexDirection: 'row', 
        paddingLeft: 10, 
        paddingRight: 10,
    },
    slotStyle: {
        textAlign: 'right',
        
    },
    buttonContainer: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        height: 30, 
        marginBottom: 10,
    },
    buttonStyle: {
        flex: 0.5, 
        backgroundColor: '#1BA529', 
        justifyContent: 'center', 
        marginLeft: 7, 
        marginRight: 7, 
        borderRadius: 5, 
        paddingLeft: 2, 
        paddingRight: 2, 
    },
    buttonText: {
        textAlign: 'center', 
        color: 'white',
    },
});