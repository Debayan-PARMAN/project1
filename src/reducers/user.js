import { createReducer } from './utils';
import { USER_TYPE } from '../constants/actionReducerConstants';
import { setAsyncStorage, resetUserDetails } from '../Utils';


const initialState = {
  toggleEnabled: true, 
  otpToggle: false, 
  numberExits: false,
  loggedIn: false,
 
  myGroup: [],
  addGroup: {
    groupName: '',
  },
  groupDetails: {
    "id": '',
    "groupName": '',
    "groupOwnerName": '',
    "totalMembers": '',
    "updatedOn": '',
    "createdOn": '',
    "userGrops": [],
  },
  memberDetails: {
    "groupId": '',
    "id": '',
    "userId": '',
    "relationshipId": '',
    "relationshipName": '',
    "emailAddress": '',
    "firstName": '',
    "name": '',
    "gender": '',
    "contactNo": '',
    "dateOfBirth": '',
    "invitationAccepted": '',
    "groupRole": '',
    "groupName": '',
    "groupPermission": {
      "groupPermissionPk": '',
      "groupPk": '',
      "userPk": '',
      "forUserPk": '',
      "editPermissionFlag": false,
      "viewPermissionFlag": false,
      "notifyPermissionFlag": false,
      "status": ''
    }
  },
  viewMember: [],
  searchMember: [],
  editMember: {
    userName: '',
    relationshipName: '',
    firstName: '',
    lastName: '',
    age: '',
  },

  addMember: {
    "name": '',
    "contactNo": '',
    "emailAddress": '',
    "minor": '',
  },

  userDetails: {
    masterId: '',
    userId: '',
    registrationProvider: "SBIS",
    roleName: "INDIVIDUAL",
    userName: '' ,
    firstName: '',
    lastName: '',
    name: "",

    password: "",
    passwordInvalid: false,
    confirmpassword: "",
    passwordStrength: {
      strength: 0,
      strengthText: '',
      color: '', 
    },
    token: '',

  

    emailAddress: '',
    contactNo: '',
    numberValid: "",
    groupId: null,
    medicalHistory: {},

    selectedAddressIndex: 0,
    addresses: [],
    updateSection: "ADDRESS",
    id: '',
    addressExits: false,
    addCustomAddress: false,
    addressList:[
      

    ],
    addressDetails: {
      addressType: '',
      line1: '',
      line2: '',
      country: '',
      city: '',
      pinCode: '',
      state: '',
      // id: '',
    },
    selectedCountry:'',
    selectedState:'',
    orders: [],
    userPicSrc: '',
    commonData: "",
    userOTP: "",
    otp: true,

    //---User Details-----//
    fieldsEditable: false, // for making input fields editable
    dateOfBirth:'',    
    bloodGroup: '',
    bloodGroupOptions: [],
    weight:'',
    height:'',
    gender: '',
    age:'',
    maritialStatus:'',

    profileCompletion: '',
    "smsActionType": '',

    rememberMe: false,
  },
  otpActions: {
    otpSent: false,
    sendActionType: 'OTPSEND',
    verifyActionType: 'OTPVERIFY',
  },
  loading: false,
  showPassword: true, // toggle between password/otp
  responseTriggerred: false,
  status: '',
  successMessage: '', // get success details for an api
  failureMessage: '', // get failure details for an api
};

const handlers = {
  [USER_TYPE.UPDATE_STATE]: (_, action) => (action.payload),

  // For Login
  [USER_TYPE.LOGIN_USER]: () => {
    // console.log(action)
    return {
      // userDetails,
      successMessage: '',
      failureMessage: '',
      loading: true,
      loggedIn: false,
      responseTriggerred: false,
    };
  },
  [USER_TYPE.LOGIN_USER_SUCCESS]: (state, action) => {
    const { userDetails } = state;
    let successMessage = '';
    let failureMessage = '';
    let loggedIn=false;
    // console.log(action.payload);
    // console.log(userDetails);
    if (action.payload.token) {
      successMessage = `${action.payload.username} has successfully signed in.`;
      userDetails.token = action.payload.token;    
      userDetails.masterId = action.payload.userId;
      userDetails.userId = action.payload.inUserProfilePk;
      userDetails.username = action.payload.username;
      loggedIn=true;
    } else {
      failureMessage = action.payload.message;
      loggedIn=false;
    }
    return {
      successMessage,
      userDetails,
      failureMessage,
      loading: false,
      loggedIn,
      responseTriggerred: true,
    };
  },
  [USER_TYPE.LOGIN_USER_FAILUTE]: (_, action) => {
    return {
      userDetails: resetUserDetails(),
      loading: false,
      loggedIn: false,
      responseTriggerred: false,
    };
  },

  // Number Check
  [USER_TYPE.NUMBER_CHECK]: () => {
    return {
      loading: true,
    };
  },
  [USER_TYPE.NUMBER_CHECK_SUCCESS]: (state, action) => {
    // console.log(action.payload);
    // if(action.payload)
    return {
      loading: false,
      numberExits: true,
    };
  },
  [USER_TYPE.NUMBER_CHECK_FAILURE]: (_, action) => {
    // console.log(action.payload);
    return {
      loading: false,
      responseTriggerred: true,
    };
  },

  // For OTP-SEND
  [USER_TYPE.SEND_OTP]: () => {
    return {
      loading: true,
    };
  },
  [USER_TYPE.SEND_OTP_SUCCESS]: (state, action) => {
    return {
      loading: false,
    };
  },
  [USER_TYPE.SEND_OTP_FAILURE]: (_, action) => {
    return {
      loading: false,
      responseTriggerred: true,
    };
  },

  // For OTP-VERIFY
  [USER_TYPE.VERIFY_OTP]: () => {
    return {
      successMessage: '',
      failureMessage: '',
      loading: true,
      responseTriggerred: false,
      status: '',
    };
  },
  [USER_TYPE.VERIFY_OTP_SUCCESS]: (state, action) => {
    // console.log(action.payload);
    let successMessage = '';
    let failureMessage = '';
    let status = '';
    if (action.payload.status === 2000) {
      status = action.payload.status;
      successMessage = action.payload.message;
    } else {
      failureMessage = action.payload.message;
    }
    return {
      status,
      successMessage,
      failureMessage,
      loading: false,
      responseTriggerred: true,
    };
  },
  [USER_TYPE.VERIFY_OTP_FAILURE]: (_, action) => {
    return {
      loading: false,
      // responseTriggerred: true,
    };
  },

  // For SignUp
  [USER_TYPE.REGISTER_USER]: () => {
    return {
      successMessage: '',
      failureMessage: '',
      loading: true,
      status:'',
      responseTriggerred: false,
    };
  },
  [USER_TYPE.REGISTER_USER_SUCCESS]: (state, action) => {
    // console.log('hello');
    // console.log("Registration Payload",action.payload);
    let successMessage = '';
    let failureMessage = '';
    let status = '';
    if (action.payload.status === 2000) {
      successMessage = 'Successfully Account Created';
      status ='PASS';
    } else if (action.payload.status === 5051) {
      // successMessage = `already exists`;
      failureMessage = action.payload.message;
      status ='FAIL';
    }
    else {
      failureMessage = action.payload.message;
      status = 'FAIL';
    }
    return {
      successMessage,
      failureMessage,
      status,
      loading: false,
      responseTriggerred: true,
    };
  },
  [USER_TYPE.REGISTER_USER_FAILURE]: (_, action) => {
    // console.log(action.payload)
    return {
      loading: false,
      responseTriggerred: true,
    };
  },

  // For Check Number
  [USER_TYPE.CHECK_NUMBER]: () => {
    return {
      loading: true,
      numberExits: false,
    };
  },
  [USER_TYPE.CHECK_NUMBER_SUCCESS]: (state, action) => {
    //console.log(action.payload);
    return {
      loading: false,
      numberExits: true,
    };
  },
  [USER_TYPE.CHECK_NUMBER_FAILURE]: (_, action) => {
    //this.props.navigation.navigate('CreateAccount');
    return {
      loading: false,
      responseTriggerred: true,
      numberExits: false,
    };
  },

  // getUserDetails
  [USER_TYPE.GET_USER_PROFILE]: () => {
    return {
      loading: true,
      userprofileExits: false,
    };
  },
  [USER_TYPE.GET_USER_PROFILE_SUCCESS]: (state, action) => {
    // console.log("ggg",action.payload);
    const {userDetails} = state;
    // console.log(state);
      userDetails.addressList = "";
      userDetails.userName = action.payload.data.userName !== undefined ? action.payload.data.userName : '';
      userDetails.emailAddress = action.payload.data.emailAddress !== undefined ? action.payload.data.emailAddress : '';
      userDetails.bloodGroup = action.payload.data.bloodGroup !== undefined ? action.payload.data.bloodGroup : '';
      userDetails.height = action.payload.data.height !== undefined ? action.payload.data.height : '';
      userDetails.weight = action.payload.data.weight !== undefined ? action.payload.data.weight : '';
      userDetails.gender = action.payload.data.gender !== undefined ? action.payload.data.gender : '';
      userDetails.dateOfBirth = action.payload.data.dateOfBirth !== undefined ? action.payload.data.dateOfBirth : '',
      userDetails.maritialStatus = action.payload.data.maritialStatus !== undefined ? action.payload.data.maritialStatus : '';
      userDetails.contactNo = action.payload.data.contactNo !== undefined ? action.payload.data.contactNo : '';
      userDetails.addressList = action.payload.data.addressList !== [] ? action.payload.data.addressList : [];
    return {
      userDetails,
      loading: false,
      userprofileExits: true,
    };
  },
  [USER_TYPE.GET_USER_PROFILE_FAILURE]: (_, action) => {
    return {
      loading: false,
      responseTriggerred: true,
      userprofileExits: false,
    };
  },

  // updateUserProfile
  [USER_TYPE.UPDATE_USER_PROFILE]: () => {
    return {
      loading: true,
      updateuserprofileExits: false,
    };
  },
  [USER_TYPE.UPDATE_USER_PROFILE_SUCCESS]: (state, action) => {
    // console.log(action.payload);
    let successMessage = '';
    let failureMessage='';
    if (action.payload.status === 2000){
      successMessage = action.payload.message;
    } else {
      failureMessage = action.payload.message;
    }
    return {
      loading: false,
      successMessage,
      failureMessage,
      updateuserprofileExits: true,
    };
  },
  [USER_TYPE.UPDATE_USER_PROFILE_FAILURE]: (_, action) => {
    return {
      loading: false,
      responseTriggerred: true,
      updateuserprofileExits: false,
    };
  },

  // addAddress
  [USER_TYPE.ADD_ADDRESS]: () => {
    return {
      loading: true,
      addaddressExits: false,
    };
  },
  [USER_TYPE.ADD_ADDRESS_SUCCESS]: (state, action) => {
    // console.log(action.payload);
    let successMessage = '';
    let failureMessage = '';
    if (action.payload.status === 2000) {
      successMessage = action.payload.message;
    } else {
      failureMessage = action.payload.message;
    }
    return {
      loading: false,
      successMessage,
      failureMessage,
      addaddressExits: true,
    };
  },
  [USER_TYPE.ADD_ADDRESS_FAILURE]: (_, action) => {
    return {
      loading: false,
      responseTriggerred: true,
      addaddressExits: false,
    };
  },

  // ================ View Group ===============
  
  [USER_TYPE.GET_MYGROUP]: () => {
    return {
      //myGroup: [],
      loading: true,
      responseTriggerred: false,
    };
  },
  [USER_TYPE.GET_MYGROUP_SUCCESS]: (state, action) => {

    const myGroup = action.payload.data;
    //console.log("Getting this group:  ", myGroup);

    return {
      myGroup,
      //totalElements,
      loading: false,
      responseTriggerred: true,
    };
  },
  [USER_TYPE.GET_MYGROUP_FAILUTE]: (_, action) => {
    return {
      loading: false,
      responseTriggerred: true,
    };
  },
  

// ================ View Group Member ===============

[USER_TYPE.VIEW_GROUP_MEMBER]: () => {
  return {
    //viewMember: [],
    loading: true,
    responseTriggerred: false,
  };
},
  [USER_TYPE.VIEW_GROUP_MEMBER_SUCCESS]: (state, action) => {

    const viewMember = action.payload.data;
    //console.log("Getting group member:  ", viewMember);

    return {
      viewMember,
      loading: false,
      responseTriggerred: true,
    };
  },
    [USER_TYPE.VIEW_GROUP_MEMBER_FAILUTE]: (_, action) => {
      return {
        loading: false,
        responseTriggerred: true,
      };
    },

  // ================ Search Member ===============

  [USER_TYPE.SEARCH_MEMBER]: () => {
    return {
      searchMember: [],
      loading: true,
      responseTriggerred: false,
    };
  },
  [USER_TYPE.SEARCH_MEMBER_SUCCESS]: (state, action) => {

    const searchMember = action.payload.data;
    //console.log("Search group member:  ", searchMember);

    return {
      searchMember,
      loading: false,
      responseTriggerred: true,
    };
  },
  [USER_TYPE.SEARCH_MEMBER_FAILUTE]: (_, action) => {
    return {
      loading: false,
      responseTriggerred: true,
    };
  },
  
};



export default createReducer(initialState, handlers);