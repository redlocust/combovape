import { call, put } from "redux-saga/effects";
import ApiMixes from "../api/mixes";

// fetch the user's list
export function* usersFetchList(action) {
  // call the api to get the users list
  const mixes = yield call(ApiMixes.getList);
  console.log("form fetch", mixes);

  // save the users in state
  yield put({
    type: 'MIXES_LIST_SAVE',
    mixes: mixes,
  });
}