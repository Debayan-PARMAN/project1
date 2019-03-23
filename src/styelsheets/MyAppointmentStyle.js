import { StyleSheet } from 'react-native';
 import styleConstants from '../constants/styleConstants';

export default MyAppointmentStyle = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        backgroundColor:'#fff',
    },
    toptabArea: {
        flex: 1,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    toptab: {
        flex: 0.5,
        height: 40,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center', 
    },
    upcoming: {
        flex: 0.25,
        backgroundColor: '#972493',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1
    },
    upcomingtext: {
        color: '#fff'
    },
    past: {
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dateArea: {
        flex: 1,
        height: 25,     
    },
    datetext: {
        fontFamily: styleConstants.fontStyles.fontFamily,       
        fontSize: styleConstants.fontStyles.bodyFontSize2,
        color: styleConstants.fontStyles.fontColor,
        padding:3,
        marginLeft:5     
    },
    cardArea:{
        flex: 1,
        height: 130,
        backgroundColor:'#fff',       
        justifyContent: 'center',
                 
    },
    cardInnerArea: {
        flex: 0.88,            
        backgroundColor: '#fff',
        borderBottomWidth: 1, borderColor: '#ccc',
        padding: 5 
    },  
    doctordetails: {
        flex: 0.98,
        flexDirection: 'row',
        padding: 5,
    },  
    doctorName: {
        fontWeight: styleConstants.fontStyles.fontWeight,
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: styleConstants.fontStyles.bodyFontSize2,
        color: styleConstants.fontStyles.fontColor1,     
    },  
    chamberLocation: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: styleConstants.fontStyles.headerGroup.h3FontSize,
        color: styleConstants.fontStyles.fontColor,
        marginTop: 3
    }, 
    patientName: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontWeight: styleConstants.fontStyles.fontWeight,
        fontSize: styleConstants.fontStyles.bodyFontSize2,
        color: styleConstants.fontStyles.fontColor,
         marginTop: 3
    },   
    confirmpaid: {
        fontWeight: styleConstants.fontStyles.fontWeight,
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: styleConstants.fontStyles.bodyFontSize2,
        color: styleConstants.fontStyles.fontColor1,  
         marginTop: 10
    },
    rightArrow: {
        flex: 0.1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },   
    rightArrowImageContainer: {
        width: 23,
        height: 23,
        marginLeft: 10
    },   
    // ****************for Past Tab*************
    pastContainer: {
        flex: 1,
        height: 145,
    },
    pastInnerContainer: {
        flex: 1,
        margin: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    doctorContainer: {
        height: 25,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    doctor: {
        flex: 0.7,
        height: 25,
    },
    doctorText: {       
       
            fontWeight: styleConstants.fontStyles.fontWeight,
            fontFamily: styleConstants.fontStyles.fontFamily,
            fontSize: styleConstants.fontStyles.bodyFontSize2,
            color: styleConstants.fontStyles.fontColor1,
        },

    doctorDescription: {
            //fontWeight: styleConstants.fontStyles.fontWeight,
            fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: styleConstants.fontStyles.bodyFontSize2,
            color: styleConstants.fontStyles.fontColor,
        },
    
    complete: {
        flex: 0.3, height: 25,
    },
    completeText: {
        fontWeight: styleConstants.fontStyles.fontWeight,
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: styleConstants.fontStyles.bodyFontSize2,
        color: styleConstants.fontStyles.fontColor1,
    },
    locationContainer: {
        flex: 1, height: 40, flexDirection: 'row',
    },
    locationInnerContainer: {
        flex: 0.85, height: 50,
    },
    location: {
        flex: 1, height: 25
    },
    locationText: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: styleConstants.fontStyles.bodyFontSize2,
        fontWeight: styleConstants.fontStyles.fontWeight,
         color: styleConstants.fontStyles.fontColor,
    },
    patientText: {
        fontFamily: styleConstants.fontStyles.fontFamily,
            fontSize: styleConstants.fontStyles.bodyFontSize3,
            color: styleConstants.fontStyles.fontColor,
    },
    patient: {
        flex: 1, height: 20,
    },
    ImageContainer: {
        flex: 0.15, height: 40,
    },
    ImageSize: {
        width: 23, height: 23, marginTop: 15, marginLeft: 25
    },
    rateprescriptionorderContainer: {
        flex: 0.97, height: 30, marginTop: 15, flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ratebtn: {
        width: 100, height: 25, borderRadius: 3, borderWidth: 1,borderColor:'#93278f'
    },
    ratebtnText: {
        padding: 2,
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: styleConstants.fontStyles.bodyFontSize3,
        color: styleConstants.fontStyles.fontColor1,
        textAlign: styleConstants.fontStyles.textAlign,
    },
});
