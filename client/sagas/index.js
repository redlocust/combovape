import { takeLatest } from "redux-saga";
import { fork } from "redux-saga/effects";
import { mixesFetchList, mixesAdd, mixesEdit, mixesSeedList, mixesDeleteList, mixesDelete, mixesFetchMix } from "./mixes";

// main saga generators
export function* sagas() {
  yield [
    fork(takeLatest, 'MIXES_FETCH_LIST', mixesFetchList),
    fork(takeLatest, 'MIXES_FETCH_MIX', mixesFetchMix),
    fork(takeLatest, 'MIXES_ADD', mixesAdd),
    fork(takeLatest, 'MIXES_EDIT', mixesEdit),
    fork(takeLatest, 'MIXES_SEED_LIST', mixesSeedList),
    fork(takeLatest, 'MIXES_DELETE_LIST', mixesDeleteList),
    fork(takeLatest, 'MIXES_DELETE', mixesDelete)
  ];
}