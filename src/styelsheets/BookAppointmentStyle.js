import { StyleSheet } from 'react-native';
import styleConstants from '../constants/styleConstants';

export default BookAppointmentStyle = StyleSheet.create({

    mainWrapper: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10
    },   
    GenderName: {
        fontSize: styleConstants.fontStyles.headerGroup.h3FontSize,
        fontWeight: styleConstants.fontStyles.fontWeight,
        color: styleConstants.fontStyles.fontColor,
        marginTop: 5,      

    },
    DoctorDesignation: {
        fontSize: styleConstants.fontStyles.bodyFontSize1,
    },
   
    TextInputContainer: {
        flex: 1,     
        marginTop:8
    },
   
    genderBtnContainer: { 
        flex: 1,
        height: 35,
        marginTop: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    HeaderText: {
        fontSize: styleConstants.fontStyles.bodyFontSize1,       
        fontWeight: styleConstants.fontStyles.fontWeight,
        color: styleConstants.fontStyles.fontColor,
    },
    TabMainContainer: {
        flex: 1,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    TabContainer:  {
        width: 140,
        height: 30,
        justifyContent: 'center', alignItems: 'center',       
        borderWidth: 1,  
        borderColor:'#93278f',
       
    },
    TabText1: {
        fontSize: styleConstants.fontStyles.bodyFontSize1,
        textAlign: 'center',
        color: "#fff",
    },
    TabText2: {
        fontSize: styleConstants.fontStyles.bodyFontSize1,       
        textAlign:'center',
        color: styleConstants.fontStyles.fontColor1,
        fontWeight: styleConstants.fontStyles.fontWeight,
    },
     PatientContainer: 
    { flex: 1,
      marginTop: 10 },

    PatientName:
    {
        flex: 1, flexDirection: "row", justifyContent: 'space-between' 
    },
    PatientFirstPart:
    {
        flex: 1, 
    },
    btnContainer:{
        flex: 1, margin: 15, justifyContent: 'center', alignItems: 'center'
    },
    PatientSecondPart:
    { flex: 1, flexDirection: "row", justifyContent: 'space-evenly' 
    },
    paymentoptionsContainer:{
        flex: 0.7, flexDirection: "row", height: 25,justifyContent:'space-between',marginTop:7
    } ,
    paymentoptions1stContainer: {
         flex: 0.6, flexDirection: "row", justifyContent: 'flex-start'
    },  

    imageBox: { height: 25, width: 25, },

    imageBox1: { height: 15, width: 15,padding:5 },
    consultencyContainer: 
        { flex: 1, flexDirection: 'row', justifyContent: 'space-between' 
    },
    promocodeContainer:
    {
        flex: 0.80
    }, 
    promocodeContainer2:
    {
        flex: 0.20
    },       
    chamberArea:
    {
        padding: 10
    }, 
    PaymentArea:
    {
        flex: 1, marginTop: 10
    },             
});