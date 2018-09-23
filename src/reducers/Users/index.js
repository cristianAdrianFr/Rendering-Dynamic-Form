import _ from 'lodash';

import {
  PENDING,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILED,
  SEARCH_TEXT,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAILED,
  GET_FORM_SUCCESS,
  GET_FORM_FAILED,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILED
} from '../../constants/actionType';

const initialState = {
  pending: false,
  users: [],
  searchText: '',
  formFields: [],
  addedUser: false,
};

const reducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case PENDING:
      newState.pending = true;
      return newState;

    case GET_USER_LIST_SUCCESS:
      newState.users = action.data && action.data.data;
      newState.pending = false;
      return newState;

    case GET_USER_LIST_FAILED:
      newState.pending = false;
      return newState;

    case SEARCH_TEXT:
      newState.searchText = action.searchText;
      return newState;

    case SEARCH_USERS_SUCCESS:
      newState.users = action.data && action.data.data;
      newState.pending = false;
      return newState;

    case SEARCH_USERS_FAILED:
      newState.pending = false;
      return newState;

    case GET_FORM_SUCCESS:
      newState.formFields = action.data && action.data.data;
      newState.pending = false;
      return newState;

    case GET_FORM_FAILED:
      newState.pending = false;
      return newState;

    case SUBMIT_FORM_SUCCESS:
      newState.pending = false;
      newState.addedUser = true;
      return newState;

    case SUBMIT_FORM_FAILED:
      newState.pending = false;
      return newState;

    default:
      return state;
  }
};

export default reducer;