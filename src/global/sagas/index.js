import { takeLatest } from 'redux-saga'
import { call, put, fork } from 'redux-saga/effects'

function *rootSaga() {

}

export default function* root() {
    yield [
        fork(rootSaga)
    ];
}
