import { createReducer } from './utils';
import { ORDER_TYPE, } from '../constants/actionReducerConstants';

const initialState = {

    orderDetails: [],
    doctorDetails: {
        doctorPk: '',
        registrationProvider: "SBIS",
        roleName: "INDIVIDUAL",
        username: '',
        token: '',
        roleName: '',
        email: '',
        contactNo: '',
        medicalHistory: {},
        address: [],
        orders: [],
        userPicSrc: '',
        doctorName: '',
        doctorResgistrationNumber: '',
        password: '',
        doctorAddress: [],
    },
    patientDetails:{
        username: '',
        emailAddress: "",
        contactNo: '',
        gender: '',
        age: '',
    },
    paymentDetails: [],

};

const handlers = {
    [ORDER_TYPE.UPDATE_STATE]: (_, action) => (action.payload),

    [ORDER_TYPE.DOCTOR_DETAILS]: () => {
        return {
            doctorDetails: [],
            loading: true,
            responseTriggerred: false,
        };
    },
    [ORDER_TYPE.DOCTOR_DETAILS_SUCCESS]: (state, action) => {
        // console.log("Getting this list:  ", action.payload);
        let doctorDetails = action.payload.content;
        return {
            doctorDetails,
            loading: false,
            responseTriggerred: true,
        };
    },
    [ORDER_TYPE.DOCTOR_DETAILS_FAILUTE]: (_, action) => {
        return {
            loading: false,
            responseTriggerred: true,
        };
    },

    [ORDER_TYPE.ORDER_DETAILS]: () => {
        return {
            orderDetails: [],
            loading: true,
            responseTriggerred: false,
        };
    },
    [ORDER_TYPE.ORDER_DETAILS_SUCCESS]: (state, action) => {
        // console.log("Getting this list:  ", action.payload);
        let orderDetails = action.payload.content;
        return {
            orderDetails,
            loading: false,
            responseTriggerred: true,
        };
    },
    [ORDER_TYPE.ORDER_DETAILS_FAILUTE]: (_, action) => {
        return {
            loading: false,
            responseTriggerred: true,
        };
    },

    [ORDER_TYPE.PATIENT_DETAILS]: () => {
        return {
            patientDetails: [],
            loading: true,
            responseTriggerred: false,
        };
    },
    [ORDER_TYPE.PATIENT_DETAILS_SUCCESS]: (state, action) => {
        // console.log("Getting this list:  ", action.payload);
        let patientDetails = action.payload.content;
        return {
            patientDetails,
            loading: false,
            responseTriggerred: true,
        };
    },
    [ORDER_TYPE.PATIENT_DETAILS_FAILUTE]: (_, action) => {
        return {
            loading: false,
            responseTriggerred: true,
        };
    },

    [ORDER_TYPE.PAYMENT_DETAILS]: () => {
        return {
            paymentDetails: [],
            loading: true,
            responseTriggerred: false,
        };
    },
    [ORDER_TYPE.PAYMENT_DETAILS_SUCCESS]: (state, action) => {
        // console.log("Getting this list:  ", action.payload);
        let paymentDetails = action.payload.content;
        return {
            paymentDetails,
            loading: false,
            responseTriggerred: true,
        };
    },
    [ORDER_TYPE.PAYMENT_DETAILS_FAILUTE]: (_, action) => {
        return {
            loading: false,
            responseTriggerred: true,
        };
    },


};

export default createReducer(initialState, handlers);