import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { setUserRequestAction } from "./reducers/user";
import Landing from "./pages/Landing";
import { Route, Switch } from "react-router-dom";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

function loadUser() {
  console.log("load user");
  try {
    store.dispatch(setUserRequestAction());
  } catch (error) {
    console.log(error);
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={window.location.pathname || ""}>
      <Route exact path="/" component={Landing} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);
