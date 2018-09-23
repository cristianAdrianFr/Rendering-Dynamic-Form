import { takeLatest } from 'redux-saga/effects';

import {
    USER_SETTING
} from '../constants/actionType';

import {userSettingSaga} from './sagas';

export function* watchUserSetting () {
    yield takeLatest(USER_SETTING, userSettingSaga)
}