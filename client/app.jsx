import React from 'react';
import {render} from 'react-dom';
import {Provider} from "react-redux";
import {store} from "./store.js";
import {router} from "./router.js";

import 'bootstrap-loader';

render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('root'));