import React from "react";
import {history} from "./store.js";
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import Main from "./components/Main.jsx";
import App from "./components/App.jsx";
import Home from "./components/Home.jsx";

// build the router
const router = (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={Main}/>
      <Route path="/app" component={App}/>
      <Route path="/home" component={Home}/>
    </div>
  </ConnectedRouter>
);

// export
export {router};
