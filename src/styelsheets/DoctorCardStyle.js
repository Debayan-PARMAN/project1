import {StyleSheet} from 'react-native';
import styleConstants from '../constants/styleConstants';


export const DoctorCardStyle = StyleSheet.create({
    mainWrapper:{
        flex: 1,
        padding:5   
    },
    mainContainer: {
        flex: 1,
    },
    mainContainerAppiontment: {
        margin: 10,
        //flex:0.5,
    },
    subContainer1: {
        flex: 0.3,
        flexDirection: 'row',
        //backgroundColor: 'red',
    },

    subContainer2: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    subContainer3: {
        marginLeft: 3,
    },
    profileImage: {
        width: 40,
        height: 40,
        marginRight: 10,

    },
    imageContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    flex1: {
        flex: 0.3,
    },
    flex2: {
        flex: 0.5,
    },
    flex1: {
        flex: 0.3,
    },
    flex2: {
         flex: 0.5,
    },
    doctorName: {
        fontWeight: styleConstants.fontStyles.fontWeight,     
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: styleConstants.fontStyles.bodyFontSize2,
        color: styleConstants.fontStyles.fontColor1,
    },
    doctorDescription: {
        //fontWeight: styleConstants.fontStyles.fontWeight,
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: styleConstants.fontStyles.bodyFontSize3,
        color: styleConstants.fontStyles.fontColor,
    },
    fontStyle: {
        fontWeight: 'bold',
    },    
    fontAll: {
        fontSize: styleConstants.fontStyles.bodyFontSize4,
        color: styleConstants.fontStyles.fontColor2,
        fontFamily: styleConstants.fontStyles.fontFamily,
    },
    // margin2: {
    //     marginBottom: 2,
    // },   
    margin2: {
        marginTop: 10,
    },
    rightAngleContainer: {
        //backgroundColor:'green', 
        flex: 0.1,
        marginTop: 7,
        alignItems: 'center',
    },
    rightAngleStyle: {
        height: 15,
        width: 15,
    },
    subContainer2: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
    },
    heartImage: {
        marginLeft: 30,
    },
    heartIconContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heartIconImage: {
        height: 25,
        width: 25,
    },
    height1: {
        height: 80,
    },
    textContainer: {
        flex: 1,
        marginLeft: 5,
    },
    borderLine: {
        borderBottomWidth: 1,
        marginTop: 5,
        marginBottom: 10,
    },
    ratingArea: {
        backgroundColor: '#1BA529',
        justifyContent: 'center',
        alignItems: 'center',
        height: 25,
        borderRadius: 5,
        width: 50,
        marginLeft: 10
    },
    locationImage: {
        height: 15,
        width: 15,
    },
    locationImageContainer: {
        flex: 0.1,
        marginRight: 5,
    },
    chamberArea: {
        flex: 1,
        flexDirection: 'row',
    },
    hospitalName: {
        flex: 1,
    },
    fee: {
        flex: 0.4,
    },
    margin: {
        marginLeft: 3,
        marginTop: 8,
    },
    border: {
        borderBottomWidth: 1,
        marginTop: 5,
        marginBottom: 10,
        borderColor: '#ccc',
    },
    margin1: {
        marginLeft: 5,
        fontSize: styleConstants.fontStyles.bodyFontSize4,
        color: styleConstants.fontStyles.fontColor2,
        fontFamily:styleConstants.fontStyles.fontFamily,
    },
    reviewImageContainer: {
        flex: 0.7,
        flexDirection: 'row',
    },
    likeImageContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rateImagecontainer: {
        flex: 0.4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 15,
        width: 15,
    },
    image1: {
        height: 8,
        width: 8,
    },
    reviewImage: {
        height: 15,
        width: 15,
        marginLeft: 5,
    },
    ratingImageContainer: {
        margin: 1,

    }
});