import { call, put } from "redux-saga/effects";
import ApiMixes from "../api/mixes";

// fetch the user's list
export function* mixesFetchList(action) {
  // call the api to get the users list
  const mixes = yield call(ApiMixes.getList);
  console.log("form fetch", mixes);

  // save the users in state
  yield put({
    type: 'MIXES_LIST_SAVE',
    mixes: mixes,
  });
}

// add/edit a user
export function* mixesAddEdit(action) {
  // call the api to add/edit the user
  yield call(ApiMixes.addEdit);
  //return action.callbackError("Some error");   // show an error when the API fails

  // update the state by adding/editing the user
  yield put({
    type: action.mix.id ? 'MIXES_EDIT_SAVE' : 'MIXES_ADD_SAVE',
    mix: action.mix,
  });

  // success
  action.callbackSuccess();
}