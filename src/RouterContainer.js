import { createStackNavigator, createAppContainer } from 'react-navigation';
import ROUTES from '../src/constants/route';

const RootStack = createStackNavigator({
  Home: ROUTES.HOME,
  Loading: ROUTES.LOADING,
  Testing: ROUTES.TEST_PAGE,

  // Login-Registration
  Login: ROUTES.LOGIN,
  Registration: ROUTES.REGISTRATION,
  VerifyMobileMumber: ROUTES.VERIFY_MOBILE_NUMBER,
  CreateAccount: ROUTES.CREATE_ACCOUNT,
  ForgotPassword: ROUTES.FORGOTPASSWORD,
  ForgotPasswordOtp: ROUTES.FORGOTPASSWORDOTP,
  ChangePassword: ROUTES.CHANGEPASSWORD,
  
  // UserScreens
  UserProfile: ROUTES.USER_PROFILE,
  UpdateUserProfile: ROUTES.UPDATE_USER_PROFILE,
  AddAddress: ROUTES.ADDADDRESS,
  Address: ROUTES.ADDRESS,
  LifeStyle: ROUTES.LIFESTYLE,

  // AppointmentScreens
  AppointmentConfirmation: ROUTES.APPOINTMENT_CONFIRMATION,
  AppointmentDetails: ROUTES.APPOINTMENTDETAILS,
  DoctorDetails: ROUTES.DOCTOR_DETAILS,
  BookAppoinment: ROUTES.BOOK_APPOINMENT,
  BookAppoinmentSecond: ROUTES.BOOK_APPOINMENT_SECOND,
  BookAppoinmentThird: ROUTES.BOOK_APPOINMENT_THIRD,
  CancelAppointment: ROUTES.CANCELAPPOINTMENT,
  CancelAppointmentComment: ROUTES.CANCELAPPOINTMENTCOMMENT,
  DoctorAppoinment: ROUTES.DOCTOR_APPOINMENT,
  MyAppointment: ROUTES.MYAPPOINTMENT,
  MyAppointmentFilter: ROUTES.MYAPPOINTMENTFILTER,
  MyAppointmentPast: ROUTES.MYAPPOINTMENTPAST,
  PaymentDetails: ROUTES.PAYMENT_DETAILS,

// DoctorScreens
  Filter: ROUTES.FILTER,
  FindDoctor: ROUTES.FIND_DOCTOR,
  Specialities: ROUTES.SPECIALITIES,
  Hospitallist: ROUTES.HOSPITALLIST,
  SearchDoctor: ROUTES.SEARCH_DOCTOR,
  FindDoctorFilter: ROUTES.FIND_DOCTOR_FILTER,
  
// GroupScreens
  AddGroup: ROUTES.ADDGROUP,
  AddNewGroupMember: ROUTES.ADDNEWGROUPMEMBER,
  GroupDetails: ROUTES.GROUPDETAILS,
  GroupMember: ROUTES.GROUPMEMBER,
  MyGroups: ROUTES.MYGROUPS,
 
  },
  {
    initialRouteName: 'Home',
  });

export default AppContainer = createAppContainer(RootStack);