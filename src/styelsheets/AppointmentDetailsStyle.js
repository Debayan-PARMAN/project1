import { StyleSheet } from 'react-native';
import styleConstants from '../constants/styleConstants';

export default AppointmentDetailsStyle = StyleSheet.create({
   
    mainWrapper: {
        flex: 1,
        backgroundColor: '#fff',
    },
    TopFlex: {
        flex: 1,
        height: 80,
        flexDirection: 'row',
    },
    ImageContainer: {
        flex: 0.25,
        margin: 10
    },
     profileImageArea:
    { width: 50,
      height: 50,
      margin: 5 
    },
    DoctorNameContainer: {
        flex: 0.75,
        margin: 10
    },
    DoctorName: {
        fontSize: styleConstants.fontStyles.bodyFontSize2,
        fontWeight: styleConstants.fontStyles.fontWeight,
        color: styleConstants.fontStyles.fontColor3,
    },
    DoctorDesignation: {
         fontSize: styleConstants.fontStyles.bodyFontSize2,
        color: styleConstants.fontStyles.fontColor,
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
        fontSize: styleConstants.fontStyles.bodyFontSize2,
        padding: 1,
        marginLeft: 10,
       // fontWeight: styleConstants.fontStyles.fontWeight,
        color: styleConstants.fontStyles.fontColor3,
    },
    FooterText: {        
        padding: 1,
        marginLeft: 10, 
        fontSize: styleConstants.fontStyles.bodyFontSize2,
        color: styleConstants.fontStyles.fontColor,   
    },
});