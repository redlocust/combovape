import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { mixesFetchList, mixesAddEdit, mixesSeedList, mixesDeleteList, mixesDelete } from "./mixes";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'MIXES_FETCH_LIST', mixesFetchList),
    fork(takeLatest, 'MIXES_ADD_EDIT', mixesAddEdit),
    fork(takeLatest, 'MIXES_SEED_LIST', mixesSeedList),
    fork(takeLatest, 'MIXES_DELETE_LIST', mixesDeleteList),
    fork(takeLatest, 'MIXES_DELETE', mixesDelete)
  ];
}