import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducers from './reducers';
import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';

const devtools = window.devToolsExtension || (() => noop => noop);

const rootReducer = combineReducers({
  ...reducers,
  routing: routerReducer,
});
let middlewares = [routerMiddleware(browserHistory), thunkMiddleware];

if (ENV !== 'prod') {
  middlewares.push(createLogger());
}

const enhancers = [applyMiddleware(...middlewares), devtools()];

const initState = {};
const store = createStore(rootReducer, initState, compose(...enhancers));

export default store;
