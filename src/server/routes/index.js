import express from 'express';
import auth from './users/auth';
import reactRender from '../reactRender';
import index from '../../client/reducers';
import { getCustomerName } from '../../client/actions';
import VisibleTopMenu from '../../client/containers/VisibleTopMenu';

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
 	let customerName = req.session.customerName || '';
 	let initialState = {customerName: customerName};
	const store = createStore(index, initialState);
 //  // 把组件渲染成字符串
 //  const initialState = store.getState();

 	console.log(store.getState())

 	// store.dispatch(getCustomerName(customerName, 'GET_CUSTOMER_NAME'));

  // 把组件渲染成字符串
  const html = renderToString(
    <Provider store={store}><VisibleTopMenu /></Provider>
  );
  // const {initialState, html} = reactRender(index, TopMenu);
  res.render('index/index', {title: 'index', html: html, initialState: JSON.stringify(initialState)});
});


export default router;

