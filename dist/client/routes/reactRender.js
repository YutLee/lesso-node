'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = reactRender;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reactRender(App) {
	function reducer(state = window.__INITIAL_STATE__ || {}) {
		return Object.assign({}, state);
	}

	let enhancer;
	if (process.env.NODE_ENV !== 'production') {
		enhancer = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)()), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
	} else {
		enhancer = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default));
	}

	let store = (0, _redux.createStore)(reducer, enhancer);

	// if (module.hot) {
	//    // Enable Webpack hot module replacement for reducers
	//    module.hot.accept('../reducers', () => {
	//      const nextRootReducer = require('../reducers').default;
	//      store.replaceReducer(nextRootReducer);
	//    });
	//  }

	(0, _reactDom.render)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(App, null)
	), document.getElementById('root'));
}