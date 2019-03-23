// import ROUTES from './route';
// import styleConstants from './styleConstants';
// import * from './actionReducerConstants';


export const Constants = {};

export const HOST_NAME = 'http://206.189.150.18';
export const PORT = '9090';
export const URI_PREFIX = `${HOST_NAME}:${PORT}`;

export const URI = {
  // ================== COMMON =====================
  getSpecialities: `${URI_PREFIX}/gen/v1/get-specialization-list`, // GET ALL SPECIALITIES
  getHospitals: `${URI_PREFIX}/gen/v1/get-hospital-list`, // GET ALL HOSPITALS
  getCountries: `${URI_PREFIX}/gen/v1/inusers/countries`, // GET ALL COUNTRIES
  getStates: `${URI_PREFIX}/gen/v1/inusers/`, // fetch States by Country
  getAttributeByName: `${URI_PREFIX}/gen/v1/get-attribute-by-name/`, // get Attribute By AttributeName {attributeName}

  // ================== LOGIN ======================
  login: `${URI_PREFIX}/gen/v1/users/login`, // For Login Api
  signup: `${URI_PREFIX}/gen/v1/users/signup`, // For User registration
  otp: `${URI_PREFIX}/gen/v1/manage-otp`, // For Generate otp

  //---------for UpdateUserProfile----------------
  uploadProfileImage: `${URI_PREFIX}/v1/inusers/upload/profile-image`, // For upload individual profile image
  updateUserProfile: `${URI_PREFIX}/v1/inusers`, // For Update individual profile data
  getUserProfileDetails: `${URI_PREFIX}/v1/inusers`, // For Retrive Individual User's profile by user profile pk
  addAddress: `${URI_PREFIX}/v1/users`, //AddAddress for Individual

  // ------- Search for Doctor----------------
  findDoctors: `${URI_PREFIX}/v2/doctor/search-doctor?search=`, // For Search Doctor

  // ------- Verify Mobile Number -------------
  verifyMobile: `${URI_PREFIX}/gen/v1/users/contactno?q=`,

  // ------- Available Chember Slots -------------
  getChamber_slots: `${URI_PREFIX}/v1/doctor/get-calendar-doctor-chamber?`,

  // --------------For Doctor Details---------------------
  getDoctorDetails: `${URI_PREFIX}/v2/doctor/find-doctor-by-id/`,

  // ---------------For Update Appointment Details -------------
  updateApponitmentDetails: `${URI_PREFIX}/v1/doctor/save-doctor-appointment`, // NOT SURE ABOUT THIS API //

  // -----------------Appoinment Book & Appoinment List & Cancel Appointment--------------------
  bookAppoinment: `${URI_PREFIX}/v1/appointment`,

  //-----------------Forgot Password--------------------------
  forgotPassword: `${ URI_PREFIX }/gen/v1/users/forgotpassword`,



  // ---------------- GroupRelation ----------------------

  getgroupRelation: `${URI_PREFIX}/gen/v1/inusers/masterdata?q=RELATION`,

  // ------------------ MyGroup --------------------------

  getMyGroup: `${URI_PREFIX}/v1/inusers/`,

  // ------------------ AddGroup --------------------------

  addGroup: `${URI_PREFIX}/v1/groups/`, //For Create New Group

  //-----------------Forgot Password--------------------------
  forgotPassword: `${ URI_PREFIX }/gen/v1/users/forgotpassword`,

  //-----------------Reset Password--------------------------
  resetPassword: `${URI_PREFIX }/gen/v1/users/resetpassword`,
  
  // ------------------- ViewGroupMember --------------------------

  viewGroupMember: `${URI_PREFIX}/v1/groups/`,

  // ------------------- Member Delete ---------------------------

  deleteMember: `${URI_PREFIX}/v1/groups/`,

  // ------------------- Edit/Save Member ------------------------

  editMember: `${URI_PREFIX}/v1/groups/inusers`,

  // ------------------- Leave From Group -------------------------

  leaveGroup: `${URI_PREFIX}/v1/groups/inusers/leave`,

  // -------------------- Search Member ---------------------------

  searchMember: `${URI_PREFIX}/v1/inusers/search?q=`,

  // --------------------- Group Rename ----------------------------

  renameGroup: `${URI_PREFIX}/v1/groups`,

  // ----------------------- Delete Group ---------------------------

  deleteGroup: `${URI_PREFIX}/v1/groups/`,

  // ----------------------- Add Member -----------------------------

  addMember: `${URI_PREFIX}/v2/groups/inusers/invite`,

  
 
}
