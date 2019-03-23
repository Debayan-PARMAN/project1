import { StyleSheet } from 'react-native';
import styleConstants from '../constants/styleConstants';

export default UpdateUserProfileStyle = StyleSheet.create({
    mainWrapper: {
        flex: 1, 
    },
   
    health: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#ccc',
        height: 25
    },
    healthText: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        //fontSize: styleConstants.fontStyles.headerGroup.h3FontSize,
        color: styleConstants.fontStyles.headerGroup.headerColor,
        padding: 30,
        textAlign: 'center',
        justifyContent: 'center',
    },
   
    userdetailsArea: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        padding: 10,
        marginTop: 5,
        backgroundColor: '#fff',
    },
    NameText: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        //fontSize: styleConstants.fontStyles.headerGroup.h2FontSize,
        color: styleConstants.colorStyles.fontColor,
        // fontWeight: styleConstants.fontStyles.fontWeight,       
        // textAlign: 'center',
        justifyContent: 'center',
    },
    AgeText: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        //fontSize: styleConstants.fontStyles.headerGroup.h2FontSize,
        color: styleConstants.colorStyles.fontColor,
        marginTop: 20,
        // fontWeight: styleConstants.fontStyles.fontWeight,       
        // textAlign: 'center',
        justifyContent: 'center',
    },
    dobtextinput: {
        height: 25,
        borderColor: 'gray',
        borderBottomWidth: 1,
        marginTop: 0 
    },
    bloodheightweight: {
        height: 60,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 10, 
        
    },
    tabText:{
        fontFamily: 'Roboto',
        fontSize: 15,
        color: '#fff',        
        marginTop: 4   },

    userProfileTabs:{
        flex: 1,
        height:35, 
        alignItems: 'center',
        justifyContent: 'center',         
    },   
    userProfileInnerTabs: {
        height: 32,
        flexDirection: 'row',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor:'#972493'
    },
    userProfileInnerFirstTabs: {
        width: 100,
        height: 30,
        alignItems: 'center',
        backgroundColor: '#972493',
        borderRightWidth: 1,
        borderColor: '#972493'
    }, 
    userProfileInnerSecondTabs: {
        width: 100,
        height: 30,
        justifyContent: 'center',
        borderRightWidth: 1,
        borderColor: '#972493'
    }, 
    userProfileInnerLastTabs: {
        width: 100,
        height: 30,
        justifyContent: 'center',       
    }, 
    userProfileInnerSecondTabsText: {
        fontFamily: 'Roboto', 
        fontSize: 15,
        textAlign: 'center'
    },
    userNameArea: {
        flex: 1,
        flexDirection: 'row',
    },
    userNameFirstArea: {
        flex: 0.7, height: 100,
    },
    userNameLastArea: {
        flex: 0.3, height: 100, borderWidth: 1, borderColor: '#972493',
    }, 
    profileImageArea:
    { width: 95,
      height: 95,
      margin: 2.4 
    },
    datearea:{
     flex: 1, 
     marginBottom: 1
      },
    heightWeightArea:{
     flex:.30,marginLeft: 10  
      },  
    genderMaritialArea: {
        width: 100, height: 40, marginLeft: 10
    },        

    bloodgroup: {
        flex: .30,      
         },
    bloodgrouptext: {
        width: 100,
        height: 20,
    },
    userdetailsText: {
        //textAlign: styleConstants.fontStyles.textAlign,
        fontSize: styleConstants.fontStyles.bodyFontSize1,
       // fontWeight: styleConstants.fontStyles.fontWeight,
        color: styleConstants.fontStyles.fontColor, 
    }, 
    textInput:{
        height: 35,
        borderColor: 'gray',
        borderBottomWidth: 1,
    },
    address: {
        marginTop: 15,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color:'#808080',
    },
    addaddress: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height:50,
        borderWidth:1,
        borderRadius:3,
        borderColor:'#972493',       
    },
    addaddresslogoContainer: {
        width: 40, 
        height: 40,
    },
    addaddressText:{       
        textAlign: styleConstants.fontStyles.textAlign,
        fontSize: styleConstants.fontStyles.bodyFontSize1,
        //fontWeight: styleConstants.fontStyles.fontWeight,
        color: styleConstants.fontStyles.fontColor,  
    },
    addaddresslogo: {
        width: 25,
        height: 25,
        margin: 10
    },
    buttons: {
        flex: 1,
        height: 40,
        marginTop: 6,
        flexDirection: 'row',
        justifyContent:'space-evenly',
           },
    updateprofilebutton: {
        width: 120, 
        height: 30,
        backgroundColor: '#972493',
        marginTop: 5,
        borderRadius: 5

    },   
    updateprofilebtn: {
        width: 122,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3
    },
    updateprofilebtnText: {
        textAlign: 'center',
        color: '#fff',
        justifyContent: 'center',
    },
    nextpagebutton: {
        width: 120,
        height: 30,
        backgroundColor: '#fff',
        marginTop: 5,
        borderWidth: 1,
        borderRadius: 5

    },

    nextpagebuttonText: {
        textAlign: 'center',
        alignItems: 'center',
        color: '#000',
        justifyContent: 'center',
        marginTop: 3

    },
});
