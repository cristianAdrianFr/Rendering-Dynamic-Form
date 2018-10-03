import {put, call} from 'redux-saga/effects';

import {
  loginService,
  getCandleStickDataService
} from '../services/api';

import {
  PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  GET_CANDLE_STICK_SUCCESS,
  GET_CANDLE_STICK_FAILED
} from '../constants/actionType';

export function* loginSaga(data) {
  try {
    yield put({type: PENDING});
    const {error, ...response} = yield call(loginService, data.data);
    if (error) {
      yield put({ type: LOGIN_FAILED, error: error });
    } else {
      yield put({ type: LOGIN_SUCCESS, data: response });
    }
  } catch (error) {
    yield put({ type: LOGIN_FAILED, error: error });
  }
}

export function* getCandleStickDataSaga() {
  try {
    yield put({type: PENDING});
    const {error, ...response} = yield call(getCandleStickDataService);
    if (error) {
      yield put({ type: GET_CANDLE_STICK_FAILED, error: error });
    } else {
      yield put({ type: GET_CANDLE_STICK_SUCCESS, data: response });
    }
  } catch (error) {
    yield put({ type: GET_CANDLE_STICK_FAILED, error: error });
  }
}