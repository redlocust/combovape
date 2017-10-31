import { call, put } from "redux-saga/effects";
import ApiMixes from "../api/mixes";

// fetch the user's list
export function* mixesFetchList(action) {
  // call the api to get the mix list
  const mixes = yield call(ApiMixes.getList);
  console.log("Fetch mixes ", mixes);
  // save the users in state
  yield put({
    type: 'MIXES_LIST_SAVE',
    mixes: mixes,
  });
}

// seed 10 mixes
export function* mixesSeedList(action) {
  yield call(ApiMixes.seedList);

  const mixes = yield call(ApiMixes.getList);
  yield put({
    type: 'MIXES_LIST_SAVE',
    mixes: mixes
  });
}

// seed 10 mixes
export function* mixesDeleteList(action) {
  yield call(ApiMixes.deleteList);

  const mixes = yield call(ApiMixes.getList);
  yield put({
    type: 'MIXES_LIST_SAVE',
    mixes: mixes
  });
}

// add/edit a mix
export function* mixesAddEdit(action) {
  // call the api to add/edit the mix
  yield call(ApiMixes.addEdit, action.mix);
  //return action.callbackError("Some error");
  // show an error when the API fails

  //update the state by adding/editing the mix
  yield put({
    //type: action.mix.id ? 'MIXES_EDIT_SAVE' : 'MIXES_ADD_SAVE',
    type: 'MIXES_ADD_SAVE',
    mix: action.mix,
  });
}