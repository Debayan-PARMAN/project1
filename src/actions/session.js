import { doGet, doDelete, doPut, doPost } from '../api/utils';
import { SESSION_TYPE } from '../constants/actionReducerConstants';
import { URI } from '../constants';

// ================ For Update State ====================
export function updateState(payload) {
  return {
    type: SESSION_TYPE.UPDATE_STATE,
    payload
  };
}