import { doGet, doDelete, doPut, doPost } from '../api/utils';
import { COMMON_TYPE } from '../constants/actionReducerConstants';
import { URI } from '../constants';

// ================ For Update State ====================
export function updateState(payload) {
    return {
        type: COMMON_TYPE.UPDATE_STATE,
        payload
    };
};

// ================ Get Specialities ===================
export function getSpecialities() {
    return (dispatch) => {
        dispatch({
            type: COMMON_TYPE.GET_SPECIALITIES
        });
        doGet(`${URI.getSpecialities}`, false)
            .then(result => dispatch(getSpecialitiesSuccess(result)))
            .catch(error => dispatch(getSpecialitiesFailure(error)));
    };
};

export function getSpecialitiesSuccess(payload) {
    return {
        type: COMMON_TYPE.GET_SPECIALITIES_SUCCESS,
        payload,
    };
};

export function getSpecialitiesFailure(error) {
    return {
        type: COMMON_TYPE.GET_SPECIALITIES_FAILURE,
        error,
    };
};

// ================ Get Hospitals ===================
export function getHospitals() {
    return (dispatch) => {
        dispatch({
            type: COMMON_TYPE.GET_HOSPITALS
        });
        doGet(`${URI.getHospitals}`, false)
            .then(result => dispatch(getHospitalsSuccess(result)))
            .catch(error => dispatch(getHospitalsFailure(error)));
    };
};

export function getHospitalsSuccess(payload) {
    return {
        type: COMMON_TYPE.GET_HOSPITALS_SUCCESS,
        payload,
    };
};

export function getHospitalsFailure(error) {
    return {
        type: COMMON_TYPE.GET_HOSPITALS_FAILURE,
        error,
    };
};

// ================ Get Countries ===================
export function getCountries() {
    return (dispatch) => {
        dispatch({
            type: COMMON_TYPE.GET_COUNTRIES
        });
        doGet(`${URI.getCountries}`, false)
            .then(result => dispatch(getCountriesSuccess(result)))
            .catch(error => dispatch(getCountriesFailure(error)));
    };
};

export function getCountriesSuccess(payload) {
    // console.log(payload);
    return {
        type: COMMON_TYPE.GET_COUNTRIES_SUCCESS,
        payload,
    };
};

export function getCountriesFailure(error) {
    return {
        type: COMMON_TYPE.GET_COUNTRIES_FAILURE,
        error,
    };
};

// ================ Get State by Country name ===================
export function getStates() {
    return (dispatch, getState) => {
        const {userDetails} = getState().userState;
        dispatch({
            type: COMMON_TYPE.GET_STATES
        });
        doGet(`${URI.getState}/${userDetails.selectedCountry}/states`, false)
            .then(result => dispatch(getStatesSuccess(result)))
            .catch(error => dispatch(getStatesFailure(error)));
    };
};

export function getStatesSuccess(payload) {
    return {
        type: COMMON_TYPE.GET_STATES_SUCCESS,
        payload,
    };
};

export function getStatesFailure(error) {
    return {
        type: COMMON_TYPE.GET_STATES_FAILURE,
        error,
    };
};

// ================ Get State by Country name ===================
export function getBloodGroupOptions() {
    return (dispatch) => {
        dispatch({
            type: COMMON_TYPE.GET_BLOODGROUP
        });
        doGet(`${URI.getAttributeByName}blood_group`, false)
            .then(result => dispatch(getBloodGroupOptionsSuccess(result)))
            .catch(error => dispatch(getBloodGroupOptionsFailure(error)));
    };
};

export function getBloodGroupOptionsSuccess(payload) {
    return {
        type: COMMON_TYPE.GET_BLOODGROUP_SUCCESS,
        payload,
    };
};

export function getBloodGroupOptionsFailure(error) {
    return {
        type: COMMON_TYPE.GET_BLOODGROUP_FAILURE,
        error,
    };
};

// ================= Get GroupRelation ====================

export function getGroup() {
    return (dispatch) => {
        dispatch({
            type: COMMON_TYPE.GET_GROUPRELATION
        });
        doGet(`${URI.getgroupRelation}`, false)
            .then(result => dispatch(getgroupRelationSuccess(result)))
            .catch(error => dispatch(getgroupRelationFailure(error)));
    };
};

export function getgroupRelationSuccess(payload) {
    return {
        type: COMMON_TYPE.GET_GROUPRELATION_SUCCESS,
        payload,
    };
};

export function getgroupRelationFailure(error) {
    return {
        type: COMMON_TYPE.GET_GROUPRELATION_FAILURE,
        error,
    };
};