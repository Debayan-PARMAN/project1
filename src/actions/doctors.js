import { doGet, doDelete, doPut, doPost } from '../api/utils';
import { DOCTOR_TYPE } from '../constants/actionReducerConstants';
import { URI } from '../constants';
//import Moment from 'moment';

// ================ For Update State ====================
export function updateState(payload) {
    return {
        type: DOCTOR_TYPE.UPDATE_STATE,
        payload
    };
};

// ================ For Search Doctor ===================
export function findDoctors() {
    return (dispatch, getState) => {
        const { searchDetails } = getState().doctorState;
        let searchTempParams = [];
        let searchParams = '';
        if(searchDetails.name !== ''){
            searchTempParams.push(`doctorName:${searchDetails.name}`);
        }
        
        if (searchDetails.speciality !== '') {
            searchTempParams.push(`specialization:${searchDetails.speciality}`);
        }
        if (searchDetails.hospitals !== '') {
            searchTempParams.push(`hospitalName-${searchDetails.hospitals}`);
        }
        if (searchDetails.pincode !== '') {
            searchTempParams.push(`location-${searchDetails.pincode}`);
        }
        if (searchDetails.homeVisitFlag !== '') {
            searchTempParams.push(`homeVisitFlag:${searchDetails.homeVisitFlag}`);
        }
        if(searchTempParams.length > 1){
            searchParams = searchTempParams.join(',');
        } else {
            searchParams = searchTempParams[0];
        }

        // {
        //     //"userName":  doctorDetails.username,
        //     "searchQuery": searchDetails.searchQuery,
        //     "location": searchDetails.location,
        //     "pincode": searchDetails.pincode,
        // }
        dispatch({
            type: DOCTOR_TYPE.FIND_DOCTOR
        });

        doGet(`${URI.findDoctors}${searchParams}`, false, '')
            .then(result => dispatch(findDoctorsSuccess(result)))
            .catch(error => dispatch(findDoctorsFailure(error)));
    };
}

export function findDoctorsSuccess(payload) {
    return {
        type: DOCTOR_TYPE.FIND_DOCTOR_SUCCESS,
        payload,
    };
}

export function findDoctorsFailure(error) {
    return {
        type: DOCTOR_TYPE.FIND_DOCTOR_FAILURE,
        error,
    };
}
//====================For Doctor Details================
export function getDoctorDetails(){
    return (dispatch,getState) => {
        const { doctorDetails } = getState().doctorState;
        const { userDetails } = getState().userState;
        const doctorParams = doctorDetails.doctorPk;
        const tokenValue = userDetails.token;
        dispatch({
            type: DOCTOR_TYPE.GET_DOCTOR_DETAILS
        });
        
        doGet(`${URI.getDoctorDetails}${doctorParams}`,needToken=true, tokenValue)
            .then(result => dispatch(getDoctorDetailsSuccess(result)))
            .catch(error => dispatch(getDoctorDetailsFailure(error)));
    };
}

export function getDoctorDetailsSuccess(payload) {
    return {
        type: DOCTOR_TYPE.GET_DOCTOR_DETAILS_SUCCESS,
        payload,
    };
}

export function getDoctorDetailsFailure(error) {
    return {
        type: DOCTOR_TYPE.GET_DOCTOR_DETAILS_FAILURE,
        error,
    };
}


// =================FOR DOCTOR APPOINTMENT =======================

export function updateApponitmentDetails() {
    return (dispatch, getState) => {
        const { userDetails } = getState().userState;
        const { doctorDetails, chamberDetails, AppointmentDetails } = getState().doctorState;
        const tokenValue = userDetails.token;
        const apppointmentParams = {
            "userPk": userDetails.userId,
            "appointmentBy": userDetails.userId,
            "doctorPk": doctorDetails.doctorPk,
            "totalFees": chamberDetails.fees,
            "chamberPk": chamberDetails.chamberPk,
            "appointmentTime": AppointmentDetails.appointmentTime,
            "timeTo": "11:55:00",
            "appointmentDateStr": AppointmentDetails.appointmentDate,
           };

        console.log("apppointmentParams ", apppointmentParams);
        dispatch({
            type: DOCTOR_TYPE.UPDATE_APPOINTMENT_DETAILS
        });
        
        //const tokenValue = userDetails.token;
        
        doPost(`${URI.bookAppoinment}`, apppointmentParams, true, true, tokenValue,)
            .then(result => dispatch(updateApponitmentDetailsSuccess(result)))
            .catch(error => dispatch(updateApponitmentDetailsFailure(error)));
    };
}
export function updateApponitmentDetailsSuccess(payload) {
    //action.payload.data.appointmentDate = Moment(action.payload.data.appointmentDate).format("DD-MM-YYYY");
    console.log("Payload....",payload)
    return {
        type: DOCTOR_TYPE.UPDATE_APPOINTMENT_DETAILS_SUCCESS,
        payload,
        
        
    };
}
export function updateApponitmentDetailsFailure(error) {
    return {
        type: DOCTOR_TYPE.UPDATE_APPOINTMENT_DETAILS_FAILURE,
        error,
    };
}

//=====================Get Appoinment List=========================
export function getAppoinmentList() {
  
    return (dispatch, getState) => {
  
        const { userDetails } = getState().userState;
  
        const userParams = userDetails.userId;
        const tokenValue = userDetails.token;
  
        dispatch({
            type: DOCTOR_TYPE.GET_APPOINTMENT_LIST
        });

        doGet(`${URI.bookAppoinment}/${userParams}`, needToken = true, tokenValue)
            .then(result => dispatch(getAppoinmentListSuccess(result)))
            .catch(error => dispatch(getAppoinmentListFailure(error)));
    };
}

export function getAppoinmentListSuccess(payload) {
    //const dateArray = payload.data.map(item => item.appointmentDate).filter((item, index) => array.indexOf(item) !== index);
    return {
        type: DOCTOR_TYPE.GET_APPOINTMENT_LIST_SUCCESS,
        payload,
    };
}

export function getAppoinmentListFailure(error) {
    return {
        type: DOCTOR_TYPE.GET_APPOINTMENT_LIST_FAILURE,
        error,
    };
}

//===========================Cancel Appointment===========================

export function cancelAppointment() {
    return (dispatch, getState) => {
        const { userDetails } = getState().userState;
        const { AppointmentDetails, commentText } = getState().doctorState;
        const tokenValue = userDetails.token;
        //+ ":" + AppointmentDetails.appointmentTime
        const apppointmentParams = {
            "appointmentCxlBy": AppointmentDetails.userPk,
            "appointmentCxlDateTime": new Date().toISOString(),
            "appointmentCxlReason": commentText.appointmentCxlReason,
            "appointmentPk": AppointmentDetails.appointmentPk,
            "appointmentState": AppointmentDetails.appointmentState,
            "refundRequest": true,
            "status": "",
        };

        dispatch({
            type: DOCTOR_TYPE.CANCEL_APPOINTMENT
        });

        //const tokenValue = userDetails.token;

        doDelete(`${URI.bookAppoinment}`, apppointmentParams, true, true, tokenValue)
            .then(result => {
                if (result.status === 0) {
                    dispatch(getAppoinmentList());

                } else {
                    alert('Something wrong');
                }

            })
            .catch(error => dispatch(cancelAppointmentFailure(error)));
    };
}
export function cancelAppointmentSuccess(payload) {
    alert("Your appointment is cancelled");
    return {
        type: DOCTOR_TYPE.CANCEL_APPOINTMENT_SUCCESS,
        payload,
    };
}
export function cancelAppointmentFailure(error) {
    return {
        type: DOCTOR_TYPE.CANCEL_APPOINTMENT_FAILURE,
        error,
    };
}


//====================For Doctor Specialization================
export function doctorSpecializations() {
    return (dispatch, getState) => {
        const { AppointmentDetails } = getState().doctorState;
        const { userDetails } = getState().userState;
        const doctorParams = AppointmentDetails.doctorPk;
        const tokenValue = userDetails.token;
        dispatch({
            type: DOCTOR_TYPE.DOCTOR_SPECIALIZATION
        });

        doGet(`${URI.getDoctorDetails}${doctorParams}`, needToken = true, tokenValue)
            .then(result => dispatch(doctorSpecializationsSuccess(result)))
            .catch(error => dispatch(doctorSpecializationsFailure(error)));
    };
}

export function doctorSpecializationsSuccess(payload) {
    return {
        type: DOCTOR_TYPE.DOCTOR_SPECIALIZATION_SUCCESS,
        payload,
    };
}

export function doctorSpecializationsFailure(error) {
    return {
        type: DOCTOR_TYPE.DOCTOR_SPECIALIZATION_FAILURE,
        error,
    };
}
