import { createReducer } from './utils';
import { SESSION_TYPE } from '../constants/actionReducerConstants';

const initialState = {
    headerDetails:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: '',
    },
    loading: false,
    showPassword: true, // toggle between password/otp
    responseTriggerred: false,
    successMessage: {}, // get success details for an api
    failureMessage: {}, // get failure details for an api

};

const handlers = {
    [SESSION_TYPE.UPDATE_STATE]: (_, action) => (action.payload),

    // [SESSION_TYPE.GET_SPECIALITIES]: () => {
    //     return {
    //         specialitylist:[],
    //         loading: true,
    //     };
    // },
    // [SESSION_TYPE.GET_SPECIALITIES_SUCCESS]: (state, action) => {
    //     const specialitylist = action.payload;
    //     // console.log(action.payload);

    //     return {
    //         specialitylist,
    //         loading: false,
    //     };
    // },
    // [SESSION_TYPE.GET_SPECIALITIES_FAILUTE]: (_, action) => {
    //     return {
    //         loading: false,
    //     };
    // },

    // [SESSION_TYPE.GET_HOSPITALS]: () => {
    //     return {
    //         hospitallist: [],
    //         loading: true,
    //     };
    // },
    // [SESSION_TYPE.GET_HOSPITALS_SUCCESS]: (state, action) => {
    //     const hospitallist = action.payload;
    //     //console.log(action.payload);

    //     return {
    //         hospitallist,
    //         loading: false,
    //     };
    // },
    // [SESSION_TYPE.GET_HOSPITALS_FAILUTE]: (_, action) => {
    //     return {
    //         loading: false,
    //     };
    // },
    
    // //------------------Countries------------------------/
    // [SESSION_TYPE.GET_COUNTRIES]: () => {
    //     return {   
    //         countries: [],
    //         loading: true,
    //     };
    // },
    // [SESSION_TYPE.GET_COUNTRIES_SUCCESS]: (state, action) => {
    //     const countries = action.payload.data;
    //     //console.log(action.payload);
    //     return {
    //         countries,
    //         loading: false,
    //     };
    // },
    // [SESSION_TYPE.GET_COUNTRIES_FAILURE]: (_, action) => {
    //     return {
    //         loading: true,
    //     };
    // },

    // //------------------States------------------------/
    // [SESSION_TYPE.GET_STATES]: () => {
    //     return {
    //         states: [],
    //         loading: true,
    //     };
    // },
    // [SESSION_TYPE.GET_STATES_SUCCESS]: (state, action) => {
    //     const states = action.payload.data;
    //     console.log(action.payload);
    //     return {
    //         states,
    //         loading: false,
    //     };
    // },
    // [SESSION_TYPE.GET_STATES_FALIURE]: (_, action) => {
    //     return {
    //         loading: false,
    //     };
    // },

    // //------------------BloodGroups------------------------/
    // [SESSION_TYPE.GET_BLOODGROUP]: () => {
    //     return {
    //         bloodGroupOptions: [],
    //         loading: true,
    //     };
    // },
    // [SESSION_TYPE.GET_BLOODGROUP_SUCCESS]: (state, action) => {
    //     // console.log(action.payload);
    //     const bloodGroupOptions = action.payload.masterDataAttributeValues;
    //     return {
    //         bloodGroupOptions,
    //         loading: false,
    //     };
    // },
    // [SESSION_TYPE.GET_BLOODGROUP_FAILUTE]: (_, action) => {
    //     return {
    //         loading: false,
    //     };
    // },
    

};

export default createReducer(initialState, handlers);