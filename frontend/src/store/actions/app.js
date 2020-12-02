import * as actionTypes from "./actionTypes";
export const fetchApp = () => {
  return {
    type: actionTypes.FETCH_APP,
  };
};
export const fetchAppStart = () => {
  return {
    type: actionTypes.FETCH_APP_START,
  };
};
export const fetchAppSuccess = (apps) => {
  return {
    type: actionTypes.FETCH_APP_SUCCESS,
    apps: apps,
  };
};

export const fetchAppFailed = (error) => {
  return {
    type: actionTypes.FETCH_APP_FAILED,
    error: error,
  };
};
export const addApp = (payload) => {
  return {
    type: actionTypes.ADD_APP,
    payload,
  };
};
