import * as commonServices from "../../services/common";
import { put, select } from "redux-saga/effects";
import * as actions from "../actions/index";
import * as selectors from "./selectors";
import Constants from "../../utils/js/Constants";

export function* fetchAppSaga(action) {
  try {
    let url = Constants.URLs.API.GET_APP_LIST;

    yield put(actions.fetchAppStart());

    const response = yield commonServices.get(url);
    console.log("redux response", response);
    if (!response.error && !response.errorMessage) {
      yield put(actions.fetchAppSuccess(response));
    } else {
      const error = response.message
        ? response.message
        : Constants.MESSAGE.ERROR.APP_NOT_FOUND;
      yield put(actions.fetchAppFailed(error));
    }
  } catch (error) {
    yield put(actions.fetchAppFailed(Constants.MESSAGE.ERROR.APP_NOT_FOUND));
  }
}
