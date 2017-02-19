import express from 'express';
import auth from './users/auth';
import reactRender from '../reactRender';
import index from '../../client/reducers';
import TopMenu from '../../client/components/TopMenu';

import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const router = express.Router();

router.get('/', function(req, res, next) {
	// state = req.session;
	// function user(state = {}, action = {}) {
	//   return Objcet.assgin({}, state);
	// }
	// const store = createStore(todoApp);
 //  // 把组件渲染成字符串
 //  const initialState = store.getState();

 	let customerName = req.session.customerName || null;
  // 把组件渲染成字符串
  const html = renderToString(
    <TopMenu customerName={customerName} />
  );
  // const {initialState, html} = reactRender(index, TopMenu);
  res.render('index/index', {title: 'index', html: html, initialState: JSON.stringify({customerName: customerName})});
});


export default router;

