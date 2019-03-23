import { createReducer } from './utils';
import { COMMON_TYPE } from '../constants/actionReducerConstants';

const initialState = {
    selectedBTN: 'Specialities',
    specialitylist: [],
    hospitallist: [],
    countries: [],
    groupRelation: [],
    states:[],
    bloodGroupOptions:[
        {
            attributePk: 0,
            attributeValue: "",
            displayValue: "Select Option"
        }, {
            attributePk: 1,
            attributeValue: "O+",
            displayValue: "O+"
        }, {
            attributePk: 2,
            attributeValue: "O-",
            displayValue: "O-"
        }, {
            attributePk: 3,
            attributeValue: "A+",
            displayValue: "A+"
        }, {
            attributePk: 4,
            attributeValue: "A-",
            displayValue: "A-"
        }, {
            attributePk: 5,
            attributeValue: "B+",
            displayValue: "B+"
        }, {
            attributePk: 6,
            attributeValue: "B-",
            displayValue: "B-"
        }, {
            attributePk: 7,
            attributeValue: "AB+",
            displayValue: "AB+"
        }, {
            attributePk: 8,
            attributeValue: "AB-",
            displayValue: "AB-"
        }
    ],
    loading: false,
    showPassword: true, // toggle between password/otp
    responseTriggerred: false,
    successMessage: {}, // get success details for an api
    failureMessage: {}, // get failure details for an api

};

const handlers = {
    [COMMON_TYPE.UPDATE_STATE]: (_, action) => (action.payload),

    [COMMON_TYPE.GET_SPECIALITIES]: () => {
        return {
            specialitylist:[],
            loading: true,
        };
    },
    [COMMON_TYPE.GET_SPECIALITIES_SUCCESS]: (state, action) => {
        const specialitylist = action.payload;
         //console.log(action.payload);

        return {
            specialitylist,
            loading: false,
        };
    },
    [COMMON_TYPE.GET_SPECIALITIES_FAILUTE]: (_, action) => {
        return {
            loading: false,
        };
    },

    [COMMON_TYPE.GET_HOSPITALS]: () => {
        return {
            hospitallist: [],
            loading: true,
        };
    },
    [COMMON_TYPE.GET_HOSPITALS_SUCCESS]: (state, action) => {
        const hospitallist = action.payload;
        //console.log("Hospital.................",action.payload);

        return {
            hospitallist,
            loading: false,
        };
    },
    [COMMON_TYPE.GET_HOSPITALS_FAILUTE]: (_, action) => {
        return {
            loading: false,
        };
    },
    
    //------------------Countries------------------------/
    [COMMON_TYPE.GET_COUNTRIES]: () => {
        return {   
            countries: [],
            loading: true,
        };
    },
    [COMMON_TYPE.GET_COUNTRIES_SUCCESS]: (state, action) => {
        
        const countries = action.payload.data;
        //console.log(countries);
        return {
            countries,
            loading: false,
        };
    },
    [COMMON_TYPE.GET_COUNTRIES_FAILURE]: (_, action) => {
        return {
            loading: true,
        };
    },

    //------------------States------------------------/
    [COMMON_TYPE.GET_STATES]: () => {
        return {
            states: [],
            loading: true,
        };
    },
    [COMMON_TYPE.GET_STATES_SUCCESS]: (state, action) => {
        const states = action.payload.data;
        return {
            states,
            loading: false,
        };
    },
    [COMMON_TYPE.GET_STATES_FALIURE]: (_, action) => {
        return {
            loading: false,
        };
    },


    //------------------BloodGroups------------------------/
    [COMMON_TYPE.GET_BLOODGROUP]: () => {
        return {
            bloodGroupOptions: [],
            loading: true,
        };
    },
    [COMMON_TYPE.GET_BLOODGROUP_SUCCESS]: (state, action) => {
        const bloodGroupOptions = action.payload.masterDataAttributeValues;
        return {
            bloodGroupOptions,
            loading: false,
        };
    },
    [COMMON_TYPE.GET_BLOODGROUP_FAILUTE]: (_, action) => {
        return {
            loading: false,
        };
    },

    //------------------------GroupRelation------------------/
    [COMMON_TYPE.GET_GROUPRELATION]: () => {
        return {
            groupRelation: [],
            loading: true,
        };
        
    },
    
    [COMMON_TYPE.GET_GROUPRELATION_SUCCESS]: (state, action) => {
        
        const groupRelation = action.payload.data;
        //console.log(groupRelation);
        return {
            groupRelation,
            loading: false,
        };
    },
    [COMMON_TYPE.GET_GROUPRELATION_FALIURE]: (_, action) => {
        return {
            loading: false,
        };
    },

    
    

};

export default createReducer(initialState, handlers);