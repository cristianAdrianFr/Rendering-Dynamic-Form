import {fork, all} from 'redux-saga/effects';

import {
  watchLogin,
  watchGetCandleStickData
} from './watchers'

export default function* rootSaga() {
  yield all([
    fork(watchLogin),
    fork(watchGetCandleStickData)
  ])
}