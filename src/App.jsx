import React, { useEffect, useRef, useState, useCallback } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import History from "./pages/History";
import Main from "./pages/Main";
import GroupDetail from "./pages/GroupDetail";

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Landing} exact></Route>
        <Route path="/main" component={Main} exact></Route>
        <Route path="/main/:id" component={GroupDetail} exact></Route>
        <Route path="/login" component={Login} exact></Route>
        <Route path="/register" component={Register} exact></Route>
        <Route path="/history" component={History} exact></Route>
      </Switch>
    </>
  );
};

export default App;
