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
        fontSize: styleConstants.fontStyles.bodyFontSize1,     
        color: styleConstants.fontStyles.fontColor3,
        padding:5,
        textAlign: styleConstants.fontStyles.textAlign,
    },
     PleaseShareText: {
        fontSize: styleConstants.fontStyles.bodyFontSize1,     
        color: styleConstants.fontStyles.fontColor3,
        padding:5,
        marginLeft:14
       
    },
    CancelCommentContainer:  
     { flex: 1, height: 180,marginTop :20

    }, 
    CancelCommentContainerTextInput:    
        { width: 320, height: 120,borderRadius:3, borderColor: '#93278f', borderWidth: 1, padding: 5  }
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