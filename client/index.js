import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store} from "./store.js";
import {router} from "./router.js";
import "./stylesheets/main.scss";

import 'bootstrap-loader';
// render the main component
console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
      {router}
  </Provider>,
  document.getElementById('root')
);
