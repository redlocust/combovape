import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { usersFetchList } from "./mixes";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'MIXES_FETCH_LIST', usersFetchList),
  ];
}