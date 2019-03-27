import { createReducer } from './utils';
import { DOCTOR_TYPE,} from '../constants/actionReducerConstants';

const initialState = {
   

    specialitylist: [],
    hospitallist: [],
    doctorslist: [],
    totalElements: '',
    appointmentConfirmation: [],
    searchDetails: {
        searchQuery:'',
        location:'',
        pincode:'',
        name:'',
        speciality:'',
        hospitals:'',
        condition:'',
        homeVisitFlag: '',
    },
    doctorDetails: {
        doctorPk:'',
        doctorName: '',
        dateOfBirth: '',
        registrationNo: '',
        registrationStatus: '',
        registrationVerificationDate: '',
        homeVisitFlag: '',
        status: '',
        yearsOfExperience: '',
        doctorAddressList: [],
        doctorChamberList: [],
        doctorQualificationList:[],
        doctorSpecializationList: [],
        doctorEAddressList: [],
        rating: '',
        entityName: '',
    },

   

    chamberDetails:{
        "createdDate": "",
        "modifiedDate": "",
        "createdBy": "",
        "modifiedBy": "",
        "chamberPk": '',
        "chamberType": "",
        "line1": "",
        "line2": "",
        "pinCode": "",
        "city": "",
        "state": "",
        "country": "",
        "phoneNo1": "",
        "phoneNo2": "",
        "department": "",
        "roomNo": "",
        "fees": "",
        "averageVisitDuration": "",
        "status": "",
        "addressType": "",
        "autoConfirmAppointment": "",
        "chamberTimingList": [],
        "doctorHolidayList": []
    },

    content:{},
    clinicList:[],
    chamberSlots:[],
    chamberPk:'',
    filterValue:{
        rating: '',
        availability: '',
        timing: '',
        distance: '',
        fee: '',
        exp: '',
    },
    addressSearch: '',
    loading: false,
    showPassword: true, // toggle between password/otp
    responseTriggerred: false,
    successMessage: {}, // get success details for an api
    failureMessage: {}, // get failure details for an api

    AppointmentDetails: {
        "appointmentPk": "",
        "userPk": "",
        "chamberPk": "",
        "doctorPk": "",
        "appointmentDate": "",
        "appointmentTime": "",
        "appointmentBy": "",
        "remarks": "",
        "totalFees": "",
        "doctorName": "",
        "chamberName": "",
        "chamberAddress": "",
        "paymentStatus": "",
        "appointmentState": "",
        "appointmentCancelReason": "",
        "appointmentRefNo": "",
        "appointmentByName": "",
        "userName": "",
        
    },

    appointmentList:[],

    commentText: {
        "appointmentCxlReason": "",
    },
    
    


};

const handlers = {
    [DOCTOR_TYPE.UPDATE_STATE]: (_, action) => (action.payload),

    [DOCTOR_TYPE.FIND_DOCTOR]: () => {
        return {
            doctorslist: [],
            loading: true,
            responseTriggerred: false,
        };
    },
    [DOCTOR_TYPE.FIND_DOCTOR_SUCCESS]: (state, action) => {
        // console.log("Getting this list:  ",action.payload);
        const doctorslist = action.payload.content;
        const totalElements = action.payload.totalElements;
        
        return {
            doctorslist,
            totalElements,
             loading: false,
            responseTriggerred: true,
        };
    },
    [DOCTOR_TYPE.FIND_DOCTOR_FAILUTE]: (_, action) => {
        return {
            loading: false,
            responseTriggerred: true,
        };
    },
    
    
    //================GET Chamber Slots===================
    
    [DOCTOR_TYPE.GET_CHAMBER_SLOTS]: () => {
        return {
            chamberSlots: [],
            loading: true,
            responseTriggerred: false,
        };
    },
    [DOCTOR_TYPE.GET_CHAMBER_SLOTS_SUCCESS]: (state, action) => {
        //console.log("Getting this list:  ", action.payload);
        let chamberSlots = action.payload.content;
        return {
            chamberSlots,
            loading: false,
            responseTriggerred: true,
        };
    },
    [DOCTOR_TYPE.GET_CHAMBER_SLOTS_FAILUTE]: (_, action) => {
        return {
            loading: false,
            responseTriggerred: true,
        };
    },

    //==================GET Doctor Details===================
    [DOCTOR_TYPE.GET_DOCTOR_DETAILS]: () => {
        return {
            // doctorDetails: {},
            loading: true,
            responseTriggerred: false,
        };
    },
    [DOCTOR_TYPE.GET_DOCTOR_DETAILS_SUCCESS]: (state, action) => {
        //console.log("Getting Chamber list:  ", action.payload);
        // const action.payload = action.payload;
        // console.log(action.payload);
        const doctorDetails = {
            doctorPk: action.payload.doctorPk,
            doctorName: action.payload.doctorName,
            dateOfBirth: action.payload.dateOfBirth,
            registrationNo: action.payload.registrationNo,
            registrationStatus: action.payload.registrationStatus,
            registrationVerificationDate: action.payload.registrationVerificationDate,
            homeVisitFlag: action.payload.homeVisitFlag,
            status: action.payload.status,
            yearsOfExperience: action.payload.yearsOfExperience,
            doctorAddressList: action.payload.doctorAddressList,
            doctorChamberList: action.payload.doctorChamberList,
            doctorQualificationList: action.payload.doctorQualificationList,
            doctorSpecializationList: action.payload.doctorSpecializationList,
            doctorEAddressList: action.payload.doctorEAddressList,
            rating: action.payload.rating,
            entityName: action.payload.entityName,
        };
        return {
             doctorDetails,
            loading: false,
            responseTriggerred: true,
        };
    },
    [DOCTOR_TYPE.GET_DOCTOR_DETAILS_FAILUTE]: (_, action) => {
        return {
            loading: false,
            responseTriggerred: true,
        };
    },
    


//===================For Doctor Appoinment==================

[DOCTOR_TYPE.UPDATE_APPOINTMENT_DETAILS]: () => {
    return {
        //chamberSlots: [],
        loading: true,
        responseTriggerred: false,
    };
},
    [DOCTOR_TYPE.UPDATE_APPOINTMENT_DETAILS_SUCCESS]: (state, action) => {
      //  console.log("Getting DATA:  ", action.payload);
        
        const AppointmentDetails = action.payload.data;
            // "appointmentPk": action.payload.data.appointmentPk,
            // "userPk": action.payload.data.userPk,
            // "chamberPk": action.payload.data.chamberPk,
            // "doctorPk": action.payload.data.doctorPk,
            // "appointmentDate": action.payload.data.appointmentDate,
            // "appointmentTime": action.payload.data.appointmentTime,
            // "appointmentBy": action.payload.data.appointmentBy,
            // "remarks": action.payload.data.remarks,
            // "totalFees": action.payload.data.totalFees,
            // "doctorName": action.payload.data.doctorName,
            // "chamberName": action.payload.data.chamberName,
            // "chamberAddress": action.payload.data.chamberAddress,
            // "paymentStatus": action.payload.data.paymentStatus,
            // "appointmentState": action.payload.data.appointmentState,
            // "appointmentCancelReason": action.data.payload.appointmentCancelReason,
            // "appointmentRefNo": action.payload.data.appointmentRefNo,
            // "appointmentByName": action.payload.data.appointmentByName,
            // "userName": action.payload.data.userName,
        //};
        //console.log("Apponitment Details : ",AppointmentDetails);
        return {
            AppointmentDetails,
            loading: false,
            responseTriggerred: true,
            
        };
    },
        [DOCTOR_TYPE.UPDATE_APPOINTMENT_DETAILS_FAILUTE]: (_, action) => {
            return {
                loading: false,
                responseTriggerred: true,
            };
        },
    

//================GET Appointment List===================

    [DOCTOR_TYPE.GET_APPOINTMENT_LIST]: ()=>{
        return {
            appointmentList: [],
            loading: true,
            responseTriggerred: false,
        };
    },
    [DOCTOR_TYPE.GET_APPOINTMENT_LIST_SUCCESS]: (state, action) => {
    //console.log("Getting Appointment list:  ", action.payload.data);
        
        const appointmentList = action.payload.data;
    return {
        appointmentList,
        loading: false,
        responseTriggerred: true,
        };
    },
    [DOCTOR_TYPE.GET_APPOINTMENT_LIST_FAILUTE]: (_, action) => {
        return {
            loading: false,
            responseTriggerred: true,
        };
    },


//==================GET Doctor Specialization===================
    [DOCTOR_TYPE.DOCTOR_SPECIALIZATION]: () => {
        return {
            doctorDetails: [],
            loading: true,
            responseTriggerred: false,
        };
    },
    [DOCTOR_TYPE.DOCTOR_SPECIALIZATION_SUCCESS]: (state, action) => {
        //console.log("Getting Chamber list:  ", action.payload);
        // const action.payload = action.payload;
        //console.log("doctor specialization:",action.payload);
        const doctorDetails = {
            doctorPk: action.payload.doctorPk,
            doctorName: action.payload.doctorName,
            dateOfBirth: action.payload.dateOfBirth,
            registrationNo: action.payload.registrationNo,
            registrationStatus: action.payload.registrationStatus,
            registrationVerificationDate: action.payload.registrationVerificationDate,
            homeVisitFlag: action.payload.homeVisitFlag,
            status: action.payload.status,
            yearsOfExperience: action.payload.yearsOfExperience,
            doctorAddressList: action.payload.doctorAddressList,
            doctorChamberList: action.payload.doctorChamberList,
            doctorQualificationList: action.payload.doctorQualifications,
            doctorSpecializationList: action.payload.doctorSpecializations,
            doctorEAddressList: action.payload.doctorEAddressList,
            rating: action.payload.rating,
            entityName: action.payload.entityName,
        };
        //console.log("Details",doctorDetails);
        return {
            doctorDetails,
            loading: false,
            responseTriggerred: true,
        };
    },
    [DOCTOR_TYPE.DOCTOR_SPECIALIZATION_FAILUTE]: (_, action) => {
        return {
            loading: false,
            responseTriggerred: true,
        };
    },







}

export default createReducer(initialState, handlers);