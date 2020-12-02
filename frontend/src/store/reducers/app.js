import * as actionTypes from "../actions/actionTypes";
import Constants from "../../utils/js/Constants";

const initialState = {
  apps: [],
  loading: false,
  error: false,
  errorMessage: "",
};

const fetchAppStart = (state) => {
  return {
    ...state,
    loading: true,
    error: false,
    errorMessage: "",
  };
};

const fetchAppSuccess = (state, action) => {
  return {
    ...state,
    apps: action.apps,
    loading: false,
    error: false,
    errorMessage: "",
  };
};
const fetchAppFailed = (state, action) => {
  return {
    ...state,
    loading: false,
    error: true,
    errorMessage: action.error,
  };
};

const reducer = (state = initialState, action) => {
  //NOSONAR Ignore SonarQuib issue
  switch (action.type) {
    case actionTypes.FETCH_APP_START:
      return fetchAppStart(state);
    case actionTypes.FETCH_APP_SUCCESS:
      return fetchAppSuccess(state, action);
    case actionTypes.FETCH_APP_FAILED:
      return fetchAppFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
