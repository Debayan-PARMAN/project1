import { StyleSheet } from 'react-native';
import styleConstants from '../constants/styleConstants';

export default AddAddressStyle = StyleSheet.create({
    mainWrapper: {
        flex: 1,       
        padding:10
    },

    AddAddress: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        height: 35
    },
   AddAddressText: {
       fontFamily: styleConstants.fontStyles.fontFamily,
       textAlign: styleConstants.fontStyles.textAlign,
       fontSize: styleConstants.fontStyles.bodyFontSize1,
       fontWeight: styleConstants.fontStyles.fontWeight,
       color: styleConstants.fontStyles.fontColor,           
    },
    AddressType: {
        flex: 1,        
        height: 20,
       
    },
   AddressTypeText: {   
       fontFamily: styleConstants.fontStyles.fontFamily,
       //textAlign: styleConstants.fontStyles.textAlign,
       fontSize: styleConstants.fontStyles.bodyFontSize1,
       fontWeight: styleConstants.fontStyles.fontWeight,
       color: styleConstants.fontStyles.fontColor,     
    },
    ToServe: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
    },
    ToServeText: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        color: styleConstants.colorStyles.fontColor,
        fontWeight: styleConstants.fontStyles.fontWeight,
        padding: 10,
        justifyContent: 'center',
    },
    NameAgeSex: {
        flex: 1,
        padding: 10,
        marginTop: 5,
        backgroundColor: '#fff',
    },
    NameText: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        color: styleConstants.colorStyles.fontColor,
        justifyContent: 'center',
    },
    AgeText: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        color: styleConstants.colorStyles.fontColor,
        marginTop: 20,
        justifyContent: 'center',
    },
    btnContainer: 
        { flex: 1, height: 40, marginTop: 20, justifyContent: 'center', alignItems: 'center' 
    },
    countryContainer:{    
        height: 45, marginTop: 5, borderBottomWidth: 1, borderColor: '#ccc',
    },
    //*********Address page Style*********** */
    AddnewAreaContainer: {
        flex: 1, height: 50,flexDirection: 'row',
    },
    Container1: {
        flex: 1, height: 35, borderBottomWidth: 1, borderColor: '#93278f'},
    Container2: {
        flex: 0.1, height: 35, borderBottomWidth: 1, borderColor: '#93278f' 
    },
    ImageView: {
        width: 20, height: 20
    },
});
