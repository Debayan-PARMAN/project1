import { StyleSheet } from 'react-native';
import styleConstants from '../constants/styleConstants';

export default AppointmentDetailsStyle = StyleSheet.create({
   
    mainWrapper: {
        flex: 1,
        backgroundColor: '#fff',
    },
    TopFlex: {
        flex: 1,
        height: 120,
        flexDirection: 'row',
    },
    ImageContainer: {
        flex: 0.3,
        margin: 10
    },
    DoctorNameContainer: {
        flex: 0.7,
        margin: 10
    },
    DoctorName: {
        fontSize: styleConstants.fontStyles.headerGroup.h3FontSize,
        fontWeight: styleConstants.fontStyles.fontWeight,
        color: styleConstants.fontStyles.fontColor,
    },
    DoctorDesignation: {
        fontSize: styleConstants.fontStyles.bodyFontSize1,
    },
    AppointmentStatusContainer: {
        flex: 1,
        height: 45,
    },
    LocationContainer: {
        flex: 1,
        height: 45,
        marginTop:8,
    },
    PaymentStatusContainer: {
        flex: 1,
        height: 45,
        flexDirection: 'row',
        marginTop: 10
    },
    PaymentStatusLeftContainer: {
        flex: 0.8,
        justifyContent: 'center',       
    },
    PaymentStatusRightContainer: {
        flex: 0.2,      
        justifyContent: 'center'
    },
    BtnContainer: {
        flex: 1,
        height: 40,
        marginTop: 40,
        flexDirection: 'row',
        justifyContent:'space-evenly',
    },

    HeaderText: {
        fontSize: styleConstants.fontStyles.headerGroup.h4FontSize,
        padding: 1,
        marginLeft: 10,
        fontWeight: styleConstants.fontStyles.fontWeight,
        color: styleConstants.fontStyles.fontColor,
    },
    FooterText: {
        fontSize: styleConstants.fontStyles.bodyFontSize1,
        padding: 1,
        marginLeft: 10, 
        color: styleConstants.fontStyles.fontColor,      
    },
});