import {put, call} from 'redux-saga/effects';

import {
  getUserListService,
  uploadPhotoService,
  searchUsersService,
  getFormService,
  submitFormService
} from '../services/api';

import {
  PENDING,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILED,
  UPLOAD_PHOTO_SUCCESS,
  UPLOAD_PHOTO_FAILED,
  SEARCH_USERS_SUCCESS,
  SEARCH_USERS_FAILED,
  GET_FORM_SUCCESS,
  GET_FORM_FAILED,
  SUBMIT_FORM_SUCCESS,
  SUBMIT_FORM_FAILED
} from '../constants/actionType';

export function* getUserListSaga() {
  try {
    yield put({type: PENDING});
    const {error, ...response} = yield call(getUserListService);
    if (error) {
      yield put({ type: GET_USER_LIST_FAILED, error: error });
    } else {
      yield put({ type: GET_USER_LIST_SUCCESS, data: response });
    }
  } catch (error) {
    yield put({ type: GET_USER_LIST_FAILED, error: error });
  }
}

export function* uploadPhotoSaga() {
  try {
    yield put({type: PENDING});
    const {error, ...response} = yield call(uploadPhotoService);
    if (error) {
      yield put({ type: UPLOAD_PHOTO_FAILED, error: error });
    } else {
      yield put({ type: UPLOAD_PHOTO_SUCCESS, data: response });
    }
  } catch (error) {
    yield put({ type: UPLOAD_PHOTO_FAILED, error: error });
  }
}

export function* searchUsersSaga(value) {
  try {
    yield put({type: PENDING});
    const {error, ...response} = yield call(searchUsersService, value.searchText);
    if (error) {
      yield put({ type: SEARCH_USERS_FAILED, error: error });
    } else {
      yield put({ type: SEARCH_USERS_SUCCESS, data: response });
    }
  } catch (error) {
    yield put({ type: SEARCH_USERS_FAILED, error: error });
  }
}

export function* getFormSaga() {
  try {
    yield put({type: PENDING});
    const {error, ...response} = yield call(getFormService);
    if (error) {
      yield put({ type: GET_FORM_FAILED, error: error });
    } else {
      yield put({ type: GET_FORM_SUCCESS, data: response });
    }
  } catch (error) {
    yield put({ type: GET_FORM_FAILED, error: error });
  }
}

export function* submitFormSaga(value) {
  try {
    yield put({type: PENDING});
    const {error, ...response} = yield call(submitFormService, value.formData);
    if (error) {
      yield put({ type: SUBMIT_FORM_FAILED, error: error });
    } else {
      yield put({ type: SUBMIT_FORM_SUCCESS, data: response });
    }
  } catch (error) {
    yield put({ type: SUBMIT_FORM_FAILED, error: error });
  }
}