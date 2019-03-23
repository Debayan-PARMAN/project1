import { StyleSheet } from 'react-native';
import styleConstants from '../constants/styleConstants';

export const AppointmentConfirmationStyle = StyleSheet.create({
    container: {
        padding: 0,
    },
    mainContainer: {
        flex: 1, 
        margin: 10,
    },
    subContainer : {
        flex: 1, 
        flexDirection: 'row',
    },
    flex: {
        flex: 1,
    },
    text: {
        fontWeight: styleConstants.fontStyles.fontWeight,
        fontFamily: styleConstants.fontStyles.fontFamily,
        color: styleConstants.fontStyles.fontColor,
    },
    medePal: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        color: styleConstants.fontStyles.fontColor,
        fontWeight: styleConstants.fontStyles.fontWeight,
        fontSize: styleConstants.fontStyles.headerGroup.h1FontSize,
    },
    heartImageContainer: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 20,
    },
    heartImageStyle :{
        height: 80, 
        width: 80,
    },
    downloadImageContainer: {
        flex: 0.1, 
        justifyContent: 'flex-start', 
        alignItems: 'center',
    },
    downloadImageStyle: {
        height: 20,
        width: 20,
    },
    pdfContainer: {
        flex: 0.9,
        alignItems: 'center',
        marginTop: 2,
    },
    appointmentConfirmedContainer: {
        alignItems: 'center', 
        marginTop: 10, 
        marginBottom: 20,
    },
    appointmentConfirmedText: {
        fontSize: styleConstants.fontStyles.headerGroup.h2FontSize,
        fontFamily: styleConstants.fontStyles.fontFamily,
        color: styleConstants.fontStyles.fontColor,
    },
    drContainer: {
        height: 40, 
        flexDirection: 'row',
    },
    drName: {
        fontWeight: styleConstants.fontStyles.fontWeight,
        fontSize: styleConstants.fontStyles.headerGroup.h3FontSize,
        fontFamily: styleConstants.fontStyles.fontFamily,
        color: styleConstants.fontStyles.fontColor,
    },
    drDegreeContainer: {
        flex: 0.8, 
        alignItems: 'center',
    },
    drDegreeText: {
        fontSize: styleConstants.fontStyles.bodyFontSize1,
    },
    drSpecialization: {
        flex: 1, 
        alignItems: 'center',
    },
    locationContainer : {
        height: 40,
    },
    dateTimeContainer: {
        height: 40, 
        marginTop: 10,
    },
    addressContainer: {
        height: 40, 
        marginTop: 10,
    },
    getDirectionContainer: {
        height: 40, 
        marginTop: 15, 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    linearGradient: {
        width: 150,
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },   
    pnameStatusContainer: {
        height: 45, 
        marginTop: 10,
    },
    pnameStatus: {
        marginTop: 3,
    },
    buttonContainer: {
        flex: 1, 
        height: 40, 
        marginTop: 20, 
        flexDirection: 'row',
        justifyContent:'space-evenly'
    },
    buttonSubContainer1: {
        flex: 1, 
      
    },
    buttonSubContainer2: {
        flex: 1,        
    },   
});