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
import Main from "./pages/Main";
import GroupDetail from "./pages/GroupDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import History from "./pages/History";

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
      <Switch>
        <Route path="/" component={Landing} exact></Route>
        <Route path="/main" component={Main} exact></Route>
        <Route path="/main/:id" component={GroupDetail} exact></Route>
        <Route path="/login" component={Login} exact></Route>
        <Route path="/register" component={Register} exact></Route>
        <Route path="/history" component={History} exact></Route>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);
