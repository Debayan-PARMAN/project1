import { combineReducers } from 'redux';

// import nav from './nav';
// import session from './session';
// import info from './info';
// import activity from './activity';
// import configuration from './configuration';
import common from './common';
import userState from './user';
import doctorState from './doctors';
//import groupState from './group';
export default combineReducers({
  // nav,
  // session,
  // info,
  // activity,
  // configuration,
  common,
  userState,
  doctorState,
  //groupState,
});