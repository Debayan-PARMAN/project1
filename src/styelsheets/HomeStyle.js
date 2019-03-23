{/*------Start Homepage Styles -------*/ }
import { StyleSheet } from 'react-native';
import styleConstants from '../constants/styleConstants';

export default HomeStyles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
    },
    signin: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',       
        height:50,
        marginTop:5,
       
    },   
     completeprofilearea: {
        flex: 1,
        height:38,
        flexDirection: 'row',
        alignItems: 'center',     
         padding: 5
        },
     completeprofile: {
        flex: 1,
        flexDirection: 'row',        
        height:38,
        alignItems:'center',
       
       },
    completeprofile_pContainer: {
        flex: 1,
    },
    
    completeprofile_p: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        color: styleConstants.fontStyles.fontColor,
        fontSize: styleConstants.fontStyles.bodyFontSize4,       
        padding: 3,    
    },  
    caro: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },

    offers: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',       
    },
    off_h: {
        width: 320,
        height: 20,
        backgroundColor: '#fff',
    },
    off_h_r: {
        width: 40,
        height: 25,
        backgroundColor: '#fff',
    },
    off_h_r_i: {
        width: 15,
        height: 15,
        marginTop: 5,      
    },

    off_f: {
        width: 370,
        height: 40,
        backgroundColor: '#fff',
    },
    off_txt_h: {
      padding:5,
      fontFamily: styleConstants.fontStyles.fontFamily,
      fontWeight: styleConstants.fontStyles.fontWeight,
      fontSize: styleConstants.fontStyles.bodyFontSize1,
      color: styleConstants.fontStyles.fontColor,
    },
    off_txt_p: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: styleConstants.fontStyles.bodyFontSize2,
        color: styleConstants.fontStyles.fontColor,
        padding: 5,     
    },
    ser_Container: {
        flexDirection: 'row',
        marginTop: 5
    },
    ser_subContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ser_parent: {      
        flex:1,
        height: 80,
        margin: 5,
        borderWidth: 1,
        borderColor: '#972493',
        justifyContent: 'center',
        alignItems: 'center',     
    },   
    ser_icon: {
        width: 200,
        height: 80,
       
    },
});

{/*------End Homepage Styles hare-------*/ }
