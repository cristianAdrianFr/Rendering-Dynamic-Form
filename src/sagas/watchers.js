import {takeLatest} from 'redux-saga/effects';

import {
  LOGIN,
  GET_CANDLE_STICK
} from '../constants/actionType';

import {
  loginSaga,
  getCandleStickDataSaga
} from './sagas';

export function* watchLogin() {
  yield takeLatest(LOGIN, loginSaga)
}

export function* watchGetCandleStickData() {
  yield takeLatest(GET_CANDLE_STICK, getCandleStickDataSaga)
}