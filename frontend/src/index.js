import React from "react";
import { render } from "react-dom";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import appReducer from "./store/reducers/app";
import { watchReprints } from "./store/sagas/watcherSaga";
import "./style.css";
import Routes from "./Routes";
const rootReducer = combineReducers({
  app: appReducer,
});
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchReprints);

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
