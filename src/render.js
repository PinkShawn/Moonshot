import React from 'react';
import ReactDOM from 'react-dom';
// @if DEBUG
import { AppContainer } from 'react-hot-loader';
// @endif
import App from 'components/app';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

let store = createStore(reducers)

const appEl = document.getElementById('app');
const render = Component =>
  ReactDOM.render(
    // @if DEBUG
    <AppContainer>
    // @endif
      <Provider store={store}>
        <Component />
      </Provider>
    // @if DEBUG
    </AppContainer>
    // @endif
    , appEl
  );

render(App);
// @if DEBUG
if (module.hot) module.hot.accept('components/app', () => render(App));
// @endif
