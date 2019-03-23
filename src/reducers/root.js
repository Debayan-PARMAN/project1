import { combineReducers } from 'redux';

import nav from './nav';
import session from './session';
import info from './info';
import activity from './activity';
import configuration from './configuration';
import common from './common';
import user from './user';
import doctors from './doctors';
//import group from './group';

export default combineReducers({
  nav,
  session,
  info,
  activity,
  configuration,
  common,
  user,
  doctors,
  //group,
});