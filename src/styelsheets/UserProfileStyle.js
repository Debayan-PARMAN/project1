import { StyleSheet } from 'react-native';
import styleConstants from '../constants/styleConstants';

export default UserProfileStyle = StyleSheet.create({
    mainWrapper: {
        flex: 1,
    },
    welcome: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#ccc',
        height:80
    },
    welcomeText: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: styleConstants.fontStyles.headerGroup.h2FontSize,
        color: styleConstants.fontStyles.fontColor1,     
        textAlign: styleConstants.fontStyles.textAlign,
      
    },
    ToServe: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',     
        height: 40
    },
    ToServeText: {
        textAlign: styleConstants.fontStyles.textAlign,
        fontSize: styleConstants.fontStyles.bodyFontSize1,
        fontWeight: styleConstants.fontStyles.fontWeight,
        color: styleConstants.fontStyles.fontColor,  
       
    },
    EmailAgeBloodWeight: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 10,
        marginTop:5,
        height: 65,
        backgroundColor: '#fff',
    },
   
    AgeBloodWeight: {
        flex: 1,
        height: 60,
        marginTop: 10,
        alignItems:'center',
        flexDirection: 'row',
    },
    AgeBloodWeightHorizontalAlignment: {
        width: 100,
        height: 50,
        marginLeft: 10
    },
    AgeBloodWeightTextInput: {
        height: 35,
        borderColor: '#ccc',
        borderBottomWidth: 1,
    },
    AgeText: {
        textAlign: styleConstants.fontStyles.textAlign,
        fontSize: styleConstants.fontStyles.bodyFontSize1,
        fontWeight: styleConstants.fontStyles.fontWeight,
        color: styleConstants.fontStyles.fontColor, 
       
    },
    GenderIama: {
        flex: 0.15,
        textAlign:'right',       
        fontSize: 16,  
    },
    Gender: {
        flex: 0.75,     
        flexDirection: 'row',
        justifyContent: 'center',      
        borderWidth:1,
        borderColor:'#972493',
    },
    GenderButton: {
        width: 90,
        height: 30,       
        borderRightWidth: 1,
        borderColor: '#93279f',
        justifyContent:'center',
        alignItems:'center'             
    },
    hoverButton: {
        backgroundColor: '#93279f',
    },

    hoverText: {
        textAlign: styleConstants.fontStyles.textAlign,
        fontSize: styleConstants.fontStyles.bodyFontSize1,
        fontWeight: styleConstants.fontStyles.fontWeight,
        color: '#fff',      
    },
    GenderText: {
        textAlign: styleConstants.fontStyles.textAlign,
        fontSize: styleConstants.fontStyles.bodyFontSize1,
        fontWeight: styleConstants.fontStyles.fontWeight,
        color: styleConstants.fontStyles.fontColor,  
    },
    Next: {
        flex: 1,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
    }, 
   
     
  });
