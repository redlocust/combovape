import { browserHistory } from "react-router";
import { syncHistoryWithStore, routerMiddleware, routerReducer} from "react-router-redux";
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { reducers } from './reducers/index';
import createSagaMiddleware from "redux-saga";
import { sagas } from "./sagas/index";

// add the middlewares
let middlewares = [];

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

// add the saga middleware
const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

const history = createHistory();

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  reducers,
  middleware
);

sagaMiddleware.run(sagas);

// export
export { store, history };
