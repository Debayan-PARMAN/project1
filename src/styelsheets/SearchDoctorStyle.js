import { StyleSheet } from 'react-native';
import styleConstants from '../constants/styleConstants';

export const SearchDoctorStyle = StyleSheet.create({
    container: {
        padding: 0,
    },
    flex: {
        flex: 1,
    },
    flex1: {
        flex: 0.9,
    },
    flex2: {
        flex: 0.5,
    },
    mainContainer: {
        height: 90,
        margin: 10,
        //backgroundColor:'red',
        //paddingLeft: 10,
        //paddingRight: 10,
        //marginTop: 10,
    },
    mainContainer1: {
        height: 95,
        margin: 10,
        //backgroundColor:'red',
        //paddingLeft: 10,
        //paddingRight: 10,
        //marginTop: 10,
    },
    middleContainer1: {
        height: 60, 
        marginTop: 10, 
        marginBottom: 3, 
    },
    middleContainer2: {
        height: 60,
        marginTop: 3,
        marginBottom: 3,
    },
    middleSubContainer1: {
        height: 30, 
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    middleSubContainer1a: {
        flex: 1, 
        borderRadius: 10, 
        borderWidth: 1,
        borderColor:'#ccc', 
        height: 30, 
        flexDirection: 'row' 
    },
    middleSubContainer2: {
        height: 22, 
        flexDirection: 'row',
    },
    textInputMainContainer: {
        flexDirection: 'row',
        height: 40, 
        //backgroundColor: 'blue',
    },
    textInputSubContainer1: {
        flex: 0.5, 
        marginRight: 5,
    },
    textInputSubContainer2: {
        flex: 0.5,
        marginLeft: 5,
    },
    textInput: {
        height: 30, 
        borderColor: 'gray', 
        borderWidth: 1, 
        paddingLeft: 5, 
        paddingRight: 5, 
        marginTop: 3,
    },
    acceptHousecall:{
        flex: 0.7, 
        alignItems: 'flex-end', 
    },
    filter: {
        //flexDirection: 'row',
        flex: 0.3, 
        alignItems: 'flex-end',
        //marginLeft: 130,
    },
    filter1: {
        flexDirection: 'row',
        flex: 0.3,
        alignItems: 'center',
    },
    filterText: {
        textDecorationLine: styleConstants.fontStyles.textDecorationLine,
        fontSize: styleConstants.fontStyles.headerGroup.h3FontSize,
        fontWeight: styleConstants.fontStyles.fontWeight,
        color: styleConstants.fontStyles.fontColor,
    },
    bodyText: {       
        fontSize: styleConstants.fontStyles.bodyFontSize2,
       // fontWeight: styleConstants.fontStyles.fontWeight,
        color: styleConstants.fontStyles.fontColor,
    },
    text3Style: {
        flex: 0.5, 
        alignItems: 'flex-end',
    },
    borderLine1: {
        borderBottomWidth: 1,
        marginTop: 3,
        marginBottom: 3,
    },
    borderLine2: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        //marginTop: 3,
        //marginBottom: 3,
    },
    borderLine3: {
        borderBottomWidth: 1,
        marginTop: 6,
        //marginBottom: 3,
    },
    toggleContainer: {
        flex: 0.3, 
        alignItems: 'flex-end',
        //flex: 0.4,
    },
    imageContainer: {
        width: 25, 
        justifyContent: 'center',
    },
    imageStyle: {
        height: 10,
        width: 10,
    },
    ratingsDaysContainer: {
      flex:1,
        justifyContent: 'center',
    },
    ratingsDays: {
        marginLeft: 3,
    },
    doctorcardContainer: {
        flex: 0.8,
    },
    ratingImageContainer: {
        margin: 2,
    
    }
});