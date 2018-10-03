import _ from 'lodash';

import {
  PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from '../../constants/actionType';

const initialState = {
  pending: false,
  isLoggedIn: localStorage.getItem('auth_token') !== null ? true : false
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case PENDING:
      newState.pending = true;
      return newState;

    case LOGIN_SUCCESS:
      action.data.access && localStorage.setItem('auth_token', action.data.access);
      newState.isLoggedIn = true;
      return newState;

    case LOGIN_FAILED:
      newState.isLoggedIn = false;
      return newState;

    default:
      return state;
  }
};

export default reducer;