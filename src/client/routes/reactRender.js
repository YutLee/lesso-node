import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

export default function reactRender(App) {
	function reducer(state = window.__INITIAL_STATE__ || {}) {
	  return Object.assign({}, state);
	}

	let store = createStore(reducer);

	render(
	  <Provider store={store}><App /></Provider>,
	  document.getElementById('root')
	);
}