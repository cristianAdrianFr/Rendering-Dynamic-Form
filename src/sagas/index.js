import {fork, all} from 'redux-saga/effects';

import {
  watchGetUsersList,
  watchUploadPhoto,
  watchSearchUsers,
  watchGetForm,
  watchSubmitForm
} from './watchers'

export default function* rootSaga() {
  yield all([
    fork(watchGetUsersList),
    fork(watchUploadPhoto),
    fork(watchSearchUsers),
    fork(watchGetForm),
    fork(watchSubmitForm)
  ])
}