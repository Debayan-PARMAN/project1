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
      //"otp": true,

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
// console.log('No check Triger');
return (dispatch, getState)=>{
  const { userDetails } = getState().userState;
  dispatch({ type: USER_TYPE.NUMBER_CHECK });
  doGet(`${URI.verifyMobile}${userDetails.contactNo}`,false , '')
    .then(result => {
      // console.log(result.status);
      if(result.status === 2000){
        dispatch(numberCheckSuccess(result));
        // console.log('Number Not Exits');
        alert('Number Not Exits, Create Account First');
      } else {
        dispatch(requestOTP());
      }

    })
    .catch(error => dispatch(numberCheckFailure(error)));
    //console.log(doGet());
  };
}; 

export function numberCheckRegistration(callback) {
  // console.log('No check Triger');
  return (dispatch, getState) => {
    const { userDetails } = getState().userState;
    dispatch({ type: USER_TYPE.NUMBER_CHECK });
    doGet(`${URI.verifyMobile}${userDetails.contactNo}`, false, '')
      .then(result => {
        // console.log(result.status);
        if (result.status === 5051) {
          dispatch(numberCheckSuccess(result));
        } else {
          
            alert('Number Already Exits.....');
         
          // dispatch(requestOTP());
          // callback(('VerifyMobileMumber'));
        }
      })
      .catch(error => dispatch(numberCheckFailure(error)));
    //console.log(doGet());
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
  // console.log('Login With OTP Trigger');
  return (dispatch, getState) => {

    const { userDetails } = getState().userState;
    const loginParams = {
      "userName": userDetails.contactNo,
      "password": userDetails.userOTP,
      "roleName": "INDIVIDUAL",
      "registrationProvider": "SBIS",
      "otp": true,

    }
    dispatch({
      type: USER_TYPE.LOGIN_USER
    });
    // console.log(loginParams);
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

// ================ For OTP ====================
// export function requestOTP() {
//   return (dispatch, getState) => {
//     const { userDetails, otpActions } = getState().userState;
//     const otpParams = {
//       "q": userDetails.contactNo,
//       //"smsActionType": otpActions.sendActionType,
//     }
//     dispatch({
//       type: USER_TYPE.UPDATE_USER_PROFILE
//     });
//     console.log(otpParams);
//     console.log(Response.status);
//     doGet(`${URI.otpParams}`, otpParams, dispatch)
//       .then(result => dispatch(requestOTPSuccess(result)))
//       .catch(error => dispatch(requestOTPFailure(error)));
//   };
// };

// export function requestOTPSuccess(payload) {
//   return {
//     type: USER_TYPE.SEND_OTP_SUCCESS,
//     payload,
//   };
// }

// export function requestOTPFailure(error) {
//   return {
//     type: USER_TYPE.SEND_OTP_FAILURE,
//     error,
//   };
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
    // console.log(otpParams);
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
    // console.log(otpParams);
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

    // console.log(signUpParams);
    doPost(`${URI.signup}`, signUpParams, true, false, '')
      //.then(result => dispatch(userRegistrationSuccess(result)))
      .then(result => {
        // console.log(result.status);
        if (result.status === 2000) {
          dispatch(userLogin());
          console.log('Login');
          //alert('Number Not Exits, Create Account First');
        } else {
          alert('Something wrong');
        }

      })
      //.then(result => dispatch(userLogin()))
      .catch(error => dispatch(userRegistrationFailure(error)));
      // console.log(signUpParams);
  };
}
export function userRegistrationSuccess(payload) {
  //console.log(payload);
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
    // console.log(userDetails);
    const userProfileParams = {
      "id": userDetails.userId === undefined ? '' : userDetails.userId,
      "bloodGroup": userDetails.bloodGroup === undefined ? '' : userDetails.bloodGroup,
      "contactNo": userDetails.contactNo === undefined ? '' : userDetails.contactNo,
      "dateOfBirth": userDetails.dateOfBirth === undefined ? '' : userDetails.dateOfBirth + "T00:00:00.000Z",
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
    // console.log("User Params*******************",userProfileParams);
    const tokenValue = userDetails.token;
    // console.log("User token", tokenValue);
    // console.log(`${URI.updateUserProfile}`);
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
    // console.log(`${URI.getUserProfileDetails}/${userProfileId}`);
    doGet(`${URI.getUserProfileDetails}/${userProfileId}`, needToken = true, tokenValue)
      .then(result => dispatch(getUserProfileSuccess(result)))
      .catch(error => dispatch(getUserProfileFailure(error)));
  };
}
export function getUserProfileSuccess(payload) {
  // console.log("Success",payload);
  return {
    type: USER_TYPE.GET_USER_PROFILE_SUCCESS,
    payload,
  };
}
export function getUserProfileFailure(error) {
  // console.log("Error",error);
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
    // console.log("addAddress Params*******************",addAddressParams);
    doPut(`${URI.updateUserProfile}`, addAddressParams, true, true, tokenValue)
    // doPut(`http://206.189.150.18:9090/v1/inusers`, addAddressParams, true, true, tokenValue)
      .then(result => dispatch(addAddressSuccess(result)))
      .catch(error => dispatch(addAddressFailure(error)));
  };
}
export function addAddressSuccess(payload) {
  // console.log("Success", payload);
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
        // console.log(result.status);
        if (result.status === 2000) {
          dispatch(userLogin());
          console.log('Login');
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

