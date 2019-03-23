// For User Action/Reducer Type
export const USER_TYPE = {
  UPDATE_STATE: 'UPDATE_USER_STATE',

  CHECK_NUMBER: 'CHECK_NUMBER',
  CHECK_NUMBER_SUCCESS: 'CHECK_NUMBER_SUCCESS',
  CHECK_NUMBER_FAILURE: 'CHECK_NUMBER_FAILURE',

  LOGIN_USER: 'LOGIN_USER',
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
  LOGIN_USER_FAILUTE: 'LOGIN_USER_FAILUTE',

  NUMBER_CHECK: 'NUMBER_CHECK',
  NUMBER_CHECK_SUCCESS: 'NUMBER_CHECK_SUCCESS',
  NUMBER_CHECK_FAILUTE: 'NUMBER_CHECK_FAILUTE',

  // CHECK_NO_EXITS: 'CHECK_NO_EXITS',
  // CHECK_NO_EXITS_SUCCESS: 'CHECK_NO_EXITS_SUCCESS',
  // CHECK_NO_EXITS_FAILUTE: 'CHECK_NO_EXITS_FAILUTE',

  REGISTER_USER: 'REGISTER_USER',
  REGISTER_USER_SUCCESS: 'REGISTER_USER_SUCCESS',
  REGISTER_USER_FAILURE: 'REGISTER_USER_FAILURE',

  SEND_OTP: 'SEND_OTP',
  SEND_OTP_SUCCESS: 'SEND_OTP_SUCCESS',
  SEND_OTP_FAILURE: 'SEND_OTP_FAILURE:',

  VERIFY_OTP: 'VERIFY_OTP',
  VERIFY_OTP_SUCCESS: 'VERIFY_OTP_SUCCESS',
  VERIFY_OTP_FAILURE: 'VERIFY_OTP_FAILURE',

  VERIFY_EMAIL: 'VERIFY_EMAIL',
  VERIFY_EMAIL_SUCCESS: 'VERIFY_EMAIL_SUCCESS',
  VERIFY_EMAIL_FAILURE: 'VERIFY_EMAIL_FAILURE',

  VERIFY_NUMBER: 'VERIFY_NUMBER',
  VERIFY_NUMBER_SUCCESS: 'VERIFY_NUMBER_SUCCESS',
  VERIFY_NUMBER_FAILURE: 'VERIFY_NUMBER_FAILURE',

  UPDATE_USER_PROFILE: 'UPDATE_USER_PROFILE',
  UPDATE_USER_PROFILE_SUCCESS: 'UPDATE_USER_PROFILE_SUCCESS',
  UPDATE_USER_PROFILE_FAILURE: 'UPDATE_USER_PROFILE_FAILURE',

  GET_USER_PROFILE: 'GET_USER_PROFILE',
  GET_USER_PROFILE_SUCCESS: 'GET_USER_PROFILE_SUCCESS',
  GET_USER_PROFILE_FAILURE: 'GET_USER_PROFILE_FAILURE',

  ADD_ADDRESS: 'ADD_ADDRESS',
  ADD_ADDRESS_SUCCESS: 'ADD_ADDRESS_SUCCESS',
  ADD_ADDRESS_FAILURE: 'ADD_ADDRESS_FAILURE',

  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESS',
  FORGOT_PASSWORD_FAILURE: 'FORGOT_PASSWORD_FAILURE',

  RESET_PASSWORD: 'RESET_PASSWORD',
  RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS',
  RESET_PASSWORD_FAILURE: 'RESET_PASSWORD_FAILURE',

  GET_MYGROUP: 'GET_MYGROUP',
  GET_MYGROUP_SUCCESS: 'GET_MYGROUP_SUCCESS',
  GET_MYGROUP_FAILURE: 'GET_MYGROUP_FAILURE',

  ADD_GROUP: 'ADD_GROUP',
  ADD_GROUP_SUCCESS: 'ADD_GROUP_SUCCESS',
  ADD_GROUP_FAILURE: 'ADD_GROUP_FAILURE',

  VIEW_GROUP_MEMBER: 'VIEW_GROUP_MEMBER',
  VIEW_GROUP_MEMBER_SUCCESS: 'VIEW_GROUP_MEMBER_SUCCESS',
  VIEW_GROUP_MEMBER_FAILURE: 'VIEW_GROUP_MEMBER_FAILURE',

  EDIT_GROUP_MEMBER: 'EDIT_GROUP_MEMBER',
  EDIT_GROUP_MEMBER_SUCCESS: 'EDIT_GROUP_MEMBER_SUCCESS',
  EDIT_GROUP_MEMBER_FAILURE: 'EDIT_GROUP_MEMBER_FAILURE',

  DELETE_GROUP_MEMBER: 'DELETE_GROUP_MEMBER',
  DELETE_GROUP_MEMBER_SUCCESS: 'DELETE_GROUP_MEMBER_SUCCESS',
  DELETE_GROUP_MEMBER_FAILURE: 'DELETE_GROUP_MEMBER_FAILURE',

  LEAVE_GROUP: 'LEAVE_GROUP',
  LEAVE_GROUP_SUCCESS: 'LEAVE_GROUP_SUCCESS',
  LEAVE_GROUP_FAILURE: 'LEAVE_GROUP_FAILURE',

  SEARCH_MEMBER: 'SEARCH_MEMBER',
  SEARCH_MEMBER_SUCCESS: 'SEARCH_MEMBER_SUCCESS',
  SEARCH_MEMBER_FAILURE: 'SEARCH_MEMBER_FAILURE',

  RENAME_GROUP: 'RENAME_GROUP',
  RENAME_GROUP_SUCCESS: 'RENAME_GROUP_SUCCESS',
  RENAME_GROUP_FAILURE: 'RENAME_GROUP_FAILURE',

  DELETE_GROUP: 'DELETE_GROUP',
  DELETE_GROUP_SUCCESS: 'DELETE_GROUP_SUCCESS',
  DELETE_GROUP_FAILURE: 'DELETE_GROUP_FAILURE',

  ADD_MEMBER: 'ADD_MEMBER',
  ADD_MEMBER_SUCCESS: 'ADD_MEMBER_SUCCESS',
  ADD_MEMBER_FAILURE: 'ADD_MEMBER_FAILURE',

};

export const DOCTOR_TYPE = {
  UPDATE_STATE: 'UPDATE_DOCTOR_STATE',

  FIND_DOCTOR: 'FIND_DOCTOR',
  FIND_DOCTOR_SUCCESS: 'FIND_DOCTOR_SUCCESS',
  FIND_DOCTOR_FAILURE: 'FIND_DOCTOR_FAILURE',

  GET_CHAMBER_DETAILS: 'GET_CHAMBER_DETAILS',
  GET_CHAMBER_DETAILS_SUCCESS: 'GET_CHAMBER_DETAILS_SUCCESS',
  GET_CHAMBER_DETAILS_FAILURE: 'GET_CHAMBER_DETAILS_FAILURE',

  GET_DOCTOR_DETAILS: 'GET_DOCTOR_DETAILS',
  GET_DOCTOR_DETAILS_SUCCESS: 'GET_DOCTOR_DETAILS_SUCCESS',
  GET_DOCTOR_DETAILS_FAILURE: 'GET_DOCTOR_DETAILS_FAILURE',

  UPDATE_APPOINTMENT_DETAILS: 'UPDATE_APPOINTMENT_DETAILS',
  UPDATE_APPOINTMENT_DETAILS_SUCCESS: 'UPDATE_APPOINTMENT_DETAILS_SUCCESS',
  UPDATE_APPOINTMENT_DETAILS_FAILURE: 'UPDATE_APPOINTMENT_DETAILS_FAILURE',

  GET_APPOINTMENT_LIST: 'GET_APPOINTMENT_LIST',
  GET_APPOINTMENT_LIST_SUCCESS: 'GET_APPOINTMENT_LIST_SUCCESS',
  GET_APPOINTMENT_LIST_FAILURE: 'GET_APPOINTMENT_LIST_FAILURE',

  CANCEL_APPOINTMENT: 'CANCEL_APPOINTMENT',
  CANCEL_APPOINTMENT_SUCCESS: 'CANCEL_APPOINTMENT_SUCCESS',
  CANCEL_APPOINTMENT_FAILURE: 'CANCEL_APPOINTMENT_FAILURE',

  DOCTOR_SPECIALIZATION: 'DOCTOR_SPECIALIZATION',
  DOCTOR_SPECIALIZATION_SUCCESS: 'DOCTOR_SPECIALIZATION_SUCCESS',
  DOCTOR_SPECIALIZATION_FAILURE: 'DOCTOR_SPECIALIZATION_FAILURE',


};

export const ORDER_TYPE ={
  UPDATE_STATE: 'UPDATE_ORDER_STATE',

  DOCTOR_DETAILS: 'DOCTOR_DETAILS',
  DOCTOR_DETAILS_SUCCESS: 'DOCTOR_DETAILS_SUCCESS',
  DOCTOR_DETAILS_FAILURE: 'DOCTOR_DETAILS_FAILURE',

  ORDER_DETAILS: 'ORDER_DETAILS',
  ORDER_DETAILS_SUCCESS: 'ORDER_DETAILS_SUCCESS',
  ORDER_DETAILS_FAILURE: 'ORDER_DETAILS_FAILURE',

  PATIENT_DETAILS: 'PATIENT_DETAILS',
  PATIENT_DETAILS_SUCCESS: 'PATIENT_DETAILS_SUCCESS',
  PATIENT_DETAILS_FAILURE: 'PATIENT_DETAILS_FAILURE',

  PAYMENT_DETAILS: 'PAYMENT_DETAILS',
  PAYMENT_DETAILS_SUCCESS: 'PAYMENT_DETAILS_SUCCESS',
  PAYMENT_DETAILS_FAILURE: 'PAYMENT_DETAILS_FAILURE',
}

export const COMMON_TYPE = {
  UPDATE_STATE: 'UPDATE_COMMON_STATE',

  GET_SPECIALITIES: 'GET_SPECIALITIES',
  GET_SPECIALITIES_SUCCESS: 'GET_SPECIALITIES_SUCCESS',
  GET_SPECIALITIES_FAILURE:'GET_SPECIALITIES_FAILURE',

  GET_HOSPITALS: 'GET_HOSPITALS',
  GET_HOSPITALS_SUCCESS: 'GET_HOSPITALS_SUCCESS',
  GET_HOSPITALS_FAILURE: 'GET_HOSPITALS_FAILURE',

  GET_COUNTRIES: 'GET_COUNTRIES',
  GET_COUNTRIES_SUCCESS: 'GET_COUNTRIES_SUCCESS',
  GET_COUNTRIES_FAILURE: 'GET_COUNTRIES_FAILURE',

  GET_STATES: 'GET_STATES',
  GET_STATES_SUCCESS: 'GET_STATES_SUCCESS',
  GET_STATES_FAILURE: 'GET_STATES_FAILURE',

  GET_BLOODGROUP: 'GET_BLOODGROUP',
  GET_BLOODGROUP_SUCCESS: 'GET_BLOODGROUP_SUCCESS',
  GET_BLOODGROUP_FAILURE: 'GET_BLOODGROUP_FAILURE',

  GET_MARITALSTATUS: 'GET_MARITALSTATUS',
  GET_MARITALSTATUS_SUCCESS: 'GET_MARITALSTATUS_SUCCESS',
  GET_MARITALSTATUS_FAILURE: 'GET_MARITALSTATUS_FAILURE',

  GET_GROUPRELATION: 'GET_GROUPRELATION',
  GET_GROUPRELATION_SUCCESS: 'GET_GROUPRELATION_SUCCESS',
  GET_GROUPRELATION_FAILURE: 'GET_GROUPRELATION_FAILURE',
  
};

export const  CHAMBER_TYPE= {
  UPDATE_STATE: 'UPDATE_CHAMBER_STATE',

  GET_CHAMBER_DETAILS: 'GET_CHAMBER_DETAILS',
  GET_CHAMBER_DETAILS_SUCCESS: 'GET_CHAMBER_DETAILS_SUCCESS',
  GET_CHAMBER_DETAILS_FAILURE: 'GET_CHAMBER_DETAILS_FAILURE',

};

export const NAV_TYPE = {
  UPDATE_STATE: 'UPDATE_NAV_STATE',

  NAV_HOME: 'NAV_HOME',

};