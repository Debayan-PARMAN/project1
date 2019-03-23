import { createReducer } from './utils';
import { NAV_TYPE } from '../constants/actionReducerConstants';

const initialState = {
    navs: {
        HOME:'HomeScreen',
    },
    loading: false,
};

const handlers = {
    [NAV_TYPE.UPDATE_STATE]: (_, action) => (action.payload),
    [NAV_TYPE.HOME]: () => {
        // console.log(action)
        return ;
    },
};

export default createReducer(initialState, handlers);