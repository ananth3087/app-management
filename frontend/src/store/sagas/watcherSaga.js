import * as actionTypes from "../actions/actionTypes";
import { fetchAppSaga } from "./app";
import { takeEvery } from "redux-saga/effects";

export function* watchReprints() {
  yield takeEvery(actionTypes.FETCH_APP, fetchAppSaga);
}
