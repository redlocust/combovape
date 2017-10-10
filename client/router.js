import React from "react";
import {history} from "./store.js";
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import Main from "./components/Main.js";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";

// build the router
const router = (
  <ConnectedRouter history={history}>
    <div>
      <Nav/>
      <Route exact path='/' component={Main}/>
      <Route path='/home' component={Home}/>
    </div>
  </ConnectedRouter>


);

// export
export {router};
