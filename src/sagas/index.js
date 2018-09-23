import { fork, all } from 'redux-saga/effects';

import {watchUserSetting} from './watchers'

export default function* rootSaga() {
    yield all([
        fork(watchUserSetting)
    ])
}