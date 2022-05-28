import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './stores';
import App from './App';
import fontAdaptation from './utils/fontAdaptation';
import 'babel-polyfill';
import 'axios';
import './styles/normalize.less';
fontAdaptation();

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('app'),
);
