// import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import index from '../../reducers'
import App from '../../components/App'
import VisibleTopMenu from '../../containers/VisibleTopMenu'

import '../../styles/common';
import '../../styles/top-menu';

let state = window.__INITIAL_STATE__;
let store = createStore(index, state);

render(
  <Provider store={store}><VisibleTopMenu /></Provider>,
  document.getElementById('root')
);