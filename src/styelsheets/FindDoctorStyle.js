import { StyleSheet } from 'react-native';
import styleConstants from '../constants/styleConstants';

export const FindDoctorStyle = StyleSheet.create({

    mainContainer: {
        flex: 1,
    },

    subContainer: {
        flex: 1,
        margin: 10,
    },
    flex1: {
        flex: 0.5,
    },
    flex2: {
        flex: 0.6
    },
    flex3: {
        flex: 0.2,
    },
    flex4: {
        flex: 0.4,
    },
    buttonStyle: {

        flex: 0.5,
        height: 30,
        borderWidth: 1,
        justifyContent: 'center',
        borderColor: '#93278f'
    },
    otherAddress: {
        flex: 1,
        height: 30,
        borderWidth: 1,
        justifyContent: 'center',
        borderColor:'#972493',
        backgroundColor: '#f2f2f2',
    },
    hoverButton: {
        backgroundColor: '#93278f',
    },
    addressContainer: {
        flex: 0.4,
        flexDirection: 'row',
        marginTop: 3,
    },
    nearBy: {
        flex: 0.2,
        marginTop: 15,
        paddingTop: 5,
    },
    orContainer: {
        justifyContent: 'center',
        marginTop: 5,
    },

    orStyle: {
        textAlign: 'center',
        color: '#93278f',
       
    },

    OR: {
        textAlign: 'center',
        fontSize: 14,
    },

    orStyle1: {
        textAlign: 'center',
        color: '#fff',
    },
    locationContainer: {
        marginBottom: 2,
    },
    linearGradiantContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linearGradiant: {
        width: 140,
        height: 32,
        borderRadius: 3,
        justifyContent: 'center',
    },
    search: {
        color: '#fff',
        fontSize: 17,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    scrollviewContainer: {
        flex: 1, 
        marginLeft: 10, 
        marginBottom: 10, 
        marginRight: 10,       
    },
    browseText:{       
        fontSize: styleConstants.fontStyles.bodyFontSize1,
        fontWeight: styleConstants.fontStyles.fontWeight,
        color: styleConstants.fontStyles.fontColor,
    },
    height: {
        height: 1,
    },
    textInput: {
        height: 30,
        borderWidth: 1,
        paddingLeft: 5,
        paddingRight: 5,
        marginTop: 3,
    },
    margin1: {
        flex: 0.15, 
        flexDirection: 'row', 
        marginTop: 2,
    },
    buttonContainer1: {
        flex: 0.5,
        height: 30,
        backgroundColor: "#93278f",
        justifyContent: 'center',
        color: "#fff"
    },
    buttonContainer2: {
        flex: 0.5,
        height: 30,
        backgroundColor: "#fff",
        justifyContent: 'center',
    },
    buttonText1: {
        textAlign: 'center',
        color: '#fff',
    },
    buttonText2: {
        textAlign: 'center',
        //color:'#fff',
    },
    margin2: {
        borderBottomWidth: 1, 
        borderColor:'#93278f'
       
    },

});
