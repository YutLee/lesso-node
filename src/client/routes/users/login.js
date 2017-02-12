// import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LoginFrom from '../../containers/LoginFrom';

// let store = createStore(todoApp)

render(
  <LoginFrom />,
  document.getElementById('root')
);