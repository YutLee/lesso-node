import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

export default function reactRender(App) {
	function reducer(state = window.__INITIAL_STATE__ || {}) {
	  return Object.assign({}, state);
	}

	let enhancer;
	if (process.env.NODE_ENV !== 'production') {
		enhancer = compose(
	    applyMiddleware(thunk, createLogger()),
	    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	  )
	}else {
		enhancer = compose(
	    applyMiddleware(thunk)
	  )
	}

	let store = createStore(reducer, enhancer);

	// if (module.hot) {
 //    // Enable Webpack hot module replacement for reducers
 //    module.hot.accept('../reducers', () => {
 //      const nextRootReducer = require('../reducers').default;
 //      store.replaceReducer(nextRootReducer);
 //    });
 //  }

	render(
	  <Provider store={store}><App /></Provider>,
	  document.getElementById('root')
	);
}