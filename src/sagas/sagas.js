import { put, call } from 'redux-saga/effects';

import {
    userSettingApi
} from '../services/api';

import {
    PENDING,
    USER_SETTING_SUCCESS,
    USER_SETTING_FAILED
} from '../constants/actionType';

export function* userSettingSaga (values) {
    try {
        yield put({ type: PENDING });
        const { error, ...response } = yield call(userSettingApi, values.data);
        console.log('=========== result =========', error, response);
        if (error) {
            console.log("------------error------------")
            yield put({ type: USER_SETTING_FAILED, error: error });
        } else {
            console.log("------------success------------")
            yield put({ type: USER_SETTING_SUCCESS, data: response});
        }
    } catch (error) {
        console.log("------------error------------")
        yield put({ type: USER_SETTING_FAILED, error: error });
    }
}