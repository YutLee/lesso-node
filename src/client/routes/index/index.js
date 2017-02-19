// import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import index from '../../reducers'
import App from '../../components/App'
import TopMenu from '../../components/TopMenu'

import '../../styles/common';
import '../../styles/top-menu';

let store = createStore(index);
let state = window.__INITIAL_STATE__;

render(
  <TopMenu customerName={state.customerName} />,
  document.getElementById('root')
);