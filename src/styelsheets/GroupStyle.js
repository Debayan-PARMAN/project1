import { StyleSheet } from 'react-native';
import styleConstants from '../constants/styleConstants';

export default GroupStyles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        padding: 7,
    },
    btnContainer: {
        flex: 1,
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerText: {       
        textAlign: styleConstants.fontStyles.textAlign,
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontWeight: styleConstants.fontStyles.fontWeight,
        fontSize: styleConstants.fontStyles.headerGroup.h3FontSize,
        color: styleConstants.fontStyles.fontColor,
    },
    text_p: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: styleConstants.fontStyles.bodyFontSize2,
        color: styleConstants.fontStyles.fontColor,       
    },
    textInputContainer: {
        height: 65,
        marginTop: 5,
    },
    toggleBtnContainer: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10
    },
    toggleBtnSideView:
    {
       flex: 0.25 
    },
    groupDetailsbtnContainer: 
    {
       flexDirection: 'row', justifyContent:'space-evenly', marginTop: 10,marginBottom:20 
    },
    groupDetailsfixedContainer:
    {
        height:80, borderBottomWidth: 1, borderColor: '#ccc',
    },
    adminContainer: 
    {
        height: 35, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    },
    ownerNameContainer: 
    {
        height: 35, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
    },

    pastContainer: {
        flex: 1,
        height: 75,
    },
    pastInnerContainer: {
        flex: 1,
        margin: 1,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    locationContainer: {
        flex: 1, height: 55, flexDirection: 'row', marginTop: 5,
        //backgroundColor:'red'
    },
    location: {
        flex: 0.85, height: 25, justifyContent: 'center',
    },
    locationText: {
        fontSize: 17, padding: 5
    },
    TouchableContainer: {
        width: 40, height: 50, justifyContent: 'center', alignItems: 'center'
    },
    ImageContainer: {
        flex: 0.15, height: 60, justifyContent: 'center', alignItems: 'center'
    },
    ImageSize: {
        width: 25, height: 25,
    },
    rateprescriptionorderContainer: {
        flex: 0.85, height: 25, marginTop: 5, flexDirection: 'row', justifyContent: 'space-between',
    },
    ratebtn: {
        width: 60, 
        height: 25, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center',
        //backgroundColor: "#ccc",

    },
    notificationbtn: {
        width: 100, height: 25, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginRight: 10

    },
    ratebtnText: {
        //padding: 1, 
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: styleConstants.fontStyles.bodyFontSize2,
        color: styleConstants.fontStyles.fontColor,       
       // textAlign: styleConstants.fontStyles.textAlign,
       textAlign: "left",
    },
    groupbtnContainer: 
    {
        flex: 1, marginTop: 20, flexDirection: 'row', justifyContent: 'space-evenly',
    },
    adminContainer:
    {
        flex: 1, height: 40, justifyContent: 'center', alignItems: 'center',
    },
    Container:
    {
        flex: 1, height: 60,
    },
   SubContainer:
    {
       flex: 1, margin: 1, borderBottomWidth: 1, borderColor: '#ccc',
    },
    SubContainer1:
    {
        flex: 0.85, height: 25, justifyContent: 'center',
    },
    SubContainer2:
    {
        flex: 0.85, height: 25, marginTop: 5, flexDirection: 'row', justifyContent: 'space-evenly', 
    },
    horizontalrowContainer:
        { flex: 1, height: 50, padding: 10, flexDirection: 'row', },

    horizontalrowleftContainer:
         { flex: 1, height: 35, borderBottomWidth: 1, borderColor: '#972493' },
    horizontalrowrightContainer:
        { flex: 0.1, height: 35, borderBottomWidth: 1, borderColor: '#972493' },
   imageContainer:
       { width: 20, height: 20 },

  //*****************GroupMemberCard Style*******************//
    CardContainer:
    {
        flex: 1,
        backgroundColor: "red",
    },

    
    CardRow1:
    {
     flex: 1,
     //height: 30,
     justifyContent: 'space-between',
     alignItems: 'center',
     flexDirection: 'row',
    },
    MemberNameText:
    {
        //textAlign: styleConstants.fontStyles.textAlign,
        fontFamily: styleConstants.fontStyles.fontFamily,
       // fontWeight: styleConstants.fontStyles.fontWeight,
        fontSize: styleConstants.fontStyles.bodyFontSize1,
        color: styleConstants.fontStyles.fontColor,
    },
    relationNameText:
    {
        //textAlign: styleConstants.fontStyles.textAlign,
        fontFamily: styleConstants.fontStyles.fontFamily,
        //fontWeight: styleConstants.fontStyles.fontWeight,
        fontSize: styleConstants.fontStyles.bodyFontSize3,
        color: styleConstants.fontStyles.fontColor1,
    },
    ArrowContainer:
    {   width: 22,
        height: 22,
        marginLeft: 20
    },
    midtextContainer:
    {
        flex: 1, justifyContent: 'center',
    },
    imageCont:
    {
        width: 40,
        // height: 60, 
        justifyContent: 'space-around', borderRadius: 5
    },
    CardmidContainer:
    {
        flex: 1,  justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',
    },
    chamberLocation: {
        fontFamily: styleConstants.fontStyles.fontFamily,
        fontSize: styleConstants.fontStyles.bodyFontSize2,
        color: styleConstants.fontStyles.fontColor,
      
    }, 
});