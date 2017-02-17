// import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from '../../reducers'
import App from '../../components/App'
import TopMenu from '../../components/TopMenu'

import '../../styles/common';
import '../../styles/top-menu';

let store = createStore(todoApp)

render(
  <Provider store={store}><TopMenu username="" /></Provider>,
  document.getElementById('root')
);