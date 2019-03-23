import styleConstants from '../constants/styleConstants';
export const buttonStyle = {

    primaryBtnStyle:{   
        borderRadius: 3,
        justifyContent: 'center',      
    },
    secondaryBtnStyle:{       
        justifyContent: 'center',       
        borderRadius: 3,
        borderWidth:1,
        borderColor:'#93278f',
    },
    tertiaryBtnStyle:{

    },
    disabledBtnStyle:{

    },
    btnSizeStyle1:{
        width: 140,
        height: 32,
    },
    btnSizeStyle2: {
        width: 140,
        height: 33,
    },
    btnSizeStyle3: {
        width: 60,
        height: 26,
      
    },
    btnSizeStyle4: {
        width: 100,
        height: 32,
    },
    btnSizeStyle5: {
        width: 60,
        height: 32,
        backgroundColor:'#972493',       
    },
    btnSizeStyle6: {
        width: 200,
        height: 32,         
    },
    btnSizeStyle7: {
        width: 100,
        height: 25,
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#93278f'
    },
    primaryBtnText: {
        fontFamily:'Roboto',
        color: '#fff',
        fontSize: 15,
        //fontWeight:'bold',
        textAlign:'center'
    },
    secondaryBtnText: {
        fontFamily: 'Roboto',
        color: '#93278f',
        fontSize: 15,
        //fontWeight: 'bold',
        textAlign: 'center'
    },
};

export const textInputStyle = {
    primaryTextInputFontStyle: {
        fontFamily: 'Roboto',
        fontSize: 15,
        color: '#ad4274',
        //fontWeight: 'bold',
    },
    primaryTextInput:{
        height: 35,
        fontSize: 16,       
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        color: styleConstants.fontStyles.fontColor,  
    },
    ActiveTextInput: {
        color: styleConstants.colorStyles.activeColor,  
    },
    InActiveTextInput: {
        color: styleConstants.colorStyles.inActiveColor,  
    },
    secondaryTextInput:{

    },
    disabledTextInput:{

    }
};



