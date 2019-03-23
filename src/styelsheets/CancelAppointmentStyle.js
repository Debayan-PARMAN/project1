import { StyleSheet } from 'react-native';
import styleConstants from '../constants/styleConstants';

export default CancelAppointmentStyle = StyleSheet.create({

    mainWrapper: {
        flex: 1,
        backgroundColor: '#fff',
    },
    CancelAppointmentContainer: {
        flex: 1,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'
    },
    CancelAppointmentText: {
        fontSize: 18,
        padding: 1,
        fontWeight: 'bold',
        textAlign: 'center'
    }, 
    AreYouSureContainer: {
        flex: 1,
        height: 85,
        justifyContent: 'center',
        alignItems: 'center'
    },

    AreYouSureText: {
        fontSize: styleConstants.fontStyles.headerGroup.h3FontSize,
        fontWeight: styleConstants.fontStyles.fontWeight,
        color: styleConstants.fontStyles.fontColor,
        padding:5,
        textAlign:'center' 
    },
    CancelCommentContainer:  
     { flex: 1, height: 130, justifyContent: 'center', alignItems: 'center' 

    }, 
    CancelCommentContainerTextInput:    
        { width: 320, height: 120,borderRadius:3, borderColor: '#93278f', borderWidth: 1, paddingLeft: 5 }
    , 

   YesBtnContainer : {
        flex: 1,
        height: 35,
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
  
    YesText: {
        fontSize: 18,
        padding: 1,
        textAlign: 'center'
    },
});