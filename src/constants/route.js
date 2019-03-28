import HOME from '../screens/Home';
import LOADING from '../screens/LoadingScreen';
import TEST_PAGE from '../screens/Testing';

import LOGIN from '../screens/Login-Register/Login';
import REGISTRATION from '../screens/Login-Register/Registration';
import VERIFY_MOBILE_NUMBER from '../screens/Login-Register/VerifyMobileNumber';
import CREATE_ACCOUNT from '../screens/Login-Register/CreateAccount';
import FORGOTPASSWORD from '../screens/Login-Register/ForgotPassword';
import FORGOTPASSWORDOTP from '../screens/Login-Register/ForgotPasswordOtp';
import CHANGEPASSWORD from '../screens/Login-Register/ChangePassword';

import USER_PROFILE from '../screens/UserScreens/UserProfile';
import UPDATE_USER_PROFILE from '../screens/UserScreens/UpdateUserProfile';
import ADDADDRESS from '../screens/UserScreens/AddAddress';
import ADDRESS from '../screens/UserScreens/Address';
import LIFESTYLE from '../screens/UserScreens/LifeStyle';

import FIND_DOCTOR from '../screens/DoctorScreens/FindDoctor';
import FIND_DOCTOR_FILTER from '../screens/DoctorScreens/FindDoctorFilter';
import SPECIALITIES from '../screens/DoctorScreens/Specialities';
import SEARCH_DOCTOR from '../screens/DoctorScreens/SearchDoctor';
import FILTER from '../screens/DoctorScreens/Filter';
import HOSPITALLIST from '../screens/DoctorScreens/Hospitallist';

import DOCTOR_DETAILS from '../screens/AppointmentScreens/DoctorDetails';
import DOCTOR_APPOINMENT from '../screens/AppointmentScreens/DoctorAppoinment';
import BOOK_APPOINMENT from '../screens/AppointmentScreens/BookAppoinment';
import BOOK_APPOINMENT_SECOND from '../screens/AppointmentScreens/BookAppoinmentSecond';
import BOOK_APPOINMENT_THIRD from '../screens/AppointmentScreens/BookAppoinmentThird';
import PAYMENT_DETAILS from '../screens/AppointmentScreens/PaymentDetails';
import APPOINTMENT_CONFIRMATION from '../screens/AppointmentScreens/AppointmentConfirmation';
import MYAPPOINTMENT from '../screens/AppointmentScreens/MyAppointment';
import MYAPPOINTMENTPAST from '../screens/AppointmentScreens/MyAppointmentPast';
import APPOINTMENTDETAILS from '../screens/AppointmentScreens/AppointmentDetails';
import CANCELAPPOINTMENT from '../screens/AppointmentScreens/CancelAppointment';
import CANCELAPPOINTMENTCOMMENT from '../screens/AppointmentScreens/CancelAppointmentComment';
import MYAPPOINTMENTFILTER from '../screens/AppointmentScreens/MyAppointmentFilter';

import MYGROUPS from '../screens/GroupScreens/MyGroups';
import GROUPMEMBER from '../screens/GroupScreens/GroupMember';
import ADDGROUP from '../screens/GroupScreens/AddGroup';
import ADDNEWGROUPMEMBER from '../screens/GroupScreens/AddNewGroupMember';
import GROUPDETAILS from '../screens/GroupScreens/GroupDetails';



export default ROUTES = {
  HOME,
  LOADING,
  TEST_PAGE,

  LOGIN,
  REGISTRATION,
  VERIFY_MOBILE_NUMBER,
  FORGOTPASSWORD,
  FORGOTPASSWORDOTP,
  CHANGEPASSWORD,
  CREATE_ACCOUNT,

  USER_PROFILE,
  CREATE_ACCOUNT,
  UPDATE_USER_PROFILE,
  ADDADDRESS,
  ADDRESS,
  LIFESTYLE,

  DOCTOR_APPOINMENT,
  BOOK_APPOINMENT,
  BOOK_APPOINMENT_SECOND,
  BOOK_APPOINMENT_THIRD,
  PAYMENT_DETAILS,
  APPOINTMENT_CONFIRMATION,
  MYAPPOINTMENT,
  MYAPPOINTMENTPAST,
  CANCELAPPOINTMENT,
  CANCELAPPOINTMENTCOMMENT,
  MYAPPOINTMENTFILTER,
  APPOINTMENTDETAILS,

  FIND_DOCTOR,
  SEARCH_DOCTOR,
  FIND_DOCTOR_FILTER,
  SPECIALITIES,
  FILTER,
  DOCTOR_DETAILS,
  HOSPITALLIST,
  
  ADDGROUP,
  MYGROUPS,
  GROUPDETAILS,
  ADDNEWGROUPMEMBER,
  GROUPMEMBER,
  
  //DOCTOR_CARD,
  //LOGIN_SECOND_CONTAINER,
  // POPUP,
  
  // USER_ADDRESS,
  // USER_MEDICAL_RECORDS,


}
