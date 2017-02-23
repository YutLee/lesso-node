import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
// import thunkMiddleware from 'redux-thunk';

export default function reactRender(App) {
	function reducer(state = window.__INITIAL_STATE__ || {}) {
	  return Object.assign({}, state);
	}

	let enhancer = compose(
    // applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

	let store = createStore(reducer, enhancer);

	render(
	  <Provider store={store}><App /></Provider>,
	  document.getElementById('root')
	);
}