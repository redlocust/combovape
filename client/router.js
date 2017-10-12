import React from "react";
import {history} from "./store.js";
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import Main from "./components/Main.js";
import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import NotFound from "./components/NotFound.js";

// build the router
const router = (
  <ConnectedRouter history={history}>
    <div>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/home' component={Home}/>
      </Switch>
    </div>
  </ConnectedRouter>


);

// export
export {router};
