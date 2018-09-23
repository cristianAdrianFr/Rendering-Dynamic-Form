import {takeLatest} from 'redux-saga/effects';

import {
  GET_USERS_LIST,
  UPLOAD_PHOTO,
  SEARCH_USERS,
  GET_FORM,
  SUBMIT_FORM
} from '../constants/actionType';

import {
  getUserListSaga,
  uploadPhotoSaga,
  searchUsersSaga,
  getFormSaga,
  submitFormSaga
} from './sagas';

export function* watchGetUsersList() {
  yield takeLatest(GET_USERS_LIST, getUserListSaga)
}

export function* watchUploadPhoto() {
  yield takeLatest(UPLOAD_PHOTO, uploadPhotoSaga)
}

export function* watchSearchUsers() {
  yield takeLatest(SEARCH_USERS, searchUsersSaga)
}

export function* watchGetForm() {
  yield takeLatest(GET_FORM, getFormSaga)
}

export function* watchSubmitForm() {
  yield takeLatest(SUBMIT_FORM, submitFormSaga)
}