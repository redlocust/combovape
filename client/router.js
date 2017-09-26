import React from "react";
import {BrowserRouter} from 'react-router-dom';
import {history} from "./store.js";
import Main from "./components/Main.jsx";
import App from "./components/App.jsx";
import Home from "./components/Home.jsx";
// import UserEdit from "./components/UserEdit";
// import NotFound from "./components/NotFound";

// build the router
const router = (
  <BrowserRouter>
    <Main/>
  </BrowserRouter>
);

// export
export {router};
