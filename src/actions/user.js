import { doGet, doDelete, doPut, doPost } from '../api/utils';
import { USER_TYPE } from '../constants/actionReducerConstants';
import { URI } from '../constants';

// ================ For Update State ====================
export function updateState(payload) {
  return {
    type: USER_TYPE.UPDATE_STATE,
    payload
  };
}

// ================ For Login ====================
export function userLogin() {
  return (dispatch, getState) => {

    const { userDetails } = getState().userState;
    const loginParams = {
      "userName": userDetails.contactNo,
      "password": userDetails.password,
      "roleName": "INDIVIDUAL",
      "registrationProvider": "SBIS",
      "entityName": "INDIVIDUAL",
      "loginWithRole": true,
      "otp": false ,

    }
    dispatch({
      type: USER_TYPE.LOGIN_USER
    });

    doPost(`${URI.login}`, loginParams, true, false, '')
      .then(result => dispatch(userLoginSuccess(result)))
      .catch(error => dispatch(userLoginFailure(error)));
   };
}
export function userLoginSuccess(payload) {
  return {
    type: USER_TYPE.LOGIN_USER_SUCCESS,
    payload,
  };
}
export function userLoginFailure(error) {
  return {
    type: USER_TYPE.LOGIN_USER_FAILURE,
    error,
  };
}

//============== Check No exits or not=============
export function numberCheck(){
return (dispatch, getState)=>{
  const { userDetails } = getState().userState;
  dispatch({ type: USER_TYPE.NUMBER_CHECK });
  doGet(`${URI.verifyMobile}${userDetails.contactNo}`,false , '')
    .then(result => {
      if(result.status === 2000){
        dispatch(numberCheckSuccess(result));
        dispatch(requestOTP());
      } else {
        alert('Number Not Exits, Create Account First');
      }

    })
    .catch(error => dispatch(numberCheckFailure(error)));
  };
}; 

export function numberCheckRegistration(callback) {
  return (dispatch, getState) => {
    const { userDetails } = getState().userState;
    dispatch({ type: USER_TYPE.NUMBER_CHECK });
    doGet(`${URI.verifyMobile}${userDetails.contactNo}`, false, '')
      .then(result => {
        if (result.status === 2000) {
          dispatch(numberCheckSuccess(result));
          dispatch(requestOTP());
          callback(('VerifyMobileMumber'));
        } else {
          alert('Contact No. Exists');
        }
      })
      .catch(error => dispatch(numberCheckFailure(error)));
  };
}; 

export function numberCheckSuccess(payload) {
  return {
    type: USER_TYPE.NUMBER_CHECK_SUCCESS,
    payload,
  };
}

export function numberCheckFailure(error) {
  return {
    type: USER_TYPE.NUMBER_CHECK_FAILURE,
    error,
  };
}

// =========== Login With OTP ============
export function otpLogin() {
  return (dispatch, getState) => {

    const { userDetails } = getState().userState;
    const loginParams = {
      "userName": userDetails.contactNo,
      "password": userDetails.userOTP,
      "roleName": "INDIVIDUAL",
      "registrationProvider": "SBIS",
      "entityName": "INDIVIDUAL",
      "loginWithRole": true,
      "otp": true,

    }
    dispatch({
      type: USER_TYPE.LOGIN_USER
    });
    doPost(`${URI.login}`, loginParams, true, false, '' )
      .then(result => dispatch(otpLoginSuccess(result)))
      .catch(error => dispatch(otpLoginFailure(error)));
  };
}
export function otpLoginSuccess(payload) {
  return {
    type: USER_TYPE.LOGIN_USER_SUCCESS,
    payload,
  };
}
export function otpLoginFailure(error) {
  return {
    type: USER_TYPE.LOGIN_USER_FAILURE,
    error,
  };
}

export function requestOTP() {
  return (dispatch, getState) => {
    const { userDetails, otpActions } = getState().userState;
    const otpParams = {
      "contactNo": userDetails.contactNo,
      "smsActionType": otpActions.sendActionType,
    }
    dispatch({
      type: USER_TYPE.SEND_OTP
    });
    doPost(`${URI.otp}`, otpParams, true, false, '')
      .then(result => dispatch(requestOTPSuccess(result)))
      .catch(error => dispatch(requestOTPFailure(error)));
  };
};
export function requestOTPSuccess(payload) {
  return {
    type: USER_TYPE.SEND_OTP_SUCCESS,
    payload,
  };
}
export function requestOTPFailure(error) {
  return {
    type: USER_TYPE.SEND_OTP_FAILURE,
    error,
  };
}

export function verifyOTP() {
  return (dispatch, getState) => {
    const { userDetails, otpActions } = getState().userState;
    const otpParams = {
      "contactNo": userDetails.contactNo,
      "smsActionType": otpActions.verifyActionType,
      "otp": userDetails.userOTP,
    }
    dispatch({
      type: USER_TYPE.VERIFY_OTP
    });
    doPost(`${URI.otp}`, otpParams, true, false, '')
      .then(result => dispatch(verifyOTPSuccess(result)))
      .catch(error => dispatch(verifyOTPFailure(error)));
  };
};
export function verifyOTPSuccess(payload) {
  return {
    type: USER_TYPE.VERIFY_OTP_SUCCESS,
    payload,
  };
}
export function verifyOTPFailure(error) {
  return {
    type: USER_TYPE.VERIFY_OTP_FAILURE,
    error,
  };
}

// ================ For Registation ====================
export function userRegistration() {
  return (dispatch, getState) => {
    const { userDetails } = getState().userState;
    const signUpParams = {
      "contactNo": userDetails.contactNo,
      "name": `${userDetails.firstName} ${userDetails.lastName}`,
      "password": userDetails.password,
      "registrationProvider": userDetails.registrationProvider,
      "roleName": "INDIVIDUAL",
    }
    dispatch({
      type: USER_TYPE.REGISTER_USER
    });

    doPost(`${URI.signup}`, signUpParams, true, false, '')
      //.then(result => dispatch(userRegistrationSuccess(result)))
      .then(result => {
        if (result.status === 2000) {
          dispatch(userLogin());
          //alert('Number Not Exits, Create Account First');
        } else {
          alert(result.message);
        }

      })
      //.then(result => dispatch(userLogin()))
      .catch(error => dispatch(userRegistrationFailure(error)));
  };
}
export function userRegistrationSuccess(payload) {
  return {
      type: USER_TYPE.REGISTER_USER_SUCCESS,
      payload,
  };
}
export function userRegistrationFailure(error) {
  return {
    type: USER_TYPE.REGISTER_USER_FAILURE,
    error,
  };
}

// ================ For User Profile Update =================
export function updateUserProfile() {
  return (dispatch, getState) => {
    const { userDetails } = getState().userState;
    const userProfileParams = {
      "id": userDetails.userId === undefined ? '' : userDetails.userId,
      "bloodGroup": userDetails.bloodGroup === undefined ? '' : userDetails.bloodGroup,
      "contactNo": userDetails.contactNo === undefined ? '' : userDetails.contactNo,
      "dateOfBirth": userDetails.dateOfBirth === undefined ? '' : userDetails.dateOfBirth,
      "emailAddress": userDetails.emailAddress === undefined ? '' : userDetails.emailAddress,
      "firstName": userDetails.firstName === undefined ? '' : userDetails.firstName,
      "lastName": userDetails.lastName === undefined ? '' : userDetails.lastName,
      "gender": userDetails.gender === undefined ? '' : userDetails.gender,
      "groupId": userDetails.groupId === undefined ? '' : userDetails.groupId,
      "maritialStatus": userDetails.maritialStatus === undefined ? '' : userDetails.maritialStatus,
      "weight": userDetails.weight === undefined ? '' : userDetails.weight,
      "height": userDetails.height === undefined ? '' : userDetails.height,
    };

    
    dispatch({
      type: USER_TYPE.UPDATE_USER_PROFILE
    });
     const tokenValue = userDetails.token;
     doPut(`${URI.updateUserProfile}`, userProfileParams, true, true, tokenValue)
      .then(result => dispatch(updateUserProfileSuccess(result)))
      .catch(error => dispatch(updateUserProfileFailure(error)));
  };
}
export function updateUserProfileSuccess(payload) {
  return {
    type: USER_TYPE.UPDATE_USER_PROFILE_SUCCESS,
    payload,
  };
}
export function updateUserProfileFailure(error) {
  return {
    type: USER_TYPE.UPDATE_USER_PROFILE_FAILURE,
    error,
  };
}

// ================ For get User Profile =================
export function getUserProfile() {
  return (dispatch, getState) => {
    const { userDetails } = getState().userState;
    const userProfileId = userDetails.userId;
    const tokenValue = userDetails.token;
    dispatch({
      type: USER_TYPE.GET_USER_PROFILE
    });
    doGet(`${URI.getUserProfileDetails}/${userProfileId}`, needToken = true, tokenValue)
      .then(result => dispatch(getUserProfileSuccess(result)))
      .catch(error => dispatch(getUserProfileFailure(error)));
  };
}
export function getUserProfileSuccess(payload) {
  return {
    type: USER_TYPE.GET_USER_PROFILE_SUCCESS,
    payload,
  };
}
export function getUserProfileFailure(error) {
  return {
    type: USER_TYPE.GET_USER_PROFILE_FAILURE,
    error,
  };
}

// ================ For Add Address =================
export function addAddress() {
  return (dispatch, getState) => {
    const { userDetails } = getState().userState;
    const tokenValue = userDetails.token;
    const addAddressParams = {
      updateSection:userDetails.updateSection,
      id: userDetails.userId,
      addressList: userDetails.addressList
    }
    dispatch({
      type: USER_TYPE.ADD_ADDRESS
    });
    doPut(`${URI.updateUserProfile}`, addAddressParams, true, true, tokenValue)
    // doPut(`http://206.189.150.18:9090/v1/inusers`, addAddressParams, true, true, tokenValue)
      .then(result => dispatch(addAddressSuccess(result)))
      .catch(error => dispatch(addAddressFailure(error)));
  };
}
export function addAddressSuccess(payload) {
  return {
    type: USER_TYPE.ADD_ADDRESS_SUCCESS,
    payload,
  };
}
export function addAddressFailure(error) {
  return {
    type: USER_TYPE.ADD_ADDRESS_FAILURE,
    error,
  };
}

// ================ Forgot Password OTP send =================
export function forgotPassword() {
  return (dispatch, getState) => {
    const { userDetails } = getState().userState;
    const contactNoParams = {
      "contactNo": userDetails.contactNo,
    }
    dispatch({
      type: USER_TYPE.FORGOT_PASSWORD
    });
      doPost(`${URI.forgotPassword}`, contactNoParams, true, false, '')
      .then(result => dispatch(forgotPasswordSuccess(result)))
      .catch(error => dispatch(forgotPasswordFailure(error)));
  };
}
export function forgotPasswordSuccess(payload) {
  return {
    type: USER_TYPE.FORGOT_PASSWORD_SUCCESS,
    payload,
  };
}
export function forgotPasswordFailure(error) {
  return {
    type: USER_TYPE.FORGOT_PASSWORD_FAILURE,
    error,
  };
}

// ================ Reset Password =================
export function resetPassword() {
  return (dispatch, getState) => {
    const { userDetails } = getState().userState;
    const contactParams = {
      "contactNo": userDetails.contactNo,
      "otp": userDetails.userOTP,
      "password": userDetails.password,
    }
    dispatch({
      type: USER_TYPE.RESET_PASSWORD
    });
    doPost(`${URI.resetPassword}`, contactParams, true, false, '')
      .then(result => {
        if (result.status === 2000) {
          dispatch(userLogin());
          //alert('Number Not Exits, Create Account First');
        } else {
          alert('Something wrong');
        }

      })
      .catch(error => dispatch(resetPasswordFailure(error)));
  };
}
export function resetPasswordSuccess(payload) {
  return {
    type: USER_TYPE.RESET_PASSWORD_SUCCESS,
    payload,
  };
}
export function resetPasswordFailure(error) {
  return {
    type: USER_TYPE.RESET_PASSWORD_FAILURE,
    error,
  };
}

