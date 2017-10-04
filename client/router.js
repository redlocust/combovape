import React from "react";
import {history} from "./store.js";
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import App from "./components/App.jsx";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";

// build the router
const router = (
  <ConnectedRouter history={history}>
    <div>
      <Nav/>
      <Route exact path='/' component={App}/>
      <Route path='/home' component={Home}/>
    </div>
  </ConnectedRouter>


);

// export
export {router};
