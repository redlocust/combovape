import React from "react";
import {history} from "./store.js";
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import Main from "./components/Main.js";
import Nav from "./components/Nav.js";
import RecipeEdit from "./components/RecipeEdit.js";
import NotFound from "./components/NotFound.js";

//const location = this.props.location;
// build the router
const router = (
  <ConnectedRouter history={history}>
    <div>
      <Nav/>
      <Switch >
        <Route path='/' exact component={Main}/>
        <Route path='/recipe-edit' exact component={RecipeEdit}/>
        <Route path='/recipe-edit/:mixId' component={RecipeEdit}/>
      </Switch>
    </div>
  </ConnectedRouter>


);

// export
export {router};
