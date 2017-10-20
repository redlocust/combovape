import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { mixesFetchList, mixesAddEdit } from "./mixes";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'MIXES_FETCH_LIST', mixesFetchList),
    fork(takeLatest, 'MIXES_ADD_EDIT', mixesAddEdit)
  ];
}