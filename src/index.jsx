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

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// function loadUser() {
//   try {
//     const user = localStorage.getItem("user");
//     if (!user) {
//       store.dispatch(setUserRequestAction(null));
//       return;
//     }
//     store.dispatch(setUserRequestAction(JSON.parse(user)));
//   } catch (error) {
//     console.log(error);
//   }
// }

sagaMiddleware.run(rootSaga);
//loadUser();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);
