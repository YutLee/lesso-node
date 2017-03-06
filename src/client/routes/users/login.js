// import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LoginFrom from '../../containers/LoginFrom';
import reactRender from '../reactRender';

// let store = createStore(todoApp)

reactRender(LoginFrom);